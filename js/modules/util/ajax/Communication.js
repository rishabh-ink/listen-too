define(["jquery", "debug"], function(jQuery) {
	var communicate = function(payload) {
		debug.info(toString(), "Communicating with server...");
	}

	var toString = function() {
		return {
			classname: "util.ajax.Communicate",
			members: null
		}
	}

	return {
		communicate: communicate,
		toString: toString
	}
});