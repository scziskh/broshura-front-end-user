"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{8649:function(n,e,r){var t=r(5893),i=r(7294),a=r(2125);function o(){var n,e,r=(n=["\n  display: inline;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return o=function(){return r},r}var c=i.forwardRef((function(n,e){return(0,t.jsx)(s,{ref:e,children:n.children})})),s=a.ZP.div.withConfig({componentId:"sc-405e5ef0-0"})(o());e.Z=c},6340:function(n,e,r){r.d(e,{Z:function(){return J}});var t=r(5893),i=r(9008),a=r.n(i),o=r(2125),c=r(7294),s=r(1664),l=r.n(s),d=r(5675),f=r.n(d),h=r(8649);function u(){var n,e,r=(n=["\n  & {\n    margin: 28px 0;\n    display: inline-flex;\n  }\n  @media screen and (max-width: 980px) {\n    & {\n      margin: 18px 0;\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return u=function(){return r},r}var p=o.ZP.div.withConfig({componentId:"sc-5486d7cc-0"})(u()),m=function(){var n=c.useRef(null);return(0,t.jsx)(p,{children:(0,t.jsx)(l(),{href:"/",children:(0,t.jsx)("a",{children:(0,t.jsx)(h.Z,{ref:n,children:(0,t.jsx)(f(),{lazyRoot:n,src:"/assets/logo.svg",width:207,height:36,alt:"LOGO"})})})})})},x={GROUP_MAIN:{MAIN_PAGE:{name:"MAIN_PAGE",href:"/"},SERVICES_PAGE:{name:"SERVICES_PAGE",href:"/services"},PRODUCTS_PAGE:{name:"PRODUCTS_PAGE",href:"/products"},SPECIAL_PAGE:{name:"SPECIAL_PAGE",href:"/special"},CONTACTS_PAGE:{name:"CONTACTS_PAGE",href:"/contacts"}},GROUP_TRACK:{TRACK_ORDER_PAGE:{name:"TRACK_ORDER_PAGE",href:"/track"}},GROUP_LANG:{RU_LANG_SWITCH:{name:"RU",href:"/ru"},UK_LANG_SWITCH:{name:"UK",href:"/uk"}}},E=r(1551),b=r.n(E);function P(){var n,e,r=(n=["\n  & {\n    text-align: center;\n    margin-left: ",";\n    color: var(--white);\n    display: inline-flex;\n    &::after {\n      margin-left: 5px;\n      content: '|';\n      display: ",";\n    }\n    &:nth-last-child(-n + 1):after {\n      display: none;\n    }\n    a {\n      display: inline-block;\n      color: var(--white);\n      padding: ",";\n      border: ",";\n      margin: ",";\n      &::after {\n        content: '';\n        display: ",";\n        height: 2px;\n        margin-top: 5px;\n        background: var(--yellowGrad);\n        width: 100%;\n        transform: translateY(5px);\n        opacity: 0;\n        transition: transform var(--transition);\n      }\n      &:hover {\n        background-color: ",";\n        color: ",";\n        transition-duration: var(--transition);\n        &:after {\n          transform: translateY(-5px);\n          opacity: 1;\n        }\n      }\n    }\n  }\n  @media screen and (max-width: 980px) {\n    & {\n      display: block;\n      a {\n        font-size: 1rem;\n        transition-duration: var(--transition);\n        margin: ",";\n        line-height: 250%;\n        &::after {\n          height: 1px;\n          margin: auto;\n          transform: translateY(5px);\n          opacity: 0;\n          transition-duration: var(--transition);\n          &:hover {\n            text-decoration: ",";\n          }\n          &:hover:after,\n          &:focus:after {\n            transform: translateY(0px);\n            opacity: 1;\n          }\n        }\n      }\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return P=function(){return r},r}var _=o.ZP.li.withConfig({componentId:"sc-c7ea78d-0"})(P(),(function(n){return n.$tempLang?"5px":"20px"}),(function(n){return n.$tempLang?"inline-flex":"none"}),(function(n){return n.$tempBordered?"10px":"0"}),(function(n){return n.$tempBordered?"1px solid var(--white)":"none"}),(function(n){return n.$tempBordered?"-10px 0 0":"0"}),(function(n){return n.$tempBordered?"none":"block"}),(function(n){return n.$tempBordered?"var(--white)":"none"}),(function(n){return n.$tempBordered?"var(--black)":"none"}),(function(n){return n.$tempLang?"0 0 24px":"6px 0"}),(function(n){return n.$tempBordered?"none":"underline"})),v=function(n){return(0,t.jsx)(_,{$tempBordered:n.bordered,$tempLang:n.lang,children:(0,t.jsx)(b(),{href:n.href,children:(0,t.jsx)("a",{children:n.name})})})};function j(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function A(){var n=j(["\n  & {\n    display: none;\n  }\n  &:checked ~ ul {\n    background-color: var(--black);\n    visibility: visible;\n    right: 0;\n  }\n  &:checked ~ label {\n    span {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      &::before {\n        top: 0;\n        -webkit-transform: rotate(0);\n        transform: rotate(0);\n      }\n      &::after {\n        top: 0;\n        -webkit-transform: rotate(90deg);\n        transform: rotate(90deg);\n      }\n    }\n  }\n"]);return A=function(){return n},n}function g(){var n=j(["\n  border: none;\n  @media screen and (max-width: 980px) {\n    & {\n      background: var(--yellowGrad);\n      display: flex;\n      align-items: center;\n      position: absolute;\n      top: 18px;\n      right: 18px;\n      width: 40px;\n      height: 40px;\n      cursor: pointer;\n      z-index: 100;\n      border-radius: 10px;\n      span,\n      span::before,\n      span::after {\n        display: block;\n        position: absolute;\n        left: 7.5px;\n        width: 25px;\n        height: 2px;\n        background-color: var(--black);\n        transition-duration: var(--transition);\n      }\n      span::before {\n        left: 0;\n        content: '';\n        top: -8px;\n      }\n      span::after {\n        left: 0;\n        content: '';\n        top: 8px;\n      }\n    }\n  }\n"]);return g=function(){return n},n}var O=o.ZP.input.withConfig({componentId:"sc-565b2b73-0"})(A()),R=o.ZP.label.withConfig({componentId:"sc-565b2b73-1"})(g()),C=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{id:"navToggle",type:"checkbox",defaultChecked:!1}),(0,t.jsx)(R,{onClick:function(){var n=document.getElementById("navToggle");n.checked?n.checked=!1:n.checked=!0},children:(0,t.jsx)("span",{})})]})};function D(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(){var n=D(["\n  & {\n    position: absolute;\n    right: 0;\n    top: 36px;\n    display: inline-flex;\n    ul {\n      display: inline-flex;\n    }\n  }\n  @media screen and (max-width: 980px) {\n    & {\n      z-index: 120;\n      position: fixed;\n      top: 0;\n      left: 0;\n      ul {\n        display: block;\n        position: fixed;\n        visibility: hidden;\n        top: 0;\n        right: -100%;\n        width: 80%;\n        max-width: 360px;\n        height: 100%;\n        padding: 64px 0;\n        text-align: center;\n        background-color: var(--black);\n        transition-duration: var(--transition);\n        z-index: 99;\n        box-shadow: var(--blackShadow);\n      }\n    }\n  }\n"]);return S=function(){return n},n}function G(){var n=D(["\n  & {\n    display: inline-flex;\n    margin-left: 15px;\n  }\n  @media screen and (max-width: 980px) {\n    & {\n      position: absolute;\n      bottom: calc(100% - 100vh);\n      right: 50%;\n      transform: translateX(50%);\n      margin-left: 0;\n    }\n  }\n"]);return G=function(){return n},n}var w=o.ZP.nav.withConfig({componentId:"sc-34d521f-0"})(S()),I=o.ZP.div.withConfig({componentId:"sc-34d521f-1"})(G()),k=function(){var n=x.GROUP_MAIN,e=x.GROUP_TRACK,r=x.GROUP_LANG,i=Object.keys(n).map((function(e){return(0,t.jsx)(v,{name:n[e].name,href:n[e].href},e)}));return(0,t.jsxs)(w,{children:[(0,t.jsx)(C,{}),(0,t.jsxs)("ul",{className:"noLS",children:[i,(0,t.jsx)(v,{name:e.TRACK_ORDER_PAGE.name,href:e.TRACK_ORDER_PAGE.href,bordered:!0}),(0,t.jsxs)(I,{children:[(0,t.jsx)(v,{name:r.RU_LANG_SWITCH.name,href:r.RU_LANG_SWITCH.href,lang:!0}),(0,t.jsx)(v,{name:r.UK_LANG_SWITCH.name,href:r.UK_LANG_SWITCH.href,lang:!0})]})]})]})};function B(){var n,e,r=(n=["\n  & {\n    display: flex;\n    width: 100%;\n    background-color: var(--black);\n    display: inline-block;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return B=function(){return r},r}var T=o.ZP.header.withConfig({componentId:"sc-7261e6be-0"})(B()),N=function(){return(0,t.jsx)(T,{children:(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)(m,{}),(0,t.jsx)(k,{})]})})},U={SERVICES_GROUP:[{name:"SERVICES_PAGE",href:"/services"},{name:"SERVICE_STAPLES_PAGE",href:"/services/staples"},{name:"SERVICE_METAL_SPRING_PAGE",href:"/services/metal-spring"},{name:"SERVICES_PLASTIC_SPRING_PAGE",href:"/services/plastic-spring"},{name:"SERVICES_THERMOBINDER_PAGE",href:"/services/thermobinder"},{name:"SERVICES_PAGE",href:"/services/plastic-spring"},{name:"SERVICES_CANAL_PAGE",href:"/services/canal"},{name:"SERVICES_RING_PAGE",href:"/services/ring"},{name:"SERVICES_FOLDER_PAGE",href:"/services/folder"}],PRODUCTS_GROUP:[{name:"PRODUCTS_PAGE",href:"/products"},{name:"PRODUCT_NOTEBOOK_PAGE",href:"/products/notebooks"},{name:"PRODUCT_CATALOGS_PAGE",href:"/products/catalogs"},{name:"PRODUCT_SYNOPSIS_PAGE",href:"/products/synopsis"},{name:"PRODUCT_BOOKS_PAGE",href:"/products/books"},{name:"PRODUCT_CALENDARS_PAGE",href:"/products/calendars"},{name:"PRODUCT_THESIS_PAGE",href:"/products/thesis"},{name:"PRODUCT_PRESENTATIONS_PAGE",href:"/products/presentations"},{name:"PRODUCT_DRAWS_PAGE",href:"/products/draws"}],INFO_GROUP:[{name:"ABOUT_US",href:"/about"},{name:"CONTACTS_PAGE",href:"/contacts"},{name:"SPECIAL_PAGE",href:"/special"},{name:"FAQ_PAGE",href:"/faq"},{name:"LAYOUT_REQUIREMENTS_PAGE",href:"/layout-requirements"},{name:"PAYMENT_AND_DELIVERY_PAGE",href:"/payment-and-delivery"},{name:"TERMS_PAGE",href:"/terms"},{name:"POLICY_PAGE",href:"/policy"},{name:"DOCUMENTS_PAGE",href:"/documents"}]};function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function L(){var n=y([""]);return L=function(){return n},n}function z(){var n=y(["\n  & {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 16px;\n  }\n"]);return z=function(){return n},n}var Z=o.ZP.div.withConfig({componentId:"sc-2bf04603-0"})(L()),K=o.ZP.li.withConfig({componentId:"sc-2bf04603-1"})(z()),M=function(){return(0,t.jsx)(Z,{className:"col-4",children:(0,t.jsxs)("ul",{className:"noLS",children:[(0,t.jsx)(m,{}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"https://www.google.com/maps/place/%D0%98%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B1%D1%80%D0%BE%D1%88%D1%8E%D1%80+%D0%B8+%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C+%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%D0%B2+%D0%B2+%D0%9A%D0%B8%D0%B5%D0%B2%D0%B5/@50.4522412,30.615739,15z/data=!4m2!3m1!1s0x0:0xdeae5cf83341aa01?sa=X&ved=2ahUKEwirkZvlkoT4AhWTRPEDHdCFBrEQ_BJ6BAg5EAM",target:"_blank",rel:"noreferrer",children:"ADDRESS_FULL"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"tel:+380631234567",children:"PHONE_NUMBER"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"mailto:zakaz@broshura.kiev.ua",children:"EMAIL"})}),(0,t.jsx)("li",{children:(0,t.jsx)("b",{children:"HEADER"})}),(0,t.jsx)("li",{children:"WORKING_DAYS"}),(0,t.jsx)("li",{children:"HOLIDAYS"}),(0,t.jsxs)(K,{children:[(0,t.jsx)("a",{href:"facebook.com",target:"_blank",children:(0,t.jsx)(h.Z,{children:(0,t.jsx)(f(),{src:"/assets/facebook.webp",width:30,height:30,alt:"FACEBOOK"})})}),(0,t.jsx)("a",{href:"instagram.com",target:"_blank",children:(0,t.jsx)(h.Z,{children:(0,t.jsx)(f(),{src:"/assets/instagram.webp",width:32,height:32,alt:"INSTAGRAM"})})})]})]})})},V=function(n){return(0,t.jsx)("li",{children:(0,t.jsx)(l(),{href:n.href,children:(0,t.jsx)("a",{children:n.name})})})};function H(){var n,e,r=(n=["\n  li:first-child {\n    font-weight: bold;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return H=function(){return r},r}var $=o.ZP.div.withConfig({componentId:"sc-93887ed5-0"})(H()),Y=function(n){var e=n.group.map((function(n,e){return(0,t.jsx)(V,{href:n.href,name:n.name},e)}));return(0,t.jsx)($,{className:"col-4",children:(0,t.jsx)("ul",{className:"noLS",children:e})})};function F(){var n,e,r=(n=["\n  & {\n    flex-shrink: 0;\n    padding: 48px 0;\n    width: 100%;\n    background-color: var(--black);\n    color: var(--white);\n    text-align: center;\n    li {\n      margin: 10px;\n      a {\n        color: var(--white);\n        &:hover {\n          text-decoration: underline;\n        }\n      }\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return F=function(){return r},r}var W=o.ZP.footer.withConfig({componentId:"sc-3b9cd267-0"})(F()),Q=function(){var n=Object.keys(U).map((function(n,e){return(0,t.jsx)(Y,{group:U[n]},e)}));return(0,t.jsx)(W,{children:(0,t.jsx)("div",{className:"wrapper",children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(M,{}),n]})})})};function q(){var n,e,r=(n=["\n  & {\n    flex: 1;\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return q=function(){return r},r}var X=o.ZP.div.withConfig({componentId:"sc-cd004264-0"})(q()),J=function(n){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"".concat(n.title," | BROSHURA KIEV UA")})}),(0,t.jsx)(N,{}),(0,t.jsx)(X,{children:n.children}),(0,t.jsx)(Q,{})]})}}}]);