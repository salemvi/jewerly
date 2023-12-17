'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/pagination");
require("swiper/css/effect-fade");
var SliderItem_1 = require("./SliderItem/SliderItem");
var sliderImg_jpg_1 = require("../../../../public/image/sliderImg.jpg");
var sliderImg2_jpg_1 = require("../../../../public/image/sliderImg2.jpg");
var modules_1 = require("swiper/modules");
var Slider = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Swiper, { pagination: true, modules: [modules_1.EffectFade, modules_1.Autoplay, modules_1.Pagination], effect: 'fade', autoplay: {
                delay: 4000,
                disableOnInteraction: false
            }, className: "mySwiper" },
            React.createElement(react_1.SwiperSlide, null,
                React.createElement(SliderItem_1.SliderItem, { img: sliderImg_jpg_1["default"], title: "Gold big hoops ", price: 68.0, "object-fit": "cover" })),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement(SliderItem_1.SliderItem, { img: sliderImg2_jpg_1["default"], title: "Gold big hoops ", price: 68.0, "object-fit": "cover" })),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement(SliderItem_1.SliderItem, { img: sliderImg_jpg_1["default"], title: "Gold big hoops ", price: 68.0, "object-fit": "cover" })),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement(SliderItem_1.SliderItem, { img: sliderImg2_jpg_1["default"], title: "Gold big hoops ", price: 68.0, "object-fit": "cover" })),
            React.createElement(react_1.SwiperSlide, null,
                React.createElement(SliderItem_1.SliderItem, { img: sliderImg_jpg_1["default"], title: "Gold big hoops ", price: 68.0, "object-fit": "cover" })))));
};
exports["default"] = Slider;
