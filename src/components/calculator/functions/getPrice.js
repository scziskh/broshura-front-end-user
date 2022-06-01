import CalculatorData from '../data';

const getPrice = (
  bindingType,
  pagesCount,
  paperInner,
  printingInner,
  laminationInner,
  paperCover,
  printingCover,
  laminationCover,
  format,
  orientation,
  printingCount,
) => {
  //Коефициент, зависящий от формата
  const formatCoef =
    CalculatorData.format[format][bindingType][orientation].formatCoef;

  //Количество разворотов
  const countsSheetsInner = Math.ceil(pagesCount / 4);

  let countsSheetsCover;
  paperCover ? (countsSheetsCover = 1) : (countsSheetsCover = 0);

  //Толщина брошюры
  let thicknessPaperCover;
  paperCover
    ? (thicknessPaperCover =
        CalculatorData.paper[paperCover[0]][paperCover[1]].thickness)
    : (thicknessPaperCover = 0);

  const thicknessPaperInner =
    countsSheetsInner *
    CalculatorData.paper[paperInner[0]][paperInner[1]].thickness;

  let thicknessLaminationCover;
  laminationCover
    ? (thicknessLaminationCover =
        CalculatorData.lamination[laminationCover].thickness)
    : (thicknessLaminationCover = 0);

  let thicknessLaminationInner;
  laminationInner
    ? (thicknessLaminationInner =
        CalculatorData.lamination[laminationInner].thickness *
        countsSheetsInner)
    : (thicknessLaminationInner = 0);

  const thicknessTotal =
    thicknessPaperCover +
    thicknessLaminationCover +
    thicknessPaperInner +
    thicknessLaminationInner;

  const size = getBindingSize(thicknessTotal, [bindingType]);
  if (size === -1) {
    return;
  }

  //Общее количество печатных листов
  const totalSheetsInner = getTotalSheets(
    countsSheetsInner,
    printingCount,
    formatCoef,
  );

  const totalSheetsCover = getTotalSheets(
    countsSheetsCover,
    printingCount,
    formatCoef,
  );

  //Общее количество печатных страниц
  const printedPagesInner = totalSheetsInner * 2;

  let printedPagesCover;
  printingCover
    ? (printedPagesCover =
        totalSheetsCover * CalculatorData.printing[printingCover].sides)
    : (printedPagesCover = 0);

  //Стоимость бумаги
  const costPaperInner =
    totalSheetsInner * CalculatorData.paper[paperInner[0]][paperInner[1]].cost;

  let costPaperCover;
  if (paperCover) {
    costPaperCover =
      totalSheetsCover *
      CalculatorData.paper[paperCover[0]][paperCover[1]].cost;
  }

  //Стоимость печати
  const costPrintingInner = getPrintingCost(printingInner, printedPagesInner);

  const costPrintingCover = getPrintingCost(printingCover, printedPagesCover);

  //Стоимость ламинации
  const costLaminationInner = getLaminationCost(
    laminationInner,
    totalSheetsInner,
  );

  const costLaminationCover = getLaminationCost(
    laminationCover,
    totalSheetsCover,
  );

  //Приладка ламинации
  const laminationAdj = getLaminationAdj(laminationCover, laminationInner);

  //Приладка сшивки
  const bindingAdj = CalculatorData.bindingType[bindingType][size].adjustment;

  //Сшивка
  const bindingCost =
    printingCount * CalculatorData.bindingType[bindingType][size].cost;

  //Подрезка с 3-х сторон
  const costTrimming = getTrimmingCost(printingCount);

  const totalPrice =
    costPaperCover +
    costPaperInner +
    costPrintingCover +
    costPrintingInner +
    costLaminationCover +
    costLaminationInner +
    bindingAdj +
    laminationAdj +
    costTrimming +
    bindingCost;
  console.log(
    `   costPaperCover: ${costPaperCover}
      costPaperInner: ${costPaperInner}
      costPrintingCover: ${costPrintingCover}
      costPrintingInner: ${costPrintingInner}
      costLaminationCover: ${costLaminationCover}
      costLaminationInner: ${costLaminationInner}
      bindingAdj: ${bindingAdj}
      laminationAdj: ${laminationAdj}
      costTrimming: ${costTrimming}
      thicknessTotal: ${thicknessTotal}
      maxThickness: ${CalculatorData.bindingType[bindingType][size].thickness}`,
  );
  console.log(Math.ceil(totalPrice));
  return Math.ceil(totalPrice);
};

