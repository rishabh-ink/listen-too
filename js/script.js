/* Author: See /humans.txt

*/

require.config({
	paths: {
		'jquery': "libs/jquery-1.7.2",
		'bootstrap': "libs/bootstrap/bootstrap",
		'debug': "libs/ba.debug",
		'domReady': "libs/domReady",
		'knockoutjs': "libs/knockout-2.1.0.debug.js"

		'viewmodel.Core': "modules/viewmodel/Core",
		'model.Artist': "modules/model/Artist",
		'util.ajax.Communication': "modules/util/ajax/Communication",
		'util.error.ErrorHandler': "modules/util/error/ErrorHandler"
	},
	shim: {
		'viewmodel.Core': {
			deps: ["jquery", "bootstrap", "debug"],
			exports: "viewmodel.Core"
		},
		'model.Artist': {
			deps: ["jquery", "debug"],
			exports: "model.Artist"
		}
	}
});

require(["domReady", "viewmodel.Core"], function(domReady, core) {
	domReady(function() {
		debug.log(core.toString());
	});
});