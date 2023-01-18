export const calc = {
  bind_adj: {
    staples: 20,
    metal_spring: 0,
    plastic_spring: 0,
    thermobinder: 150,
    folder: 0,
    canal: 0,
    ring: 0,
  },
  bind_sizes: {
    staples: [
      {
        cost: 2.75,
        thick: 2400,
      },
      {
        cost: 3.25,
        thick: 4000,
      },
    ],
    plastic_spring: [
      {
        cost: 22,
        thick: 4000,
      },
      {
        cost: 22,
        thick: 5500,
      },
      {
        cost: 22,
        thick: 8000,
      },
      {
        cost: 27,
        thick: 10000,
      },
      {
        cost: 27,
        thick: 12000,
      },
      {
        cost: 27,
        thick: 15000,
      },
      {
        cost: 32,
        thick: 18000,
      },
      {
        cost: 32,
        thick: 21000,
      },
      {
        cost: 42,
        thick: 24000,
      },
      {
        cost: 42,
        thick: 28000,
      },
      {
        cost: 52,
        thick: 34000,
      },
      {
        cost: 52,
        thick: 42000,
      },
      {
        cost: 62,
        thick: 51000,
      },
    ],
    metal_spring: [
      {
        cost: 27,
        thick: 6000,
      },
      {
        cost: 27,
        thick: 7500,
      },
      {
        cost: 32,
        thick: 9000,
      },
      {
        cost: 32,
        thick: 10500,
      },
      {
        cost: 37,
        thick: 12000,
      },
      {
        cost: 42,
        thick: 13500,
      },
      {
        cost: 52,
        thick: 16000,
      },
      {
        cost: 52,
        thick: 19000,
      },
      {
        cost: 67,
        thick: 22000,
      },
      {
        cost: 67,
        thick: 25000,
      },
      {
        cost: 77,
        thick: 28000,
      },
    ],
    folder: [
      {
        cost: 10,
        thick: 10000,
      },
      {
        cost: 20,
        thick: 25000,
      },
      {
        cost: 30,
        thick: 50000,
      },
    ],
    canal: [
      {
        cost: 120,
        thick: 12500,
      },
      {
        cost: 140,
        thick: 14500,
      },
      {
        cost: 150,
        thick: 16500,
      },
      {
        cost: 160,
        thick: 18500,
      },
      {
        cost: 170,
        thick: 20500,
      },
      {
        cost: 180,
        thick: 22500,
      },
    ],
    thermobinder: [
      {
        cost: 8,
        thick: 20000,
      },
    ],
    ring: [
      {
        cost: 5,
        thick: 20000,
      },
      {
        cost: 10,
        thick: 50000,
      },
    ],
  },
  bind_coefs: {
    A4: {
      staples: {
        portrait: 1,
      },
      metal_spring: {
        portrait: 1,
        landscape: 1,
      },
      plastic_spring: {
        portrait: 1,
        landscape: 1.2,
      },
      thermobinder: {
        portrait: 1,
      },
      canal: {
        portrait: 1,
      },
      ring: {
        portrait: 1,
        landscape: 1,
      },
    },
    A5: {
      staples: {
        portrait: 1,
        landscape: 1,
      },
      metal_spring: {
        portrait: 1,
        landscape: 1,
      },
      plastic_spring: {
        portrait: 1.2,
        landscape: 1,
      },
      thermobinder: {
        portrait: 1,
        landscape: 1,
      },
      ring: {
        portrait: 1,
        landscape: 1,
      },
    },
    A6: {
      staples: {
        portrait: 1,
      },
      metal_spring: {
        portrait: 1,
        landscape: 1,
      },
      plastic_spring: {
        portrait: 1,
        landscape: 1,
      },
      thermobinder: {
        portrait: 1,
      },
      ring: {
        portrait: 1,
        landscape: 1,
      },
    },
    A7: {
      staples: {
        landscape: 1,
        portrait: 1,
      },
      metal_spring: {
        portrait: 1,
        landscape: 1,
      },
      plastic_spring: {
        portrait: 1,
        landscape: 1,
      },
      ring: {
        portrait: 1,
        landscape: 1,
      },
    },
    A3: {
      metal_spring: {
        portrait: 1.6,
        landscape: 1.3,
      },
      plastic_spring: {
        landscape: 1.3,
      },
      ring: {
        portrait: 1,
        landscape: 1,
      },
    },
  },
  print_coefs: {
    A3: 1,
    A4: 0.5,
    A5: 0.25,
    A6: 0.125,
    A7: 0.0625,
  },
  count_coefs: {
    one_sided_grayscale: {
      factor: 2.2,
      degree: -0.3,
      max_count: 1000,
    },
    two_sided_grayscale: {
      factor: 2.2,
      degree: -0.3,
      max_count: 1000,
    },
    one_sided_color: {
      factor: 1.6,
      degree: -0.2,
      max_count: 1000,
    },
    two_sided_color: {
      factor: 1.6,
      degree: -0.2,
      max_count: 1000,
    },
    lamin: {
      factor: 1.8,
      degree: -0.2,
      max_count: 500,
    },
    trim: {
      factor: 1,
      degree: -0.1,
      max_count: 100,
    },
  },
  papers: {
    no_paper: {
      cost: 0,
      thick: 0,
    },
    offset_80: {
      cost: 1,
      thick: 100,
    },
    coated_120: {
      cost: 2,
      thick: 130,
    },
    coated_160: {
      cost: 2.5,
      thick: 180,
    },
    coated_300: {
      cost: 7,
      thick: 400,
    },
    uncoated_150: {
      cost: 1.5,
      thick: 130,
    },
    uncoated_170: {
      cost: 1.7,
      thick: 140,
    },
    uncoated_200: {
      cost: 2,
      thick: 190,
    },
    uncoated_250: {
      cost: 2.5,
      thick: 230,
    },
    uncoated_300: {
      cost: 3,
      thick: 310,
    },
  },
  prints: {
    no_print: {
      cost: 0,
      sides: 0,
    },
    one_sided_grayscale: {
      cost: 5,
      sides: 1,
    },
    two_sided_grayscale: {
      cost: 5,
      sides: 2,
    },
    one_sided_color: {
      cost: 15,
      sides: 1,
    },
    two_sided_color: {
      cost: 15,
      sides: 2,
    },
  },
  lamins: {
    no_lamin: {
      cost: 0,
      thick: 0,
      adj: 0,
    },
    one_sided_matte: {
      cost: 8.5,
      thick: 24,
      adj: 17,
    },
    two_sided_matte: {
      cost: 10,
      thick: 48,
      adj: 20,
    },
    one_sided_glossy: {
      cost: 8.2,
      thick: 27,
      adj: 16.4,
    },
    two_sided_glossy: {
      cost: 9.8,
      thick: 54,
      adj: 19.6,
    },
  },
  trim: {
    min_cost: 20,
    cost: 2,
  },
  separators: {
    small: {
      cost: 2,
      thick: 20,
      print_cost: 2,
    },
    large: {
      cost: 5,
      thick: 20,
      print_cost: 5,
    },
  },
};
