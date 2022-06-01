export default [
  {
    format: {
      global: {
        A3: {
          name: 'FORMAT_A3',
        },
        A4: {
          name: 'FORMAT_A4',
        },
        A5: {
          name: 'FORMAT_A5',
        },
        A6: {
          name: 'FORMAT_A6',
        },
        A7: {
          name: 'FORMAT_A7',
        },
      },
      staples: {
        A4: {
          portrait: true,
        },
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
        portrait: {
          name: 'ORIENTATION_PORTRAIT',
        },
        landscape: {
          name: 'ORIENTATION_LANDSCAPE',
        },
      },
      staples: {
        portrait: false,
        landscape: true,
      },
    },
    pagesCount: {
      global: {
        name: 'PAGES_COUNT',
      },
    },
  },
];
