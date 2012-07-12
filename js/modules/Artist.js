define(["debug", "jquery"], function() {
	var API_KEY = "FPSSDUWHUMOEZ664A";
	var dataUrl = "http://developer.echonest.com/api/v4/artist/similar"	+
		"?api_key=" + API_KEY +
		"&name=Taylor+Swift&format=json&results=5&start=0";

	var artistData = {};

	var initialize = function() {
		jQuery.getJSON(dataUrl, function(data) {
			debug.info("Got data", data);
		});
		debug.info("Artist initialized");
	}

	return {
		initialize: initialize,

		getDataUrl: function() {
			return dataUrl;
		},

		setDataUrl: function(du) {
			dataUrl = dataUrl;
		}
	}
});