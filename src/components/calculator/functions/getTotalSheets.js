const getTotalSheets = (printedSheets, printingCount, formatCoef) => {
  //Возвращаем меньшее значение из двух возможных вариантов
  if (
    Math.ceil(printedSheets * formatCoef) * printingCount >
    (printedSheets * formatCoef * Math.ceil(printingCount * formatCoef)) /
      formatCoef
  ) {
    return (
      (printedSheets * formatCoef * Math.ceil(printingCount * formatCoef)) /
      formatCoef
    );
  }
  return Math.ceil(printedSheets * formatCoef) * printingCount;
};

export default getTotalSheets;
