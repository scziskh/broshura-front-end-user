export const builder = [
  {
    staples: {
      format: true,
      orientation: true,
      cover: true,
      inner: true,
      printingCount: true,
    },
    'metal-spring': {
      format: true,
      orientation: true,
      cover: true,
      substrate: true,
      inner: true,
      printingCount: true,
    },
    'plastic-spring': {
      format: true,
      orientation: true,
      cover: true,
      substrate: true,
      inner: true,
      printingCount: true,
    },
  },
];

export const constructor = [
  {
    format: {
      global: {
        A3: { name: 'FORMAT_A3' },
        A4: { name: 'FORMAT_A4' },
        A5: { name: 'FORMAT_A5' },
        A6: { name: 'FORMAT_A6' },
        A7: { name: 'FORMAT_A7' },
      },
      staples: {
        A4: { portrait: true },
        A5: { portrait: true, landscape: true },
        A6: { portrait: true, landscape: true },
        A7: { portrait: true, landscape: true },
      },
      'metal-spring': {
        A3: { landscape: true },
        A4: { portrait: true, landscape: true },
        A5: { portrait: true, landscape: true },
        A6: { portrait: true, landscape: true },
        A7: { portrait: true, landscape: true },
      },
      'plastic-spring': {
        A3: { landscape: true },
        A4: { portrait: true, landscape: true },
        A5: { portrait: true },
      },
    },
    orientation: {
      global: {
        portrait: { name: 'ORIENTATION_PORTRAIT' },
        landscape: { name: 'ORIENTATION_LANDSCAPE' },
      },
      staples: { portrait: true, landscape: true },
      'metal-spring': { portrait: true, landscape: true },
      'plastic-spring': { portrait: true, landscape: true },
    },
    pagesCount: {
      global: { name: 'PAGES_COUNT' },
    },
    paperInner: {
      staples: {
        offset_80: true,
        coated_80: true,
        coated_100: true,
        coated_120: true,
        coated_160: true,
        uncoated_150: true,
        uncoated_170: true,
      },
      'metal-spring': {
        offset_80: true,
        coated_80: true,
        coated_100: true,
        coated_120: true,
        coated_160: true,
        coated_300: true,
        uncoated_150: true,
        uncoated_170: true,
        uncoated_200: true,
        uncoated_250: true,
        uncoated_300: true,
      },
      'plastic-spring': {
        offset_80: true,
        coated_80: true,
        coated_100: true,
        coated_120: true,
      },
    },
    printingInner: {
      staples: {
        twoSidedGrayscale: true,
        twoSidedColor: true,
      },
      'metal-spring': {
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
      'plastic-spring': {
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
    },
    laminationInner: {
      staples: {
        0: true,
        twoSidedMatte: true,
        twoSidedGlossy: true,
      },
      'metal-spring': {
        0: true,
        oneSidedMatte: true,
        twoSidedMatte: true,
        oneSidedGlossy: true,
        twoSidedGlossy: true,
      },
    },
    paperCover: {
      staples: {
        0: true,
        coated_160: true,
        coated_300: true,
        uncoated_150: true,
        uncoated_170: true,
        uncoated_200: true,
        uncoated_250: true,
        uncoated_300: true,
      },
      'metal-spring': {
        0: true,
        coated_300: true,
        uncoated_250: true,
        uncoated_300: true,
      },
      'plastic-spring': {
        0: true,
        offset_80: true,
        coated_80: true,
        coated_100: true,
        coated_120: true,
        coated_300: true,
        uncoated_250: true,
        uncoated_300: true,
      },
    },
    printingCover: {
      staples: {
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
      'metal-spring': {
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
      'plastic-spring': {
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
    },
    laminationCover: {
      staples: {
        0: true,
        oneSidedMatte: true,
        twoSidedMatte: true,
        oneSidedGlossy: true,
        twoSidedGlossy: true,
      },
      'metal-spring': {
        0: true,
        oneSidedMatte: true,
        twoSidedMatte: true,
        oneSidedGlossy: true,
        twoSidedGlossy: true,
      },
    },
    paperSubstrate: {
      'metal-spring': {
        coated_300: true,
        uncoated_300: true,
      },
      'plastic-spring': {
        coated_300: true,
        uncoated_300: true,
      },
    },
    printingSubstrate: {
      'metal-spring': {
        0: true,
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
      'plastic-spring': {
        0: true,
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
    },
    laminationSubstrate: {
      'metal-spring': {
        0: true,
        oneSidedMatte: true,
        twoSidedMatte: true,
        oneSidedGlossy: true,
        twoSidedGlossy: true,
      },
    },

    printingCount: {
      global: { name: 'PRINTING_COUNT' },
    },
    paper: {
      global: {
        0: { name: 'COVER_NOT' },
        offset_80: { name: 'PAPER_OFFSET_80' },
        coated_80: { name: 'PAPER_COATED_80' },
        coated_100: { name: 'PAPER_COATED_100' },
        coated_120: { name: 'PAPER_COATED_120' },
        coated_160: { name: 'PAPER_COATED_160', lamination: true },
        coated_300: { name: 'PAPER_COATED_300', lamination: true },
        uncoated_150: { name: 'PAPER_UNCOATED_150', lamination: true },
        uncoated_170: { name: 'PAPER_UNCOATED_170', lamination: true },
        uncoated_200: { name: 'PAPER_UNCOATED_200', lamination: true },
        uncoated_250: { name: 'PAPER_UNCOATED_250', lamination: true },
        uncoated_300: { name: 'PAPER_UNCOATED_300', lamination: true },
      },
    },
    lamination: {
      global: {
        0: { name: 'LAMINATION_NOT' },
        oneSidedMatte: { name: 'LAMINATION_ONE_SIDED_MATTE' },
        twoSidedMatte: { name: 'LAMINATION_TWO_SIDED_MATTE' },
        oneSidedGlossy: { name: 'LAMINATION_ONE_SIDED_GLOSSY' },
        twoSidedGlossy: { name: 'LAMINATION_TWO_SIDED_GLOSSY' },
      },
    },
    printing: {
      global: {
        0: { name: 'NO_PRINT' },
        oneSidedGrayscale: { name: 'PRINT_ONE_SIDED_GRAYSCALE' },
        twoSidedGrayscale: { name: 'PRINT_TWO_SIDED_GRAYSCALE' },
        oneSidedColor: { name: 'PRINT_ONE_SIDED_COLOR' },
        twoSidedColor: { name: 'PRINT_TWO_SIDED_COLOR' },
      },
    },
  },
];
