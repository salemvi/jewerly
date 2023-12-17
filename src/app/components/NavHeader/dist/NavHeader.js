'use client';
"use strict";
exports.__esModule = true;
exports.NavHeader = void 0;
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var navHeader_module_scss_1 = require("./navHeader.module.scss");
var classnames_1 = require("classnames");
exports.NavHeader = function () {
    var pathname = navigation_1.usePathname();
    var navigation = [
        {
            name: 'Shop',
            href: '/shop'
        },
        {
            name: 'Blog',
            href: '/blog'
        },
        {
            name: 'Our Story',
            href: '/story'
        },
    ];
    return (React.createElement(React.Fragment, null, navigation.map(function (item, i) { return (React.createElement(link_1["default"], { href: item.href, key: i, className: classnames_1["default"](navHeader_module_scss_1["default"].link, pathname.includes(item.href) ? navHeader_module_scss_1["default"].selected : '') }, item.name)); })));
};
