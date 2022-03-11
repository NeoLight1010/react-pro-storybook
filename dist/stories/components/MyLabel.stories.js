"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.CustomBackgroundColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: {
            control: "select",
        },
        color: {
            control: "select",
        },
    }
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args))); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: "normal",
    label: "My Label",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: "normal",
    label: "My Label",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: "normal",
    label: "My Label",
    color: "secondary"
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: "normal",
    label: "My Label",
    color: "tertiary"
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: "normal",
    label: "My Label",
    backgroundColor: "#e286ff",
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: "normal",
    label: "My Label",
    fontColor: "#802f0f",
};
