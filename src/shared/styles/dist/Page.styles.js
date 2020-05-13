"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var pxToEm_1 = require("../pxToEm");
exports.PageContainer = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 4rem auto\n    ", ";\n  display: grid;\n  grid-template-columns: 2fr 43.5%;\n  grid-template-rows: 1fr;\n  grid-gap: 6.5rem;\n  padding: 0 20%;\n\n  @media (max-width: ", ") {\n    grid-template-columns: 1fr 1fr;\n  }\n"], ["\n  margin: 4rem auto\n    ", ";\n  display: grid;\n  grid-template-columns: 2fr 43.5%;\n  grid-template-rows: 1fr;\n  grid-gap: 6.5rem;\n  padding: 0 20%;\n\n  @media (max-width: ", ") {\n    grid-template-columns: 1fr 1fr;\n  }\n"])), function (props) { return (props.currentVideoUrl.length > 1 ? '16rem' : '0'); }, pxToEm_1.pxToEm(900));
exports.PageInfoWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  @media (max-width: ", ") {\n    grid-column-start: 1;\n    grid-column-end: -1;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n\n  @media (max-width: ", ") {\n    grid-column-start: 1;\n    grid-column-end: -1;\n  }\n"])), pxToEm_1.pxToEm(900));
var templateObject_1, templateObject_2;
