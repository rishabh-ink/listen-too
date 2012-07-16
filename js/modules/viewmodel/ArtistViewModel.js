"use strict";

/**
 * ArtistViewModel
 * A view-model for handling the currently selected artist.
 * @author See /humans.txt
 */
define(["model.Artist", "util.ajax.Communication", "util.data.Constants", "use!debug"], function(artist, communication, constants, debug) {
	var retrieveArtistInfo = function(a) {
		communication.communicate({
			url: "http",
			data: {
				api_key: constants.echonest.apiKey,
				name: "Taylor Swift"
			}
		});
	};

	var toString = function() {
		return {
			classname: "viewmodel.ArtistViewModel",
			members: {}
		}
	}

	return {
		retrieveArtistInfo: retrieveArtistInfo,
		toString: toString
	};
});