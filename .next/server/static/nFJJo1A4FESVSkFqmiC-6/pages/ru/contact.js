module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		36: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + "." + {"41":"cf725597a6b2248478b8"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+3Ho":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__("5dMZ");
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);

// EXTERNAL MODULE: ./theme/theme.ts
var theme = __webpack_require__("YgvS");

// CONCATENATED MODULE: ./components/contact/breakpoints.ts
const contactBreakPoints = ["1280px"];
// CONCATENATED MODULE: ./components/contact/contact-image.tsx

var __jsx = external_react_default.a.createElement;




const container = core_["css"]`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 29%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${contactBreakPoints[0]}) {
    display: none;
  }
`;
const title = core_["css"]`
  position: absolute;
  bottom: -50%;
  left: 50%;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 79px;
  color: ${theme["a" /* theme */].colors.darkBlue.high};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  transform: translateX(-100%) rotate(180deg);
`;
const backgroundBlock = core_["css"]`
  flex: 1;
  background-color: #e5e5e5;
  margin-right: 70px;
`;
const brownBlock = core_["css"]`
  width: 70px;
  height: 160px;
  position: absolute;
  background-color: ${theme["a" /* theme */].colors.burlyWood.high};
  bottom: -100px;
  right: 35px;
`;
const aspectRatio = core_["css"]`
  padding-bottom: 75%;
`;
const imageWrapper = core_["css"]`
  position: absolute;
  width: 100%;
  top: 64px;
`;
const contact_image_image = core_["css"]`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContactImage = () => {
  const {
    t
  } = useTranslation_default()();
  return __jsx("div", {
    css: container
  }, __jsx("div", {
    css: backgroundBlock
  }), __jsx("div", {
    css: imageWrapper
  }, __jsx("div", {
    css: aspectRatio
  }, __jsx("picture", {
    css: contact_image_image
  }, __jsx("source", {
    srcSet: "/static/contact.webp",
    type: "image/webp"
  }), __jsx("source", {
    srcSet: "/static/contact.png",
    type: "image/png"
  }), __jsx("img", {
    src: "/static/contact.png",
    alt: "Contact image"
  }))), __jsx("div", {
    css: brownBlock
  }), __jsx("span", {
    css: title
  }, t("contact:contactUs"))));
};

/* harmony default export */ var contact_image = (ContactImage);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__("dAJ7");
var external_graphql_request_default = /*#__PURE__*/__webpack_require__.n(external_graphql_request_);

// EXTERNAL MODULE: ./graphql/apollo-client.ts
var apollo_client = __webpack_require__("eT+D");

// CONCATENATED MODULE: ./services/contact-service.ts


const ContactService = {
  sendMessageQuery: (name, email, message) => {
    return `
        {
            sendMail (name: "${name}", email: "${email}", message: "${message}") {
                success
            }
        }
    `;
  },
  sendMessage: async (query, name, email, message) => {
    await external_graphql_request_default()(apollo_client["a" /* GRAPHQL_BASE_URL */], query, {
      name,
      email,
      message
    });
  }
};
// EXTERNAL MODULE: ./components/PageTitle.tsx
var PageTitle = __webpack_require__("kz3Y");

// EXTERNAL MODULE: ./public/design/components/typography/libre-baskerville.js
var libre_baskerville = __webpack_require__("XVqR");

// EXTERNAL MODULE: ./public/design/components/typography/roboto.js
var roboto = __webpack_require__("I3v1");

// CONCATENATED MODULE: ./components/contact/contact-form-input.tsx

var contact_form_input_jsx = external_react_default.a.createElement;




const contact_form_input_container = core_["css"]`
  display: flex;
  flex-direction: column;
`;
const labelStyle = core_["css"]`
  text-transform: uppercase;
  margin-bottom: 26px;
`;
const inputTextStyle = core_["css"]`
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.18px;
  color: ${theme["a" /* theme */].colors.darkBlue.high};
`;
const input = core_["css"]`
  ${inputTextStyle};
  width: 100%;
  height: 32px;
  border: none;
  border-bottom: 1px solid ${theme["a" /* theme */].colors.burlyWood.high};
  outline: none;
  ::placeholder {
    ${inputTextStyle};
    color: ${theme["a" /* theme */].colors.darkBlue.disabled};
  }
`;
const StyledInput = styled_default.a.input`
  ${input};
  border-bottom-color: ${props => props.error ? "red" : theme["a" /* theme */].colors.burlyWood.high};
`;

const ContactFormInput = ({
  label,
  placeholder,
  name,
  error,
  value,
  onChange
}) => {
  return contact_form_input_jsx("div", {
    css: contact_form_input_container
  }, contact_form_input_jsx("label", {
    css: labelStyle,
    htmlFor: name
  }, contact_form_input_jsx(roboto["a" /* Text */], null, label)), contact_form_input_jsx(StyledInput, {
    type: "text",
    error: error,
    placeholder: placeholder,
    id: name,
    value: value,
    name: name,
    onChange: onChange
  }));
};

/* harmony default export */ var contact_form_input = (ContactFormInput);
// CONCATENATED MODULE: ./components/contact/contact-form.tsx

var contact_form_jsx = external_react_default.a.createElement;




const customBreakpoints = ["650px"];
const contact_form_container = core_["css"]`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const contact_form_title = core_["css"]`
  margin-bottom: 32px;
`;
const formStyle = core_["css"]`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(2, 80px);

  @media (max-width: ${customBreakpoints[0]}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 80px);
  }
`;
const contact_form_name = core_["css"]`
  grid-column: 1 / span 1;
`;
const contact_form_email = core_["css"]`
  grid-column: 2 / span 1;
  @media (max-width: ${customBreakpoints[0]}) {
    grid-column: 1 / span 1;
  }
`;
const contact_form_message = core_["css"]`
  grid-column: 1 / span 2;

  @media (max-width: ${customBreakpoints[0]}) {
    grid-column: 1 / span 1;
  }
`;

const ContactForm = ({
  form,
  errors,
  onChange
}) => {
  const {
    t
  } = useTranslation_default()();
  return contact_form_jsx("div", {
    css: contact_form_container
  }, contact_form_jsx(libre_baskerville["a" /* TextLBH3 */], {
    css: contact_form_title
  }, t("contact:contactForm")), contact_form_jsx("div", {
    css: formStyle
  }, contact_form_jsx("div", {
    css: contact_form_name
  }, contact_form_jsx(contact_form_input, {
    label: t("contact:nameLabel"),
    name: "name",
    placeholder: t("contact:name"),
    value: form.name,
    onChange: onChange,
    error: errors.includes("name")
  })), contact_form_jsx("div", {
    css: contact_form_email
  }, contact_form_jsx(contact_form_input, {
    label: t("contact:emailLabel"),
    name: "email",
    placeholder: t("contact:email"),
    value: form.email,
    onChange: onChange,
    error: errors.includes("email")
  })), contact_form_jsx("div", {
    css: contact_form_message
  }, contact_form_jsx(contact_form_input, {
    label: t("contact:messageLabel"),
    name: "message",
    placeholder: t("contact:message"),
    value: form.message,
    onChange: onChange,
    error: errors.includes("message")
  }))));
};

