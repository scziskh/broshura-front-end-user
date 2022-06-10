import CalculatorData from '../data';
import { builder } from '../data/constructor';
import { getValueById, getCheckedValue } from './dom';

export const getPrice = bindingType => {
  let price = 0;

  //Check values for min requirements
  const minReq = getMinReq();
  if (minReq !== true) {
    return minReq;
  }
  //Coef from database
  const formatCoef =
    CalculatorData.format[getValueById('format')][bindingType][
      getCheckedValue('orientation')
    ].formatCoef;

  //count printed sheets in each booklet
  let countsSheetsInner;
  if (bindingType === 'staples') {
    countsSheetsInner = Math.ceil(getValueById('pagesCount') / 4);
  } else {
    getValueById('printingInner') === 'oneSidedGrayscale' ||
    getValueById('printingInner') === 'oneSidedColor'
      ? (countsSheetsInner = getValueById('pagesCount'))
      : (countsSheetsInner = Math.ceil(getValueById('pagesCount') / 2));
  }

  //Coverpage
  let countsSheetsCover;
  getValueById('paperCover') === 0
    ? (countsSheetsCover = 0)
    : (countsSheetsCover = 1);

  //Substratepage
  let countsSheetsSubstrate;
  builder.map(builder => builder[bindingType].substrate) === true
    ? (countsSheetsSubstrate = 1)
    : (countsSheetsSubstrate = 0);

  //Thickness of booklet =>
  //Coverpage
  const thicknessCover = getThicknessPart(
    countsSheetsCover,
    getValueById('paperCover'),
    getValueById('laminationCover'),
  );
  //Innerpages
  const thicknessInner = getThicknessPart(
    countsSheetsInner,
    getValueById('paperInner'),
    getValueById('laminationInner'),
  );
  //Substratepage
  const thicknessSubstrate = getThicknessPart(
    countsSheetsSubstrate,
    getValueById('paperSubstrate'),
    getValueById('laminationSubstrate'),
  );

  //Total thickness
  const thicknessTotal = thicknessCover + thicknessInner + thicknessSubstrate;

  //size of binder
  const bindingSize = getBindingSize(thicknessTotal, [bindingType]);
  if (bindingSize === -1) {
    return 'TOO_THICK';
  }

  //Total counts printed sheets
  const totalSheetsInner = getTotalSheets(
    countsSheetsInner,
    getValueById('printingCount'),
    formatCoef,
  );
  const totalSheetsCover = getTotalSheets(
    countsSheetsCover,
    getValueById('printingCount'),
    formatCoef,
  );
  const totalSheetsSubstrate = getTotalSheets(
    countsSheetsSubstrate,
    getValueById('printingCount'),
    formatCoef,
  );

  //Общее количество печатных страниц
  const totalPagesInner = getTotalPages(
    totalSheetsInner,
    getValueById('printingInner'),
  );
  const totalPagesCover = getTotalPages(
    totalSheetsCover,
    getValueById('printingCover'),
  );
  const totalPagesSubstrate = getTotalPages(
    totalSheetsSubstrate,
    getValueById('printingSubstrate'),
  );

  //Стоимость бумаги
  price += getPaperCost(totalSheetsInner, getValueById('paperInner'));
  price += getPaperCost(totalSheetsCover, getValueById('paperCover'));
  price += getPaperCost(totalSheetsSubstrate, getValueById('paperSubstrate'));

  //Стоимость печати
  price += getPrintingCost(getValueById('printingInner'), totalPagesInner);
  price += getPrintingCost(getValueById('printingCover'), totalPagesCover);
  price += getPrintingCost(
    getValueById('printingSubstrate'),
    totalPagesSubstrate,
  );

  //Стоимость ламинации
  price += getLaminationCost(getValueById('laminationInner'), totalSheetsInner);

  price += getLaminationCost(getValueById('laminationCover'), totalSheetsCover);
  price += getLaminationCost(
    getValueById('laminationSubstrate'),
    totalSheetsSubstrate,
  );

  //Приладка ламинации
  price += getLaminationAdj(
    getValueById('laminationCover'),
    getValueById('laminationInner'),
    getValueById('laminationSubstrate'),
  );

  //Приладка сшивки
  CalculatorData.bindingType[bindingType][bindingSize].adjustment
    ? (price += CalculatorData.bindingType[bindingType][bindingSize].adjustment)
    : (price += 0);

  //Сшивка
  price +=
    getValueById('printingCount') *
    CalculatorData.bindingType[bindingType][bindingSize].cost;

  //Подрезка с 3-х сторон
  price += getTrimmingCost(getValueById('printingCount'));

  return Math.ceil(price);
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
    lamination => lamination !== 0,
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
  if (lamination !== 0) {
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

//Total count printed sheets
const getTotalSheets = (printedSheets, printingCount, formatCoef) => {
  const firstVariant = Math.ceil(printedSheets * formatCoef) * printingCount;
  return firstVariant;
};

//Total count printed pages
const getTotalPages = (countSheets, printing) => {
  if (countSheets !== 0 && printing !== 0) {
    return countSheets * CalculatorData.printing[printing].sides;
  }
  return 0;
};

//Thickness of part of booklet
const getThicknessPart = (countSheets, paper, lamination) => {
  const params = { paper: paper, lamination: lamination };
  let result = 0;

  for (let i = 0; i < Object.keys(params).length; ++i) {
    if (Object.values(params)[i] !== 0) {
      result +=
        getThickness(Object.keys(params)[i], Object.values(params)[i]) *
        countSheets;
    }
  }
  return result;
};

const getMinReq = () => {
  const pagesCount = getValueById('pagesCount');
  const printingCount = getValueById('printingCount');
  const paperCover = getValueById('paperCover');

  if (
    (pagesCount === 0 && paperCover !== 0) ||
    (pagesCount <= 4 && paperCover === 0)
  ) {
    return 'NO_ENOUGH_PAGES';
  } else if (printingCount < 1) {
    return 'NO_PRINTING_COUNT';
  }
  return true;
};

//get thickness
export const getThickness = (parent, child) =>
  CalculatorData[parent][child].thickness;

//get count coef
const getCountCoef = (constant, count, degree) =>
  constant * Math.pow(count, degree);
