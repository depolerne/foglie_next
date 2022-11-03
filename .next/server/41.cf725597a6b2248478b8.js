exports.ids = [41];
exports.modules = {

/***/ "rceR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hgx0");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import { css } from "@emotion/core";


const markerPosition = `width: 23px; transform: translate(-50%,-50%)`;
const markerPositionText = `transform: translateX(-35px);`;
const iconHTML = `
  <div style="${markerPosition}">
    <img src="/static/marker.svg" alt="Marker"/>
    <div style="${markerPositionText}">
       <img src="/static/marker-logo.svg" alt="Logo" />
    </div>
  </div>
`;
const markerIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["divIcon"])({
  html: iconHTML,
  iconSize: [0, 0]
});
console.log(markerIcon);

const ContactMap = () => {
  const lat = 40.365429;
  const long = 49.836172;
  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"], {
    style: {
      width: "100%",
      height: "100%"
    },
    center: [40.365436, 49.836201],
    zoom: 25,
    scrollWheelZoom: true,
    zoomControl: false,
    maxZoom: 19
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"], {
    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }), __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: [lat, long],
    icon: markerIcon
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactMap); //  <img src="/static/marker.svg" alt="Marker" icon={} />
//         <div css={markerText}>
//           <img src="/static/marker-logo.svg" alt="Logo" />
//         </div>

/***/ })

};;