/* harmony default export */ var contact_form = (ContactForm);
// CONCATENATED MODULE: ./components/contact/contact-info-item.tsx

var contact_info_item_jsx = external_react_default.a.createElement;


const contact_info_item_container = core_["css"]`
  max-width: 220px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const textStyle = core_["css"]`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: ${theme["a" /* theme */].colors.darkBlue.high};
  margin-left: 24px;
`;

const ContactInfoItem = ({
  img,
  text,
  alt
}) => {
  return contact_info_item_jsx("div", {
    css: contact_info_item_container
  }, contact_info_item_jsx("img", {
    src: img,
    width: 36,
    height: 36,
    alt: alt
  }), contact_info_item_jsx("span", {
    css: textStyle
  }, text));
};

/* harmony default export */ var contact_info_item = (ContactInfoItem);
// CONCATENATED MODULE: ./components/contact/contact-submit.tsx

var contact_submit_jsx = external_react_default.a.createElement;





const contact_submit_container = core_["css"]`
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme["a" /* theme */].breakpoints.md}) {
    justify-content: flex-end;
  }
`;
const buttonStyle = core_["css"]`
  width: 70px;
  height: 70px;
  position: absolute;
  left: 0;
  background: ${theme["a" /* theme */].colors.burlyWood.high};
  cursor: pointer;
  outline: none;
  border: none;
`;
const contact_submit_text = core_["css"]`
  width: 272px;
  text-align: center;
  @media (max-width: ${theme["a" /* theme */].breakpoints.md}) {
    text-align: right;
  }
  @media (max-width: ${theme["a" /* theme */].breakpoints.xs}) {
    width: 180px;
  }
`;
const StyledButton = styled_default.a.button`
  ${buttonStyle}
  opacity: ${props => props.isLoading ? 0.5 : 1};
`;

const ContactSubmit = ({
  status,
  onSubmit
}) => {
  const {
    t
  } = useTranslation_default()();
  const isLoading = status === "loading";
  return contact_submit_jsx("div", {
    css: contact_submit_container
  }, contact_submit_jsx(StyledButton, {
    disabled: isLoading,
    isLoading: isLoading,
    onClick: onSubmit
  }, contact_submit_jsx("img", {
    src: "/static/arrow-white.svg",
    alt: "Arrow icon"
  })), contact_submit_jsx(libre_baskerville["b" /* TextLBItalic */], {
    css: contact_submit_text
  }, t("contact:submitText")));
};

/* harmony default export */ var contact_submit = (ContactSubmit);
// CONCATENATED MODULE: ./components/contact/contact-info.tsx

var contact_info_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const ContactMap = dynamic_default()(() => __webpack_require__.e(/* import() */ 41).then(__webpack_require__.bind(null, "rceR")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("rceR")],
    modules: ["./contact-map"]
  }
});
const map = core_["css"]`
  margin-top: 64px;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    min-height: 300px;
  }
  @media (max-width: 600px) {
    min-height: 200px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100% !important;

    > div {
      flex: 1;
    }
  }
`;
const contact_info_container = core_["css"]`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: auto;
  margin-bottom: 104px;

  @media (max-width: ${contactBreakPoints[0]}) {
    width: auto;
  }
`;
const info = core_["css"]`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 64px;
`;
const StyledTitle = styled_default()(PageTitle["a" /* PageTitle */])`
  margin-top: 32px;
  @media (max-width: ${theme["a" /* theme */].breakpoints.lg}) {
    margin-top: 64px;
  }

  & h3 {
    @media (max-width: ${theme["a" /* theme */].breakpoints.xs}) {
      font-size: 46px;
    }
  }
`;

const ContactInfo = () => {
  const {
    t
  } = useTranslation_default()();
  const {
    0: form,
    1: setState
  } = Object(external_react_["useState"])({
    name: "",
    email: "",
    message: ""
  });
  const {
    0: errors,
    1: setErrors
  } = Object(external_react_["useState"])([]);
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])("init");

  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const updateField = e => {
    setState(_objectSpread({}, form, {
      [e.target.name]: e.target.value
    }));
  };

  const validateFields = form => {
    const {
      name,
      email,
      message
    } = form;
    const errors = [];

    if (name === "") {
      errors.push("name");
    }

    if (email === "" || !validateEmail(email)) {
      errors.push("email");
    }

    if (message === "") {
      errors.push("message");
    }

    setErrors(errors);
    return errors.length === 0;
  };

  const onSubmit = () => {
    if (validateFields(form)) {
      setStatus("loading");
      ContactService.sendMessage(ContactService.sendMessageQuery(form.name, form.email, form.message), form.name, form.email, form.message).finally(() => {
        setStatus("init");
      });
    }
  };

  return contact_info_jsx("div", {
    css: contact_info_container
  }, contact_info_jsx("div", {
    css: map
  }, contact_info_jsx(ContactMap, null)), contact_info_jsx(StyledTitle, {
    subtitle: t("contact:subtitle"),
    title: t("contact:contactInformation")
  }), contact_info_jsx("div", {
    css: info
  }, contact_info_jsx(contact_info_item, {
    img: "/static/address.svg",
    text: t("common:address"),
    alt: "Address icon"
  }), contact_info_jsx(contact_info_item, {
    img: "/static/phone.svg",
    text: t("common:phone"),
    alt: "Phone icon"
  }), contact_info_jsx(contact_info_item, {
    img: "/static/email.svg",
    text: t("common:email"),
    alt: "Email icon"
  })), contact_info_jsx(contact_form, {
    form: form,
    errors: errors,
    onChange: updateField
  }), contact_info_jsx(contact_submit, {
    status: status,
    onSubmit: onSubmit
  }));
};

/* harmony default export */ var contact_info = (ContactInfo);
// EXTERNAL MODULE: ./components/container.tsx
var components_container = __webpack_require__("pJr+");

// EXTERNAL MODULE: ./components/layout.tsx + 14 modules
var layout = __webpack_require__("5M6V");

// CONCATENATED MODULE: ./pages_/contact.tsx

var contact_jsx = external_react_default.a.createElement;






const wrapperStyle = core_["css"]`
  flex: 1;
