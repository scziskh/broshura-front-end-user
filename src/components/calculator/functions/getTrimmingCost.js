import CalculatorData from '../data';

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

export default getTrimmingCost;
