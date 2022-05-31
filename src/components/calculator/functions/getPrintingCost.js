import CalculatorData from '../CalculatorData/index.json';

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

export default getPrintingCost;
