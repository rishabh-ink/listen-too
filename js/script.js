/* Author: See /humans.txt

*/

"use strict";

require.config({
	paths: {
		// libraries
		'use': "libs/use", // documentup.com/tbranyen/use.js
		'jquery': "libs/jquery-1.7.2", // jquery.com
		'bootstrap': "libs/bootstrap/bootstrap", // twitter.github.com/bootstrap
		'debug': "libs/ba.debug", // benalman.com/code/projects/javascript-debug
		'domready': "libs/domReady", // requirejs.org/docs/download.html#domReady
		'knockoutjs': "libs/knockout-2.1.0.debug", // knockoutjs.com
		// /libraries

		// models
		'model.Artist': "modules/model/Artist",
		// /models

		// view-models
		'viewmodel.Core': "modules/viewmodel/Core",
		'viewmodel.ArtistViewModel': "modules/viewmodel/ArtistViewModel",
		'viewmodel.SearchViewModel': "modules/viewmodel/SearchViewModel",
		'viewmodel.SimilarArtistViewModel': "modules/viewmodel/SimilarArtistViewModel",
		// /view-models

		// utilities
		'util.ajax.Communication': "modules/util/ajax/Communication",
		'util.error.ErrorHandler': "modules/util/error/ErrorHandler",
		'util.data.Constants': "modules/util/Constants"
		// /utilities
	},
	// use.js configuration for non-amd libraries
	use: {
		'debug': {
			attach: "debug"
		},
		'bootstrap': {
			attach: "bootstrap"
		}
	}
	// /use.js configuration for non-amd libraries
});

require(["domready", "viewmodel.Core"], function(domReady, core) {
	domReady(function() {
		debug.log(core.toString());
	});
});