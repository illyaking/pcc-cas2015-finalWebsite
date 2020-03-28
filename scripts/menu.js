/*the lines below are to prevent false errors from jslint or eslint in Brackets*/

/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: menu.js
Date: 12/2/18
Programmer: Illya King
*/

$(document).ready(function () {
//alert("jQuery Code is running");
    var $containerWidth = $(window).width();
    
    if ($containerWidth <= 480) {
        $("nav").hide();
        $(".cross").hide();
        $(".hamburger").show().on("click", function () {
            $(".hamburger").hide();
            $(".cross").show();
            $("nav").addClass("menu").slideToggle("slow");
        });
        $(".cross").on("click", function () {
            $(".cross").hide();
            $(".hamburger").show();
            $("nav").slideToggle("slow");
        });
        $(window).resize(function () {
            if ($(window).innerWidth() < 480) {
                $("nav").hide().addClass("menu");
            }
            if ($(window).innerWidth() > 481) {
                $("nav").show().removeClass("menu");
            }
        });
    }
    
    if ($containerWidth >= 481) {
        $("nav").show().removeClass("menu");
        $(window).resize(function () {
            if ($(window).innerWidth() < 480) {
                $("nav").hide().addClass("menu");
                $(".cross").hide();
                $(".hamburger").show().on("click", function () {
                    $(".hamburger").hide();
                    $(".cross").show();
                    $("nav").addClass("menu").show();
                });
                $(".cross").on("click", function () {
                    $(".cross").hide();
                    $(".hamburger").show();
                    $("nav").hide();
                });
            }
            if ($(window).innerWidth() > 481) {
                $("nav").show().removeClass("menu");
            }
        });
    }
});
