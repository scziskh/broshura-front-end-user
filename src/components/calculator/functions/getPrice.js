import CalculatorData from '../data';

const getPrice = (
  bindingType,
  pagesCount,
  paperInner,
  printingInner,
  laminationInner = 'noLamination',
  paperCover,
  printingCover,
  laminationCover = 'noLamination',
  paperSubstrate,
  printingSubstrate,
  laminationSubstrate = 'noLamination',
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

  //Количество разворотов  ---------HARDCODE need feature-------------
  let countsSheetsInner;
  if (bindingType === 'staples') {
    countsSheetsInner = Math.ceil(pagesCount / 4);
  } else {
    printingInner === 'oneSidedGrayscale' || printingInner === 'oneSidedColor'
      ? (countsSheetsInner = +pagesCount)
      : (countsSheetsInner = Math.ceil(pagesCount / 2));
  }
  //Обложка
  let countsSheetsCover;
  paperCover !== 'noCover' ? (countsSheetsCover = 1) : (countsSheetsCover = 0);
  //Подложка
  let countsSheetsSubstrate;
  bindingType === 'metalSpring'
    ? (countsSheetsSubstrate = 1)
    : (countsSheetsSubstrate = 0);

  //Толщина брошюры
  //Толщина бумаги
  const thicknessPaperCover = getThicknessPaper(countsSheetsCover, paperCover);
  const thicknessPaperInner = getThicknessPaper(countsSheetsInner, paperInner);
  const thicknessPaperSubstrate = getThicknessPaper(
    countsSheetsSubstrate,
    paperSubstrate,
  );

  //Толщина ламинации
  const thicknessLaminationCover = getThicknessLamination(
    countsSheetsCover,
    laminationCover,
  );
  const thicknessLaminationInner = getThicknessLamination(
    countsSheetsInner,
    laminationInner,
  );
  const thicknessLaminationSubstrate = getThicknessLamination(
    countsSheetsSubstrate,
    laminationSubstrate,
  );

  //Общая толщина
  const thicknessTotal =
    thicknessPaperCover +
    thicknessLaminationCover +
    thicknessPaperInner +
    thicknessLaminationInner +
    thicknessPaperSubstrate +
    thicknessLaminationSubstrate;

  //Размер сшивки
  const size = getBindingSize(thicknessTotal, [bindingType]);
  if (size === -1) {
    return 'TOO_THICK';
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
  const totalSheetsSubstrate = getTotalSheets(
    countsSheetsSubstrate,
    printingCount,
    formatCoef,
  );

  //Общее количество печатных страниц
  const totalPagesInner = getTotalPages(totalSheetsInner, printingInner);
  const totalPagesCover = getTotalPages(totalSheetsCover, printingCover);
  const totalPagesSubstrate = getTotalPages(
    totalSheetsSubstrate,
    printingSubstrate,
  );

  //Стоимость бумаги
  const costPaperInner = getPaperCost(totalSheetsInner, paperInner);
  const costPaperCover = getPaperCost(totalSheetsCover, paperCover);
  const costPaperSubstrate = getPaperCost(totalSheetsSubstrate, paperSubstrate);

  //Стоимость печати
  const costPrintingInner = getPrintingCost(printingInner, totalPagesInner);
  const costPrintingCover = getPrintingCost(printingCover, totalPagesCover);
  const costPrintingSubstrate = getPrintingCost(
    printingSubstrate,
    totalPagesSubstrate,
  );

  //Стоимость ламинации
  const costLaminationInner = getLaminationCost(
    laminationInner,
    totalSheetsInner,
  );

  const costLaminationCover = getLaminationCost(
    laminationCover,
    totalSheetsCover,
  );
  const costLaminationSubstrate = getLaminationCost(
    laminationSubstrate,
    totalSheetsSubstrate,
  );

  //Приладка ламинации
  const laminationAdj = getLaminationAdj(
    laminationCover,
    laminationInner,
    laminationSubstrate,
  );

  //Приладка сшивки
  let bindingAdj;
  CalculatorData.bindingType[bindingType][size].adjustment
    ? (bindingAdj = CalculatorData.bindingType[bindingType][size].adjustment)
    : (bindingAdj = 0);

  //Сшивка
  const bindingCost =
    printingCount * CalculatorData.bindingType[bindingType][size].cost;

  //Подрезка с 3-х сторон
  const costTrimming = getTrimmingCost(printingCount);

  console.log(`
  formatCoef: ${formatCoef}
  countsSheetsInner: ${countsSheetsInner}
  countsSheetsCover: ${countsSheetsCover}
  countsSheetsSubstrate: ${countsSheetsSubstrate}
  size: ${size}
  -------
  costPaperCover: ${costPaperCover}
  costPaperInner: ${costPaperInner}
  costPaperSubstrate: ${costPaperSubstrate}
  costPrintingCover: ${costPrintingCover}
  costPrintingInner: ${costPrintingInner}
  costPrintingSubstrate: ${costPrintingSubstrate}
  costLaminationCover: ${costLaminationCover}
  costLaminationInner: ${costLaminationInner}
  costLaminationSubstrate: ${costLaminationSubstrate}
  bindingAdj: ${bindingAdj}
  laminationAdj: ${laminationAdj}
  costTrimming: ${costTrimming}
  bindingCost: ${bindingCost}
  totalPagesInner: ${totalPagesInner}
  totalSheetsInner: ${totalSheetsInner}`);
  const totalPrice =
    costPaperCover +
    costPaperInner +
    costPaperSubstrate +
    costPrintingCover +
    costPrintingInner +
    costPrintingSubstrate +
    costLaminationCover +
    costLaminationInner +
    costLaminationSubstrate +
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

//Приладка ламинации
const getLaminationAdj = (...lamination) => {
  lamination = Array.from(new Set(lamination)).filter(
    lamination => lamination !== 'noLamination',
  );
  let result = 0;
  lamination.forEach(lamination => {
    result += CalculatorData.lamination[lamination].adjustment;
  });
  return result;
};

const getPaperCost = (totalSheets, paper) => {
  if (totalSheets) {
    return totalSheets * CalculatorData.paper[paper].cost;
  }
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

//Количество печатных страниц
const getTotalPages = (countSheets, printing) => {
  if (countSheets !== 0 && printing !== 'noPrint') {
    return countSheets * CalculatorData.printing[printing].sides;
  }
  return 0;
};

const getThicknessPaper = (countSheets, paper) => {
  if (countSheets !== 0) {
    return CalculatorData.paper[paper].thickness * countSheets;
  }
  return 0;
};

const getThicknessLamination = (countsSheets, lamination) => {
  if (lamination != 'noLamination') {
    return CalculatorData.lamination[lamination].thickness * countsSheets;
  }
  return 0;
};

export default getPrice;
