import Calculator from '/';

export default class CanalCalculator extends Calculator {
  getTotalPrice(state, bindType) {
    //Declaring constants from state
    const { format, orientation, printCount, inner, secondInner } = state;

    try {
      //Coef for converting pages to printed-pages depends of format/orientation
      const coefPrinted = this.getCoefPrinted(format);

      //Coef what multiplying binding cost depends of format/orientation
      const coefBind = this.getCoefBind(format, bindType, orientation);

      //print sides from database each part of booklet
      const sidesInner = this.getPrintSides(inner.print);
      const sidesSecondInner = this.getPrintSides(secondInner.print);

      //printed pages each part of booklet
      const printedPagesInner = this.getPrintedPagesCount(
        inner.pages,
        printCount,
        coefPrinted,
        sidesInner,
      );
      const printedPagesSecondInner = this.getPrintedPagesCount(
        secondInner.pages,
        printCount,
        coefPrinted,
        sidesSecondInner,
      );

      //Booklet thickness
      const innerThick = this.getThick(inner, sidesInner);
      const secondInnerThick = this.getThick(secondInner, sidesSecondInner);

      const bookletThick = innerThick + secondInnerThick;

      //cost of each part of booklet
      const costInner = this.getInnerCost(inner, printedPagesInner, sidesInner);
      const costSecondInner = this.getInnerCost(
        secondInner,
        printedPagesSecondInner,
        sidesSecondInner,
      );

      //cost of binding
      const costBind = this.getBindCost(
        printCount,
        coefBind,
        bindType,
        bookletThick,
      );

      const price = costInner + costSecondInner + costBind;
      return price;
    } catch (e) {
      return e.message;
    }
  }
}
