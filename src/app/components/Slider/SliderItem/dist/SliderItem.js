"use strict";
exports.__esModule = true;
exports.SliderItem = void 0;
var sliderItem_module_scss_1 = require("./sliderItem.module.scss");
var image_1 = require("next/image");
exports.SliderItem = function (_a) {
    var img = _a.img, title = _a.title, price = _a.price;
    return (React.createElement(React.Fragment, null,
        React.createElement("article", { className: sliderItem_module_scss_1["default"].item },
            React.createElement(image_1["default"], { src: img, width: 1440, height: 1100, alt: "slider Image", className: sliderItem_module_scss_1["default"].img }),
            React.createElement("div", { className: sliderItem_module_scss_1["default"].title }, title),
            React.createElement("div", { className: sliderItem_module_scss_1["default"].price },
                "$ ",
                price.toFixed(2)),
            React.createElement("button", { className: sliderItem_module_scss_1["default"].button }, "View Product"))));
};
