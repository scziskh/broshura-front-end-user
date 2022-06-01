export default [
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
        A5: {
          portrait: true,
          landscape: true,
        },
        A6: {
          portrait: true,
          landscape: true,
        },
        A7: {
          portrait: true,
          landscape: true,
        },
      },
    },
    orientation: {
      global: {
        portrait: { name: 'ORIENTATION_PORTRAIT' },
        landscape: { name: 'ORIENTATION_LANDSCAPE' },
      },
      staples: {
        portrait: false,
        landscape: true,
      },
    },
    pagesCount: {
      global: { name: 'PAGES_COUNT' },
    },
    paperInner: {
      global: {
        offset_80: { name: 'PAPER_OFFSET_80' },
        coated_80: { name: 'PAPER_COATED_80' },
        coated_100: { name: 'PAPER_COATED_100' },
        coated_120: { name: 'PAPER_COATED_120' },
        coated_160: { name: 'PAPER_COATED_160' },
        coated_300: { name: 'PAPER_COATED_300' },
        uncoated_150: { name: 'PAPER_UNCOATED_150' },
        uncoated_170: { name: 'PAPER_UNCOATED_170' },
        uncoated_200: { name: 'PAPER_UNCOATED_200' },
        uncoated_250: { name: 'PAPER_UNCOATED_250' },
        uncoated_300: { name: 'PAPER_UNCOATED_300' },
      },
      staples: {
        offset_80: true,
        coated_80: true,
        coated_100: true,
        coated_120: true,
        coated_160: true,
        uncoated_150: true,
        uncoated_170: true,
      },
    },
    printingInner: {
      global: {
        oneSidedGrayscale: { name: 'PRINT_ONE_SIDED_GRAYSCALE' },
        twoSidedGrayscale: { name: 'PRINT_TWO_SIDED_GRAYSCALE' },
        oneSidedColor: { name: 'PRINT_ONE_SIDED_COLOR' },
        twoSidedColor: { name: 'PRINT_TWO_SIDED_COLOR' },
      },
      staples: {
        twoSidedGrayscale: true,
        twoSidedColor: true,
      },
    },
    laminationInner: {
      global: {
        noLamination: { name: 'LAMINATION_NOT' },
        oneSidedMatte: { name: 'LAMINATION_ONE_SIDED_MATTE' },
        twoSidedMatte: { name: 'LAMINATION_TWO_SIDED_MATTE' },
        oneSidedGlossy: { name: 'LAMINATION_ONE_SIDED_GLOSSY' },
        twoSidedGlossy: { name: 'LAMINATION_TWO_SIDED_GLOSSY' },
      },
      staples: {
        noLamination: true,
        twoSidedMatte: true,
        twoSidedGlossy: true,
      },
    },
    paperCover: {
      global: {
        noCover: { name: 'COVER_NOT' },
        offset_80: { name: 'PAPER_OFFSET_80' },
        coated_80: { name: 'PAPER_COATED_80' },
        coated_100: { name: 'PAPER_COATED_100' },
        coated_120: { name: 'PAPER_COATED_120' },
        coated_160: { name: 'PAPER_COATED_160' },
        coated_300: { name: 'PAPER_COATED_300' },
        uncoated_150: { name: 'PAPER_UNCOATED_150' },
        uncoated_170: { name: 'PAPER_UNCOATED_170' },
        uncoated_200: { name: 'PAPER_UNCOATED_200' },
        uncoated_250: { name: 'PAPER_UNCOATED_250' },
        uncoated_300: { name: 'PAPER_UNCOATED_300' },
      },
      staples: {
        noCover: true,
        coated_160: true,
        coated_300: true,
        uncoated_150: true,
        uncoated_170: true,
        uncoated_200: true,
        uncoated_250: true,
        uncoated_300: true,
      },
    },
    printingCover: {
      global: {
        oneSidedGrayscale: { name: 'PRINT_ONE_SIDED_GRAYSCALE' },
        twoSidedGrayscale: { name: 'PRINT_TWO_SIDED_GRAYSCALE' },
        oneSidedColor: { name: 'PRINT_ONE_SIDED_COLOR' },
        twoSidedColor: { name: 'PRINT_TWO_SIDED_COLOR' },
      },
      staples: {
        oneSidedGrayscale: true,
        twoSidedGrayscale: true,
        oneSidedColor: true,
        twoSidedColor: true,
      },
    },
    laminationCover: {
      global: {
        noLamination: { name: 'LAMINATION_NOT' },
        oneSidedMatte: { name: 'LAMINATION_ONE_SIDED_MATTE' },
        twoSidedMatte: { name: 'LAMINATION_TWO_SIDED_MATTE' },
        oneSidedGlossy: { name: 'LAMINATION_ONE_SIDED_GLOSSY' },
        twoSidedGlossy: { name: 'LAMINATION_TWO_SIDED_GLOSSY' },
      },
      staples: {
        noLamination: true,
        oneSidedMatte: true,
        twoSidedMatte: true,
        oneSidedGlossy: true,
        twoSidedGlossy: true,
      },
    },
    printingCount: {
      global: { name: 'PRINTING_COUNT' },
    },
  },
];
