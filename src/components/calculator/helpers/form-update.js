import getPrice from './price';
import { constructor } from '../data/constructor';
import CalculatorData from '../data/index.json';
import { getDomById, getDomByName } from './dom';

const changeForm = bindingType => {
  //Отключает ориентацию
  for (let i = 0; i < getDomByName('orientation').length; ++i) {
    constructor.map(constructor => {
      if (
        constructor.format[bindingType][getDomById('format').value][
          getDomByName('orientation')[i].value
        ]
      ) {
        getDomByName('orientation')[i].disabled = false;
      } else {
        getDomByName('orientation')[i].disabled = true;
        i === 0
          ? (getDomByName('orientation')[i + 1].checked = true)
          : (getDomByName('orientation')[i - 1].checked = true);
      }
    });
  }

  //Отключает параметры обложки: печать, ламинация, если ее нет
  if (getDomById('printingCover') && getDomById('laminationCover')) {
    if (getDomById('paperCover').value === 0) {
      getDomById('printingCover').disabled = true;
      getDomById('laminationCover').disabled = true;
      getDomById('laminationCover').options[0].selected = true;
    } else {
      getDomById('printingCover').disabled = false;
      getDomById('laminationCover').disabled = false;
    }
  }

  //Обложка не тоньше внутреннего блока
  if (getDomById('paperInner') && getDomById('paperCover')) {
    for (let i = getDomById('paperInner').length - 1; i >= 0; --i) {
      if (getDomById('paperCover').value !== 0) {
        if (
          CalculatorData.paper[getDomById('paperCover').value].thickness <
          CalculatorData.paper[getDomById('paperInner').options[i].value]
            .thickness
        ) {
          getDomById('paperInner')[i].disabled = true;
          if (getDomById('paperInner').options[i].selected) {
            getDomById('paperInner').options[i - 1].selected = true;
          }
        } else {
          getDomById('paperInner').options[i].disabled = false;
        }
      } else {
        getDomById('paperInner').options[i].disabled = false;
      }
    }
  }

  //Без ламинации обложки нельзя ламминировать внутренний блок + запрещено ламинировать бумагу, которую нельзя заламинировать из-за техпроцесса
  if (getDomById('laminationInner') && getDomById('laminationCover')) {
    constructor.map(constructor => {
      //Внутренний блок
      if (
        constructor.paper.global[getDomById('paperInner').value].lamination !==
        true
      ) {
        getDomById('laminationInner').disabled = true;
        getDomById('laminationInner').options[0].selected = true;
      } else {
        if (getDomById('laminationCover').value === 0) {
          getDomById('laminationInner').disabled = true;
          getDomById('laminationInner').options[0].selected = true;
        } else {
          getDomById('laminationInner').disabled = false;
        }
      }

      //Обложка
      if (
        constructor.paper.global[getDomById('paperCover').value].lamination !==
        true
      ) {
        getDomById('laminationCover').disabled = true;
      } else {
        getDomById('laminationCover').disabled = false;
      }
    });
  }

  const price = getPrice(bindingType);
  //Show price / message in DOM
  return showPrice(price);
};

const showPrice = price => {
  const elemPrice = getDomById('price');
  switch (price) {
    case 'NO_ENOUGH_PAGES':
      elemPrice.innerHTML = 'NO_ENOUGH_PAGES';
      break;
    case 'NO_PRINTING_COUNT':
      elemPrice.innerHTML = 'NO_PRINTING_COUNT';
      break;
    case 'TOO_THICK':
      elemPrice.innerHTML = 'TOO_THICK';
      break;
    default:
      elemPrice.innerHTML = `TOTAL_PRICE: ${price} UAH`;
  }
};

export default changeForm;
