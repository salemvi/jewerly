"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var NavHeader_1 = require("../NavHeader/NavHeader");
var header_module_scss_1 = require("./header.module.scss");
var Header = function () {
    return (React.createElement("header", { className: header_module_scss_1["default"].wrapper },
        React.createElement(link_1["default"], { href: '/' },
            React.createElement("h1", { className: header_module_scss_1["default"].logo },
                React.createElement("span", null, "J"),
                "EWERLY")),
        React.createElement("div", { className: header_module_scss_1["default"].menuWrapper },
            React.createElement(NavHeader_1.NavHeader, null),
            React.createElement("div", { className: header_module_scss_1["default"].line }),
            React.createElement(link_1["default"], { href: '/', className: header_module_scss_1["default"].navIcon },
                React.createElement(image_1["default"], { src: '/image/search.svg', width: 19, height: 19, alt: 'search' })),
            React.createElement(link_1["default"], { href: '/', className: header_module_scss_1["default"].navIcon },
                React.createElement(image_1["default"], { src: '/image/cart.svg', width: 19, height: 19, alt: 'basket of goods' })),
            React.createElement(link_1["default"], { href: '/', className: header_module_scss_1["default"].navIcon },
                React.createElement(image_1["default"], { src: '/image/user.svg', width: 19, height: 19, alt: 'user page' })))));
};
exports["default"] = Header;
