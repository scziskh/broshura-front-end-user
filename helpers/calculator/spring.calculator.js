import Calculator from '/';

export default class SpringCalculator extends Calculator {
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
      const substrate = this.updateParams(state.substrate, bindType);

      //print sides from database each part of booklet
      const sidesInner = this.getPrintSides(inner.print);
      const sidesCover = this.getPrintSides(cover.print);
      const sidesSubstrate = this.getPrintSides(substrate.print);

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

      const printedPagesSubstrate = this.getPrintedPagesCount(
        substrate.pages,
        printCount,
        coefPrinted,
        sidesSubstrate,
      );

      //Booklet thickness
      const thickInner = this.getThick(inner, sidesInner);
      const thickCover = this.getThick(cover, sidesCover);
      const bookletThick = thickInner + thickCover;

      //cost of each part of booklet
      const costInner = this.getInnerCost(inner, printedPagesInner, sidesInner);
      const costCover = this.getCoverCost(cover, printedPagesCover, sidesCover);
      const costSubstrate = this.getSubstrateCost(
        substrate,
        printedPagesSubstrate,
        sidesSubstrate,
      );

      //cost of binding
      const costBind = this.getBindCost(
        printCount,
        coefBind,
        bindType,
        bookletThick,
      );
      //cost of lamination adjustment
      const laminAdj = this.getLaminAdj(
        inner.lamin,
        cover.lamin,
        substrate.lamin,
      );

      const price = costInner + costCover + costSubstrate + costBind + laminAdj;
      return price;
    } catch (e) {
      return e.message;
    }
  }
}