const getBindingSize = (thickness, bindingType) => {
  let size = 1;
  while (CalculatorData.bindingType[bindingType][size]) {
    if (thickness > CalculatorData.bindingType[bindingType][size].thickness) {
      size++;
    } else {
      return size;
    }
  }
  return -1;
};

const getLaminationAdj = (laminationCover, laminationInner) => {
  if (laminationCover || laminationInner) {
    //Если есть ламинация и на обложке, и на внутреннем блоке
    if (laminationCover && laminationInner) {
      let adjustment;
      laminationCover === laminationInner //Если она одинакова, то доп приладки не понадобится
        ? (adjustment = CalculatorData.lamination[laminationInner].adjustment)
        : (adjustment =
            CalculatorData.lamination[laminationInner].adjustment +
            CalculatorData.lamination[laminationCover].adjustment);
      return adjustment;
    }

    //Если ламинация только обложки
    if (laminationCover) {
      return CalculatorData.lamination[laminationCover].adjustment;
    }
    //Если ламинация только внутреннего блока
    return CalculatorData.lamination[laminationInner].adjustment;
  }

  //Если ламинации нет
  return 0;
};

const getLaminationCost = (lamination, totalSheets) => {
  if (lamination) {
    let laminationCoef;
    let k = totalSheets;

    //Стоимость при тираже больше 500 листов не падает
    if (k > 500) {
      k = 500;
    }
    //Функция вычисления коефициента цены ламинации
    laminationCoef = 1.8 * Math.pow(k, -0.2);

    //Минимальный коефициент = 1
    if (laminationCoef > 1) {
      laminationCoef = 1;
    }

    //Стоимость ламинации
    return (
      totalSheets * laminationCoef * CalculatorData.lamination[lamination].cost
    );
  }
  //Если нет ламинации
  return 0;
};

const getPrintingCost = (printing, totalPages) => {
  //Если есть страницы
  if (totalPages) {
    let printingCoef;
    let k = totalPages;

    //Стоимость при тираже больше 1000 не падает
    if (k > 1000) {
      k = 1000;
    }

    //Функции для цветной и ч/б печати
    printing === 'oneSidedGrayscale' || printing === 'twoSidedGrayscale'
      ? (printingCoef = 2.2 * Math.pow(k, -0.3))
      : (printingCoef = 1.6 * Math.pow(k, -0.2));

    //Минимальный коефициент = 1
    if (printingCoef > 1) {
      printingCoef = 1;
    }

    //Вычисление стоимости печати
    return totalPages * CalculatorData.printing[printing].cost * printingCoef;
  }
  //Если нет печати
  return 0;
};

const getTrimmingCost = printingCount => {
  let trimmingCoef;
  let trimmingCost;
  let k = printingCount;

  //Стоимость при тираже больше 100 изделий не падает
  if (k > 100) {
    k = 100;
  }
  //Функция вычисления коефициента цены подрезки
  trimmingCoef = Math.pow(k, -0.1);

  //Минимальный коефициент = 1
  if (trimmingCoef > 1) {
    trimmingCoef = 1;
  }

  //Стоимость подрезки не меньше минимальной
  trimmingCost = printingCount * trimmingCoef * CalculatorData.trimming.cost;
  if (trimmingCost < CalculatorData.trimming.minСost) {
    return CalculatorData.trimming.minСost;
  }
  return trimmingCost;
};

const getTotalSheets = (printedSheets, printingCount, formatCoef) => {
  //Возвращаем меньшее значение из двух возможных вариантов
  if (
    Math.ceil(printedSheets * formatCoef) * printingCount >
    (printedSheets * formatCoef * Math.ceil(printingCount * formatCoef)) /
      formatCoef
  ) {
    return (
      (printedSheets * formatCoef * Math.ceil(printingCount * formatCoef)) /
      formatCoef
    );
  }
  return Math.ceil(printedSheets * formatCoef) * printingCount;
};


export default getPrice;
