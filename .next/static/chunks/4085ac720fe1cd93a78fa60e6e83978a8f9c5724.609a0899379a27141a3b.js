(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/a9y":function(n,t,e){"use strict";var r=e("lwsE"),a=e("W8MJ"),i=e("a1gu"),o=e("Nsbk"),c=e("7W2i");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}var l=e("TqRt");t.__esModule=!0,t.default=void 0;var s=l(e("q1tI")),f=l(e("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function g(n){var t=n.res,e=n.err;return{statusCode:t&&t.statusCode?t.statusCode:e?e.statusCode:404}}var d=function(n){c(l,n);var t,e=(t=l,function(){var n,e=o(t);if(u()){var r=o(this).constructor;n=Reflect.construct(e,arguments,r)}else n=e.apply(this,arguments);return i(this,n)});function l(){return r(this,l),e.apply(this,arguments)}return a(l,[{key:"render",value:function(){var n=this.props.statusCode,t=this.props.title||p[n]||"An unexpected error has occurred";return s.default.createElement("div",{style:h.error},s.default.createElement(f.default,null,s.default.createElement("title",null,n,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),n?s.default.createElement("h1",{style:h.h1},n):null,s.default.createElement("div",{style:h.desc},s.default.createElement("h2",{style:h.h2},t,"."))))}}]),l}(s.default.Component);t.default=d,d.displayName="ErrorPage",d.getInitialProps=g,d.origGetInitialProps=g;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"0FCp":function(n,t,e){"use strict";e.d(t,"b",(function(){return v})),e.d(t,"a",(function(){return x}));var r=e("h4VS"),a=e("5D9J"),i=e("YgvS");function o(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 1.5px;\n  color: ',";\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.4px;\n  color: ',";\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.25px;\n  color: ',";\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 32px;\n  letter-spacing: 0.5px;\n  color: ',";\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.1px;\n']);return s=function(){return n},n}function f(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n']);return f=function(){return n},n}function p(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  color: ',";\n"]);return p=function(){return n},n}function g(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.18px;\n  color: ',";\n"]);return g=function(){return n},n}function d(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 34px;\n  line-height: 56px;\n  color: ',";\n"]);return d=function(){return n},n}function h(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  line-height: 56px;\n  color: ',";\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 60px;\n  line-height: 72px;\n  letter-spacing: -0.5px;\n  color: ',";\n"]);return m=function(){return n},n}function b(){var n=Object(r.a)(['\n  font-family: "Sarabun", sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 96px;\n  line-height: 112px;\n  letter-spacing: -1.5px;\n  color: ',";\n"]);return b=function(){return n},n}a.a.p(b(),i.a.colors.darkBlue.high),a.a.p(m(),i.a.colors.darkBlue.high),a.a.p(h(),i.a.colors.darkBlue.high),a.a.p(d(),i.a.colors.darkBlue.high);var v=a.a.p(g(),i.a.colors.darkBlue.high),x=(a.a.p(p(),i.a.colors.darkBlue.high),a.a.p(f()),a.a.p(s()),a.a.p(l(),i.a.colors.darkBlue.high));a.a.p(u(),i.a.colors.darkBlue.high),a.a.p(c(),i.a.colors.darkBlue.high),a.a.p(o(),i.a.colors.darkBlue.high)},"5mGI":function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a}));function r(n){return{id:n.id.toString(),url:n.url,width:n.width,height:n.height}}var a="\n  id\n  url\n  width\n  height\n"},"5yZa":function(n,t,e){"use strict";var r=e("h4VS"),a=e("q1tI"),i=e.n(a),o=e("qKvR"),c=e("YgvS"),u=e("QAuT"),l=e.n(u),s=e("BIX1"),f=e.n(s),p=e("0FCp"),g=e("anoD"),d=e("wXTv"),h=i.a.createElement;function m(){var n=Object(r.a)(["\n  margin-bottom: 40px;\n  cursor: auto;\n"]);return m=function(){return n},n}function b(){var n=Object(r.a)(["\n  margin: 24px 0;\n  cursor: pointer;\n"]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  overflow: hidden;\n  line-height: 0;\n  height: 350px;\n  background-color: black;\n\n  img {\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n  }\n"]);return v=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 64px;\n\n  @media (max-width: ",") {\n    padding-top: 48px;\n  }\n\n  img {\n    transition: 0.3s transform ease;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n"]);return x=function(){return n},n}var y=Object(o.b)(x(),c.a.breakpoints.sm),j=Object(o.b)(v()),O=Object(o.b)(b()),w=Object(o.b)(m()),C=function(n){var t=n.id,e=n.title,r=n.description,a=n.image,i=f()().lang;return h("div",{css:y},h(l.a,{href:"/post/[id]",as:"/post/".concat(t),lang:i,passHref:!0},h("div",{css:j},h(g.a,{"data-src":a,alt:e}))),h(l.a,{href:"/post/[id]",as:"/post/".concat(t),lang:i,passHref:!0},h(p.b,{css:O},e)),h(p.a,{css:w},r),h(d.a,{link:"/post/[id]",as:"/post/".concat(t),lang:i}))},k=i.a.createElement;function S(){var n=Object(r.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, minmax(240px, 360px));\n  justify-content: center;\n  grid-column-gap: 24px;\n\n  @media (max-width: ",") {\n    grid-template-columns: repeat(2, minmax(240px, auto));\n  }\n\n  @media (max-width: 640px) {\n    grid-template-columns: auto;\n  }\n"]);return S=function(){return n},n}var B=Object(o.b)(S(),c.a.breakpoints.lg);t.a=function(n){return k("div",{css:B},n.posts.map((function(n){var t;return k(C,{key:n.id,id:n.id,image:null===(t=n.image)||void 0===t?void 0:t.url,title:n.title,description:n.description})})))}},KDml:function(n,t,e){"use strict";e.d(t,"b",(function(){return g})),e.d(t,"a",(function(){return d}));var r=e("o0o1"),a=e.n(r),i=e("rePB"),o=e("1hnV"),c=e("6acW"),u=e.n(c),l=e("5mGI"),s=e("eT+D");function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){Object(i.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var g=function(n,t){var e=u()(t);return{id:n.id.toString(),title:n["title".concat(e)],description:n["description".concat(e)],image:Object(l.a)(n.image)}},d={getManyQuery:function(n){var t=n.lang,e=n.skip,r=n.take,a=u()(t);return"\n        {\n            posts (skip: ".concat(e,", take: ").concat(r,") {\n                data {\n                    id\n                    title").concat(a,"\n                    description").concat(a,"\n                    image {\n                        ").concat(l.b,"\n                    }\n                }\n                count\n                total\n                page\n                pageCount\n            }\n        }\n    ")},getMany:function(n,t){var e;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(Object(o.request)(s.a,n));case 2:return e=r.sent,r.abrupt("return",p({},e.posts,{data:e.posts.data.map((function(n){return g(n,t)}))}));case 4:case"end":return r.stop()}}),null,null,null,Promise)},getInstagramImagesQuery:function(){return"\n        {\n            instagramImages {\n                id\n                media_type\n                media_url\n            }\n        }\n    "},getInstagramImages:function(n){return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.awrap(Object(o.request)(s.a,n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),null,null,null,Promise)}}},XVqR:function(n,t,e){"use strict";e.d(t,"a",(function(){return d})),e.d(t,"b",(function(){return h}));var r=e("h4VS"),a=e("5D9J"),i=e("YgvS");function o(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: italic;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 22px;\n  color: ',";\n"]);return o=function(){return n},n}function c(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  color: ',";\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.15px;\n  color: ',";\n"]);return u=function(){return n},n}function l(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 32px;\n  letter-spacing: 0.18px;\n  color: ',";\n"]);return l=function(){return n},n}function s(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 34px;\n  line-height: 56px;\n  color: ',";\n"]);return s=function(){return n},n}function f(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 48px;\n  line-height: 64px;\n  color: ',";\n"]);return f=function(){return n},n}function p(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 72px;\n  letter-spacing: -0.5px;\n  color: ',";\n"]);return p=function(){return n},n}function g(){var n=Object(r.a)(['\n  font-family: "Libre Baskerville", serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 72px;\n  line-height: 89px;\n  letter-spacing: -1.5px;\n  text-transform: uppercase;\n  color: ',";\n"]);return g=function(){return n},n}a.a.span(g(),i.a.colors.darkBlue.high),a.a.span(p(),i.a.colors.darkBlue.high);var d=a.a.span(f(),i.a.colors.darkBlue.high),h=(a.a.span(s(),i.a.colors.darkBlue.high),a.a.span(l(),i.a.colors.darkBlue.high),a.a.span(u(),i.a.colors.darkBlue.high),a.a.span(c(),i.a.colors.darkBlue.high),a.a.span(o(),i.a.colors.darkBlue.high))},"YIG/":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("h4VS");function a(){var n=Object(r.a)(["\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 500px;\n\n  source,\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]);return a=function(){return n},n}var i=e("5D9J").a.picture(a())},anoD:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("wx14"),a=e("Ff2n"),i=e("q1tI"),o=e.n(i).a.createElement,c=function(n){var t=n.alt,e=Object(a.a)(n,["alt"]);return o("img",Object(r.a)({className:"lazyload",alt:null!==t&&void 0!==t?t:"Image"},e,{width:50,height:50}))}},eomm:function(n,t,e){n.exports=e("/a9y")},kz3Y:function(n,t,e){"use strict";e.d(t,"a",(function(){return y}));var r=e("Ff2n"),a=e("h4VS"),i=e("qKvR"),o=e("5D9J"),c=e("q1tI"),u=e.n(c),l=e("YgvS"),s=e("kmSd"),f=u.a.createElement;function p(){var n=Object(a.a)(["\n          text-transform: capitalize;\n        "]);return p=function(){return n},n}function g(){var n=Object(a.a)(["\n            font-weight: 500;\n            text-transform: uppercase;\n            letter-spacing: 1.25px;\n            color: ",";\n          "]);return g=function(){return n},n}function d(){var n=Object(a.a)(["\n  width: 40px;\n  height: 2px;\n  background-color: ",";\n  margin-left: 16px;\n"]);return d=function(){return n},n}function h(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n"]);return h=function(){return n},n}function m(){var n=Object(a.a)(["\n  margin: 104px 0 32px 0;\n\n  @media (max-width: ",") {\n    margin-top: 64px;\n  }\n"]);return m=function(){return n},n}var b=o.a.div(m(),l.a.breakpoints.sm),v=o.a.div(h()),x=o.a.div(d(),l.a.colors.brown[200]),y=function(n){var t=n.subtitle,e=n.title,a=Object(r.a)(n,["subtitle","title"]);return f(b,a,f(v,null,f(s.a,{text:t,css:Object(i.b)(g(),l.a.colors.brown[200])}),f(x,null)),f(s.a,{font:"secondary",variant:"h3",text:e,css:Object(i.b)(p())}))}},osAo:function(n,t,e){"use strict";var r=e("h4VS"),a=e("q1tI"),i=e.n(a),o=e("qKvR"),c=e("5D9J"),u=e("BIX1"),l=e.n(u),s=e("eomm"),f=e.n(s),p=e("VtrM"),g=e("YIG/"),d=e("5yZa"),h=e("XVqR"),m=e("KDml"),b=e("YgvS"),v=e("anoD"),x=i.a.createElement;function y(){var n=Object(r.a)(["\n  max-width: 550px;\n  min-width: 380px;\n  width: 50%;\n  height: 128px;\n  background-color: ",";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return y=function(){return n},n}function j(){var n=Object(r.a)(["\n  width: ",";\n  height: ",";\n"]);return j=function(){return n},n}function O(){var n=Object(r.a)(["\n  width: 100%;\n  display: grid;\n  position: relative;\n  grid-template-columns: repeat(",", minmax(auto, 360px));\n  grid-template-rows: repeat(2, 1fr);\n  grid-gap: 1px;\n"]);return O=function(){return n},n}var w={display:"block",height:"100%",width:"100%"},C=c.a.div(j(),(function(n){return n.size-1+"px"}),(function(n){return n.size-1+"px"})),k=Object(o.b)(y(),b.a.colors.white.high),S=function(){return x("div",{css:k},x(h.a,null,"#fogliedalloro"))},B=function(n){return x(v.a,{style:w,"data-src":n.img,alt:"Instagram image"})},I=function(n){var t,e=n.images,r=Object(a.useRef)(null),i=Object(a.useState)(0),c=i[0],u=i[1],l=function(n,t){var e=n.length/2,r=Math.floor(t/240);return r<6&&(r=6),r>e&&(r=e),r}(e,c),s=Math.floor(c/l);return Object(a.useEffect)((function(){(null===r||void 0===r?void 0:r.current)&&u(r.current.offsetWidth)}),[]),x("a",{ref:r,css:(t=l,Object(o.b)(O(),t)),href:"https://www.instagram.com/fogliedalloro/",target:"_blank",rel:"noopener noreferrer"},x(S,null),function(n,t){for(var e=[],r=0;r<2*t;r++)n[r]&&e.push({id:n[r].id,src:n[r].media_url});return e}(e,l).map((function(n){return x(C,{key:n.id,size:s},x(B,{img:n.src}))})))},z=i.a.createElement;function E(){var n=Object(r.a)(["\n  display: block;\n  max-width: 1148px;\n  margin: 0 auto 64px;\n\n  @media (max-width: ",") {\n    margin-left: 16px;\n  }\n"]);return E=function(){return n},n}function R(){var n=Object(r.a)(["\n  height: 0;\n  width: 26%;\n  border-top: 1px solid ",";\n  margin-right: 30px;\n"]);return R=function(){return n},n}function M(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n"]);return M=function(){return n},n}var D=Object(o.b)(M()),q=Object(o.b)(R(),b.a.colors.burlyWood.high),P=Object(o.b)(E(),b.a.breakpoints.xl),V=function(){return z("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},z("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.00002 0C5.82733 0 5.5549 0.00920926 4.70161 0.0481422C3.8501 0.0869798 3.26855 0.222229 2.7597 0.420006C2.23363 0.624419 1.78748 0.897966 1.34271 1.34271C0.897966 1.78748 0.624419 2.23363 0.420006 2.7597C0.222229 3.26855 0.0869798 3.8501 0.0481422 4.70161C0.00920926 5.5549 0 5.82733 0 8.00002C0 10.1727 0.00920926 10.4451 0.0481422 11.2984C0.0869798 12.1499 0.222229 12.7314 0.420006 13.2403C0.624419 13.7664 0.897966 14.2125 1.34271 14.6573C1.78748 15.102 2.23363 15.3756 2.7597 15.58C3.26855 15.7778 3.8501 15.913 4.70161 15.9519C5.5549 15.9908 5.82733 16 8.00002 16C10.1727 16 10.4451 15.9908 11.2984 15.9519C12.1499 15.913 12.7314 15.7778 13.2403 15.58C13.7664 15.3756 14.2125 15.102 14.6573 14.6573C15.102 14.2125 15.3756 13.7664 15.58 13.2403C15.7778 12.7314 15.913 12.1499 15.9519 11.2984C15.9908 10.4451 16 10.1727 16 8.00002C16 5.82733 15.9908 5.5549 15.9519 4.70161C15.913 3.8501 15.7778 3.26855 15.58 2.7597C15.3756 2.23363 15.102 1.78748 14.6573 1.34271C14.2125 0.897966 13.7664 0.624419 13.2403 0.420006C12.7314 0.222229 12.1499 0.0869798 11.2984 0.0481422C10.4451 0.00920926 10.1727 0 8.00002 0ZM7.99998 1.44154C10.1361 1.44154 10.3891 1.4497 11.2327 1.48819C12.0126 1.52376 12.4362 1.65408 12.7181 1.76364C13.0916 1.90877 13.3581 2.08212 13.638 2.36208C13.9179 2.64201 14.0913 2.90851 14.2364 3.28193C14.346 3.56383 14.4763 3.98742 14.5119 4.76741C14.5504 5.61098 14.5585 5.86401 14.5585 8.00012C14.5585 10.1362 14.5504 10.3892 14.5119 11.2328C14.4763 12.0128 14.346 12.4364 14.2364 12.7183C14.0913 13.0917 13.9179 13.3582 13.638 13.6381C13.3581 13.9181 13.0916 14.0914 12.7181 14.2366C12.4362 14.3461 12.0126 14.4764 11.2327 14.512C10.3892 14.5505 10.1362 14.5587 7.99998 14.5587C5.86372 14.5587 5.61075 14.5505 4.76728 14.512C3.98729 14.4764 3.56369 14.3461 3.2818 14.2366C2.90838 14.0914 2.64188 13.9181 2.36195 13.6381C2.08202 13.3582 1.90863 13.0917 1.76351 12.7183C1.65395 12.4364 1.52362 12.0128 1.48806 11.2328C1.44957 10.3892 1.44141 10.1362 1.44141 8.00012C1.44141 5.86401 1.44957 5.61098 1.48806 4.76741C1.52362 3.98742 1.65395 3.56383 1.76351 3.28193C1.90863 2.90851 2.08199 2.64201 2.36195 2.36208C2.64188 2.08212 2.90838 1.90877 3.2818 1.76364C3.56369 1.65408 3.98729 1.52376 4.76728 1.48819C5.61085 1.4497 5.86388 1.44154 7.99998 1.44154ZM3.89258 7.99994C3.89258 5.73107 5.73182 3.89182 8.0007 3.89182C10.2695 3.89182 12.1088 5.73107 12.1088 7.99994C12.1088 10.2688 10.2695 12.108 8.0007 12.108C5.73182 12.108 3.89258 10.2688 3.89258 7.99994ZM7.99871 10.6667C6.52593 10.6667 5.33203 9.47279 5.33203 8.00004C5.33203 6.52726 6.52593 5.33336 7.99871 5.33336C9.47146 5.33336 10.6654 6.52726 10.6654 8.00004C10.6654 9.47279 9.47146 10.6667 7.99871 10.6667ZM12.2705 4.68961C12.8007 4.68961 13.2305 4.25982 13.2305 3.72963C13.2305 3.19943 12.8007 2.76961 12.2705 2.76961C11.7404 2.76961 11.3105 3.19943 11.3105 3.72963C11.3105 4.25982 11.7404 4.68961 12.2705 4.68961Z",fill:b.a.colors.burlyWood.high}))},L=function(){var n=l()().t,t=Object(p.a)(m.a.getInstagramImagesQuery(),(function(n){return m.a.getInstagramImages(n)})),e=t.data;return t.error||!e?null:z(i.a.Fragment,null,z("div",{css:D},z("div",{css:q}),z(V,null)),z(h.a,{css:P},n("blog:instagram")),z(I,{images:e.instagramImages}))},W=e("pJr+"),A=e("5M6V"),Y=e("xcE8"),J=e("kz3Y"),F=i.a.createElement;function K(){var n=Object(r.a)(["\n  @media (max-width: ",") {\n    display: none;\n  }\n"]);return K=function(){return n},n}function T(){var n=Object(r.a)(["\n  margin-bottom: 64px;\n  min-height: 500px;\n"]);return T=function(){return n},n}function _(){var n=Object(r.a)(["\n  margin-bottom: 104px;\n  @media (max-width: ",") {\n    margin-bottom: 64px;\n  }\n"]);return _=function(){return n},n}function H(){var n=Object(r.a)(["\n  margin-bottom: 0;\n"]);return H=function(){return n},n}function X(){var n=Object(r.a)(["\n  width: 100%;\n  position: relative;\n"]);return X=function(){return n},n}var Z=Object(o.b)(X()),G=Object(c.a)(J.a)(H()),Q=Object(o.b)(_(),b.a.breakpoints.md),N=Object(o.b)(T()),U=Object(o.b)(K(),b.a.breakpoints.md);t.a=function(){var n=l()(),t=n.t,e=n.lang,r=Object(p.b)("posts",(function(n){var t=n.offset,r=n.withSWR,a=m.a.getManyQuery({lang:e,skip:null!==t&&void 0!==t?t:0,take:6}),i=r(Object(p.a)(a,(function(){return m.a.getMany(a,e)}))),o=i.data,c=i.error;return c?F(f.a,{title:null===c||void 0===c?void 0:c.message,statusCode:404}):o?F(d.a,{posts:o.data}):null}),(function(n,t){return n.data&&n.data.total-6*n.data.page<=0?null:6*(t+1)})),a=r.pages,i=r.isLoadingMore,o=r.isReachingEnd,c=r.loadMore;return F(A.a,{description:"Blog page where are news and items",title:t("blog:title")},F("div",{css:Z},F(g.a,null,F("source",{srcSet:"/static/blog-bg.webp",type:"image/webp"}),F("source",{srcSet:"/static/blog-bg.png",type:"image/png"}),F("img",{src:"/static/blog-bg.png",alt:"Background image"})),F(W.a,{css:Q},F(G,{subtitle:t("blog:subtitle"),title:t("blog:title")}),F("div",{css:N},a),!o&&F(Y.a,{onClick:c,disabled:i,title:t("blog:more")})),F("div",{css:U},F(L,null))))}},wXTv:function(n,t,e){"use strict";var r=e("h4VS"),a=e("q1tI"),i=e.n(a),o=e("qKvR"),c=e("5D9J"),u=e("QAuT"),l=e.n(u),s=e("BIX1"),f=e.n(s),p=e("YgvS"),g=i.a.createElement;function d(){var n=Object(r.a)(["\n  text-decoration: none;\n"]);return d=function(){return n},n}function h(){var n=Object(r.a)(["\n  margin-right: 16px;\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  color: ",";\n  cursor: pointer;\n  text-decoration: none;\n"]);return m=function(){return n},n}var b=Object(o.b)(m(),p.a.colors.burlyWood.high),v=Object(o.b)(h()),x=c.a.a(d());t.a=function(n){var t=n.link,e=n.as,r=n.text,a=n.lang,i=f()().t;return g(l.a,{href:t,as:e,lang:a,passHref:!0},g(x,null,g("div",{css:b},g("span",{css:v},r||i("common:readMore")),g("img",{src:"/static/arrow.svg",alt:"Arrow icon"}))))}},xcE8:function(n,t,e){"use strict";e.d(t,"a",(function(){return y}));var r=e("wx14"),a=e("Ff2n"),i=e("h4VS"),o=e("q1tI"),c=e.n(o),u=e("qKvR"),l=e("YgvS"),s=e("kmSd"),f=c.a.createElement;function p(){var n=Object(i.a)(["\n  background-color: transparent;\n  border: none;\n  display: flex;\n  cursor: pointer;\n"]);return p=function(){return n},n}function g(){var n=Object(i.a)(["\n  width: 52%;\n  max-width: 586px;\n  height: 0;\n  border-top: 1px solid ",";\n  margin-right: 40px;\n  @media (max-width: ",") {\n    display: none;\n  }\n"]);return g=function(){return n},n}function d(){var n=Object(i.a)(["\n  color: ",";\n  margin-right: 40px;\n  font-style: italic;\n"]);return d=function(){return n},n}function h(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return h=function(){return n},n}var m=Object(u.b)(h()),b=Object(u.b)(d(),l.a.colors.burlyWood.high),v=Object(u.b)(g(),l.a.colors.burlyWood.high,l.a.breakpoints.sm),x=Object(u.b)(p()),y=function(n){var t=n.title,e=Object(a.a)(n,["title"]);return f("div",{css:m},f(s.a,{css:b,text:t,font:"secondary"}),f("div",{css:v}),f("button",Object(r.a)({css:x},e),f("img",{src:"/static/circle-arrow-brown.svg",alt:"Load more icon"})))}}}]);