//DOM elements/childElement
export const getDom = (key, type = 'id') => {
  let dom;
  switch (type) {
    case 'id':
      dom = document.getElementById(key);
      break;
    case 'name':
      dom = document.getElementsByName(key);
      break;
    default:
      return;
  }
  return dom;
};

//Value of dom by Id
export const getValueById = key => {
  if (getDom(key)) {
    const result = getDom(key).value;
    if (result === '0') {
      return 0;
    }
    return result;
  }
  return 0;
};

//Value of checked dom element
export const getCheckedValue = key => {
  const elements = getDom(key, 'name');
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) return elements[i].value;
  }
  return -1;
};

//Disable dom element
export const disableDom = (...doms) => {
  doms = filterDoms(doms);
  for (let i = 0; i < doms.length; ++i) {
    doms[i].disabled = true;
  }
};

//Enable dom element
export const enableDom = (...doms) => {
  doms = filterDoms(doms);
  for (let i = 0; i < doms.length; ++i) {
    doms[i].disabled = false;
  }
};

//Select dom element
export const selectDom = (...doms) => {
  doms = filterDoms(doms);
  for (let i = 0; i < doms.length; ++i) {
    doms[i].selected = true;
  }
};

//Check dom element
export const checkDom = (...doms) => {
  doms = filterDoms(doms);
  for (let i = 0; i < doms.length; ++i) {
    doms[i].checked = true;
  }
};

//Dom array without null elements
export const filterDoms = doms => doms.filter(dom => dom !== null);
