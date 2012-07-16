"use strict";

/**
 * Root
 * The Root view-model module is the glue between all other view-models.
 * @author rishabhsrao
 */
define(["viewmodel.ArtistViewModel", "viewmodel.SearchViewModel", "viewmodel.SimilarArtistsViewModel", "jquery", "knockoutjs", "use!debug"], function(artistViewModel, searchViewModel, similarArtistsViewModel, jQuery, ko, debug) {
	/**
	 * Initializes this view-model.
	 */
	var initialize = function(views) {
		// Apply bindings to all partial views in the HTML.
		debug.log("Applying bindings", searchViewModel.toString(), (views.selector + views.searchView), jQuery((views.selector + views.searchView)).get(0));
		ko.applyBindings(searchViewModel, jQuery(views.selector + views.searchView).get(0));

		debug.log("Applying bindings", artistViewModel.toString(), (views.selector + views.artistView), jQuery((views.selector + views.artistView)).get(0));
		ko.applyBindings(artistViewModel, jQuery(views.selector + views.artistView).get(0));

		debug.log("Applying bindings", similarArtistsViewModel.toString(), (views.selector + views.similarArtistsView), jQuery((views.selector + views.similarArtistsView)).get(0));
		ko.applyBindings(similarArtistsViewModel, jQuery(views.selector + views.similarArtistsView).get(0));
	};

	/**
	 * Root
	 * Returns a string representation of the <code>Root</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "Root",
			members: {}
		}
	};

	return {
		initialize: initialize,
		toString: toString
	};
});