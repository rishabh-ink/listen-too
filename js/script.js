/* Author: See /humans.txt

*/

require.config({
	paths: {
		'jquery': "libs/jquery-1.7.2.min",
		'bootstrap': "libs/bootstrap/bootstrap.min",
		'debug': "libs/ba.debug",
		'domReady': "libs/domReady",
		'Core': "modules/Core",
		'MusicEntity': "modules/MusicEntity",
		'Artist': "modules/Artist"
	},
	shim: {
		'Core': {
			deps: ["jquery", "bootstrap", "debug"],
			exports: "Core"
		}
	}
});

require(["domReady", "Core"], function(domReady, Core) {
	domReady(function() {
		Core.initialize();
	});
});