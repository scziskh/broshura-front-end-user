import CalculatorData from '../CalculatorData/index.json';

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

export default getLaminationCost;
