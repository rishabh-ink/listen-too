"use strict";

define(["model.Artist", "util.ajax.Communication"], function(artist, communication) {
	var retrieveArtistInfo = function(a) {
		communication.communicate({
			url: "http",
			data: {
				api_key: ,
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