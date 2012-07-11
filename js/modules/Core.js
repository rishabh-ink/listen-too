define("Core", ["Artist"], function(artist) {
	var initialize = function() {
		artist.initialize();
		debug.info("Core initialized");
	}

	return {
		initialize: initialize
	}
});