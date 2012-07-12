"use strict";

define(["model.Artist", "util.ajax.Communication"], function(artist, communication) {
	var retrieveArtistInfo = function(a) {
		communication.communicate({
			url: "http",
			data: {
				api_key: "FPSSDUWHUMOEZ664A",
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