`;

const Contact = () => {
  const {
    t
  } = useTranslation_default()();
  return contact_jsx(layout["a" /* default */], {
    description: "Here you could contact with us",
    title: t("contact:title")
  }, contact_jsx("div", {
    css: wrapperStyle
  }, contact_jsx(contact_image, null), contact_jsx(components_container["a" /* Container */], null, contact_jsx(contact_info, null))));
};

async function getStaticProps() {
  return {
    props: {}
  };
}
/* harmony default export */ var contact = __webpack_exports__["a"] = (Contact);

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0MJ7":
/***/ (function(module) {

module.exports = JSON.parse("{\"address\":\"5 ??.???????????? ??????????., ????????, ??????????????????????\",\"phone\":\"(994) 12 492 0286\",\"email\":\"office@fogliedalloro.az\",\"web\":\"www.fogliedalloro.az\",\"readMore\":\"??????????????????\"}");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rw5a");


/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5M6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__("5dMZ");
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: ./theme/theme.ts
var theme = __webpack_require__("YgvS");

// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__("pJr+");

// CONCATENATED MODULE: ./components/Logo.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const Logo = (_ref) => {
  let {
    white
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["white"]);

  return __jsx("img", _extends({
    src: white ? "/static/white-logo.svg" : "/static/black-logo.svg",
    alt: "Logo"
  }, rest));
};
// EXTERNAL MODULE: ./components/Typography.tsx
var Typography = __webpack_require__("kmSd");

// CONCATENATED MODULE: ./components/ReservedText.tsx

var ReservedText_jsx = external_react_default.a.createElement;




const StyledText = styled_default()(Typography["a" /* Typography */])`
  @media (max-width: ${theme["a" /* theme */].breakpoints.sm}) {
    order: 2;
    padding-top: 30px;
  }
`;
const currentYear = new Date().getFullYear();
const ReservedText = () => {
  const {
    t
  } = useTranslation_default()();
  return ReservedText_jsx(StyledText, {
    variant: "body2",
    text: `${currentYear} ?? ${t("footer:reserved")}`
  });
};
// EXTERNAL MODULE: ./components/SocialLinks.tsx
var SocialLinks = __webpack_require__("i7fN");

// CONCATENATED MODULE: ./components/footer/footer.tsx

var footer_jsx = external_react_default.a.createElement;









const StyledFooter = styled_default.a.footer`
  position: relative;
  color: ${theme["a" /* theme */].colors.white.high};
  padding: 32px 0 24px 0;
`;
const squares = core_["css"]`
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateX(-2px);

  @media (max-width: ${theme["a" /* theme */].breakpoints.xl}) {
    display: none;
  }
`;
const FooterBackground = styled_default.a.div`
  background-color: ${theme["a" /* theme */].colors.green[200]};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;
const FooterTop = styled_default.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 90px;

  @media (max-width: ${theme["a" /* theme */].breakpoints.md}) {
    display: none;
  }
`;
const FooterBottom = styled_default.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme["a" /* theme */].breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const StyledSocialLinks = styled_default()(SocialLinks["d" /* SocialLinks */])`
  svg {
    fill: ${theme["a" /* theme */].colors.white.high};
  }
`;

const Footer = () => {
  const {
    t
  } = useTranslation_default()();
  return footer_jsx(StyledFooter, null, footer_jsx("img", {
    css: squares,
    src: "/static/home/squares.png",
    alt: "Squares"
  }), footer_jsx(FooterBackground, null), footer_jsx(container["a" /* Container */], null, footer_jsx(FooterTop, null, footer_jsx(Logo, {
    white: true
  }), footer_jsx(Typography["a" /* Typography */], {
    variant: "body2",
    text: `${t("common:address")} / ${t("common:phone")} / ${t("common:email")}`
  })), footer_jsx(FooterBottom, null, footer_jsx(ReservedText, null), footer_jsx(StyledSocialLinks, null))));
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: external "next-translate/Link"
var Link_ = __webpack_require__("aWGf");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__("dUq6");

// CONCATENATED MODULE: ./components/header/MenuItem.tsx


const menuItemStyle = core_["css"]`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1.25px;
  font-size: 14px;
  line-height: 16px;
  color: ${theme["a" /* theme */].colors.darkBlue.medium};
  text-decoration: none;
  transition: 0.2s color ease-in-out;

  :hover {
    color: ${theme["a" /* theme */].colors.black};
  }
`;
// CONCATENATED MODULE: ./components/header/dropdown.tsx

var dropdown_jsx = external_react_default.a.createElement;

function dropdown_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = dropdown_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function dropdown_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const StyledNavDropdown = styled_default.a.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p,
  svg {
    color: ${theme["a" /* theme */].colors.darkBlue.medium};
    transition: 0.2s color ease-in-out;
  }

  &:hover {
    nav {
      opacity: 1;
      pointer-events: auto;
    }

    p,
    svg {
      color: ${theme["a" /* theme */].colors.black};
    }
  }
`;
const Title = styled_default.a.div`
  display: flex;
  align-items: center;

  :hover {
    p,
    svg {
      color: ${theme["a" /* theme */].colors.black};
    }
  }
`;
const dropdown_StyledText = styled_default()(Typography["a" /* Typography */])`
  ${menuItemStyle}
  margin-right: 3px;
`;
const Menu = styled_default.a.nav`
  opacity: 0;
  position: absolute;
  top: calc(50% + 12px);
  transition: 0.2s opacity ease;
  pointer-events: none;
  z-index: 2;
`;
const MenuInner = styled_default.a.div`
  margin-top: 10px;
  text-align: center;
  color: ${theme["a" /* theme */].colors.white.high};
  background-color: ${theme["a" /* theme */].colors.black.low};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding-bottom: 16px;
`;
const NavDropdown = (_ref) => {
  let {
    title,
    children
  } = _ref,
      rest = dropdown_objectWithoutProperties(_ref, ["title", "children"]);

  return dropdown_jsx(StyledNavDropdown, rest, dropdown_jsx(Title, null, dropdown_jsx(dropdown_StyledText, {
    text: title
  }), dropdown_jsx("img", {
    src: "/static/dropdown.svg",
    alt: "Dropdown"
  })), dropdown_jsx(Menu, null, dropdown_jsx(MenuInner, null, children)));
};
// CONCATENATED MODULE: ./components/header/nav_link.tsx


const NavLink = styled_default.a.a`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: ${theme["a" /* theme */].colors.darkBlue.medium};
  text-decoration: none;
  transition: 0.2s color ease-in-out;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;

  &:hover {
    color: ${theme["a" /* theme */].colors.black};
  }

  &:focus {
    background-color: transparent;
  }
`;
// CONCATENATED MODULE: ./components/header/sidemenu/side-menu-container.tsx

var side_menu_container_jsx = external_react_default.a.createElement;
// import { css } from "@emotion/core";


const WIDTH = 225;
const Backdrop = styled_default.a.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background-color: ${theme["a" /* theme */].colors.darkBlue.disabled};
  pointer-events: ${props => props.isOpen ? "auto" : "none"};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: 0.3s opacity ease;

  @media (max-width: ${theme["a" /* theme */].breakpoints.xs}) {
    display: none;
  }
`;
const side_menu_container_Menu = styled_default.a.aside`
  width: ${props => props.isOpen ? "auto" : 0};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  transform: translateX(${props => props.isOpen ? 0 : `${WIDTH}px`});
  transition: 0.3s transform ease;
  padding: 0 16px 32px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${theme["a" /* theme */].breakpoints.xs}) {
    left: ${props => props.isOpen ? 0 : "auto"};
    transform: translateX(${props => props.isOpen ? 0 : "100%"});
  }
