/*!
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of Languedoc-Roussillon for Mapael
* Equirectangular projection
* 
* @author CCM Benchmark Group
* @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
*/
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.fn.mapael);
    }
}(function ($, Mapael) {

	"use strict";

	$.extend(true, Mapael,
		{
			maps :  {
				france_region_91 : {
					width : 144.28798,
					height : 174.62637,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = -76.7939;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 2966.1044;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-11" : "m 25.79,100.29 c -0.72,0.78 -1.7,1.65 -1.33,2.83 -0.07,0.55 -0.12,1.5 -0.72,1.7 -0.92,-0.41 -1.42,-1.33 -2.1,-1.95 -0.96,0.29 -1.77,1.16 -2.87,1.2 -0.58,0.02 -1.61,0.29 -1.61,-0.61 -0.33,-0.53 -0.42,-1.54 -1.08,-1.68 -0.33,0.24 -0.29,0.85 -0.85,0.75 -0.71,0.12 -1.37,1.05 -2.06,0.37 -0.37,-0.15 -0.73,0.02 -0.93,-0.38 -0.92,-0.43 -2.2,0.02 -2.07,1.18 -0.13,0.45 -0.98,0.78 -0.85,0.02 0.17,-1.05 -0.95,-1.54 -1.23,-2.4 -0.58,-0.55 -1.14,0.23 -1.1,0.8 0.11,0.9 -1.28,0.27 -1.2,1.18 0.15,0.38 0.49,0.95 -0.2,0.97 -0.77,0.44 -0.41,1.66 -0.24,2.37 0.32,0.42 0.19,1.31 -0.55,0.96 -0.46,-0.15 -0.88,0.18 -1.22,0.26 -0.43,-0.32 -1.07,-0.61 -1.41,-0.03 -0.6,0.03 -0.87,0.8 -0.29,1.11 0.17,0.78 -1.35,0.81 -0.96,1.71 -0.08,0.62 -0.59,1.09 -0.91,1.49 0.45,0.95 0.4,2.09 1.11,2.93 0.53,0.61 0.31,1.37 -0.17,1.89 -0.37,0.5 0.04,1.12 0.64,0.88 0.9,0.19 1.31,1.26 2.17,1.59 0.81,0.48 1.76,0.55 2.54,1.1 0.64,0.3 0.56,-1.08 1.05,-0.75 0.08,0.61 0.62,0.89 1.2,0.83 -0.08,0.51 0.34,1.76 1,1.07 0.51,-0.66 1.23,-0.03 1.68,0.33 1.03,0.33 0.54,1.69 0.81,2.48 -0.12,0.46 0.53,0.92 0.29,1.29 -0.55,-0.11 -1.05,0.33 -0.74,0.88 0.27,0.46 0.97,0.13 1.24,0.67 0.6,0.44 0.9,1.25 0.32,1.84 -0.46,0.56 0.52,0.82 0.33,1.41 -0.05,0.77 -0.21,1.91 0.72,2.17 -0.09,0.31 -0.55,0.89 -0.84,0.38 -0.48,-0.31 -1.33,-0.46 -1.61,0.14 -0.53,0.03 -0.87,0.71 -0.27,0.96 0.85,0.31 2.15,0.61 2.05,1.79 -0.17,1.09 0.34,2.78 -1,3.28 -1.21,0.81 -2.82,0.32 -4.03,1.03 -0.07,0.63 -0.8,1.09 -0.73,1.72 0.68,0.47 1.55,0.74 1.97,1.55 0.25,0.54 1.05,1.14 0.94,1.76 -0.58,0.02 -0.93,0.92 -0.15,0.9 0.86,0.64 1.66,1.52 2.87,1.4 1.63,0.32 2.8,-1.71 4.38,-1.1 0.51,0.42 0.6,1.18 1.21,1.55 0.66,0.51 1.25,1.16 1.81,1.72 0.92,0.06 1.63,1.28 1.07,2.09 -0.2,0.61 0.38,1.91 0.96,0.93 0.63,-0.86 1.78,-1.03 2.46,-1.8 0.43,-0.41 0.44,-1.43 1.07,-1.52 0.86,0.8 2.3,0.11 3,-0.64 1.09,-0.58 1,-1.6 0.69,-2.62 -0.22,-1.07 -0.12,-2.31 -0.81,-3.19 0.13,-0.72 -0.8,-1.4 -0.2,-2.06 1.71,-1.18 3.83,-0.49 5.68,-0.07 1.02,-0.17 2.03,-1.17 3.12,-0.58 1.17,0.05 2.33,-0.02 3.44,0.45 1.25,0.29 2.57,-0.2 3.78,0.4 1.24,0.15 3.16,0.04 3.51,-1.45 0.22,-1.6 1.55,-2.74 3,-3.23 0.59,-0.43 1.42,-0.89 2.14,-0.84 0.41,0.6 0.87,1.22 1.64,1.36 1.43,1.26 3.42,1.63 5,2.69 1.1,0.43 1.63,-1.03 1.65,-1.87 0.12,-0.34 -0.03,-1.44 0.64,-1.06 0.49,0.15 1.72,0.76 1.66,-0.22 0.01,-0.67 -0.27,-1.52 -1.01,-1.63 -1.09,-0.5 -1.56,-1.94 -0.83,-2.9 0.18,-0.34 1.09,-0.46 0.8,0.12 -0.19,0.56 -1.06,1.89 -0.05,2.12 1.03,-0.56 1.17,-2.02 1.37,-3.07 -0.03,-1.24 0.51,-2.35 1.18,-3.33 0.32,-0.6 0.28,-1.88 -0.71,-1.45 -1.17,-0.22 -0.87,-1.84 -0.97,-2.72 -0.35,-1.15 1.8,-1.6 1.93,-0.49 -0.22,0.46 -1.24,0.4 -0.94,1.15 0.19,0.55 0.94,1.69 1.54,0.89 0.29,-0.82 0.69,-1.61 1.25,-2.32 1.32,-1.94 2.48,-3.97 3.65,-6.01 -0.6,-0.84 -1.62,-1.47 -2.13,-2.45 -0.26,-0.48 -0.74,-1.11 -1.3,-0.59 -0.57,0.58 -1.71,0.22 -1.72,-0.6 -0.77,-0.36 -1.76,0.3 -2.5,-0.3 -1,-0.08 -1.27,-1.55 -2.36,-1.28 -0.57,0.16 -1.36,0.19 -1.44,-0.57 -0.31,-0.59 0.18,-1.62 -0.43,-1.99 -0.94,0.06 -2.1,0.95 -2.88,0.05 -0.5,-0.51 -1.19,0.09 -1.68,-0.46 -0.56,-0.13 -0.53,-1.28 -1.03,-0.96 -0.13,1.14 -1.69,0.91 -2.52,1.06 -0.79,0.18 0.21,0.93 -0.36,1.24 -0.8,0.58 -0.97,1.52 -1.24,2.37 -0.26,0.63 -1.25,1.37 -1.76,0.56 -0.46,-0.5 -1.12,-1.01 -1.79,-0.89 -0.54,-0.79 0.11,-2.13 -0.71,-2.77 -0.67,-0.07 -0.52,0.92 -1.11,1.13 -0.51,0.65 -1.59,-0.04 -1.94,0.8 -0.55,0.08 -1.04,-0.72 -1.13,-1.21 -0.27,-0.88 -0.65,-2.25 -1.85,-2.01 -0.6,-0.02 -1.1,-0.67 -0.65,-1.21 0.46,-0.98 0.1,-2.62 1.27,-3.12 0.52,0.18 1.07,-0.41 0.5,-0.77 -0.99,-1.13 -2.73,-0.21 -3.74,-1.26 -0.98,-0.63 -2.16,0.08 -3.23,-0.11 -0.87,0.07 -1.17,1.5 -2.15,0.89 -1.21,-0.39 -2.32,-1.07 -3.47,-1.57 -0.5,-0.42 -1.26,0.46 -1.67,-0.21 -0.22,-0.11 -0.43,-0.62 -0.72,-0.42 z",
					    "department-34" : "m 93.82,66.16 c -0.82,0.07 -1.52,0.67 -2.25,1.01 -0.31,0.33 -0.04,0.89 -0.48,1.16 -0.3,0.53 -0.07,1.72 -0.97,1.67 -0.55,-0.27 -0.64,0.3 -0.81,0.63 -0.6,0.31 -0.17,-1.18 -0.88,-0.81 -0.78,0.75 -1.16,1.86 -1.94,2.65 -0.49,0.75 0.95,0.9 0.72,1.52 -0.47,0.45 -1.21,0.55 -1.6,-0.06 -0.42,-0.22 -0.92,0.1 -1.33,-0.3 -1.1,-0.46 -0.14,-2.23 -1.27,-2.58 -0.31,0.27 -0.73,0.3 -1.09,0.51 -0.64,0.64 -1.37,1.49 -2.31,1.52 -0.41,-0.2 -0.62,-0.65 -0.12,-0.88 0.81,-1.12 -0.35,-2.91 -1.68,-2.23 -0.83,-0.26 -2.11,-0.17 -2.31,0.9 -0.74,0.87 -2.12,0.09 -3.07,0.26 -0.7,0.36 -1.08,1.18 -1.64,1.74 -0.53,0.87 1.09,1.57 0.37,2.43 -0.78,0.73 -1.8,1.34 -2.93,1.1 -1.15,-0.07 -2.45,0.07 -3.31,-0.83 -0.57,-0.34 -1.98,-1.05 -2.21,-0.02 0.15,0.57 0.08,1.13 -0.4,1.5 -0.14,0.5 0.24,0.97 0.27,1.48 0.31,0.46 1,1.02 0.35,1.55 -0.92,0.75 -0.48,2.17 -0.15,3.11 0.53,0.33 -0.18,0.66 -0.12,1.06 -0.87,0.18 -1.86,0.22 -2.52,-0.47 -1.09,-0.61 -2.16,0.32 -3.07,0.68 -0.93,-0.17 -0.89,1.2 -0.97,1.81 -0.26,1.02 -1.6,0.38 -2.1,1.19 -0.67,0.32 -1.47,0.25 -2.14,0.61 -0.83,-0.25 -0.97,0.96 -1.76,0.88 -0.61,0.09 -1.49,1.1 -1.98,0.29 -0.63,-1.7 -2.83,-2.36 -4.45,-1.91 -0.67,0.89 -0.5,2.18 -1.17,3.09 -0.05,0.55 0.8,0.96 0.31,1.55 -0.92,1.09 0.53,2.19 1.15,2.96 0.26,0.39 0.99,0.95 0.93,1.39 -0.96,0.33 -0.69,1.75 -0.44,2.52 0.18,0.39 0.09,0.83 -0.4,0.81 -0.78,0.49 -1.26,1.4 -2.12,1.73 -0.16,0.59 -1.67,0.5 -1.18,1.3 0.5,0.26 0.74,0.67 0.19,1.05 -0.42,0.33 -1.19,0.14 -1.34,0.81 -0.14,0.91 -0.19,1.81 -0.57,2.66 -0.08,1.12 1.41,0.36 1.8,1.14 0.71,0.84 0.56,2.33 1.7,2.74 0.29,-0.15 0.35,-0.63 0.83,-0.44 0.79,0.08 1.57,-0.4 1.71,-1.18 0.21,-0.36 0.78,-0.73 0.92,-0.1 0.51,0.78 -0.01,1.88 0.52,2.61 0.88,-0.11 1.42,0.81 2.08,1.2 1.06,0.13 1.46,-1.11 1.49,-1.96 0.27,-0.72 1.51,-1.23 0.9,-2.07 0.43,-0.63 1.54,-0.2 2.18,-0.61 1.87,-0.6 -0.53,-1.32 1.16,-1.4 0.81,1.38 0.7,1.72 1.47,1.74 0.57,-0.53 0.96,0.23 1.41,0.54 0.95,0.34 1.89,-0.48 2.87,-0.32 0.31,0.74 -0.39,2.53 0.72,2.5 0.86,-0.23 1.66,0.09 2.22,0.76 0.56,0.42 1.24,0.67 1.87,0.94 0.37,-0.36 1.19,-0.53 1.59,-0.09 0.19,0.74 0.99,1.08 1.61,0.58 1.06,-0.63 1.52,0.99 2.1,1.56 0.57,0.66 1.65,1.92 2.55,1.09 1.18,-1.47 3.09,-2.15 4.32,-3.57 1.33,-1.41 3.44,-1.73 5.24,-1.14 0.65,0.22 1.45,0.2 1.68,-0.57 0.99,-2.19 2.87,-3.78 4.26,-5.72 1,-0.81 2.34,-1.11 3.51,-1.57 0.82,-0.69 1.57,-1.44 2.54,-1.92 1.24,-0.98 2.77,-1.74 3.68,-3.06 -0.25,-0.66 -0.99,0.31 -1.36,0.49 -1.29,1.01 -2.64,2.36 -4.42,2.2 0.83,-0.73 2.02,-0.84 2.89,-1.57 1.21,-0.51 1.68,-1.77 1.92,-2.95 0.24,-1.01 1.43,-0.5 1.98,-1.15 0.98,-0.62 1.1,-2.12 2.37,-2.32 1.72,-0.43 3.28,-1.33 4.86,-2.12 1.22,-0.07 2.44,-0.96 3.62,-0.79 -0.14,0.96 1.2,0.62 1.76,0.67 0.58,0.11 0.82,-0.33 0.98,-0.78 0.82,-0.93 1.66,-2.06 1.8,-3.32 -0.56,-1.29 -1.27,-2.54 -1.58,-3.92 -0.39,-0.59 -0.35,-1.69 -1.08,-1.93 -0.64,0.21 -1.25,-0.04 -1.54,-0.67 -0.33,-0.49 -0.51,-1.39 -1.29,-1.1 -0.7,-0.11 -1.01,-0.79 -1.15,-1.39 -0.56,-0.66 -1.33,-1.65 -2.28,-1.49 -0.52,0.34 -1.48,0.81 -1.71,-0.09 0.04,-0.7 1.01,-1.52 0.4,-2.17 -0.6,0.07 -0.68,-0.74 -1.32,-0.62 -0.83,-0.19 -1.08,-1.09 -1.16,-1.8 -0.52,-0.29 -1.15,0.31 -1.74,0.18 -0.8,-0.05 -1.66,1.12 -2.37,0.36 -0.63,-0.25 -1.47,-1.01 -0.9,-1.72 0.59,-0.72 1.24,-1.98 0.59,-2.81 -0.77,-0.03 -1.58,-0.51 -1.49,-1.4 -0.37,-0.61 -1.32,-0.44 -1.93,-0.52 z",
					    "department-30" : "m 105.53,33.76 c -0.73,0.58 -1.04,1.42 -1.28,2.27 -0.17,0.64 -0.86,0.84 -1,1.46 -0.72,0.05 -1.72,-0.41 -2.14,0.46 -0.95,0.7 0.26,1.15 0.54,1.8 0.53,0.79 0.76,1.89 1.66,2.32 0.35,0.98 -1.52,1.59 -0.61,2.54 0.31,0.49 -0.17,1.88 0.86,1.5 0.74,0.05 1.34,1.34 0.37,1.57 -1.06,0.14 -0.39,1.46 -0.67,2.13 -0.24,0.54 -0.35,1.25 0.28,1.57 0.31,0.45 0.44,1.06 0.88,1.4 0.25,0.84 -0.84,-0.01 -1.15,-0.1 -0.42,-0.38 -1.1,-0.38 -0.98,0.32 0.14,0.67 -0.77,0.7 -0.85,1.29 -0.7,0.2 -1.24,0.79 -1.68,1.38 -0.84,-0.28 -1.86,-0.85 -2.64,-0.13 -1.42,0.38 -2.21,-1.33 -3.44,-1.73 -0.85,-0.56 -1.99,-0.61 -2.59,-1.53 -0.51,-0.5 -0.88,0.71 -1.39,0.07 -0.86,-0.12 -1.1,1.57 -0.38,1.92 0.38,0.42 -0.57,0.77 -0.43,1.29 0.04,0.96 -1.31,0.88 -1.95,0.77 -0.7,-0.31 -1.45,-0.23 -2.06,0.19 -1.52,-0.96 -3.48,-0.38 -5.06,-1.07 -0.26,-0.73 -0.59,-1.48 -1.39,-1.78 -0.5,-0.36 -0.89,-0.96 -1.62,-0.7 -0.85,0.17 -1.66,0.75 -1.79,1.63 -0.63,0.62 0,1.6 -0.36,2.24 -0.63,0.62 -2.06,0.18 -2.3,1.19 0.32,0.54 0.84,1.32 1.42,1.42 0.24,-0.34 0.93,-1.06 1.22,-0.37 0.22,0.51 0.58,1.83 1.38,1.28 0.33,-0.35 0.71,0.3 1.11,0.08 0.95,0.82 2.34,1.22 3,2.35 0.04,0.87 -0.59,1.43 -1.27,1.83 -0.58,0.55 -0.54,1.72 -1.57,1.67 -0.61,0.19 -0.67,0.96 -1.27,1.22 -0.52,0.55 -0.38,1.66 0.19,2.11 1.03,0.37 2.59,-0.36 3.17,0.93 0.28,0.74 -0.14,1.55 -0.19,2.27 0.71,0.32 1.42,-0.59 1.92,-1.04 0.57,-0.63 1.91,-1.3 2.31,-0.15 -0.03,0.83 0.08,2.24 1.25,2.08 0.7,-0.22 1.26,0.97 1.89,0.25 0.26,-0.62 -1.15,-0.76 -0.62,-1.49 0.8,-0.89 1.22,-2.11 2.12,-2.88 0.7,-0.07 1.99,0.76 2.27,-0.29 -0.01,-0.72 0.52,-1.28 0.49,-1.97 0.45,-0.75 1.44,-0.64 1.99,-1.27 0.88,-0.1 1.93,-0.07 2.72,0.29 0.06,0.59 0.19,1.58 1.04,1.41 1.15,0.25 0.78,1.84 0.27,2.54 -0.48,0.48 -0.93,1.51 -0.11,1.89 0.65,0.49 1.54,0.57 2.18,0.05 0.8,-0.17 1.7,-0.11 2.37,-0.65 0.55,0.22 0.1,1.17 0.5,1.61 0.29,0.7 1.22,0.32 1.64,0.7 0,0.46 0.58,0.51 0.81,0.62 0.09,0.86 -0.78,1.55 -0.58,2.37 0.72,0.7 1.42,-0.95 2.18,-0.19 0.89,0.53 1.8,1.21 2.08,2.23 0.29,0.61 0.92,0.46 1.41,0.61 0.36,0.41 0.33,1.1 0.93,1.38 0.52,0.54 1.48,0.07 1.78,0.92 0.17,0.89 0.83,1.61 0.85,2.55 0.26,1.11 1.24,2.03 1.32,3.15 -0.39,1.35 -1.37,2.4 -1.98,3.61 -0.4,0.52 -1.41,0.12 -2.01,0.37 -0.71,0.1 -0.24,0.73 -0.01,1.07 -0.07,0.51 -0.11,1.13 0.53,1.31 1.47,1.06 0.82,3.16 1.66,4.56 0.83,0.65 2.02,1.65 3.13,1.16 0.7,-0.81 0.03,-2.43 1.36,-2.74 0.95,-0.5 2.34,-0.69 2.86,-1.71 -0.09,-0.42 -0.63,-1.62 0.09,-1.67 0.28,0.35 0.25,1.25 0.95,0.99 0.67,-0.61 1.67,-0.7 2.35,-1.32 0.55,-0.06 1.11,-0.35 0.94,-1 0.31,-0.74 1.14,-0.64 1.76,-0.68 0.46,-0.37 1.13,-0.98 1.01,-1.59 -0.65,-0.38 -1.95,0.21 -2.05,-0.89 0.39,-1.18 0.74,-2.65 2,-3.19 0.55,-0.49 0.07,-1.59 0.96,-1.83 1.47,-0.61 3.17,-0.49 4.49,0.43 0.36,0.38 1.65,0.62 1.45,-0.23 -1.03,-1.95 0.35,-3.99 1.19,-5.72 0.53,-1.09 0.14,-2.25 -0.14,-3.31 0.26,-0.47 1.5,-1.24 0.31,-1.28 -0.47,-0.11 -0.45,-1.08 -0.02,-1.24 1.05,-0.48 2.07,-1.11 2.78,-2.05 1.06,-0.44 1.11,-1.93 2.29,-2.17 0.97,-0.55 2.15,-1.39 2.27,-2.57 -0.11,-0.42 -0.04,-1.22 0.61,-0.94 0.68,0.27 1.05,-0.41 0.82,-0.99 0.04,-0.83 -1.08,-0.83 -1.23,-1.58 -0.4,-0.92 -1.25,-1.59 -1.49,-2.56 -0.4,-0.42 -1.03,-0.63 -1.2,-1.24 -0.53,-0.33 -1.34,0.89 -1.59,-0.06 -0.52,-0.9 -0.91,-1.89 -0.41,-2.9 0.18,-1.31 0.61,-2.86 -0.04,-4.1 -0.58,-0.32 -0.13,-0.87 -0.24,-1.31 -0.35,-0.45 -1.48,0.22 -1.51,-0.59 0.37,-1.08 -0.58,-1.8 -1.01,-2.65 -0.17,-0.57 -0.59,-1.85 -1.37,-1.28 -0.48,0.09 -0.5,-0.76 -1.01,-0.82 -0.9,-0.45 -2.07,-0.63 -2.42,-1.72 -0.34,-0.72 -1.38,-0.44 -1.68,-1.18 -0.72,-0.2 -1.75,-0.55 -2.41,-0.09 -0.39,1.09 0.17,2.67 -0.8,3.49 -0.39,0.07 -0.46,-0.54 -0.96,-0.33 -0.9,0.28 -1.6,-0.85 -1.1,-1.6 0.16,-0.56 0.67,-2.04 -0.38,-1.96 -1,0.32 -2.46,0.01 -2.95,1.22 -0.35,0.61 -1.46,0.44 -1.37,1.34 -0.05,0.98 -0.52,2.48 -1.68,2.53 -1.18,-0.34 -1.67,-1.75 -2.87,-2.13 -0.63,-0.14 -0.31,-1.35 -1.1,-1.06 -0.48,0.31 -1.42,0.2 -1.27,-0.55 -0.04,-0.56 -0.57,-0.99 -1.05,-0.65 -0.95,0.01 -1.96,0.11 -2.62,0.85 -0.54,0.53 -1.32,-0.7 -0.75,-1.07 0.69,-0.9 0.73,-2.41 -0.01,-3.29 -0.21,-0.63 0.52,-0.74 0.88,-0.98 0.48,-0.94 -1.49,-0.91 -1.01,-1.89 0.28,-0.66 -0.27,-1.1 -0.83,-1.25 -0.41,-0.12 -0.66,-0.87 -1.09,-0.74 z",
					    "department-48" : "m 76.55,0.13 c -0.38,0.24 -0.42,0.93 -1.02,0.79 -0.74,0.24 -1.19,0.96 -1.93,1.18 -0.34,0.4 -0.72,0.97 -1.31,0.57 -0.41,-0.04 -0.58,-0.97 -1,-0.42 -0.25,0.5 0.32,1.32 -0.5,1.46 -0.85,0.27 -0.29,1.09 -0.21,1.62 -0.39,0.81 -1.55,0.99 -2.01,1.63 -1.3,-0.2 -1.39,-1.91 -2.38,-2.46 -1.1,0.26 -1.66,1.43 -1.58,2.49 -0.36,0.56 -0.02,1.39 -0.34,1.9 -0.93,-0.05 -1.09,0.97 -1.72,1.42 -0.95,1.15 0.05,2.9 -1.03,4.03 -0.56,0.72 0.17,1.73 -0.02,2.42 -1.35,0.12 -1.21,1.81 -1.72,2.72 -0.37,0.77 -0.99,1.87 -0.09,2.54 0.91,0.93 1.31,2.24 2.44,3 0.56,0.63 1.57,1.28 1.55,2.19 -0.22,1.3 -0.44,2.66 -0.42,3.96 0.6,0.72 1.65,1.05 2.15,1.8 0.25,0.58 0.85,0.98 0.76,1.69 0.33,0.44 0.33,1.01 -0.06,1.46 -0.6,0.44 0.16,0.85 0.02,1.38 0.22,0.76 -0.63,1.04 -0.58,1.76 -0.23,0.7 0.61,1.09 0.27,1.78 0.03,0.84 1.19,1.21 0.98,2.16 0.11,1.21 -1.72,1.96 -1.09,3.25 0.47,0.47 0.55,-0.4 0.82,-0.55 0.98,-0.02 0.2,1.92 1.34,1.76 0.89,-0.07 1.47,0.86 2.31,1.03 0.62,0.42 -0.28,1.23 -0.24,1.78 -0.3,0.51 0.11,1.25 0.73,0.9 0.75,-0.44 1.63,-0.52 2.43,-0.78 0.34,-0.43 1.16,0.17 1.67,0 0.65,0.02 1.81,-0.06 1.8,0.87 0.21,0.74 0.7,1.28 1.36,1.61 0.65,0.65 1.73,0.96 1.89,1.98 1.13,1.19 3.01,0.33 4.39,0.96 0.43,0.26 0.91,0.56 1.33,0.04 0.95,-0.34 2.17,0.78 3.05,-0.11 0.31,-0.44 0.4,-1 0.61,-1.45 -0.37,-0.52 -0.55,-1.13 -0.24,-1.76 0.1,-0.53 0.65,-0.78 1.09,-0.42 0.44,0.09 0.48,-0.74 1,-0.4 0.45,0.4 0.64,1.15 1.38,1.18 0.92,-0.06 1.4,0.88 2.25,1.09 0.7,0.4 1.27,1.49 2.08,1.39 0.72,-0.51 1.59,-0.78 2.39,-0.27 1.01,0.6 1.25,-1.11 2.21,-1.17 0.37,-0.18 0.09,-0.83 0.66,-0.69 0.56,-0.19 0.1,-1.09 0.45,-1.29 0.37,0.11 1.22,0.79 1.31,0.03 0.15,-0.62 -0.59,-0.82 -0.86,-1.13 0.26,-1.12 0.14,-2.44 0.63,-3.48 0.49,0.02 1.08,-0.42 0.62,-0.92 -0.33,-0.6 -1.22,0.04 -1.37,-0.77 -0.04,-0.55 0.09,-1.2 -0.48,-1.55 -0.45,-0.61 0.73,-1.14 0.93,-1.62 0.53,-0.67 -0.89,-0.97 -1.05,-1.64 -0.23,-1.16 -1.47,-1.85 -1.72,-2.94 0.74,-0.09 1.05,-1.25 1.92,-0.83 1.38,0.04 1.87,-1.57 2.29,-2.59 0.32,-0.51 0.9,-1.11 0.47,-1.74 -0.06,-1.73 -0.55,-3.42 -1.26,-4.99 -0.25,-0.73 -0.38,-2.07 -1.48,-1.76 -0.6,-0.15 -0.65,-1.04 -1.06,-1.44 -0.02,-0.55 0.05,-1.14 -0.54,-1.43 -0.2,-1.07 0.15,-2.3 -0.63,-3.23 -0.38,-0.52 -0.49,-1.23 -0.02,-1.69 -0.19,-0.46 -0.69,-0.82 -0.74,-1.4 -0.27,-0.71 0.85,-1.6 -0.08,-2.07 -0.45,-0.24 -1.39,-0.14 -1.44,-0.83 0.26,-0.38 0.7,-1.37 -0.18,-1.15 -0.37,0.1 -0.82,0.78 -1.06,0.1 -0.27,-0.9 -0.92,-1.73 -1.8,-2.03 -0.49,-0.64 -0.35,-1.82 -1.22,-2.17 -1.08,0.12 -2.18,0.3 -3.26,0.38 -0.5,-0.17 -0.35,-0.82 0.1,-0.94 0.25,-0.8 -0.35,-1.85 -1.11,-2.17 -0.59,-0.16 -1.29,0.2 -1.78,-0.21 -0.67,0.32 -0.06,1.28 -0.45,1.82 -0.35,0.49 -0.08,1.17 -0.38,1.62 -0.32,0.26 -0.69,-0.43 -1.1,-0.11 -1.04,0.28 -2.44,-0.07 -3.06,1.09 -0.24,0.45 -0.77,0.44 -0.96,-0.05 -0.19,-0.52 -0.86,-0.89 -0.9,-1.4 -0.15,-0.92 -0.94,-1.63 -0.91,-2.61 -0.54,-1.2 -1.19,-2.4 -1.03,-3.78 0.05,-0.75 -0.37,-1.65 -1.23,-1.55 -0.51,-0.03 -0.55,-0.52 -0.74,-0.81 -0.07,-0.04 -0.16,-0.04 -0.23,-0.01 z",
					    "department-66" : "m 53.39,135.98 c -1.47,0.48 -3.19,1.09 -4.13,2.38 -0.49,1.16 -0.84,3.03 -2.47,2.91 -3.09,0.07 -6.18,-0.47 -9.23,-0.78 -1.43,-0.28 -2.78,1.05 -4.23,0.32 -1.28,-0.36 -3.22,-0.67 -4.1,0.55 -0.06,1.74 1.01,3.28 1.02,5.06 0.7,1.31 -0.19,2.18 -1.18,2.94 -1.05,0.97 -3.08,0.12 -3.63,1.73 -0.75,0.93 -2.23,1.15 -2.72,2.24 -0.84,0.38 -1.13,-0.91 -1.99,-0.89 -1.2,-0.43 -2.37,0.27 -3.6,0.18 -0.99,0.08 -1.83,0.9 -2.78,0.4 -1.08,0.63 -1.02,2.61 -2.51,2.73 -0.6,0.85 -1.61,0.19 -2.39,0.54 -0.33,1.13 -1.52,2.06 -2.75,1.68 -1.12,0.15 -2.16,0.74 -3.14,1.21 -0.71,1.26 -1.32,3.05 -0.67,4.43 1.81,0.78 4.16,0.16 5.62,1.78 1.03,0.96 2.26,1.86 3.71,1.49 1,0.41 0.97,1.98 1.29,2.89 0.06,1.92 1.92,3.92 3.93,3.21 2.18,0.1 3.07,-2.19 4.12,-3.67 1.51,-1.28 3.71,0.06 5.27,-1.23 1.21,-0.46 2.6,0.57 3.79,0.97 1.4,0.95 3.03,1.45 4.57,2.06 0.89,1.41 2.02,2.91 3.79,3.29 0.7,0.41 1.63,0.2 1.74,-0.68 0.3,-0.82 1.1,-1.03 1.73,-0.41 1.26,0.37 2.7,0.95 3.99,0.74 0.37,-1.22 -1.98,-2.48 -0.28,-3.28 0.67,-0.82 1.67,-0.98 2.44,-1.62 1.24,-0.51 2.66,0.97 3.72,-0.28 1.31,-1.17 2.69,-2.85 4.68,-2.32 1.23,0.38 1.18,-1.91 2.38,-1.18 0.9,0.96 2.14,-0.17 3.22,0.18 1.23,-0.09 1.16,1.54 2.06,2.05 1.21,1.17 3.18,0.39 4.67,0.32 0.48,-0.68 -0.59,-1.61 -0.78,-2.29 -0.54,-1.08 -1.55,-1.74 -1.84,-2.94 -0.69,-0.92 -2.21,-1.04 -2.35,-2.42 -0.71,-2.31 -0.47,-4.89 -1.1,-7.13 -1.04,0.3 -1.91,-1.37 -1.04,-1.94 0.54,-0.12 0.92,1.22 1.32,0.44 0.07,-2.45 0.56,-5.06 -0.13,-7.44 -0.69,-1.37 -3.15,-0.11 -3.29,-1.97 -0.5,-0.73 -0.04,-1.41 0.1,-2.11 -1.06,-1.59 -3.55,-1.35 -4.71,-2.76 -0.79,-0.24 -1.31,-0.83 -1.85,-1.35 -0.09,-0.03 -0.19,-0.06 -0.28,-0.03 z"
					}
				}
			}
		}
	);

	return $.fn.mapael;

}));