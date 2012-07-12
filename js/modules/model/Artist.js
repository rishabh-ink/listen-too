define(["debug", "jquery", "util.ajax.Communication", "util.error.ErrorHandler"], function(D, JQ, communication, errorHandler) {
	var API_KEY = "FPSSDUWHUMOEZ664A";

	debug.info("errorHandler", errorHandler.toString());
	debug.info("Artist initialized");

	var toString = function() {
		return {
			classname: "model.Artist",
			members: {
				API_KEY: API_KEY
			}
		}
	}

	return {
		toString: toString
	}
});