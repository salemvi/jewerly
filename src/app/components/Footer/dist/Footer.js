"use strict";
exports.__esModule = true;
var footer_module_scss_1 = require("./footer.module.scss");
var link_1 = require("next/link");
var image_1 = require("next/image");
var Footer = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("footer", { className: footer_module_scss_1["default"].footer },
            React.createElement("div", { className: footer_module_scss_1["default"].wrapper },
                React.createElement("div", { className: footer_module_scss_1["default"].links },
                    React.createElement(link_1["default"], { href: "/", className: footer_module_scss_1["default"].link }, "CONTACT"),
                    React.createElement(link_1["default"], { href: "/", className: footer_module_scss_1["default"].link }, "TERMS OF SERVICES"),
                    React.createElement(link_1["default"], { href: "/", className: footer_module_scss_1["default"].link }, "SHIPPING AND RETURNS")),
                React.createElement("form", { action: "#", className: footer_module_scss_1["default"].form },
                    React.createElement("input", { type: "email", name: "email", required: true, placeholder: "Give an email, get the newsletter.", className: footer_module_scss_1["default"].input }),
                    React.createElement("button", { type: "submit", className: footer_module_scss_1["default"].submit }))),
            React.createElement("div", { className: footer_module_scss_1["default"].wrapper },
                React.createElement("div", { className: footer_module_scss_1["default"].privacy },
                    React.createElement("span", null, "\u00A9 2023 salemvi"),
                    ". Terms of use ",
                    React.createElement("span", null, "and"),
                    " privacy policy."),
                React.createElement("div", { className: footer_module_scss_1["default"].social },
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement(image_1["default"], { src: "/image/facebook.svg", width: 19, height: 19, alt: "facebook" })),
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement(image_1["default"], { src: "/image/linkedin.svg", width: 19, height: 19, alt: "linkedin" })),
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement(image_1["default"], { src: "/image/instagram.svg", width: 19, height: 19, alt: "instagram" })),
                    React.createElement(link_1["default"], { href: "/" },
                        React.createElement(image_1["default"], { src: "/image/twitter.svg", width: 19, height: 19, alt: "twitter" }))))),
        React.createElement("div", null)));
};
exports["default"] = Footer;
