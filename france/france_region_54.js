/*!
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and Mapael
*
* Map of Poitou-Charentes for Mapael
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
				france_region_54 : {
					width : 126.42387,
					height : 137.91618,
					getCoords : function (lat, lon) {
						var xfactor = 45.48385;
						var xoffset = 71.954;
						var x = (lon * xfactor) + xoffset;
						
						var yfactor = -65.97284;
						var yoffset = 3112.0984;
						var y = (lat * yfactor) + yoffset;
						return {x : x, y : y};
					},
					elems : {
					    "department-79" : "m 63.16,4.63 c -0.6,0.19 -1.11,1 -1.82,0.5 -1.48,-0.44 -3.18,-0.44 -4.52,0.37 -0.59,0.29 -1.19,0.34 -1.75,-0.01 -0.87,-0.08 -2.03,0.21 -2.09,1.26 -0.82,0.69 -2.24,-0.06 -3.11,0.67 -0.32,0.35 -0.71,0.78 -0.81,0.05 -0.17,-0.67 1.32,-0.95 0.77,-1.44 -1.42,0.12 -3,0.57 -3.97,1.65 -0.44,0.67 0.88,1.48 0.22,1.98 -0.78,-0.04 -0.89,0.93 -1.46,1.3 -0.56,1.01 -1.52,1.06 -2.56,0.92 -0.58,0.17 -1.67,-0.63 -1.89,0.18 -0.04,0.49 -0.48,0.19 -0.69,0.02 -0.49,-0.01 -0.92,0.75 -1.35,0.15 -0.58,-0.71 -1.43,0.22 -2.01,-0.44 -0.32,-0.62 -1.08,-0.55 -1.42,0.02 -0.26,0.29 -0.53,0.64 -0.9,0.36 -0.74,-0.01 -1.5,0.49 -1.72,1.16 -0.41,-0.04 -1.54,0.03 -1.07,0.68 0.52,0.17 0.78,0.32 0.64,0.9 0.8,0.44 1.4,1.33 2.24,1.79 0.58,0.03 -0.09,0.93 -0.09,1.21 -0.3,0.57 -0.59,1.22 0.12,1.65 1.14,1.07 1.71,2.98 3.43,3.28 0.59,0.38 1.99,0.42 1.81,1.42 -1.06,0.78 -1.61,2.85 -0.34,3.66 0.54,-0.02 0.7,0.41 0.71,0.89 0.35,1 1.47,1.5 1.74,2.58 -1.26,0.71 -0.28,1.47 0.49,2.08 0.72,0.43 -0.33,0.97 -0.22,1.57 -0.12,0.68 0.83,0.4 1.06,0.89 0.57,0.33 0.52,0.9 0.27,1.42 -0.09,0.63 0.64,1.25 0.12,1.86 -0.56,0.89 0.76,1.28 0.68,2.14 0.09,0.53 0.29,1.53 -0.58,1.42 -0.79,-0.17 -1.46,0.69 -0.94,1.37 0.51,0.5 0.57,1.16 0.46,1.83 0.4,0.46 0.84,1.22 0.68,1.87 -0.38,0.37 -0.26,1.04 -0.87,1.16 -0.65,0.76 -0.06,1.94 0.19,2.72 0.5,-0.15 0.42,-1.82 1.3,-1.19 0.77,0.52 1.57,1 2.44,1.28 0.67,0.47 -0.28,1.24 -0.51,1.74 -0.43,0.73 -1.29,0.57 -1.99,0.62 -0.47,0.43 -0.65,1.23 -1.42,1.31 -0.31,0.37 -0.28,1.03 -0.85,1.2 -0.93,0.7 -2.05,-0.82 -2.94,0.11 -0.37,0.26 -0.05,1.04 -0.72,0.86 -0.45,-0.14 -1.17,-0.02 -0.93,0.61 -0.02,0.65 0.55,1.19 0.58,1.78 -0.27,0.57 -1.37,1.28 -0.28,1.63 0.94,0.73 2.5,1.25 2.73,2.57 0.2,0.55 -0.87,0.69 -0.32,1.17 0.54,0.23 1.21,0.11 1.5,0.74 0.59,0.72 1.83,0.62 2.4,1.19 -0.26,0.26 -1.26,0.48 -0.62,0.93 0.95,0.32 1.78,-0.6 2.71,-0.16 0.68,0.16 1.45,0.42 1.78,1.04 0.63,0.06 0.23,1.28 1.03,1.31 0.99,0.07 2.17,0.92 3.01,0.05 0.54,-0.6 0.45,0.34 0.55,0.68 0.09,0.76 1.05,0.85 1.41,0.23 0.77,-0.47 0.99,0.73 1.48,1.03 0.66,-0.04 1.32,-0.21 2.02,-0.09 0.51,0.1 0.99,-0.86 1.25,-0.06 0.45,0.82 0.77,1.92 1.89,1.99 0.68,0.23 1.44,0.37 2.09,0.09 0.64,0.22 0.15,1.44 0.96,1.27 0.22,-0.15 0.5,-0.5 0.55,0.03 0.12,0.68 0.21,1.5 0.94,1.76 0.47,0.59 0.38,1.72 1.33,1.79 0.67,0.75 1.67,-0.14 2.37,-0.43 0.51,-0.22 0.89,-0.75 0.57,-1.24 -0.01,-0.73 0.45,-1.33 1.06,-1.64 0.17,-0.59 -1.02,-1.46 -0.2,-1.93 0.83,-0.24 1.69,-0.15 2.48,-0.05 0.35,-0.45 0.8,-0.79 1.33,-1.03 0.21,-0.42 0.09,-1.04 0.71,-1.22 0.4,-0.32 1.37,0.25 1.27,-0.55 -0.22,-0.81 0.73,0.17 1.09,0.01 0.49,-0.17 1,-0.46 1.37,0.09 0.47,0.5 1.52,1.25 1.89,0.25 0.1,-0.56 -0.2,-1.22 0.4,-1.61 0.13,-0.52 0.16,-1.08 0.58,-1.5 0.61,-0.47 0.09,-1.54 -0.6,-1.05 -0.26,0.45 -0.85,0.85 -1.22,0.23 -0.55,-0.14 -0.95,-0.49 -1.12,-1.08 -0.23,-0.82 -1.26,-0.66 -1.71,-1.15 -0.19,-1.19 0.52,-2.24 1.38,-3 0.07,-0.74 -0.57,-1.63 -0.4,-2.32 0.62,-0.06 2.01,0.01 1.7,-1.02 -0.08,-0.63 -1.12,-1.28 -0.25,-1.65 0.31,-0.34 0.07,-0.83 0.47,-1.16 0.15,-0.71 -0.82,-1.14 -1.37,-1.38 -0.88,-0.11 -1.76,0.67 -2.06,1.44 -0.06,0.47 -0.54,1.09 -0.96,1.23 -0.84,-0.54 -1.77,-1.47 -2.79,-1.38 0.07,-0.64 0.61,-1.45 -0.1,-1.92 0.15,-0.67 1.28,-1.12 0.25,-1.76 -0.27,-0.54 -0.96,-0.37 -1.32,-0.67 -0.07,-0.58 -0.79,-1 -0.37,-1.61 0.15,-0.77 0.42,-1.75 0,-2.42 0.29,-0.88 0.06,-1.52 -0.97,-1.24 -0.48,-0.01 -0.01,-0.86 -0.09,-1.14 0.26,-0.72 0.01,-1.79 0.55,-2.33 0.77,0.04 1.86,-0.85 1.24,-1.63 -0.93,-0.81 0.28,-2 1.05,-2.38 0.35,0.04 0.71,-0.3 0.31,-0.54 -0.14,-0.56 -0.25,-1.4 -1.06,-1.24 -0.45,-0.02 -0.93,-0.33 -0.59,-0.8 0.34,-0.37 0.22,-1.41 -0.41,-0.87 -0.52,0.6 -1.43,1.09 -2.2,0.96 -0.14,-1.06 1.39,-1.53 1.27,-2.63 0.28,-0.74 1.24,-1.21 0.95,-2.12 0.58,-0.21 0.93,-0.68 0.74,-1.3 0.29,-0.62 1.06,-0.78 1.58,-1.04 -0.14,-0.76 -0.99,-1.33 -1.63,-1.71 -0.43,-0.01 -0.89,-0.1 -0.85,-0.66 -0.17,-0.85 -0.2,-1.86 0.6,-2.4 0.42,-0.25 0.57,-1.21 -0.14,-0.98 -0.55,0.34 -1.37,-0.01 -1.73,-0.45 0.03,-0.93 1.19,-1.03 1.77,-1.53 0.58,-0.33 0.92,1.03 1.41,0.32 0.64,-0.71 -0.48,-0.95 -0.89,-1.27 -0.43,-0.48 -1.03,-0.8 -1.66,-0.8 0.32,-0.77 0.5,-1.53 0.92,-2.25 0.21,-1.19 -0.77,-2.12 -1.15,-3.14 -0.69,-0.49 -0.07,-1.27 0.18,-1.8 -0.29,-0.92 -1.52,-0.8 -2.14,-0.29 -0.39,-0.23 -0.58,-1.11 -0.41,-1.57 0.4,-0.88 -0.22,-1.93 -0.37,-2.82 -0.11,-0.87 -0.98,-0.27 -1.39,-0.06 -0.42,-0.38 -0.91,-1.4 -1.58,-0.77 -0.44,0.16 -0.93,-0.28 -0.44,-0.65 0.25,-0.58 1.24,-1.01 1.02,-1.6 -0.39,-0.11 -0.75,-0.37 -1.16,-0.34 z",
					    "department-17" : "m 27.46,53.74 c -0.64,0.06 -0.83,0.98 -1.56,0.78 -1.64,-0.24 -3.34,0.54 -4.09,2.05 -0.33,0.68 -0.99,0.11 -1.48,0.33 -0.59,0.85 0.17,2.02 0.18,2.94 0.32,0.69 -0.12,1.39 -0.83,1.56 -1.09,0.69 -2.18,1.45 -3.1,2.33 -0.16,0.71 0.17,1.52 -0.49,2.11 -0.43,0.55 -0.87,1.88 0.15,2.06 0.63,0.18 1.54,-0.22 2.05,0.19 -0.02,0.98 1.16,1.19 1.44,1.97 -0.22,0.27 -0.6,0.72 -0.12,1.03 1.36,0.32 1.27,2 1.7,3.04 0.3,0.8 1.6,0.83 1.48,1.88 0.03,0.78 0.12,1.98 -0.97,1.96 -0.53,0.21 -1.21,-0.95 -1.5,-0.15 -0.09,0.94 0.47,1.71 1.22,2.19 0.52,0.61 -0.14,1.3 -0.08,1.9 0.23,0.9 1.04,2.09 0.36,2.93 -0.55,0.42 -1.22,-0.15 -1.73,0.12 -0.39,0.45 -0.07,1.42 -0.6,1.66 -0.41,-0.09 -1.21,-0.03 -0.94,0.59 0.41,2.64 1.42,5.37 3.7,6.94 1.05,0.89 2.3,1.72 3.27,2.57 -2.58,-1 -5.29,-2.45 -6.37,-5.17 -0.57,-0.57 -1.47,0.08 -2.18,-0.1 -0.94,-0.14 -2.27,0.06 -2.32,1.26 -0.21,1.72 -0.37,3.49 -0.46,5.21 0.61,0.73 1.24,-0.64 1.96,-0.32 1.21,0.32 1.56,1.77 2.77,2.15 1.52,0.74 2.99,1.53 4.14,2.78 0.99,0.8 2.63,1.07 2.85,2.57 0.26,1.36 1.54,2.34 2.89,2.34 0.74,0.46 1.3,1.18 2.06,1.58 2.75,2.45 5.36,5.3 6.34,8.96 0.5,1.36 0.73,2.91 1.38,4.18 1.7,0.11 3.53,0.75 5.2,0.21 0.3,-0.26 0.32,-1.32 0.88,-0.95 1.02,0.55 0.04,1.82 0.6,2.57 1.23,0.69 2.73,0.96 4.05,0.41 0.94,0.32 2.07,0.64 2.76,1.41 0.14,0.55 -0.34,1.49 0.41,1.68 0.53,1.08 -0.89,2.36 0.08,3.38 0.5,0.84 0.57,1.87 1.01,2.73 0.61,-0.18 0.92,-1.38 1.74,-0.87 0.75,0.14 1.14,0.71 1.54,1.27 0.95,-0.04 1.92,0.43 2.24,1.4 0.27,0.76 0.88,1.35 1.73,1.28 0.93,0.37 1.78,1 2.85,1.07 1.16,0.67 1.57,-0.86 2.35,-1.36 0.48,-0.4 1.27,-1.04 1.61,-0.12 0.34,0.45 1.25,1.45 1.65,0.55 0.47,-0.7 -0.05,-1.88 0.62,-2.4 0.31,-0.21 1.71,-0.58 0.97,-1.04 -0.8,-0.16 -0.13,-1.02 0.1,-1.41 0.31,-0.9 0.3,-1.91 0.41,-2.83 -0.53,-0.58 -1.66,-0.41 -1.94,-1.29 -0.97,-0.68 -2.35,0.04 -3.45,-0.4 -0.48,-0.08 0.19,-0.58 0.05,-0.87 0.08,-0.62 0.46,-2.09 -0.58,-2.04 -0.36,0.04 -0.87,0.56 -0.9,-0.1 -0.55,-1.25 -2.19,-0.45 -3.02,-1.36 -0.66,-0.23 -1.74,0.04 -1.98,0.75 -0.02,0.6 -0.89,-0.03 -1.13,-0.19 -0.49,-0.69 -0.47,-1.63 -0.08,-2.35 0.04,-0.53 0.47,-0.32 0.71,-0.08 0.76,0.37 1.28,-1.13 0.29,-1 -0.4,0 -1.04,0.36 -1.11,-0.25 -0.36,-0.54 -1.57,-0.74 -1.14,-1.61 0.43,-0.48 1.28,-0.23 1.57,-0.89 0.4,-0.26 0.99,-0.16 1.22,-0.67 0.53,0.05 0.61,-0.56 0.05,-0.64 -0.52,-0.34 -0.08,-1.18 -0.55,-1.63 -0.2,-0.54 -0.73,-0.79 -1.19,-0.95 -0.11,-0.54 0.11,-1.24 0.78,-1.12 0.47,-0.23 0.31,-0.99 0.92,-1.13 0.57,-0.51 -0.36,-0.7 -0.57,-1.04 0.07,-0.44 -0.02,-1.15 -0.64,-0.86 -0.47,0.19 -0.52,-0.62 -1.06,-0.45 -0.46,-0.08 -1.56,-0.48 -0.93,-1.06 0.46,-0.5 1.18,-1.34 0.36,-1.92 -0.48,-0.66 -1.4,-0.64 -1.74,-1.38 -0.81,-0.3 -1.28,-1.12 -1.7,-1.83 -0.61,-0.19 -1.32,0.54 -1.9,-0.05 -0.65,-0.44 0.36,-1.26 0.52,-1.85 0.13,-0.78 1.26,0.09 1.23,-0.73 -0.41,-0.94 -1.71,-1.45 -1.47,-2.66 -0.09,-0.77 -0.07,-1.58 0.55,-2.1 10e-4,-0.79 -1.18,-0.43 -1.7,-0.47 -0.84,0.33 -0.92,-0.75 -0.54,-1.21 0.21,-0.57 0.76,-0.6 1.26,-0.53 0.73,-0.06 1.14,-0.77 1.3,-1.35 1.44,0.26 3.06,0.26 4.42,-0.34 0.41,-0.22 0.07,-0.96 0.68,-0.9 0.71,-0.01 1.68,-0.23 2.23,0.11 0.42,0.5 0.51,1.73 1.28,1.8 0.7,-0.47 1.36,-1.14 2.3,-0.9 0.74,-0.08 0.47,-1.11 0.93,-1.54 0.56,-0.73 -0.58,-1.9 0.51,-2.34 0.58,-0.37 0.81,-1.29 0.19,-1.7 -0.03,-0.64 -0.61,-1.04 -0.93,-1.49 0.39,-0.41 0.54,-0.99 0.06,-1.36 -0.2,-0.43 -0.12,-1.13 0.53,-0.86 0.7,0.07 1.79,0.3 1.89,-0.7 0.18,-0.44 0.15,-1.12 -0.38,-1.26 -0.21,-0.75 -0.98,-0.99 -1.52,-1.41 -0.18,-0.64 -0.35,-1.32 -1.04,-1.56 -0.48,-0.4 -0.13,-1.73 -0.97,-1.55 -0.66,0.45 -0.56,-0.65 -0.67,-1.02 -0.44,-0.38 -1.11,0.09 -1.63,-0.21 -0.7,-0.22 -1.52,-0.36 -2.06,-0.87 -0.02,-0.61 -0.65,-1.99 -1.36,-1.23 -0.87,0.03 -1.79,-0.08 -2.63,0.19 -0.4,-0.15 -0.1,-0.98 -0.66,-1.12 -0.68,-0.55 -0.8,0.87 -1.47,0.43 -0.67,-0.17 -0.52,-0.92 -0.84,-1.32 -0.59,-0.26 -0.4,1.05 -1.03,0.54 -0.91,-0.51 -2.21,-0.26 -3,-0.93 -0.15,-1.18 -1.21,-2.28 -2.48,-2.02 -0.88,0.06 -2.22,0.7 -2.83,-0.2 0.37,-0.36 0.63,-1.14 -0.14,-1.18 -0.96,0.08 -1.3,-1.18 -2.27,-1.18 -0.42,-0.13 -1.02,-0.86 -0.38,-1.14 0.75,-0.96 -0.6,-1.69 -1.28,-2.11 -0.47,-0.44 -1.87,-0.78 -1.48,-1.65 0.52,-0.47 0.82,-1.03 0.26,-1.66 -0.4,-0.82 -0.22,-1.98 -1.29,-2.33 -0.69,-0.3 -1.38,-0.64 -1.83,-1.23 -0.52,-0.35 -1.5,-0.33 -1.41,0.53 0.1,0.65 -0.66,0.75 -0.98,0.35 -0.47,-0.25 -1.07,-0.14 -1.3,0.32 -0.95,0.33 -2.43,0.39 -2.95,-0.61 0.54,-0.58 1,-1.46 0.97,-2.26 -0.15,-0.23 -0.46,-0.17 -0.69,-0.17 -0.05,0 -0.09,0 -0.14,0 z m -24.49,7.34 c -0.94,0.31 -1.91,0.47 -2.86,0.62 -0.46,0.62 0.64,1.1 0.6,1.76 0.58,1.14 1.93,1.42 3.1,1.22 1.21,-0.18 2.41,0.07 3.34,0.92 1.79,0.99 3.69,2.42 5.82,2.25 0.6,0.03 0.97,-0.64 0.4,-1 -0.88,-0.66 -1.24,-2.13 -2.54,-2.11 -0.88,-0.29 -1.67,-0.87 -2.67,-0.79 -0.71,-0.14 -1.76,0.04 -2.27,-0.49 0.31,-0.25 0.49,-0.84 -0.1,-0.79 -0.71,-0.18 -1,0.49 -1.41,0.86 -0.84,0.16 -2.07,-0.31 -2.31,-1.13 0.5,-0.51 1.56,0.6 1.8,-0.26 -0.05,-0.47 -0.28,-1.17 -0.88,-1.06 z m 4.27,13.73 c -0.91,0.2 -0.07,1.23 0.19,1.65 0.69,0.8 1.04,1.68 0.72,2.74 -0.24,1.04 -0.17,2.02 0.86,2.58 1.53,1.4 3.43,2.45 4.36,4.39 1.11,1.29 1.15,2.99 1.61,4.53 0.55,0.56 1.06,-0.59 1.38,-0.92 0.81,-1.26 0.55,-2.85 1.06,-4.22 0,-1.49 -1.85,-1.91 -2.43,-3.04 0.33,-0.84 -0.67,-1.6 -0.19,-2.42 -0.02,-0.81 -0.64,-1.88 -1.5,-1.94 -1.2,0.51 -2.01,-0.97 -2.93,-1.47 -0.96,-0.72 -1.85,-1.8 -3.13,-1.88 z",
					    "department-16" : "m 104.3,68.78 c -0.64,0.02 -0.94,0.74 -1.54,0.97 -0.66,0.31 -0.11,0.94 -0.2,1.39 -1.03,0.61 -2.49,0.33 -3.46,0.94 0.12,0.43 -0.46,1.14 -0.78,0.56 -0.43,-0.14 -0.9,-0.05 -1.23,-0.47 -0.35,-0.43 -1.29,0.15 -1.28,-0.57 -0.36,-0.93 -1.5,-1.49 -1.5,-2.56 -0.41,-0.34 -0.81,0.39 -1.26,0.25 -0.37,0.67 -0.89,1.27 -1.28,1.92 -0.23,0.75 0.69,0.65 1.1,0.83 0.57,0.66 0.19,1.57 -0.55,1.88 -0.75,0.68 -2.22,0.82 -2.72,-0.24 -0.93,-0.63 -2.19,0.08 -3.23,-0.05 -0.96,-0.05 -2.25,0.55 -2.9,-0.47 -0.57,-0.74 -1.51,-0.93 -2.24,-1.47 -0.75,-0.44 -1.42,0.16 -1.98,0.54 -0.86,-0.13 -1.27,-1.53 -2.31,-1.04 -0.72,0.01 -1.22,0.96 -1.94,0.49 -0.83,-0.22 -1.01,0.68 -1.07,1.28 -0.33,0.37 -1.03,0.18 -1.29,0.72 -0.22,0.49 -0.65,0.6 -1.12,0.4 -0.57,0.1 -1.64,-0.29 -1.92,0.34 -0,0.64 1.11,1.35 0.25,1.81 -0.53,0.24 -0.84,0.78 -0.69,1.4 0.44,0.63 -0.54,1.16 -0.93,1.51 -0.57,0.15 -1.47,0.34 -1.64,0.88 0.63,0.52 0.78,1.27 0.37,1.99 -0.33,1.19 -1.98,-0.06 -2.45,0.86 -0.02,0.51 0.88,0.56 0.45,1.13 -0.4,0.5 -0.13,0.89 0.32,1.05 0.14,0.53 0.51,0.99 0.77,1.41 -0.06,0.8 -0.82,1.28 -1.12,1.96 0.15,0.82 0.06,1.6 -0.4,2.32 -0.15,0.53 0.08,1.3 -0.51,1.58 -0.37,-0.54 -1.17,-0.76 -1.71,-0.25 -0.38,0.53 -1.19,0.69 -1.53,0.03 -0.48,-0.51 -0.51,-1.53 -1.44,-1.44 -0.67,-0.06 -1.62,-0.06 -1.81,0.73 -0.89,0.92 -2.4,0.7 -3.58,0.76 -0.57,-0.19 -1.14,0.07 -1.23,0.67 -0.65,0.76 -2.12,0.05 -2.41,1.26 -0.34,0.74 0.54,0.96 1.09,0.75 0.45,-0.1 1.68,-0.04 1.29,0.68 -0.92,0.74 -0.6,2.12 -0.29,3.09 0.45,0.56 1.21,1.12 1.36,1.83 -0.45,0.42 -1.35,0.09 -1.57,0.86 -0.28,0.45 -0.92,1.56 0.05,1.62 0.61,0.07 1.43,-0.91 1.71,0.03 0.78,1.61 2.85,2.17 3.71,3.68 -0.13,0.63 -0.72,1.15 -1,1.52 0.22,0.96 1.55,0.57 2.2,1.03 0.44,0.08 0.92,0.38 0.55,0.84 -0.08,0.6 1.2,0.67 0.75,1.36 -0.57,0.29 -0.75,1.17 -1.31,1.37 -0.74,-0.13 -0.44,0.92 0.07,1.03 0.73,0.59 0.88,1.53 1.03,2.36 0.47,-0.14 0.88,0.62 0.26,0.81 -0.56,0.56 -1.49,0.43 -1.91,1.16 -0.42,0.2 -1.4,0.14 -1.06,0.87 0.71,0.72 1.57,1.43 2.67,1.27 0.28,0.37 0.06,1.14 -0.54,1.14 -0.45,0.01 -0.98,0.03 -1.04,0.64 -0.27,0.62 0.03,2.1 0.96,1.64 0.41,-0.57 1.19,-0.49 1.59,-1.02 0.84,0.51 1.76,0.93 2.78,0.87 0.7,0.25 1.18,1.04 2.02,0.93 1.12,0.04 0.47,1.26 0.52,1.99 -0.56,1.4 1.08,0.99 1.92,1.03 0.6,-0.04 1.41,-0.18 1.64,0.55 0.39,0.6 1.31,0.55 1.7,1.07 -0.01,0.44 -0.19,1.46 0.59,1.18 0.99,0.14 1,-1.34 1.88,-1.35 0.44,0.51 1.07,0.2 1.56,-0.03 0.79,-0.02 1.25,1.51 2.09,0.85 0.32,-0.83 1.41,-1.03 1.45,-2 0.07,-0.55 0.13,-1.38 0.92,-1.18 1.2,-0.12 0.86,-2.27 2.25,-1.94 0.87,0.1 1.48,-0.65 1.31,-1.48 0.07,-1.3 -0.82,-2.43 -0.83,-3.69 0.5,-1.4 0.49,-3.24 1.78,-4.2 0.38,-0.12 1.11,-0.11 0.75,-0.73 -0.27,-0.38 -0.15,-1.31 0.45,-0.86 0.3,0.47 0.83,0.41 0.83,-0.13 0.46,-0.36 1.08,-0.58 1.42,-1.09 0.67,-0.1 0.83,-1.01 1.61,-0.99 0.52,-0.4 1.06,0.69 1.39,-0.02 -0.02,-0.88 0.8,-1.46 0.97,-2.27 0.55,-0.17 0.53,-1.1 1.21,-1 0.78,-0.15 1.61,-0.81 1.04,-1.62 0.24,-0.97 1.07,-2.11 0.25,-3.06 -0.21,-0.31 -0.27,-0.7 0.13,-0.83 7.2e-4,-0.64 0.72,-1.43 1.33,-1.15 0.12,0.96 1.97,0.32 1.49,-0.58 -0.31,-0.68 0.74,-0.57 0.77,-1.18 0.59,-0.45 0.48,-1.42 1.06,-1.87 0.75,-0.43 0.78,-1.6 1.61,-1.9 0.28,-1.14 1.34,-2.01 2.34,-2.54 0.97,-0.07 0.44,-1.43 0.6,-2.06 -0.14,-0.65 0.44,-0.95 1.02,-0.84 0.79,-0.2 1.34,1.12 2.07,0.61 0.38,-0.62 -0.18,-1.41 0.54,-1.85 0.49,-0.82 1.44,-1.77 1.12,-2.77 -0.49,-0.53 0.86,-0.86 0.35,-1.47 -0.36,-0.84 -0.46,-1.93 -0.29,-2.79 0.7,-0.15 1.17,0.67 1.92,0.53 0.97,0.25 1.66,-0.44 2.37,-0.93 0.73,-0.02 0.55,-0.99 1.15,-1.29 0.44,-0.45 0.36,-1.1 -0.01,-1.49 0.06,-0.73 -0.66,-1.12 -0.65,-1.83 -0.32,-0.54 -0.93,-0.98 -1.42,-1.28 -0.41,0.11 -1.09,1.02 -1.38,0.29 -0.19,-0.93 -1.33,-1.13 -1.78,-1.8 -0.18,-1.12 0.22,-2.19 0.49,-3.23 0.02,-0.79 -0.85,-1.32 -0.67,-2.11 -0.65,-0.56 -1.74,-0.1 -2.54,-0.3 -0.56,-0.02 -1.12,-0.07 -1.67,-0.05 z",
					    "department-86" : "m 71.94,0.1 c -1.14,1.06 -2.25,2.5 -2.33,4.1 0.12,0.27 0.58,0.18 0.38,0.63 -0.07,0.28 -0.22,1.02 -0.51,0.97 -0.5,-0.47 -1.39,-0.24 -1.91,-0.79 -0.75,-0.05 -0.89,1.08 -0.9,1.66 0,1.43 0.71,2.82 0.84,4.18 -0.72,0.27 -0.24,1.75 0.55,1.2 0.66,-0.48 2.08,0.24 1.54,1.06 -0.41,0.48 -0.52,1.15 0.06,1.55 0.32,0.75 0.92,1.33 1.03,2.2 0.53,1.02 -0.95,1.92 -0.51,2.89 0.85,0.43 1.53,1.18 2.48,1.41 0.11,0.41 -0.43,1.03 -0.71,1.32 -0.46,-0.51 -1.25,-0.95 -1.81,-0.3 -0.36,0.29 -1.46,0.95 -0.49,1.26 0.39,0.4 0.88,0.23 1.26,0.02 0.59,0.03 0.85,0.67 0.32,1.02 -0.8,0.54 -1.04,1.48 -0.79,2.38 -0.11,0.52 0.36,0.64 0.74,0.67 0.66,0.47 1.53,1.08 1.77,1.87 -0.63,0.32 -1.63,0.57 -1.57,1.51 -0.05,0.61 -0.81,0.97 -0.63,1.63 -0.38,0.6 -1.29,1 -1.07,1.84 -0.24,0.74 -1.35,1.08 -1.33,1.88 0.78,0.32 1.69,-0.38 2.2,-0.96 0.33,-0.53 0.88,-0.05 0.67,0.4 -0.28,0.46 -0.49,1.63 0.41,1.45 0.81,-0.38 0.78,0.65 0.98,1.11 0.13,0.25 0.84,0.22 0.34,0.53 -0.8,0.51 -2.21,1.04 -2.01,2.21 0.34,0.34 0.89,0.7 0.42,1.23 -0.18,0.55 -0.54,1.03 -1.15,0.97 -0.44,0.28 -0.2,0.93 -0.57,1.27 -0.06,0.53 0.23,1.11 -0.26,1.47 -0,0.85 1.64,-0.09 1.36,0.96 -0.53,0.61 0.3,1.14 0.03,1.81 -0.07,0.94 -0.66,2.65 0.66,3 0.79,0.05 0.84,1 1.41,1.39 -0.71,0.43 -0.86,1.19 -0.2,1.7 -0.4,0.34 -0.84,1.25 0.07,1.21 0.86,0.18 1.56,1.52 2.49,1.02 0.4,-0.97 1.07,-1.93 2.04,-2.4 0.83,0.07 2.05,0.62 2.09,1.57 -0.46,0.39 -0.23,1.14 -0.73,1.53 -0.1,0.72 1.12,1.52 0.21,2.12 -0.35,0.55 -1.48,-0.02 -1.41,0.81 -0.01,0.69 0.87,1.74 0,2.18 -0.7,0.55 -1.34,1.66 -0.86,2.52 0.71,0.32 1.56,0.59 1.76,1.48 0.17,0.6 0.86,0.46 1.16,0.85 0.58,-0.04 0.96,-0.98 1.59,-0.46 0.75,0.62 -0.42,1.53 -0.43,2.25 -0.11,0.57 -0.98,1.25 -0.28,1.79 0.9,0.18 1.65,0.71 2.43,1.16 0.79,0.25 1.17,1.62 2.2,1.17 1.46,-0.31 3,-0.22 4.49,-0.32 0.41,0.58 0.98,1.33 1.77,0.97 0.93,-0.03 2.12,-1.24 1.44,-2.13 -0.38,-0.24 -1.1,0.06 -1.05,-0.63 -0.31,-0.86 0.92,-1.18 1.03,-1.98 0.08,-0.73 0.82,-0.21 1.16,-0.67 0.74,-0.36 0.71,0.55 0.76,0.99 0.75,0.49 1.05,1.44 1.8,1.9 0.72,-0.1 1.13,0.83 1.84,0.61 0.29,0.34 0.76,0.24 0.7,-0.25 0.86,-0.97 2.52,-0.32 3.45,-1.09 -0.01,-0.41 -0.31,-1.14 0.29,-1.31 0.72,-0.6 1.45,-1.38 2.51,-1.13 0.96,2e-4 1.91,0.58 2.83,0.14 0.52,-0.04 1.55,0.71 1.72,-0.12 -0.55,-1.27 -0.22,-2.94 -1.5,-3.83 -0.88,-0.58 -0.56,-2.06 0.43,-2.23 0.42,-0.04 1.69,0.13 1.24,-0.61 -0.18,-0.72 0.69,-0.75 0.8,-1.37 0.54,-0.58 1.48,-0.78 1.68,-1.65 0.37,-0.58 1.27,0.51 1.62,-0.26 0.27,-0.52 0.9,0.19 1.35,0.08 0.82,0.1 2.06,0.55 1.97,-0.75 0.13,-0.76 0.91,-1.14 0.79,-1.99 -0.04,-1.24 1.11,-2.54 2.41,-2.22 0.75,-0.09 1.36,0.26 1.97,0.59 0.61,0.03 0.33,-0.88 0.94,-0.93 0.6,-0.21 0.21,-1.27 0.92,-1.37 0.92,0.39 1.55,-0.63 1.53,-1.45 0.16,-0.4 0.9,-1.18 0.07,-1.29 -0.69,0.21 -0.35,-0.68 -0.9,-0.83 -0.81,-0.3 -1.76,-0.95 -1.76,-1.88 0.5,-0.3 0.33,-0.76 0.07,-1.13 -0.23,-0.45 0.19,-0.75 0.2,-1.13 -0.81,-1.39 -2.35,-2.36 -4,-2.15 -0.69,-0.09 -1.83,0.33 -1.54,-0.7 0.05,-0.77 -0.55,-1.43 -1.36,-1.25 -0.33,-0.12 -0.62,-0.44 -1.04,-0.37 -0.77,-0.13 -1.4,-0.62 -1.75,-1.29 -0.57,-0.31 -1.13,-0.67 -1.24,-1.4 -0.33,-0.57 -0.71,-1.23 -0.15,-1.8 0.73,-0.83 0.1,-1.91 0.31,-2.83 0.43,-0.52 1.16,-1.04 0.38,-1.67 -0.41,-0.68 -0.38,-1.75 -1.36,-1.91 -1.25,-0.97 -2.26,-2.23 -3.19,-3.5 -0.32,-0.48 -0.09,-1.3 -0.37,-1.87 -0.03,-0.59 -0.49,-0.81 -0.83,-1.16 -0.28,-0.39 0.07,-1.17 -0.73,-1 -0.48,-0.04 -0.44,-0.78 -0.98,-0.77 -0.81,-0.82 -1.57,-1.75 -2.18,-2.73 -0.19,-1.54 -0,-3.3 -0.9,-4.62 -0.49,-0.28 -1.19,-0.08 -1.48,-0.7 -0.42,-0.26 -1.04,0.12 -1.26,-0.53 -0.27,-0.4 -0.34,-1.04 -0.99,-0.94 -0.47,0.04 -1.73,-0.21 -1.61,0.56 0.48,0.31 0.28,1.12 0.94,1.29 0.6,0.23 0.98,1.57 0.03,1.5 -2.21,0.09 -4.77,-0.46 -6.55,1.22 -0.29,0.58 -0.81,0.41 -1.29,0.2 -0.92,0.09 -1.53,-0.87 -2.48,-0.71 -0.63,0.27 -1.31,1.19 -2.04,0.86 -0.7,-0.56 -0.9,-1.47 -0.89,-2.3 -0.36,-0.38 0.27,-0.7 -0.14,-1.1 -0.49,-0.38 -0.04,-0.47 0.16,-0.78 0.22,-0.76 -0.32,-1.65 0.23,-2.32 0.17,-0.5 0.14,-1.58 -0.66,-1.23 -0.45,0.05 -1.53,0.66 -1.3,-0.31 0.22,-0.84 -0.91,-1.4 -1.41,-0.72 -0.37,0.45 -1.12,1.03 -1.58,0.36 -0.39,-0.23 -1.25,0.31 -1.11,-0.51 0.06,-0.79 1.27,-1.22 0.69,-2.09 -0.06,-0.39 -0.5,-1.14 -0.88,-0.57 -0.3,0.8 -1.19,0.15 -1.61,-0.18 0.04,-0.66 -0.86,-1.58 -1.37,-0.85 -0.8,0.33 -1.3,0.09 -1.19,-0.79 -0.01,-0.6 -0.79,-0.57 -0.84,-1.19 -0.07,-0.58 -0.6,-0.89 -1.06,-0.53 -0.38,-0.18 -0.52,-0.95 -0.97,-0.84 z"
					}
				}
			}
		}
	);

	return $.fn.mapael;

}));