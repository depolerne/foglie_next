(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"0MJ7":function(n){n.exports=JSON.parse('{"address":"5 \u0425.\u0420\u0437\u0430\u0435\u0432\u0430 \u0443\u043b\u0438\u0446\u0430., \u0411\u0430\u043a\u0443, \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d","phone":"(994) 12 492 0286","email":"office@fogliedalloro.az","web":"www.fogliedalloro.az","readMore":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}')},"3jgQ":function(n,t,e){"use strict";e.d(t,"a",(function(){return g}));var r=e("h4VS"),i=e("qKvR"),a=e("Z0cm"),c=e.n(a),o=e("q1tI"),u=e.n(o).a.createElement;function s(){var n=Object(r.a)(["\n        width: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        min-height: ",";\n      "]);return s=function(){return n},n}function l(){var n=Object(r.a)(["\n          color: red;\n        "]);return l=function(){return n},n}function f(){var n=Object(r.a)(["\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        min-height: ",";\n      "]);return f=function(){return n},n}var p=function(n){var t=n.error,e=n.minHeight;return u("div",{css:Object(i.b)(f(),e)},u("p",{css:Object(i.b)(l())},t.message),u("button",{onClick:function(){return window&&window.location.reload()}},"Refresh page"))},d=function(n){var t=n.minHeight;return u("div",{css:Object(i.b)(s(),t)},u("p",null,"No data."))};function g(n){var t=n.branch,e=n.renderError,r=n.renderLoading,i=n.renderEmpty,a=n.renderData,o=n.minHeight,s=t.data,l=t.error;return l?e?e(l):u(p,{minHeight:o,error:l}):s?c()(s)&&0===s.length?i?i():u(d,{minHeight:o}):a(s):r?r():null}},"7OKi":function(n,t,e){"use strict";var r=e("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("tQgH"));t.default=function(){return i.default.lang}},"7j4c":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return v})),e.d(t,"default",(function(){return O}));var r=e("rePB"),i=e("MA9B"),a=e.n(i),c=e("q1tI"),o=e.n(c),u=e("Kl4o"),s=e("0MJ7"),l=e("C9/r"),f=e("wH02"),p=e("XcMC"),d=o.a.createElement;function g(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function b(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?g(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var m={common:s,footer:l,header:f,pricing:p},v=!0;function O(n){return d(a.a,{lang:"ru",namespaces:m,isStaticMode:!0},d(u.a,n))}O=Object.assign(O,b({},u.a)),u.a.getInitialProps&&(O.getInitialProps=function(n){return u.a.getInitialProps(b({},n,{lang:"ru"}))})},"C9/r":function(n){n.exports=JSON.parse('{"reserved":"Foglie d\u2019alloro. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."}')},Io2k:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ru/pricing",function(){return e("7j4c")}])},Kl4o:function(n,t,e){"use strict";var r=e("h4VS"),i=e("q1tI"),a=e.n(i),c=e("qKvR"),o=e("5D9J"),u=e("Qfrt"),s=e.n(u),l=e("BIX1"),f=e.n(l),p=e("VtrM"),d=e("3jgQ"),g=e("YIG/"),b=e("pJr+"),m=e("5M6V"),v=e("xcE8"),O=e("kz3Y"),h=e("YgvS"),j=e("kmSd"),x=a.a.createElement;function w(){var n=Object(r.a)(["\n  background-color: #fafafa;\n  padding: 24px 15px;\n"]);return w=function(){return n},n}var y={title:Object(c.b)({marginTop:32,textTransform:"uppercase"}),description:Object(c.b)({marginTop:16})},k=Object(c.b)(w()),S=function(n){var t=n.imageIndex,e=n.title,r="";return 0===t?r="/static/pricing-talk.svg":1===t?r="/static/pricing-document.svg":2===t&&(r="/static/pricing-checked-document.svg"),x("div",{css:k},x("img",{src:r,alt:"Price icon",width:"65",height:"81"}),x(j.a,{variant:"h6",css:y.title,text:e}))},I=a.a.createElement;function P(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 24px;\n\n  @media (max-width: ",") {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (max-width: ",") {\n    grid-template-columns: 1fr;\n  }\n"]);return P=function(){return n},n}var M=Object(c.b)(P(),h.a.breakpoints.md,h.a.breakpoints.xs),E=function(n){var t=n.pricings;return I("div",{css:M},t.map((function(n,t){return I(S,{imageIndex:t,key:n.id,title:n.title})})))},J=e("o0o1"),_=e.n(J),q=e("1hnV"),D=e("6acW"),H=e.n(D),K=e("eT+D"),N={getManyQuery:function(n){var t=H()(n);return"\n      {\n        pricings {\n          id\n          title".concat(t,"\n        }\n      }\n    ")},getMany:function(n,t){var e;return _.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.a.awrap(Object(q.request)(K.a,n));case 2:return e=r.sent,r.abrupt("return",e.pricings.map((function(n){return N.fromJson(n,t)})));case 4:case"end":return r.stop()}}),null,null,null,Promise)},fromJson:function(n,t){var e=H()(t);return{id:n.id.toString(),title:n["title".concat(e)]}}},T=a.a.createElement;function V(){var n=Object(r.a)(["\n              margin-top: 64px;\n            "]);return V=function(){return n},n}function Q(){var n=Object(r.a)(["\n              margin-bottom: 64px;\n            "]);return Q=function(){return n},n}function R(){var n=Object(r.a)(["\n  margin-bottom: 104px;\n"]);return R=function(){return n},n}function Y(){var n=Object(r.a)(["\n  margin-top: 26px;\n  margin-bottom: 64px;\n"]);return Y=function(){return n},n}var z=Object(o.a)(j.a)(Y()),C=Object(o.a)(b.a)(R());t.a=function(n){var t=n.initialData,e=f()(),r=e.t,i=e.lang,o=Object(p.a)(N.getManyQuery(i),(function(n){return N.getMany(n,i)}),{initialData:t,refreshInterval:0});return T(m.a,{description:"Our pricing",title:r("pricing:title")},T(a.a.Fragment,null,T(g.a,null,T("source",{srcSet:"/static/pricing-bg.webp",type:"image/webp"}),T("source",{srcSet:"/static/pricing-bg.png",type:"image/png"}),T("img",{src:"/static/pricing-bg.png",alt:"Background image"})),T(C,null,T(O.a,{subtitle:r("pricing:subtitle"),title:r("pricing:title"),css:Object(c.b)(Q())}),T(d.a,{branch:o,minHeight:"188px",renderData:function(n){return T(E,{pricings:n})}}),T(z,{variant:"body1",text:r("pricing:description"),css:Object(c.b)(V())}),T(v.a,{onClick:function(){return s.a.pushI18n("/contact")},title:r("pricing:text")}))))}},Qfrt:function(n,t,e){"use strict";var r=e("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("nOHt")),a=r(e("7OKi")),c=r(e("M8W+")),o=r(e("4tHA")),u=function(n){return function(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},u="object"==typeof t,s=u?t.url:t,l=u?t.as:e,f=u?t.options:r,p=f.lang||(0,a.default)();return i.default[n]((0,o.default)(s,p),(0,c.default)(l,s,p),f)}};i.default.pushI18n=u("push"),i.default.replaceI18n=u("replace");var s=i.default;t.default=s},XcMC:function(n){n.exports=JSON.parse('{"title":"\u0426\u0435\u043d\u044b","subtitle":"\u041a\u0430\u043a \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c","text":"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u0441\u0446\u0435\u043d\u043a\u0443","description":"\u041f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432 \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043b\u0435\u0436\u0438\u0442 \u0432 \u043e\u0441\u043d\u043e\u0432\u0435 \u043d\u0430\u0448\u0435\u0439 \u0431\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u0438. \u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043d\u0430\u0448\u0438 \u0446\u0435\u043d\u044b \u0432\u0430\u0440\u044c\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u0443\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0443. \u0415\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432\u0430\u043d\u044b \u0432 \u043d\u0430\u0448\u0438\u0445 \u0443\u0441\u043b\u0443\u0433\u0430\u0445, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438, \u0438 \u043c\u044b \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u043c \u0434\u043b\u044f \u0432\u0430\u0441 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435."}')},"YIG/":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("h4VS");function i(){var n=Object(r.a)(["\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 500px;\n\n  source,\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);return i=function(){return n},n}var a=e("5D9J").a.picture(i())},kz3Y:function(n,t,e){"use strict";e.d(t,"a",(function(){return j}));var r=e("Ff2n"),i=e("h4VS"),a=e("qKvR"),c=e("5D9J"),o=e("q1tI"),u=e.n(o),s=e("YgvS"),l=e("kmSd"),f=u.a.createElement;function p(){var n=Object(i.a)(["\n          text-transform: capitalize;\n        "]);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n            font-weight: 500;\n            text-transform: uppercase;\n            letter-spacing: 1.25px;\n            color: ",";\n          "]);return d=function(){return n},n}function g(){var n=Object(i.a)(["\n  width: 40px;\n  height: 2px;\n  background-color: ",";\n  margin-left: 16px;\n"]);return g=function(){return n},n}function b(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n"]);return b=function(){return n},n}function m(){var n=Object(i.a)(["\n  margin: 104px 0 32px 0;\n\n  @media (max-width: ",") {\n    margin-top: 64px;\n  }\n"]);return m=function(){return n},n}var v=c.a.div(m(),s.a.breakpoints.sm),O=c.a.div(b()),h=c.a.div(g(),s.a.colors.brown[200]),j=function(n){var t=n.subtitle,e=n.title,i=Object(r.a)(n,["subtitle","title"]);return f(v,i,f(O,null,f(l.a,{text:t,css:Object(a.b)(d(),s.a.colors.brown[200])}),f(h,null)),f(l.a,{font:"secondary",variant:"h3",text:e,css:Object(a.b)(p())}))}},wH02:function(n){n.exports=JSON.parse('{"about":"\u041e \u043d\u0430\u0441","about-company":"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f","about-team":"\u041a\u043e\u043c\u0430\u043d\u0434\u0430","portfolio":"\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e","blog":"\u0411\u043b\u043e\u0433","pricing":"\u0426\u0435\u043d\u044b","contact":"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f","language":"\u042f\u0437\u044b\u043a"}')},xcE8:function(n,t,e){"use strict";e.d(t,"a",(function(){return j}));var r=e("wx14"),i=e("Ff2n"),a=e("h4VS"),c=e("q1tI"),o=e.n(c),u=e("qKvR"),s=e("YgvS"),l=e("kmSd"),f=o.a.createElement;function p(){var n=Object(a.a)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  cursor: pointer;\n"]);return p=function(){return n},n}function d(){var n=Object(a.a)(["\n  width: 52%;\n  max-width: 586px;\n  height: 0;\n  border-top: 1px solid ",";\n  margin-right: 40px;\n  @media (max-width: ",") {\n    display: none;\n  }\n"]);return d=function(){return n},n}function g(){var n=Object(a.a)(["\n  color: ",";\n  margin-right: 40px;\n  font-style: italic;\n"]);return g=function(){return n},n}function b(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return n},n}var m=Object(u.b)(b()),v=Object(u.b)(g(),s.a.colors.burlyWood.high),O=Object(u.b)(d(),s.a.colors.burlyWood.high,s.a.breakpoints.sm),h=Object(u.b)(p()),j=function(n){var t=n.title,e=Object(i.a)(n,["title"]);return f("div",{css:m},f(l.a,{css:v,text:t,font:"secondary"}),f("div",{css:O}),f("button",Object(r.a)({css:h},e),f("img",{src:"/static/circle-arrow-brown.svg",alt:"Load more icon"})))}}},[["Io2k",1,2,0,3,4,5]]]);