`;
const SideMenuContainer = ({
  onClose,
  isOpen,
  children
}) => {
  return side_menu_container_jsx(external_react_default.a.Fragment, null, side_menu_container_jsx(Backdrop, {
    onClick: onClose,
    isOpen: isOpen
  }), side_menu_container_jsx(side_menu_container_Menu, {
    isOpen: isOpen
  }, children));
};
// CONCATENATED MODULE: ./components/header/sidemenu/side-menu-dropdown.tsx

var side_menu_dropdown_jsx = external_react_default.a.createElement;




const side_menu_dropdown_StyledNavDropdown = styled_default.a.div`
  margin-bottom: 24px;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  text-align: ${props => props.isLanguage ? "right" : "left"};
  display: ${props => props.isLanguage ? "inline-block" : "block"};

  p,
  svg {
    color: ${theme["a" /* theme */].colors.darkBlue.medium};
    transition: 0.2s color ease-in-out;
  }

  &:active {
    p,
    svg {
      color: ${theme["a" /* theme */].colors.black};
    }
  }
`;
const side_menu_dropdown_Title = styled_default.a.div`
  display: flex;
  align-items: center;

  :active {
    p,
    svg {
      color: ${theme["a" /* theme */].colors.black};
    }
  }
`;
const side_menu_dropdown_StyledText = styled_default()(NavLink)`
  margin-right: 3px;
`;
const side_menu_dropdown_Menu = styled_default.a.nav`
  opacity: 0;
  height: 0;
  transition: 0.2s all ease;
  pointer-events: ${props => props.isOpen ? "auto" : "none"};
  opacity: ${props => props.isOpen ? 1 : 0};
  height: ${props => props.isOpen ? "auto" : 0};
  margin-top: ${props => props.isOpen ? "16px" : 0};
  display: ${props => props.isLanguage ? "inline-block" : "block"};

  a {
    pointer-events: ${props => props.isOpen ? "auto" : "none"};
  }
`;
const SideMenuDropdown = ({
  title,
  isLanguage = false,
  children
}) => {
  const {
    0: isOpen,
    1: setOpen
  } = Object(external_react_["useState"])(false);

  function toggleMenu(event) {
    event.stopPropagation();
    setOpen(!isOpen);
  }

  return side_menu_dropdown_jsx(side_menu_dropdown_StyledNavDropdown, {
    isLanguage: isLanguage
  }, side_menu_dropdown_jsx(side_menu_dropdown_Title, {
    onClick: e => toggleMenu(e)
  }, side_menu_dropdown_jsx(side_menu_dropdown_StyledText, null, title), side_menu_dropdown_jsx("img", {
    src: "/static/dropdown.svg",
    alt: "Dropdown"
  })), side_menu_dropdown_jsx(side_menu_dropdown_Menu, {
    isOpen: isOpen,
    isLanguage: isLanguage
  }, children));
};
// CONCATENATED MODULE: ./components/header/sidemenu/side-menu-footer.tsx
var side_menu_footer_jsx = external_react_default.a.createElement;





const side_menu_footer_StyledSocialLinks = styled_default()(SocialLinks["d" /* SocialLinks */])`
  margin-bottom: 20px;

  svg {
    fill: ${theme["a" /* theme */].colors.black.low};
  }
`;
const SideMenuFooter = () => {
  return side_menu_footer_jsx("div", null, side_menu_footer_jsx(side_menu_footer_StyledSocialLinks, null), side_menu_footer_jsx(ReservedText, null));
};
// CONCATENATED MODULE: ./components/header/sidemenu/side-menu-header.tsx
var side_menu_header_jsx = external_react_default.a.createElement;





const Header = styled_default.a.div`
  height: 80px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;

  @media (min-width: ${theme["a" /* theme */].breakpoints.md}) {
    display: none;
  }
`; // const Logo = styled.a`
//   display: inline-block;
//   width: 93px;
//   height: 24px;
//   @media (min-width: ${theme.breakpoints.xs}) {
//     opacity: 0;
//   }
// `;

const CloseButton = styled_default.a.button`
  border: 0;
  background-color: transparent;
  padding: 20px;
`;
const SideMenuHeader = ({
  onClick
}) => {
  return side_menu_header_jsx(Header, null, side_menu_header_jsx(Link_default.a, {
    href: "/"
  }, side_menu_header_jsx("a", null, side_menu_header_jsx(Logo, null))), side_menu_header_jsx(CloseButton, {
    onClick: onClick
  }, side_menu_header_jsx("img", {
    src: "/static/side-menu-close.svg",
    alt: "Closing side menu icon"
  })));
};
// CONCATENATED MODULE: ./components/header/sidemenu/side-menu.tsx

var side_menu_jsx = external_react_default.a.createElement;










