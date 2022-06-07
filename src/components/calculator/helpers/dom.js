//DOM element by ID
export const getDomById = key => document.getElementById(key);

//DOM elements by Name
export const getDomByName = key => document.getElementsByName(key);

//Value of dom element by ID
export const getValueById = key => {
  const curDOM = getDomById(key);
  if (curDOM) {
    let value = curDOM.value;
    if (value === '0') {
      value = 0;
    }
    return value;
  }
  return 0;
};

//Value of dom element by Name
export const getValueByName = key => {
  const elements = getDomByName(key);
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].checked) return elements[i].value;
  }
  return -1;
};
