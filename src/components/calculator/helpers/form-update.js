import { getPrice, getThickness } from './price';
import { constructor } from '../data/constructor';
import {
  checkDom,
  disableDom,
  enableDom,
  getDom,
  getValueById,
  selectDom,
} from './dom';
import { getPath } from './mapping';

const changeForm = bindingType => {
  //Disable/enable orientation

  const orientationSettings = getPath(
    constructor,
    'format',
    bindingType,
    getValueById('format'),
  );
  const orientations = getDom('orientation', 'name');
  shiftRadio(orientations, orientationSettings);

  //Disable print and lamination cover if no-paper cover
  shiftPrintAndLamin('Cover');

  //Inner is no more thickness than cover
  shiftThickPaper('Cover', 'Inner');

  //Disable lamination of Inner if no lamination Cover
  shiftLamination('Cover', 'Inner');

  //Show price / message in DOM
  const price = getPrice(bindingType);
  return showPrice(price);
};

//Show price
const showPrice = price => {
  const spanPrice = getDom('price');
  isNaN(price)
    ? (spanPrice.innerHTML = price)
    : (spanPrice.innerHTML = `TOTAL COST IS: ${price} UAH`);
};

export default changeForm;

//switch 'disabled' Radio input
const shiftRadio = (inputs, settings) => {
  for (let i = 0; i < inputs.length; ++i) {
    if (settings[inputs[i].value]) {
      enableDom(inputs[i]);
    } else {
      disableDom(inputs[i]);
      i === inputs.length - 1
        ? checkDom(inputs[i - 1])
        : checkDom(inputs[i + 1]);
    }
  }
};

//Disable print and lamination if no paper
//Enable print and lamination if has paper
const shiftPrintAndLamin = part => {
  const lamination = getDom(`lamination${part}`);
  const printing = getDom(`printing${part}`);

  if (printing && lamination) {
    if (getValueById(`paper${part}`) === 0) {
      disableDom(printing, lamination);
      selectDom(lamination[0]);
    } else {
      enableDom(printing, lamination);
    }
  }
};

//Slim paper is no more thickness than thick
const shiftThickPaper = (thick, slim) => {
  const thickPaper = getDom(`paper${thick}`);
  const slimPaper = getDom(`paper${slim}`);

  if (thickPaper && slimPaper) {
    for (let i = slimPaper.length - 1; i >= 0; --i) {
      if (
        getValueById(`paper${thick}`) !== 0 &&
        getThickness('paper', thickPaper.value) <
          getThickness('paper', slimPaper[i].value)
      ) {
        disableDom(slimPaper[i]);
        if (slimPaper[i].selected) {
          selectDom(slimPaper[i - 1]);
        }
      } else {
        enableDom(slimPaper[i]);
      }
    }
  }
};

//No laminaion of child if no lamination of main
const shiftLamination = (main, child) => {
  const laminaionChild = getDom(`lamination${child}`);

  if (getValueById(`lamination${main}`) === 0) {
    disableDom(laminaionChild);
    selectDom(laminaionChild[0]);
  } else {
    enableDom(laminaionChild);
  }
};
