"use strict";

define(["viewmodel.Root", "jquery", "use!bootstrap", "knockoutjs", "use!debug"],
function(root,             jquery,   bootstrap,       ko,           debug) {

	/**
	 * Initializes the application's models, view-models and other utils.
	 */
	var initialize = function() {
		var views = {
			selector: "#",
			searchView: 'search-view',
			artistView: 'artist-view',
			similarArtistsView: 'similar-artists-view'
		};

		debug.info("Applying KnockoutJS bindings to partial views...", views);
		root.initialize(views);
	};

	var toString = function() {
		return {
			classname: "viewmodel.Core",
			members: {}
		}
	};

	return {
		initialize: initialize,
		toString: toString
	};
});