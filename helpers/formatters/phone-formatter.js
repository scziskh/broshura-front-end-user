export const phoneFormatter = (phone) => {
  if (phone) {
    const phoneArray = phone.split('');
    phoneArray.splice(3, '', ' (');
    phoneArray.splice(7, '', ') ');
    phoneArray.splice(11, '', ' ');
    phoneArray.splice(14, '', ' ');

    const result = phoneArray.join('');

    return result;
  }
  return '+38 (0XX) XXX XX XX';
};
