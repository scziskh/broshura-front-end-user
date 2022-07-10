import { makeDivisible } from '../../helpers/math';
import {
  LAMIN,
  NO_PAPER,
  TRIM,
} from '../../helpers/builders/.types';

export default class Calculator {
  #bindSizes;
  #papers;
  #prints;
  #lamins;
  #trim;
  #bindCoefs;
  #printCoefs;
  #countCoefs;
  #bindAdj;

  constructor(costData) {
    this.#bindAdj = costData.BIND_ADJ;
    this.#bindSizes = costData.BIND_SIZES;
    this.#bindCoefs = costData.BIND_COEFS;
    this.#countCoefs = costData.COUNT_COEFS;
    this.#printCoefs = costData.PRINT_COEFS;
    this.#papers = costData.PAPERS;
    this.#prints = costData.PRINTS;
    this.#lamins = costData.LAMINS;
    this.#trim = costData.TRIM;
  }

  //If no paper redefine (print, lamin, pages) = 'false', else add pages count
  updateParams(params) {
    if (params.paper === NO_PAPER) {
      params.pages = 0;
      params.lamin = 'NO_LAMIN';
    } else {
      params.pages = 2 * this.#prints[params.print].SIDES;
    }
    return params;
  }

  //print sides from database (if print = ONE_SIDED... return 1, if print = TWO_SIDED... return 2)
  getPrintSides(print) {
    return this.#prints[print].SIDES;
  }

  //count of printed pages
  getPrintedPagesCount(pagesCount, printCount, coefFormat, sides) {
    const divisor = sides;
    const count = pagesCount * coefFormat * printCount;

    return makeDivisible(count, divisor);
  }

  //coef that depends of count
  getCoefCount(type, count) {
    const maxCount = this.#countCoefs[type].MAX_COUNT;

    //After count is maxCount function not decrease
    const minCount = Math.min(count, maxCount);
    const coefs = this.#countCoefs[type];

    //decreasing function of changing the cost example process from the count not more than 1
    let coefCount = coefs.FACTOR * Math.pow(minCount, coefs.DEGREE);
    coefCount = Math.min(coefCount, 1);

    return coefCount;
  }

  //Coef what depends from format
  //PRINTED_COEF for converting pages in printed pages (Printed page is page format A3)
  //BIND_COEF what changing cost on binding depents from format
  getCoefPrinted(format) {
    let result = this.#printCoefs[format];
    if (result === 0) {
      return null;
    }
    return result;
  }

  getCoefBind(format, bindType, orientation) {
    let result = this.#bindCoefs[format][bindType][orientation];
    if (result === 0) {
      return null;
    }
    return result;
  }

  getCoverCost(params, count, sides) {
    //if no count return 0
    if (params.pages === 0) {
      return 0;
    }
    const cost = this.getInnerCost(params, count, sides);

    return cost;
  }
  //Cost one part of booklet (cover, inner ...)
  getInnerCost(params, count, sides) {
    const paperCost = this.getPaperCost(params.paper, count, sides);
    const printCost = this.getPrintCost(params.print, count);
    const laminCost = this.getLaminCost(params.lamin, count, sides);

    return paperCost + printCost + laminCost;
  }

  //Total cost part of paper
  getPaperCost(paper, count, sides) {
    return this.#papers[paper].COST * Math.ceil(count / sides);
  }

  //Total cost part of printing
  getPrintCost(print, count) {
    const coef = this.getCoefCount(print, count);

    return this.#prints[print].COST * count * coef;
  }

  //total cost part of lamination
  getLaminCost(lamin, count, sides) {
    const coef = this.getCoefCount(LAMIN, count);
    return this.#lamins[lamin].COST * Math.ceil(count / sides) * coef;
  }

  //trimming
  getTrimCost(count) {
    const coef = this.getCoefCount(TRIM, count);
    let trimCost = this.#trim.COST * count * coef;

    //trimming cost is not less than min cost (in database)
    trimCost = Math.max(trimCost, this.#trim.MIN_COST);
    return trimCost;
  }

  //total thick part of booklet
  getThick(params, sides) {
    const pages = makeDivisible(params.pages, 2 * sides);
    if (params.paper === NO_PAPER) {
      return 0;
    }
    const paperThick = this.#papers[params.paper].THICK;
    const laminThick = this.#lamins[params.lamin].THICK;

    const thick = paperThick + laminThick;
    return thick * Math.ceil(pages / sides);
  }

  //binding cost of booklet
  getBindCost(count, coef, bindType, thick) {
    const sizes = this.#bindSizes[bindType];
    let i = 0;
    let size;

    //found the size of booklet (depends from thickness)
    while (sizes[i] && !size) {
      thick <= sizes[i].THICK ? (size = sizes[i]) : ++i;
    }

    //return binding cost
    if (size) {
      return size.COST * count * coef + this.#bindAdj[bindType];
    }

    return null;
  }

  //lamination adjustment
  getLaminAdj(...lamins) {
    //Set from lamination what use in booklet
    const laminsSet = Array.from(new Set(lamins)).filter(
      lamins => lamins !== 'NO_LAMIN',
    );
    //Sum on adjustment for each lamination type (Zero if set is empty)
    let result = 0;
    for (let i = 0; i < laminsSet.length; i++) {
      result += this.#lamins[laminsSet[i]].ADJ;
    }

    return result;
  }

  getTotalPrice(state, bindType) {
    //Declaring constants from state
    const { format, orientation, printCount, inner } = state;

    //Coef for converting pages to printed-pages depends of format/orientation
    const coefPrinted = this.getCoefPrinted(format);

    //Coef what multipling binding cost depends of format/orientation
    const coefBind = this.getCoefBind(format, bindType, orientation);

    //redefine cover
    const cover = this.updateParams(state.cover);

    ////print sides from database each part of booklet
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

    // eslint-disable-next-line no-console
    console.log(`
      cost cover: ${costCover}
      cost inner: ${costInner}
      cost trimming: ${costTrim}
      cost binding: ${costBind}
      cost lamination adjustment: ${laminAdj}
      `);

    const price =
      costBind && coefPrinted
        ? costInner + costCover + costTrim + costBind + laminAdj
        : null;

    return `${Math.ceil(price)} UAH`;
  }
}
