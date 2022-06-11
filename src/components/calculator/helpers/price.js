import CalculatorData from '../data';
import { builder } from '../data/constructor';
import { getValueById, getCheckedValue } from './dom';

export const getPrice = bindingType => {
  let price = 0;

  //Check values for min requirements
  const minReq = getMinReq(bindingType);
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
  const adjustment =
    CalculatorData.bindingType[bindingType][bindingSize].adjustment;

  adjustment ? (price += adjustment) : (price += 0);

  //Сшивка
  price +=
    getValueById('printingCount') *
    CalculatorData.bindingType[bindingType][bindingSize].cost;

  //Подрезка с 3-х сторон
  price += getTrimmingCost(getValueById('printingCount'), bindingType);

  return Math.ceil(price);
};

const getBindingSize = (thickness, bindingType) => {
  let size = 1;
  const curBindingType = CalculatorData.bindingType[bindingType];

  while (curBindingType[size]) {
    if (thickness > curBindingType[size].thickness) {
      ++size;
    } else {
      return size;
    }
  }
  return -1;
};

//Lamination adjustment
const getLaminationAdj = (...lamination) => {
  //Set from lamination what use in booklet
  lamination = Array.from(new Set(lamination)).filter(
    lamination => lamination !== 0,
  );

  //Sum on adjustment for each lamination type (Zero if set is empty)
  let result = 0;
  lamination.forEach(lamination => {
    result += CalculatorData.lamination[lamination].adjustment;
  });

  return result;
};

//Cost on paper
const getPaperCost = (count, paper) => {
  if (count) {
    return count * CalculatorData.paper[paper].cost;
  }
  return 0;
};

const getLaminationCost = (lamination, count) => {
  //If is lamination
  if (lamination !== 0) {
    const coef = getCountCoef(
      count,
      getParamCoef('lamination', 'maxCount'),
      getParamCoef('lamination', 'constant'),
      getParamCoef('lamination', 'degree'),
    );

    //Return result
    return getCost(count, coef, 'lamination', lamination);
  }
  //If not lamination
  return 0;
};

const getPrintingCost = (printing, count) => {
  //If count pages not zero
  if (count) {
    const coefColorPrinting = getCountCoef(
      count,
      getParamCoef('colorPrinting', 'maxCount'),
      getParamCoef('colorPrinting', 'constant'),
      getParamCoef('colorPrinting', 'degree'),
    );
    const coefGrayscalePrinting = getCountCoef(
      count,
      getParamCoef('grayscalePrinting', 'maxCount'),
      getParamCoef('grayscalePrinting', 'constant'),
      getParamCoef('grayscalePrinting', 'degree'),
    );
    let coef;

    //Grayscale/color printing
    printing === 'oneSidedGrayscale' || printing === 'twoSidedGrayscale'
      ? (coef = coefGrayscalePrinting)
      : (coef = coefColorPrinting);

    //return result
    return getCost(count, coef, 'printing', printing);
  }
  //if count pages is zero
  return 0;
};

const getTrimmingCost = (count, bindingType) => {
  //if booklet has trimming
  if (bindingType === 'staples') {
    const coef = getCountCoef(
      count,
      getParamCoef('trimming', 'maxCount'),
      getParamCoef('trimming', 'constant'),
      getParamCoef('trimming', 'degree'),
    );
    const minTrimingCost = CalculatorData.trimming.minСost;
    const trimmingCost = getCost(count, coef, 'trimming');

    //Cost of trimming not less than minimal
    if (trimmingCost < minTrimingCost) {
      return minTrimingCost;
    }
    return trimmingCost;
  }
  //if booklet not has trimming
  return 0;
};

//Price on part of services, what have 'coef'
const getCost = (count, coef, type, parameter = null) => {
  if (parameter) {
    return count * coef * CalculatorData[type][parameter].cost;
  }
  return count * coef * CalculatorData[type].cost;
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

//min requrement for booklet
const getMinReq = bindingType => {
  const pagesCount = getValueById('pagesCount');
  const printingCount = getValueById('printingCount');
  const paperCover = getValueById('paperCover');
  switch (bindingType) {
    case 'staples':
      if (
        (pagesCount < 1 && paperCover !== 0) ||
        (pagesCount < 5 && paperCover === 0)
      ) {
        return 'NO_ENOUGH_PAGES';
      } else if (printingCount < 1) {
        return 'NO_PRINTING_COUNT';
      }
      return true;
    default:
      return true;
  }
};

//get thickness
export const getThickness = (type, param) =>
  CalculatorData[type][param].thickness;

//get count coef
const getCountCoef = (count, maxCount, constant, degree) => {
  //After count === maxCount price dont down
  if (count > maxCount) {
    count = maxCount;
  }

  //Function of coef (-1 < degree < 0) (maxCount >= count > 0) (0 < constant)
  let coef = constant * Math.pow(count, degree);

  //return coef not more than number one
  if (coef > 1) {
    return 1;
  }
  return coef;
};

//Get parameter for count coef
const getParamCoef = (type, param) => CalculatorData.countCoef[type][param];
