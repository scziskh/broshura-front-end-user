import { NO_LAMIN, NO_PAPER } from '../../helpers/builders/.types';
import { makeDivisible } from '../../helpers/math';
import Calculator from './calculator';

export default class StaplesCalculator extends Calculator {
  //count of printed pages
  getPrintedPagesCount(pagesCount, printCount, coefFormat, sides) {
    const count = pagesCount * coefFormat * printCount;
    const result = sides ? makeDivisible(count, sides) : printCount;

    return result;
  }

  updateParams(params) {
    if (params.paper === NO_PAPER) {
      params.pages = 0;
      params.lamin = NO_LAMIN;
    } else {
      params.pages = 2 * super.updateParams(params).pages;
    }
    return params;
  }

  getTotalPrice(state, bindType) {
    //Declaring constants from state
    const { format, orientation, printCount, inner } = state;

    try {
      //Coef for converting pages to printed-pages depends of format/orientation
      const coefPrinted = this.getCoefPrinted(format);

      //Coef what multiplying binding cost depends of format/orientation
      const coefBind = this.getCoefBind(format, bindType, orientation);

      //redefine cover
      const cover = this.updateParams(state.cover, bindType);

      //print sides from database each part of booklet
      const sidesInner = this.getPrintSides(inner.print);
      const sidesCover = this.getPrintSides(cover.print);

      //printed pages each part of booklet
      const printedPagesInner = this.getPrintedPagesCount(
        inner.pages,
        printCount,
        coefPrinted,
        sidesInner,
      );

      const printedPagesCover = this.getPrintedPagesCount(
        cover.pages,
        printCount,
        coefPrinted,
        sidesCover,
      );

      //Booklet thickness
      const thickInner = this.getThick(inner, sidesInner);
      const thickCover = this.getThick(cover, sidesCover);
      const bookletThick = thickInner + thickCover;

      //cost of each part of booklet
      const costInner = this.getInnerCost(inner, printedPagesInner, sidesInner);
      const costCover = this.getCoverCost(cover, printedPagesCover, sidesCover);

      //cost of trimming
      const costTrim = this.getTrimCost(printCount);

      //cost of binding
      const costBind = this.getBindCost(
        printCount,
        coefBind,
        bindType,
        bookletThick,
      );
      //cost of lamination adjustment
      const laminAdj = this.getLaminAdj(inner.lamin, cover.lamin);

      const price = costInner + costCover + costTrim + costBind + laminAdj;
      return price;
    } catch (e) {
      return e.message;
    }
  }
}
