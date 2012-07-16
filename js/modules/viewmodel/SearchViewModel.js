"use strict";

/**
 * SearchViewModel
 * The SearchViewModel module handles the search view in the UI.
 * @author rishabhsrao
 */
define(["jquery", "knockoutjs", "use!debug"], function(jQuery, ko, debug) {
	/**
	 * The query string typed in by the user in the search input text box.
	 */
	var searchQuery = ko.observable("");

	/**
	 * Clears this view and returns it to it's default state.
	 */
	var clear = function() {
		searchQuery("");
	};

	/**
	 * Updates this view with the given data relevent to this view.
	 */
	var update = function(data) {
	};

	/**
	 * SearchViewModel
	 * Returns a string representation of the <code>SearchViewModel</code>
	 * class.
	 */
	var toString = function() {
		return {
			classname: "SearchViewModel",
			members: {
				searchQuery: searchQuery
			}
		}
	};

	return {
		searchQuery: searchQuery,
		clear: clear,
		update: update,
		toString: toString
	};
});