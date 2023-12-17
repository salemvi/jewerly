"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./global.scss");
var Header_1 = require("./components/Header/Header");
var Footer_1 = require("./components/Footer/Footer");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(Header_1["default"], null),
            children,
            React.createElement(Footer_1["default"], null))));
}
exports["default"] = RootLayout;