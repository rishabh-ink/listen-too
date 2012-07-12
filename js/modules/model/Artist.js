"use strict";

define(["knockoutjs"], function() {
	var artist = {};

	var toString = function() {
		return {
			classname: "model.Artist",
			members: {}
		}
	}

	return {
		toString: toString
	}
});