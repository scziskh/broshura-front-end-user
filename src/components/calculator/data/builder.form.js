import {
  A4,
  A5,
  A6,
  COATED_120,
  COATED_160,
  COATED_300,
  INPUT_NUMBER,
  INPUT_RADIO,
  LANDSCAPE,
  NO_LAMIN,
  NO_PAPER,
  OFFSET_80,
  ONE_SIDED_COLOR,
  ONE_SIDED_GLOSSY,
  ONE_SIDED_GRAYSCALE,
  ONE_SIDED_MATTE,
  PORTRAIT,
  SELECT,
  TWO_SIDED_COLOR,
  TWO_SIDED_GLOSSY,
  TWO_SIDED_GRAYSCALE,
  TWO_SIDED_MATTE,
  UNCOATED_150,
  UNCOATED_170,
  UNCOATED_200,
  UNCOATED_250,
  UNCOATED_300,
} from '../helpers/types';

export const builder = {
  STAPLES: {
    FORMAT_GROUP: {
      format: {
        type: SELECT,
        values: [A4, A5, A6],
      },
    },
    ORIENTATION_GROUP: {
      orientation: {
        type: INPUT_RADIO,
        values: [PORTRAIT, LANDSCAPE],
      },
    },
    COVER_GROUP: {
      'cover.paper': {
        type: SELECT,
        values: [
          NO_PAPER,
          COATED_160,
          COATED_300,
          UNCOATED_150,
          UNCOATED_170,
          UNCOATED_200,
          UNCOATED_250,
          UNCOATED_300,
        ],
      },
      'cover.print': {
        type: SELECT,
        values: [
          ONE_SIDED_GRAYSCALE,
          TWO_SIDED_GRAYSCALE,
          ONE_SIDED_COLOR,
          TWO_SIDED_COLOR,
        ],
      },
      'cover.lamin': {
        type: SELECT,
        values: [
          NO_LAMIN,
          ONE_SIDED_MATTE,
          TWO_SIDED_MATTE,
          ONE_SIDED_GLOSSY,
          TWO_SIDED_GLOSSY,
        ],
      },
    },
    INNER_GROUP: {
      'inner.paper': {
        type: SELECT,
        values: [OFFSET_80, COATED_120, COATED_160, UNCOATED_150, UNCOATED_170],
      },
      'inner.print': {
        type: SELECT,
        values: [TWO_SIDED_GRAYSCALE, TWO_SIDED_COLOR],
      },
      'inner.lamin': {
        type: SELECT,
        values: [NO_LAMIN, TWO_SIDED_MATTE, TWO_SIDED_GLOSSY],
      },
    },
    PAGES_GROUP: {
      'inner.pages': {
        type: INPUT_NUMBER,
        values: {
          min: 1,
          max: 48,
        },
      },
    },
    COUNT_GROUP: {
      printCount: {
        type: INPUT_NUMBER,
        values: {
          min: 1,
          max: 500,
        },
      },
    },
  },
};

export const defaultValues = {
  STAPLES: {
    format: A4,
    orientation: PORTRAIT,
    cover: {
      paper: NO_PAPER,
      print: ONE_SIDED_COLOR,
      lamin: NO_LAMIN,
    },
    inner: {
      paper: OFFSET_80,
      print: TWO_SIDED_GRAYSCALE,
      lamin: NO_LAMIN,
      pages: 8,
    },
    printCount: 1,
  },
};
