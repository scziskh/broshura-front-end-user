import { CONTACTS_PAGE, MAIN_PAGE, PRODUCTS_PAGE, RU, SERVICES_PAGE, SPECIAL_PAGE, TRACK_ORDER_PAGE, UK } from "./types";

export const builder = {
    GROUP_MAIN: {
        MAIN_PAGE: {
            name: MAIN_PAGE,
            href: '/',
        },
        SERVICES_PAGE: {
            name: SERVICES_PAGE,
            href: '/',
        },
        PRODUCTS_PAGE: {
            name: PRODUCTS_PAGE,
            href: '/',
        },
        SPECIAL_PAGE: {
            name: SPECIAL_PAGE,
            href: '/',
        },
        CONTACTS_PAGE: {
            name: CONTACTS_PAGE,
            href: '/',
        },
    },
    GROUP_TRACK: {
        TRACK_ORDER_PAGE: {
            name: TRACK_ORDER_PAGE,
            href: '/',
        }
    },
    GROUP_LANG: {
        RU_LANG_SWITCH:{
            name: RU,
            href: '/',
        },
        UK_LANG_SWITCH:{
            name: UK,
            href: '/',
        },
    }
}