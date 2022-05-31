import CalculatorData from '../data/index.json';

const getLaminationAdj = (laminationCover, laminationInner) => {
  if (laminationCover || laminationInner) {
    //Если есть ламинация и на обложке, и на внутреннем блоке
    if (laminationCover && laminationInner) {
      let adjustment;
      laminationCover === laminationInner //Если она одинакова, то доп приладки не понадобится
        ? (adjustment = CalculatorData.lamination[laminationInner].adjustment)
        : (adjustment =
            CalculatorData.lamination[laminationInner].adjustment +
            CalculatorData.lamination[laminationCover].adjustment);
      return adjustment;
    }

    //Если ламинация только обложки
    if (laminationCover) {
      return CalculatorData.lamination[laminationCover].adjustment;
    }
    //Если ламинация только внутреннего блока
    return CalculatorData.lamination[laminationInner].adjustment;
  }

  //Если ламинации нет
  return 0;
};

export default getLaminationAdj;
