export const sitemap = {
  pages: {
    '/': {
      name: 'MAIN_PAGE',
      title: 'TITLE_MAIN_PAGE',
      description: 'DESCRIPTION_MAIN_PAGE',
    },
    services: {
      name: 'SERVICES_PAGE',
      title: 'TITLE_SERVICES_PAGE',
      description: 'DESCRIPTION_SERVICES_PAGE',
      childs: {
        staples: {
          type: 'STAPLES',
          name: 'STAPLES_PAGE',
          title: 'TITLE_STAPLES_PAGE',
          description: 'DESCRIPTION_STAPLES_PAGE',
        },
        'metal-spring': {
          type: 'METAL_SPRING',
          name: 'METAL_SPRING_PAGE',
          title: 'TITLE_METAL_SPRING_PAGE',
          description: 'DESCRIPTION_METAL_SPRING_PAGE',
        },
        'plastic-spring': {
          type: 'PLASTIC_SPRING',
          name: 'PLASTIC_SPRING_PAGE',
          title: 'TITLE_PLASTIC_SPRING_PAGE',
          description: 'DESCRIPTION_PLASTIC_SPRING_PAGE',
        },
        thermobinder: {
          type: 'THERMOBINDER',
          name: 'THERMOBINDER_PAGE',
          title: 'TITLE_THERMOBINDER_PAGE',
          description: 'DESCRIPTION_THERMOBINDER_PAGE',
        },
        'hard-cover': {
          type: 'HARD_COVER',
          name: 'HARD_COVER_PAGE',
          title: 'TITLE_HARD_COVER_PAGE',
          description: 'DESCRIPTION_HARD_COVER_PAGE',
        },
        canal: {
          type: 'CANAL',
          name: 'CHANEL_PAGE',
          title: 'TITLE_CHANEL_PAGE',
          description: 'DESCRIPTION_CHANEL_PAGE',
        },
        ring: {
          type: 'RING',
          name: 'RING_PAGE',
          title: 'TITLE_RING_PAGE',
          description: 'DESCRIPTION_RING_PAGE',
        },
        folder: {
          type: 'FOLDER',
          name: 'FOLDER_PAGE',
          title: 'TITLE_FOLDER_PAGE',
          description: 'DESCRIPTION_FOLDER_PAGE',
        },
      },
    },
  },
};
