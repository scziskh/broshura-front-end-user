import {
  A3,
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
  NO_PRINT,
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
} from './.types';

export const builder = {
  staples: {
    format_group: {
      format: {
        type: SELECT,
        values: [A4, A5, A6],
      },
    },
    orientation_group: {
      orientation: {
        type: INPUT_RADIO,
        values: [PORTRAIT, LANDSCAPE],
      },
    },
    cover_group: {
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
    inner_group: {
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
    pages_group: {
      'inner.pages': {
        type: INPUT_NUMBER,
        values: {
          min: 1,
          max: 80,
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
  metal_spring: {
    format_group: {
      format: {
        type: SELECT,
        values: [A3, A4, A5, A6],
      },
    },
    orientation_group: {
      orientation: {
        type: INPUT_RADIO,
        values: [PORTRAIT, LANDSCAPE],
      },
    },
    cover_group: {
      'cover.paper': {
        type: SELECT,
        values: [NO_PAPER, COATED_300, UNCOATED_300],
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
    substrate_group: {
      'substrate.paper': {
        type: SELECT,
        values: [COATED_300, UNCOATED_300],
      },
      'substrate.print': {
        type: SELECT,
        values: [
          NO_PRINT,
          ONE_SIDED_GRAYSCALE,
          TWO_SIDED_GRAYSCALE,
          ONE_SIDED_COLOR,
          TWO_SIDED_COLOR,
        ],
      },
      'substrate.lamin': {
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
    inner_group: {
      'inner.paper': {
        type: SELECT,
        values: [OFFSET_80, COATED_120, COATED_160, UNCOATED_150, UNCOATED_170],
      },
      'inner.print': {
        type: SELECT,
        values: [
          ONE_SIDED_GRAYSCALE,
          TWO_SIDED_GRAYSCALE,
          ONE_SIDED_COLOR,
          TWO_SIDED_COLOR,
        ],
      },
      'inner.lamin': {
        type: SELECT,
        values: [NO_LAMIN, TWO_SIDED_MATTE, TWO_SIDED_GLOSSY],
      },
    },
    pages_group: {
      'inner.pages': {
        type: INPUT_NUMBER,
        values: {
          min: 1,
          max: 560,
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
  plastic_spring: {
    format_group: {
      format: {
        type: SELECT,
        values: [A3, A4, A5, A6],
      },
    },
    orientation_group: {
      orientation: {
        type: INPUT_RADIO,
        values: [PORTRAIT, LANDSCAPE],
      },
    },
    cover_group: {
      'cover.paper': {
        type: SELECT,
        values: [NO_PAPER, COATED_300, UNCOATED_300],
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
    substrate_group: {
      'substrate.paper': {
        type: SELECT,
        values: [COATED_300, UNCOATED_300],
      },
      'substrate.print': {
        type: SELECT,
        values: [
          NO_PRINT,
          ONE_SIDED_GRAYSCALE,
          TWO_SIDED_GRAYSCALE,
          ONE_SIDED_COLOR,
          TWO_SIDED_COLOR,
        ],
      },
      'substrate.lamin': {
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
    inner_group: {
      'inner.paper': {
        type: SELECT,
        values: [OFFSET_80, COATED_120, COATED_160, UNCOATED_150, UNCOATED_170],
      },
      'inner.print': {
        type: SELECT,
        values: [
          ONE_SIDED_GRAYSCALE,
          TWO_SIDED_GRAYSCALE,
          ONE_SIDED_COLOR,
          TWO_SIDED_COLOR,
        ],
      },
      'inner.lamin': {
        type: SELECT,
        values: [NO_LAMIN, TWO_SIDED_MATTE, TWO_SIDED_GLOSSY],
      },
    },
    pages_group: {
      'inner.pages': {
        type: INPUT_NUMBER,
        values: {
          min: 1,
          max: 1020,
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
  thermobinder: {
    format_group: {
      format: {
        type: SELECT,
        values: [A4, A5, A6],
      },
    },
    orientation_group: {
      orientation: {
        type: INPUT_RADIO,
        values: [PORTRAIT, LANDSCAPE],
      },
    },
    cover_group: {
      'cover.paper': {
        type: SELECT,
        values: [COATED_300, UNCOATED_300],
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
        values: [NO_LAMIN, ONE_SIDED_MATTE, ONE_SIDED_GLOSSY],
      },
    },
    inner_group: {
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
    pages_group: {
      'inner.pages': {
        type: INPUT_NUMBER,
        values: {
          min: 1,
          max: 1000,
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
  staples: {
    format: A5,
    orientation: PORTRAIT,
    cover: {
      paper: NO_PAPER,
      print: ONE_SIDED_COLOR,
      lamin: NO_LAMIN,
    },
    inner: {
      paper: OFFSET_80,
      print: TWO_SIDED_COLOR,
      lamin: NO_LAMIN,
      pages: 8,
    },
    printCount: 1,
  },
  metal_spring: {
    format: A4,
    orientation: PORTRAIT,
    cover: {
      paper: UNCOATED_300,
      print: ONE_SIDED_COLOR,
      lamin: NO_LAMIN,
    },
    substrate: {
      paper: UNCOATED_300,
      print: NO_PRINT,
      lamin: NO_LAMIN,
    },
    inner: {
      paper: OFFSET_80,
      print: TWO_SIDED_COLOR,
      lamin: NO_LAMIN,
      pages: 16,
    },
    printCount: 1,
  },
  plastic_spring: {
    format: A4,
    orientation: PORTRAIT,
    cover: {
      paper: NO_PAPER,
      print: ONE_SIDED_COLOR,
      lamin: NO_LAMIN,
    },
    substrate: {
      paper: UNCOATED_300,
      print: NO_PRINT,
      lamin: NO_LAMIN,
    },
    inner: {
      paper: OFFSET_80,
      print: TWO_SIDED_COLOR,
      lamin: NO_LAMIN,
      pages: 24,
    },
    printCount: 1,
  },
  thermobinder: {
    format: A4,
    orientation: PORTRAIT,
    cover: {
      paper: UNCOATED_300,
      print: ONE_SIDED_COLOR,
      lamin: NO_LAMIN,
    },
    inner: {
      paper: OFFSET_80,
      print: TWO_SIDED_COLOR,
      lamin: NO_LAMIN,
      pages: 25,
    },
    printCount: 1,
  },
};