const NavItem = styled_default()(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const DropdownItem = styled_default()(NavLink)`
  display: block;
  margin-left: 8px;
  margin-bottom: 24px;
  white-space: nowrap;
`;
const LanguageDropdown = styled_default()(SideMenuDropdown)`
  display: inline-block;
  text-align: right;
`;
const {
  allLanguages
} = i18n;
const SideMenu = ({
  onClose,
  isOpen
}) => {
  const {
    t
  } = useTranslation_default()();
  const router = Object(router_["useRouter"])();
  const {
    lang
  } = useTranslation_default()();
  router_["Router"].events.on("routeChangeComplete", () => {
    if (isOpen) {
      onClose();
    }
  });

  const getCurrentUrlWithoutLang = () => {
    const {
      asPath
    } = router;
    const paths = asPath.split("/");
    const cl = paths[1];

    if (allLanguages.includes(cl)) {
      const url = paths.filter((_, i) => i !== 1).join("/");
      return url;
    }

    return cl;
  };

  const currentUrl = getCurrentUrlWithoutLang();
  return side_menu_jsx(SideMenuContainer, {
    onClose: onClose,
    isOpen: isOpen
  }, side_menu_jsx("div", null, side_menu_jsx(SideMenuHeader, {
    onClick: onClose
  }), side_menu_jsx(Link_default.a, {
    href: "/about-company",
    passHref: true
  }, side_menu_jsx(NavItem, null, t("header:about-company"))), side_menu_jsx(Link_default.a, {
    href: "/about-team",
    passHref: true
  }, side_menu_jsx(NavItem, null, t("header:about-team"))), side_menu_jsx(Link_default.a, {
    href: "/portfolio",
    passHref: true
  }, side_menu_jsx(NavItem, null, t("header:portfolio"))), side_menu_jsx(Link_default.a, {
    href: "/blog",
    passHref: true
  }, side_menu_jsx(NavItem, null, t("header:blog"))), side_menu_jsx(Link_default.a, {
    href: "/pricing",
    passHref: true
  }, side_menu_jsx(NavItem, null, t("header:pricing"))), side_menu_jsx(Link_default.a, {
    href: "/contact",
    passHref: true
  }, side_menu_jsx(NavItem, null, t("header:contact"))), side_menu_jsx(LanguageDropdown, {
    title: `${t("header:language")} - ${lang}`,
    isLanguage: true
  }, allLanguages.map(lng => {
    if (lng === lang) return null;
    return side_menu_jsx(Link_default.a, {
      href: currentUrl,
      lang: lng,
      key: lng,
      passHref: true
    }, side_menu_jsx(DropdownItem, null, lng));
  }))), side_menu_jsx(SideMenuFooter, null));
};
// CONCATENATED MODULE: ./components/header/ToggleButton.tsx
var ToggleButton_jsx = external_react_default.a.createElement;



const StyledToggleButton = styled_default.a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 12px;

  @media (min-width: ${theme["a" /* theme */].breakpoints.md}) {
    display: none;
  }
`;
const ToggleButton = props => {
  return ToggleButton_jsx(StyledToggleButton, props, ToggleButton_jsx("img", {
    src: "/static/side-menu-open.svg",
    alt: "Opening side menu icon"
  }));
};
// CONCATENATED MODULE: ./components/header/menu.tsx

var menu_jsx = external_react_default.a.createElement;












const {
  allLanguages: menu_allLanguages
} = i18n;
const Nav = styled_default.a.nav`
  display: none;

  @media (min-width: ${theme["a" /* theme */].breakpoints.md}) {
    display: flex;
  }
`;
const menu_StyledNavDropdown = styled_default()(NavDropdown)`
  & p {
    color: ${props => props.isActive ? theme["a" /* theme */].colors.darkBlue.high : theme["a" /* theme */].colors.darkBlue.medium};
  }
`;
const menu_NavItem = styled_default()(NavLink)`
  color: ${props => props.isActive ? theme["a" /* theme */].colors.darkBlue.high : theme["a" /* theme */].colors.darkBlue.medium};
  display: flex;
  align-items: center;
  margin-left: 24px;
`;
const menu_DropdownItem = styled_default()(NavLink)`
  display: block;
  padding: 16px 16px 0 16px;
  white-space: nowrap;
  color: ${theme["a" /* theme */].colors.white.high};
`;

const menu_Menu = () => {
  const {
    t,
    lang
  } = useTranslation_default()();
  const router = Object(router_["useRouter"])();
  const {
    0: isSideMenuOpen,
    1: setIsSideMenuOpen
  } = Object(external_react_["useState"])(false);

  function openSideMenu() {
    setIsSideMenuOpen(true);
  }

  function closeSideMenu() {
    setIsSideMenuOpen(false);
  }

  const getCurrentUrlWithoutLang = () => {
    const {
      asPath
    } = router;
    const paths = asPath.split("/");
    const cl = paths[1];

    if (menu_allLanguages.includes(cl)) {
      const url = paths.filter((_, i) => i !== 1).join("/");
      return url || "/";
    }

    return cl || "/";
  };

  const getActiveMenu = (_currentUrl, menuUrl) => {
    const count = _currentUrl.split("/").length - 1;
    let currentUrl = _currentUrl;

    if (count === 1) {
      currentUrl = currentUrl.substring(1);
    } else if (count === 2) {
      currentUrl = currentUrl.substring(currentUrl.indexOf("/") + 1);
      currentUrl = currentUrl.substring(0, currentUrl.indexOf("/"));
    }

    if (!Boolean(currentUrl)) {
      return false;
    }

    return Array.isArray(menuUrl) ? menuUrl.some(menu => menu.includes(currentUrl)) : currentUrl.includes(menuUrl);
  };

  const currentUrl = getCurrentUrlWithoutLang();
  return menu_jsx(external_react_default.a.Fragment, null, menu_jsx(Nav, null, menu_jsx(menu_StyledNavDropdown, {
    isActive: getActiveMenu(currentUrl, ["about-company", "about-team"]),
    title: t("header:about")
  }, menu_jsx(Link_default.a, {
    href: "/about-company",
    passHref: true
  }, menu_jsx(menu_DropdownItem, null, t("header:about-company"))), menu_jsx(Link_default.a, {
    href: "/about-team",
    passHref: true
  }, menu_jsx(menu_DropdownItem, null, t("header:about-team")))), menu_jsx(Link_default.a, {
    href: "/portfolio",
    passHref: true
  }, menu_jsx(menu_NavItem, {
    isActive: getActiveMenu(currentUrl, ["portfolio", "project"])
  }, t("header:portfolio"))), menu_jsx(Link_default.a, {
    href: "/blog",
    passHref: true
  }, menu_jsx(menu_NavItem, {
    isActive: getActiveMenu(currentUrl, ["blog", "post"])
  }, t("header:blog"))), menu_jsx(Link_default.a, {
    href: "/pricing",
    passHref: true
  }, menu_jsx(menu_NavItem, {
    isActive: getActiveMenu(currentUrl, "pricing")
  }, t("header:pricing"))), menu_jsx(Link_default.a, {
    href: "/contact",
    passHref: true
  }, menu_jsx(menu_NavItem, {
    isActive: getActiveMenu(currentUrl, "contact")
  }, t("header:contact"))), menu_jsx(menu_StyledNavDropdown, {
    title: lang,
    isActive: true,
    css: core_["css"]`
            margin-left: 24px;
          `
  }, menu_allLanguages.map(lng => {
    if (lng === lang) return null;
    return menu_jsx(Link_default.a, {
      href: currentUrl,
      lang: lng,
      key: lng,
      passHref: true
    }, menu_jsx(menu_DropdownItem, {
      onClick: () => {
        document.documentElement.lang = lng;
      }
    }, lng));
  }))), menu_jsx(ToggleButton, {
    "aria-label": "Toggle side menu button",
    onClick: openSideMenu
  }), menu_jsx(SideMenu, {
    isOpen: isSideMenuOpen,
    onClose: closeSideMenu
  }));
};

/* harmony default export */ var menu = (menu_Menu);
// CONCATENATED MODULE: ./components/header/header.tsx

var header_jsx = external_react_default.a.createElement;




const StyledHeader = styled_default.a.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  z-index: 1;
`;
const header_Logo = styled_default.a.a`
  display: flex;
  align-items: center;
`;

const header_Header = () => {
  return header_jsx(container["a" /* Container */], {
    style: {
      backgroundColor: "#fff"
    }
  }, header_jsx(StyledHeader, null, header_jsx(Link_default.a, {
    href: "/",
    passHref: true
  }, header_jsx(header_Logo, null, header_jsx("img", {
    src: "/static/black-logo.svg",
    alt: "Logo"
  }))), header_jsx(menu, null)));
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./components/layout.tsx

var layout_jsx = external_react_default.a.createElement;







const layout = core_["css"]`
  background-image: url(/static/background.png);
  background-repeat: repeat-y;
  background-position-x: center;
  background-position-y: 210px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: ${theme["a" /* theme */].breakpoints.lg}) {
    background-image: none;
  }
`;
const content = core_["css"]`
  flex: 1;
  display: flex;
  position: relative;
`;

const Layout = ({
  title,
  description,
  children
}) => {
  const {
    lang
  } = useTranslation_default()();
  Object(external_react_["useEffect"])(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return layout_jsx(external_react_default.a.Fragment, null, layout_jsx(head_default.a, null, layout_jsx("meta", {
    name: "description",
    content: description
  }), layout_jsx("title", null, title)), layout_jsx("div", {
    css: layout
  }, layout_jsx(header, null), layout_jsx("div", {
    css: content
  }, children), layout_jsx(footer, null)));
};

/* harmony default export */ var components_layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "5dMZ":
/***/ (function(module, exports) {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "AuoD":
/***/ (function(module, exports) {

module.exports = require("react-leaflet");

/***/ }),

/***/ "C9/r":
/***/ (function(module) {

module.exports = JSON.parse("{\"reserved\":\"Foglie d???alloro. ?????? ?????????? ????????????????.\"}");

/***/ }),

/***/ "I3v1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Text = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
`;

/***/ }),

/***/ "L4qB":
/***/ (function(module, exports) {

module.exports = require("next-translate/I18nProvider");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "ViM2":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"????????????????\",\"subtitle\":\"?????????????????? ?? ????????\",\"contactUs\":\"??????????\",\"contactInformation\":\"???????????????????? ????????????????????\",\"contactForm\":\"?????????????????? ???????????? ?????? ??????????\",\"name\":\"??????\",\"nameLabel\":\"????????\",\"email\":\"????.??????????\",\"emailLabel\":\"??????\",\"message\":\"??????????????????\",\"messageLabel\":\"????????????????\",\"submitText\":\"???? ?????????????? ?? ???????????????????????????? ?? ?? ?????????? ????????????????????????\"}");

/***/ }),

/***/ "XVqR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextLBH1 */
/* unused harmony export TextLBH2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextLBH3; });
/* unused harmony export TextLBH4 */
/* unused harmony export TextLBH5 */
/* unused harmony export TextLBH6 */
/* unused harmony export TextLBSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TextLBItalic; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YgvS");


const TextLBH1 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 89px;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBH2 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: -0.5px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBH3 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 64px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBH4 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 56px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBH5 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.18px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBH6 = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBSubtitle = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;
const TextLBItalic = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"].colors.darkBlue.high};
`;

/***/ }),

/***/ "YgvS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
const theme = {
  colors: {
    black: {
      high: "#000",
      low: "#2C2E38"
    },
    white: {
      high: "#FFF",
      medium: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)"
    },
    darkBlue: {
      high: "#2C2E38",
      medium: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    darkGreen: {
      high: "#6C805F",
      medium: "rgba(108, 128, 95, 0.7)",
      disabled: "rgba(108, 128, 95, 0.5)"
    },
    yellowGreen: {
      high: "#72813F",
      medium: "rgba(114, 129, 63, 0.7)",
      disabled: "rgba(114, 129, 63, 0.5)"
    },
    darkOliveGreen: {
      high: "#8F8B6A",
      medium: "rgba(143, 139, 106, 0.7)",
      disabled: "rgba(143, 139, 106, 0.5)"
    },
    darkRed: {
      high: "#5E352E",
      medium: "rgba(94, 53, 46, 0.7)",
      disabled: "rgba(94, 53, 46, 0.5)"
    },
    saddleBrown: {
      high: "#744C3D",
      medium: "rgba(116, 76, 61, 0.7)",
      disabled: "rgba(116, 76, 61, 0.5)"
    },
    grey: {
      high: "#B4B5A8",
      medium: "rgba(180, 181, 168, 0.7)",
      disabled: "rgba(180, 181, 168, 0.5)"
    },
    burlyWood: {
      high: "#AD977B",
      medium: "rgba(173, 151, 123, 0.7)",
      disabled: "rgba(173, 151, 123, 0.5)"
    },
    brown: {
      200: "#AD977B"
    },
    green: {
      200: "#2C2E38"
    }
  },
  breakpoints: {
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  }
};

/***/ }),

/***/ "aWGf":
/***/ (function(module, exports) {

module.exports = require("next-translate/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dAJ7":
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "dUq6":
/***/ (function(module) {

module.exports = JSON.parse("{\"allLanguages\":[\"az\",\"en\",\"ru\"],\"defaultLanguage\":\"az\",\"currentPagesDir\":\"pages_\",\"finalPagesDir\":\"pages\",\"localesPath\":\"locales\",\"pages\":{\"*\":[\"common\",\"footer\",\"header\"],\"/\":[\"home\",\"about\",\"portfolio\",\"blog\"],\"/portfolio\":[\"portfolio\"],\"/project/[id]\":[\"project\"],\"/pricing\":[\"pricing\"],\"/about-team\":[\"team\"],\"/about-company\":[\"about\"],\"/contact\":[\"contact\"],\"/blog\":[\"blog\"],\"/post/[id]\":[\"post\"]}}");

/***/ }),

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "eT+D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GRAPHQL_BASE_URL; });
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TG1l");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ePNP");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);




 // Update the GraphQL endpoint to any instance of GraphQL that you like

const GRAPHQL_BASE_URL = false ? undefined : "https://foglie-dialloro-api.herokuapp.com/graphql";
const link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["createHttpLink"])({
  fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()),
  // Switches between unfetch & node-fetch for client & server.
  uri: GRAPHQL_BASE_URL
}); // Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo

