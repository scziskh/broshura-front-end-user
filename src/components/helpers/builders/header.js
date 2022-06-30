import { CONTACTS_PAGE, MAIN_PAGE, PRODUCTS_PAGE, RU, SERVICES_PAGE, SPECIAL_PAGE, TRACK_ORDER_PAGE, UK } from "./.types";

export const builder = {
    GROUP_MAIN: {
        MAIN_PAGE: {
            name: MAIN_PAGE,
            href: '/',
        },
        SERVICES_PAGE: {
            name: SERVICES_PAGE,
            href: '/services',
        },
        PRODUCTS_PAGE: {
            name: PRODUCTS_PAGE,
            href: '/products',
        },
        SPECIAL_PAGE: {
            name: SPECIAL_PAGE,
            href: '/special',
        },
        CONTACTS_PAGE: {
            name: CONTACTS_PAGE,
            href: '/contacts',
        },
    },
    GROUP_TRACK: {
        TRACK_ORDER_PAGE: {
            name: TRACK_ORDER_PAGE,
            href: '/track',
        }
    },
    GROUP_LANG: {
        RU_LANG_SWITCH:{
            name: RU,
            href: '/ru',
        },
        UK_LANG_SWITCH:{
            name: UK,
            href: '/uk',
        },
    }
}