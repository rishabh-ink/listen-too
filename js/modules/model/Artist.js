"use strict";

define(["jquery", "use!debug", "knockoutjs"], function(jQuery, debug, ko) {
	var name = ko.observable("Taylor Swift");

	var toString = function() {
		return {
			classname: "model.Artist",
			members: {
			name: name
			}
		}
	}

	return {
		toString: toString,
		name: name
	}
});