/* harmony default export */ __webpack_exports__["b"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()( // You can get headers and ctx (context) from the callback params
// e.g. ({ headers, ctx, initialState })
({
  initialState
}) => new apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
  link: link,
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]() //  rehydrate the cache using the initial data passed from the server:
  .restore(initialState || {})
})));

/***/ }),

/***/ "hgx0":
/***/ (function(module, exports) {

module.exports = require("leaflet");

/***/ }),

/***/ "i7fN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLink; });
/* unused harmony export TwitterLink */
/* unused harmony export YoutubeLink */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InstagramLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LinkedinLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SocialLinks; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const StyledLink = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  display: flex;
  align-items: center;
`;
const FacebookLink = () => {
  return __jsx(StyledLink, {
    href: "https://www.facebook.com/fogliedalloro/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "facebook"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.54612 16H0.883077C0.395224 16 0 15.6045 0 15.1169V0.88307C0 0.395283 0.395286 0 0.883077 0H15.117C15.6047 0 16 0.395283 16 0.88307V15.1169C16 15.6046 15.6046 16 15.117 16H11.0398V9.80392H13.1195L13.4309 7.3892H11.0398V5.84755C11.0398 5.14843 11.2339 4.672 12.2364 4.672L13.5151 4.67144V2.5117C13.294 2.48227 12.5349 2.41652 11.6519 2.41652C9.80828 2.41652 8.54612 3.54184 8.54612 5.6084V7.3892H6.46104V9.80392H8.54612V16Z"
  })));
};
const TwitterLink = () => {
  return __jsx(StyledLink, {
    href: "https://www.twitter.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "twitter"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 2.65735C15.4121 2.93846 14.7791 3.12857 14.1152 3.21351C14.7932 2.77667 15.3135 2.084 15.5586 1.25887C14.9238 1.66334 14.2222 1.9576 13.4728 2.11535C12.8755 1.42875 12.0218 1 11.0771 1C9.26548 1 7.79574 2.58252 7.79574 4.53413C7.79574 4.8112 7.82391 5.08017 7.88026 5.33904C5.15208 5.19141 2.73381 3.78584 1.11381 1.64514C0.831132 2.16894 0.669601 2.77667 0.669601 3.42384C0.669601 4.6494 1.24905 5.73138 2.12995 6.3654C1.59277 6.34821 1.08564 6.18743 0.642367 5.92452V5.968C0.642367 7.68097 1.77402 9.10979 3.27663 9.43337C3.00147 9.51629 2.71128 9.55775 2.41169 9.55775C2.20039 9.55775 1.99378 9.53651 1.79374 9.49505C2.21166 10.8986 3.42314 11.9209 4.86001 11.9482C3.73681 12.8967 2.3206 13.462 0.783237 13.462C0.518401 13.462 0.256383 13.4458 0 13.4134C1.45284 14.4145 3.17896 15 5.03187 15C11.0705 15 14.3715 9.61539 14.3715 4.94467C14.3715 4.79097 14.3687 4.63727 14.3631 4.4866C15.0045 3.98808 15.5614 3.3662 16 2.65735Z"
  })));
};
const YoutubeLink = () => {
  return __jsx(StyledLink, {
    href: "https://www.youtube.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "youtube"
  }, __jsx("svg", {
    width: "15",
    height: "11",
    viewBox: "0 0 15 11",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.86308 7.39913L5.86263 3.41503L9.73843 5.41395L5.86308 7.39913ZM14.3733 2.7246C14.3733 2.7246 14.2329 1.74751 13.803 1.31724C13.2575 0.752263 12.646 0.749604 12.3659 0.716813C10.3585 0.573242 7.34743 0.573242 7.34743 0.573242H7.34115C7.34115 0.573242 4.33008 0.573242 2.3227 0.716813C2.04208 0.749604 1.43108 0.752263 0.885082 1.31724C0.455185 1.74751 0.315323 2.7246 0.315323 2.7246C0.315323 2.7246 0.171875 3.87228 0.171875 5.01952V6.09542C0.171875 7.2431 0.315323 8.39035 0.315323 8.39035C0.315323 8.39035 0.455185 9.36743 0.885082 9.7977C1.43108 10.3627 2.14787 10.345 2.46705 10.4039C3.61463 10.5129 7.34429 10.5466 7.34429 10.5466C7.34429 10.5466 10.3585 10.5421 12.3659 10.3986C12.646 10.3653 13.2575 10.3627 13.803 9.7977C14.2329 9.36743 14.3733 8.39035 14.3733 8.39035C14.3733 8.39035 14.5167 7.2431 14.5167 6.09542V5.01952C14.5167 3.87228 14.3733 2.7246 14.3733 2.7246Z"
  })));
};
const InstagramLink = () => {
  return __jsx(StyledLink, {
    href: "https://www.instagram.com/fogliedalloro/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "instagram"
  }, __jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.00002 0C5.82733 0 5.5549 0.00920926 4.70161 0.0481422C3.8501 0.0869798 3.26855 0.222229 2.7597 0.420006C2.23363 0.624419 1.78748 0.897966 1.34271 1.34271C0.897966 1.78748 0.624419 2.23363 0.420006 2.7597C0.222229 3.26855 0.0869798 3.8501 0.0481422 4.70161C0.00920926 5.5549 0 5.82733 0 8.00002C0 10.1727 0.00920926 10.4451 0.0481422 11.2984C0.0869798 12.1499 0.222229 12.7314 0.420006 13.2403C0.624419 13.7664 0.897966 14.2125 1.34271 14.6573C1.78748 15.102 2.23363 15.3756 2.7597 15.58C3.26855 15.7778 3.8501 15.913 4.70161 15.9519C5.5549 15.9908 5.82733 16 8.00002 16C10.1727 16 10.4451 15.9908 11.2984 15.9519C12.1499 15.913 12.7314 15.7778 13.2403 15.58C13.7664 15.3756 14.2125 15.102 14.6573 14.6573C15.102 14.2125 15.3756 13.7664 15.58 13.2403C15.7778 12.7314 15.913 12.1499 15.9519 11.2984C15.9908 10.4451 16 10.1727 16 8.00002C16 5.82733 15.9908 5.5549 15.9519 4.70161C15.913 3.8501 15.7778 3.26855 15.58 2.7597C15.3756 2.23363 15.102 1.78748 14.6573 1.34271C14.2125 0.897966 13.7664 0.624419 13.2403 0.420006C12.7314 0.222229 12.1499 0.0869798 11.2984 0.0481422C10.4451 0.00920926 10.1727 0 8.00002 0ZM7.99998 1.44154C10.1361 1.44154 10.3891 1.4497 11.2327 1.48819C12.0126 1.52376 12.4362 1.65408 12.7181 1.76364C13.0916 1.90877 13.3581 2.08212 13.638 2.36208C13.9179 2.64201 14.0913 2.90851 14.2364 3.28193C14.346 3.56383 14.4763 3.98742 14.5119 4.76741C14.5504 5.61098 14.5585 5.86401 14.5585 8.00012C14.5585 10.1362 14.5504 10.3892 14.5119 11.2328C14.4763 12.0128 14.346 12.4364 14.2364 12.7183C14.0913 13.0917 13.9179 13.3582 13.638 13.6381C13.3581 13.9181 13.0916 14.0914 12.7181 14.2366C12.4362 14.3461 12.0126 14.4764 11.2327 14.512C10.3892 14.5505 10.1362 14.5587 7.99998 14.5587C5.86372 14.5587 5.61075 14.5505 4.76728 14.512C3.98729 14.4764 3.56369 14.3461 3.2818 14.2366C2.90838 14.0914 2.64188 13.9181 2.36195 13.6381C2.08202 13.3582 1.90863 13.0917 1.76351 12.7183C1.65395 12.4364 1.52362 12.0128 1.48806 11.2328C1.44957 10.3892 1.44141 10.1362 1.44141 8.00012C1.44141 5.86401 1.44957 5.61098 1.48806 4.76741C1.52362 3.98742 1.65395 3.56383 1.76351 3.28193C1.90863 2.90851 2.08199 2.64201 2.36195 2.36208C2.64188 2.08212 2.90838 1.90877 3.2818 1.76364C3.56369 1.65408 3.98729 1.52376 4.76728 1.48819C5.61085 1.4497 5.86388 1.44154 7.99998 1.44154ZM3.89258 7.99994C3.89258 5.73107 5.73182 3.89182 8.0007 3.89182C10.2695 3.89182 12.1088 5.73107 12.1088 7.99994C12.1088 10.2688 10.2695 12.108 8.0007 12.108C5.73182 12.108 3.89258 10.2688 3.89258 7.99994ZM7.99871 10.6667C6.52593 10.6667 5.33203 9.47279 5.33203 8.00004C5.33203 6.52726 6.52593 5.33336 7.99871 5.33336C9.47146 5.33336 10.6654 6.52726 10.6654 8.00004C10.6654 9.47279 9.47146 10.6667 7.99871 10.6667ZM12.2705 4.68961C12.8007 4.68961 13.2305 4.25982 13.2305 3.72963C13.2305 3.19943 12.8007 2.76961 12.2705 2.76961C11.7404 2.76961 11.3105 3.19943 11.3105 3.72963C11.3105 4.25982 11.7404 4.68961 12.2705 4.68961Z"
  })));
};
const LinkedinLink = () => {
  return __jsx(StyledLink, {
    href: "https://www.linkedin.com/company/foglie-d-alloro",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "linkedin"
  }, __jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
  })));
};
const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
`;
const Spacer = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  width: 20px;
  height: 1px;
