define(["model.Artist"], function(artist) {
	debug.info(artist.toString());

	debug.info("Core initialized");

	var toString = function() {
		return {
			classname: "viewmodel.Core",
			members: {}
		}
	}

	return {
		toString: toString
	}
});