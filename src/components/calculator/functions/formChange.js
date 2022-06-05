import getPrice from './getPrice';
import constructor from '../data/constructor';
import CalculatorData from '../data/index.json';

const formChange = bindingType => {
  const format = document.getElementById('format');
  const pagesCount = document.getElementById('pagesCount');
  const paperInner = document.getElementById('paperInner');
  const printingInner = document.getElementById('printingInner');
  const laminationInner = document.getElementById('laminationInner');
  const paperCover = document.getElementById('paperCover');
  const printingCover = document.getElementById('printingCover');
  const laminationCover = document.getElementById('laminationCover');
  const printingCount = document.getElementById('printingCount');

  //Отключает ориентацию
  const curOrientation = document.getElementsByName('orientation');
  for (let i = 0; i < curOrientation.length; ++i) {
    constructor.map(constructor => {
      if (
        constructor.format[bindingType][format.value][curOrientation[i].value]
      ) {
        curOrientation[i].disabled = false;
      } else {
        curOrientation[i].disabled = true;
        curOrientation[i - 1].checked = true;
      }
    });
  }

  //Отключает параметры обложки: печать, ламинация, если ее нет
  if (paperCover.value === 'noCover') {
    printingCover.disabled = true;
    laminationCover.disabled = true;
    laminationCover.options[0].selected = true;
  } else {
    printingCover.disabled = false;
    laminationCover.disabled = false;
  }

  //Обложка не тоньше внутреннего блока
  for (let i = paperInner.length - 1; i >= 0; --i) {
    if (paperCover.value !== 'noCover') {
      if (
        CalculatorData.paper[paperCover.value].thickness <
        CalculatorData.paper[paperInner.options[i].value].thickness
      ) {
        paperInner[i].disabled = true;
        if (paperInner.options[i].selected) {
          paperInner.options[i - 1].selected = true;
        }
      } else {
        paperInner.options[i].disabled = false;
      }
    } else {
      paperInner.options[i].disabled = false;
    }
  }

  //Без ламинации обложки нельзя ламминировать внутренний блок
  if (laminationCover.value === 'noLamination') {
    laminationInner.disabled = true;
    laminationInner.options[0].selected = true;
  } else {
    laminationInner.disabled = false;
  }

  document.getElementById('price').innerHTML = getPrice(
    bindingType,
    pagesCount.value,
    paperInner.value,
    printingInner.value,
    laminationInner.value,
    paperCover.value,
    printingCover.value,
    laminationCover.value,
    format.value,
    getOrientation(),
    printingCount.value,
  );
};

const getOrientation = () => {
  let curOrientation = document.getElementsByName('orientation');
  for (let i = 0; i < curOrientation.length; i++) {
    if (curOrientation[i].checked) return curOrientation[i].value;
  }
};

export default formChange;