`;
const SocialLinks = props => {
  return __jsx(Wrapper, props, __jsx(FacebookLink, null), __jsx(Spacer, null), __jsx(InstagramLink, null), __jsx(Spacer, null), __jsx(LinkedinLink, null));
};

/***/ }),

/***/ "kmSd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Typography; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Typography = (_ref) => {
  let {
    text,
    variant,
    font
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["text", "variant", "font"]);

  const common = _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
    font-family: ${font === "secondary" ? `"Libre Baskerville", serif` : `"Sarabun", sans-serif`};
    font-weight: 400;
    margin: 0;
  `;

  const body1 = __jsx("p", _extends({
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ${common}
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.5px;
      `
  }, rest), text);

  switch (variant) {
    case "h1":
      return __jsx("h1", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-weight: ${font === "secondary" ? "400" : "300"};
            font-size: ${font === "secondary" ? "72px" : "96px"};
            line-height: ${font === "secondary" ? "89px" : "112px"};
            letter-spacing: ${font === "secondary" ? "-1.5px" : "-1.5px"};
          `
      }, rest), text);

    case "h2":
      return __jsx("h2", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-weight: ${font === "secondary" ? "400" : "300"};
            font-size: 60px;
            line-height: 72px;
            letter-spacing: -0.5px;
          `
      }, rest), text);

    case "h3":
      return __jsx("h3", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-size: 48px;
            line-height: ${font === "secondary" ? "64px" : "56px"};
          `
      }, rest), text);

    case "h4":
      return __jsx("h4", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-size: 34px;
            line-height: 56px;
          `
      }, rest), text);

    case "h5":
      return __jsx("h5", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.18px;
          `
      }, rest), text);

    case "h6":
      return __jsx("h6", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-weight: ${font === "secondary" ? "400" : "500"};
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.15px;
          `
      }, rest), text);

    case "sub1":
      return __jsx("p", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
          `
      }, rest), text);

    case "sub2":
      return __jsx("p", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.1px;
          `
      }, rest), text);

    case "body1":
      return body1;

    case "body2":
      return __jsx("p", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.25px;
          `
      }, rest), text);

    case "caption":
      return __jsx("p", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.4px;
          `
      }, rest), text);

    case "overline":
      return __jsx("p", _extends({
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            ${common}
            font-weight: 600;
            font-size: 10px;
            line-height: 16px;
            letter-spacing: 1.5px;
          `
      }, rest), text);

    default:
      return body1;
  }
};

