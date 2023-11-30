/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Parse = exports.parse = void 0;\r\nconst parse_1 = __webpack_require__(/*! ./parse */ \"./src/parse.ts\");\r\nexports.parse = parse_1.default;\r\nconst Parse = parse_1.default;\r\nexports.Parse = Parse;\r\nexports[\"default\"] = parse_1.default;\r\n\n\n//# sourceURL=webpack://rss-to-json/./src/index.ts?");

/***/ }),

/***/ "./src/parse.ts":
/*!**********************!*\
  !*** ./src/parse.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst fast_xml_parser_1 = __webpack_require__(/*! fast-xml-parser */ \"fast-xml-parser\");\r\nconst axios_1 = __webpack_require__(/*! axios */ \"axios\");\r\nexports[\"default\"] = async (url, config) => {\r\n    var _a, _b;\r\n    if (!/(^http(s?):\\/\\/[^\\s$.?#].[^\\s]*)/i.test(url))\r\n        return null;\r\n    const { data } = await (0, axios_1.default)(url, config);\r\n    const xml = new fast_xml_parser_1.XMLParser({\r\n        attributeNamePrefix: '',\r\n        textNodeName: '$text',\r\n        ignoreAttributes: false,\r\n    });\r\n    const result = xml.parse(data);\r\n    let channel = result.rss && result.rss.channel ? result.rss.channel : result.feed;\r\n    if (Array.isArray(channel))\r\n        channel = channel[0];\r\n    const rss = {\r\n        title: (_a = channel.title) !== null && _a !== void 0 ? _a : '',\r\n        description: (_b = channel.description) !== null && _b !== void 0 ? _b : '',\r\n        link: channel.link && channel.link.href ? channel.link.href : channel.link,\r\n        image: channel.image ? channel.image.url : channel['itunes:image'] ? channel['itunes:image'].href :  false ? 0 : channel.icon,\r\n        category: channel.category || [],\r\n        items: [],\r\n    };\r\n    let items = channel.item || channel.entry || [];\r\n    if (items && !Array.isArray(items))\r\n        items = [items];\r\n    for (let i = 0; i < items.length; i++) {\r\n        const val = items[i];\r\n        const media = {};\r\n        const obj = {\r\n            id: val.guid && val.guid.$text ? val.guid.$text : val.id,\r\n            title: val.title && val.title.$text ? val.title.$text : val.title,\r\n            description: val.summary && val.summary.$text ? val.summary.$text : val.description,\r\n            link: val.link && val.link.href ? val.link.href : val.link,\r\n            author: val.author && val.author.name ? val.author.name : val['dc:creator'],\r\n            published: val.created ? Date.parse(val.created) : val.pubDate ? Date.parse(val.pubDate) : Date.now(),\r\n            created: val.updated ? Date.parse(val.updated) : val.pubDate ? Date.parse(val.pubDate) : val.created ? Date.parse(val.created) : Date.now(),\r\n            category: val.category || [],\r\n            content: val.content && val.content.$text ? val.content.$text : val['content:encoded'],\r\n            enclosures: val.enclosure ? (Array.isArray(val.enclosure) ? val.enclosure : [val.enclosure]) : [],\r\n        };\r\n        ['content:encoded', 'podcast:transcript', 'itunes:summary', 'itunes:author', 'itunes:explicit', 'itunes:duration', 'itunes:season', 'itunes:episode', 'itunes:episodeType', 'itunes:image'].forEach((s) => {\r\n            if (val[s])\r\n                obj[s.replace(':', '_')] = val[s];\r\n        });\r\n        if (val['media:thumbnail']) {\r\n            Object.assign(media, { thumbnail: val['media:thumbnail'] });\r\n            obj.enclosures.push(val['media:thumbnail']);\r\n        }\r\n        if (val['media:content']) {\r\n            Object.assign(media, { thumbnail: val['media:content'] });\r\n            obj.enclosures.push(val['media:content']);\r\n        }\r\n        if (val['media:group']) {\r\n            if (val['media:group']['media:title'])\r\n                obj.title = val['media:group']['media:title'];\r\n            if (val['media:group']['media:description'])\r\n                obj.description = val['media:group']['media:description'];\r\n            if (val['media:group']['media:thumbnail'])\r\n                obj.enclosures.push(val['media:group']['media:thumbnail'].url);\r\n            if (val['media:group']['media:content'])\r\n                obj.enclosures.push(val['media:group']['media:content']);\r\n        }\r\n        Object.assign(obj, { media });\r\n        rss.items.push(obj);\r\n    }\r\n    return rss;\r\n};\r\n\n\n//# sourceURL=webpack://rss-to-json/./src/parse.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "fast-xml-parser":
/*!**********************************!*\
  !*** external "fast-xml-parser" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("fast-xml-parser");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;