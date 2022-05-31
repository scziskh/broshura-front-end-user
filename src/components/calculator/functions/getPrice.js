import CalculatorData from '../data';
import getBindingSize from './getBindingSize';
import getTrimmingCost from './getTrimmingCost';
import getTotalSheets from './getTotalSheets';
import getLaminationCost from './getLaminationCost';
import getLaminationAdj from './getLaminationAdj';
import getPrintingCost from './getPrintingCost';

const getPrice = (
  bindingType,
  pagesCount,
  paperInner,
  printingInner,
  laminationInner,
  paperCover,
  printingCover,
  laminationCover,
  format,
  orientation,
  printingCount,
) => {
  //Коефициент, зависящий от формата
  const formatCoef =
    CalculatorData.format[format][bindingType][orientation].formatCoef;

  //Количество разворотов
  const countsSheetsInner = Math.ceil(pagesCount / 4);

  let countsSheetsCover;
  paperCover ? (countsSheetsCover = 1) : (countsSheetsCover = 0);

  //Толщина брошюры
  let thicknessPaperCover;
  paperCover
    ? (thicknessPaperCover =
        CalculatorData.paper[paperCover[0]][paperCover[1]].thickness)
    : (thicknessPaperCover = 0);

  const thicknessPaperInner =
    countsSheetsInner *
    CalculatorData.paper[paperInner[0]][paperInner[1]].thickness;

  let thicknessLaminationCover;
  laminationCover
    ? (thicknessLaminationCover =
        CalculatorData.lamination[laminationCover].thickness)
    : (thicknessLaminationCover = 0);

  let thicknessLaminationInner;
  laminationInner
    ? (thicknessLaminationInner =
        CalculatorData.lamination[laminationInner].thickness *
        countsSheetsInner)
    : (thicknessLaminationInner = 0);

  const thicknessTotal =
    thicknessPaperCover +
    thicknessLaminationCover +
    thicknessPaperInner +
    thicknessLaminationInner;

  const size = getBindingSize(thicknessTotal, [bindingType]);
  if (size === -1) {
    return;
  }

  //Общее количество печатных листов
  const totalSheetsInner = getTotalSheets(
    countsSheetsInner,
    printingCount,
    formatCoef,
  );

  const totalSheetsCover = getTotalSheets(
    countsSheetsCover,
    printingCount,
    formatCoef,
  );

  //Общее количество печатных страниц
  const printedPagesInner = totalSheetsInner * 2;

  let printedPagesCover;
  printingCover
    ? (printedPagesCover =
        totalSheetsCover * CalculatorData.printing[printingCover].sides)
    : (printedPagesCover = 0);

  //Стоимость бумаги
  const costPaperInner =
    totalSheetsInner * CalculatorData.paper[paperInner[0]][paperInner[1]].cost;

  let costPaperCover;
  if (paperCover) {
    costPaperCover =
      totalSheetsCover *
      CalculatorData.paper[paperCover[0]][paperCover[1]].cost;
  }

  //Стоимость печати
  const costPrintingInner = getPrintingCost(printingInner, printedPagesInner);

  const costPrintingCover = getPrintingCost(printingCover, printedPagesCover);

  //Стоимость ламинации
  const costLaminationInner = getLaminationCost(
    laminationInner,
    totalSheetsInner,
  );

  const costLaminationCover = getLaminationCost(
    laminationCover,
    totalSheetsCover,
  );

  //Приладка ламинации
  const laminationAdj = getLaminationAdj(laminationCover, laminationInner);

  //Приладка сшивки
  const bindingAdj = CalculatorData.bindingType[bindingType][size].adjustment;

  //Сшивка
  const bindingCost =
    printingCount * CalculatorData.bindingType[bindingType][size].cost;

  //Подрезка с 3-х сторон
  const costTrimming = getTrimmingCost(printingCount);

  const totalPrice =
    costPaperCover +
    costPaperInner +
    costPrintingCover +
    costPrintingInner +
    costLaminationCover +
    costLaminationInner +
    bindingAdj +
    laminationAdj +
    costTrimming +
    bindingCost;
  console.log(
    `   costPaperCover: ${costPaperCover}
      costPaperInner: ${costPaperInner}
      costPrintingCover: ${costPrintingCover}
      costPrintingInner: ${costPrintingInner}
      costLaminationCover: ${costLaminationCover}
      costLaminationInner: ${costLaminationInner}
      bindingAdj: ${bindingAdj}
      laminationAdj: ${laminationAdj}
      costTrimming: ${costTrimming}
      thicknessTotal: ${thicknessTotal}
      maxThickness: ${CalculatorData.bindingType[bindingType][size].thickness}`,
  );
  console.log(Math.ceil(totalPrice));
  return Math.ceil(totalPrice);
};

export default getPrice;
