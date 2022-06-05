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
  if (
    (pagesCount == 0 && paperCover !== 'noCover') ||
    (pagesCount <= 4 && paperCover === 'noCover')
  ) {
    return 'NO_ENOUGH_PAGES';
  }
  if (printingCount == 0) {
    return 'NO_PRINTING_COUNT';
  }
  //Коефициент, зависящий от формата
  const formatCoef =
    CalculatorData.format[format][bindingType][orientation].formatCoef;

  //Количество разворотов
  const countsSheetsInner = Math.ceil(pagesCount / 4);

  let countsSheetsCover;
  paperCover !== 'noCover' ? (countsSheetsCover = 1) : (countsSheetsCover = 0);

  //Толщина брошюры
  let thicknessPaperCover;
  paperCover !== 'noCover'
    ? (thicknessPaperCover = CalculatorData.paper[paperCover].thickness)
    : (thicknessPaperCover = 0);

  const thicknessPaperInner =
    countsSheetsInner * CalculatorData.paper[paperInner].thickness;

  let thicknessLaminationCover;
  laminationCover !== 'noLamination'
    ? (thicknessLaminationCover =
        CalculatorData.lamination[laminationCover].thickness)
    : (thicknessLaminationCover = 0);

  let thicknessLaminationInner;
  laminationInner !== 'noLamination'
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
    totalSheetsInner * CalculatorData.paper[paperInner].cost;

  let costPaperCover;
  paperCover !== 'noCover'
    ? (costPaperCover =
        totalSheetsCover * CalculatorData.paper[paperCover].cost)
    : (costPaperCover = 0);

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
  if (
    laminationCover !== 'noLamination' ||
    laminationInner !== 'noLamination'
  ) {
    //Если есть ламинация и на обложке, и на внутреннем блоке
    if (
      laminationCover !== 'noLamination' &&
      laminationInner !== 'noLamination'
    ) {
      let adjustment;
      laminationCover === laminationInner //Если она одинакова, то доп приладки не понадобится
        ? (adjustment = CalculatorData.lamination[laminationInner].adjustment)
        : (adjustment =
            CalculatorData.lamination[laminationInner].adjustment +
            CalculatorData.lamination[laminationCover].adjustment);
      return adjustment;
    }

    //Если ламинация только обложки
    if (laminationCover !== 'noLamination') {
      return CalculatorData.lamination[laminationCover].adjustment;
    }
    //Если ламинация только внутреннего блока
    return CalculatorData.lamination[laminationInner].adjustment;
  }

  //Если ламинации нет
  return 0;
};

const getLaminationCost = (lamination, totalSheets) => {
  if (lamination !== 'noLamination') {
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
