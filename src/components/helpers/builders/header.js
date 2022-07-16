import { CONTACTS_PAGE, MAIN_PAGE, PRODUCTS_PAGE, RU, SERVICES_PAGE, SPECIAL_PAGE, TRACK_ORDER_PAGE, UK } from "./.types";

export const builder = {
    group_main: {
        main_page: {
            name: MAIN_PAGE,
            href: '/',
        },
        services_page: {
            name: SERVICES_PAGE,
            href: '/services',
        },
        products_page: {
            name: PRODUCTS_PAGE,
            href: '/products',
        },
        special_page: {
            name: SPECIAL_PAGE,
            href: '/special',
        },
        contacts_page: {
            name: CONTACTS_PAGE,
            href: '/contacts',
        },
    },
    group_track: {
        track_order_page: {
            name: TRACK_ORDER_PAGE,
            href: '/track',
        }
    },
    group_lang: {
        ru_lang_switch:{
            name: RU,
            href: '/ru',
        },
        uk_lang_switch:{
            name: UK,
            href: '/uk',
        },
    }
}