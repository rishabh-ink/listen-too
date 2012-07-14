"use strict";

/**
 * SearchViewModel
 * The SearchViewModel module handles the search view in the UI.
 * @author rishabhsrao
 */
define(["model.Artist","jquery", "knockoutjs", "use!debug"], function(artist, jQuery, ko) {
	debug.log("SearchViewModel initialized!", jQuery, ko);

	var artist = ko.observable(artist);
	var dummy = ko.observable('dummy');

	/**
	 * SearchViewModel
	 * Returns a string representation of the <code>SearchViewModel</code>
	 * class.
	 * @author rishabhsrao
	 */
	var toString = function() {
		return {
			classname: "SearchViewModel",
			members: {
				artist: artist(),
				dummy: dummy
			}
		}
	}

	return {
		toString: toString,
		artist: artist(),
		dummy: dummy()
	};
});