/***/ }),

/***/ "kz3Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitle; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3vLF");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YgvS");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kmSd");
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin: 104px 0 32px 0;

  @media (max-width: ${_theme_theme__WEBPACK_IMPORTED_MODULE_3__[/* theme */ "a"].breakpoints.sm}) {
    margin-top: 64px;
  }
`;
const PageName = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const Dash = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: 40px;
  height: 2px;
  background-color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_3__[/* theme */ "a"].colors.brown[200]};
  margin-left: 16px;
`;
const PageTitle = (_ref) => {
  let {
    subtitle,
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["subtitle", "title"]);

  return __jsx(Wrapper, rest, __jsx(PageName, null, __jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__[/* Typography */ "a"], {
    text: subtitle,
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1.25px;
            color: ${_theme_theme__WEBPACK_IMPORTED_MODULE_3__[/* theme */ "a"].colors.brown[200]};
          `
  }), __jsx(Dash, null)), __jsx(_Typography__WEBPACK_IMPORTED_MODULE_4__[/* Typography */ "a"], {
    font: "secondary",
    variant: "h3",
    text: title,
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_0__["css"]`
          text-transform: capitalize;
        `
  }));
};

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "pJr+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);

const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
`;

/***/ }),

/***/ "rw5a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("L4qB");
/* harmony import */ var next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+3Ho");
/* harmony import */ var _locales_ru_common_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0MJ7");
var _locales_ru_common_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("0MJ7", 1);
/* harmony import */ var _locales_ru_footer_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("C9/r");
var _locales_ru_footer_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("C9/r", 1);
/* harmony import */ var _locales_ru_header_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("wH02");
var _locales_ru_header_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("wH02", 1);
/* harmony import */ var _locales_ru_contact_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ViM2");
var _locales_ru_contact_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("ViM2", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-nocheck







const namespaces = {
  'common': _locales_ru_common_json__WEBPACK_IMPORTED_MODULE_3__,
  'footer': _locales_ru_footer_json__WEBPACK_IMPORTED_MODULE_4__,
  'header': _locales_ru_header_json__WEBPACK_IMPORTED_MODULE_5__,
  'contact': _locales_ru_contact_json__WEBPACK_IMPORTED_MODULE_6__
};
function Page(p) {
  return __jsx(next_translate_I18nProvider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    lang: "ru",
    namespaces: namespaces,
    isStaticMode: true
  }, __jsx(_pages_contact__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], p));
}
Page = Object.assign(Page, _objectSpread({}, _pages_contact__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]));

if (_pages_contact__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getInitialProps) {
  Page.getInitialProps = ctx => _pages_contact__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getInitialProps(_objectSpread({}, ctx, {
    lang: 'ru'
  }));
}

const getStaticProps = ctx => _pages_contact__WEBPACK_IMPORTED_MODULE_2__[/* getStaticProps */ "b"](_objectSpread({}, ctx, {
  lang: 'ru'
}));


/***/ }),

/***/ "wH02":
/***/ (function(module) {

module.exports = JSON.parse("{\"about\":\"?? ??????\",\"about-company\":\"????????????????\",\"about-team\":\"??????????????\",\"portfolio\":\"??????????????????\",\"blog\":\"????????\",\"pricing\":\"????????\",\"contact\":\"??????????????????\",\"language\":\"????????\"}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });