"use strict";

define(["jquery", "use!debug", "knockoutjs"], function(jQuery, debug, ko) {
	var content = {
		name: ko.observable("Taylor Swift")
	};

	var toString = function() {
		return {
			classname: "model.Artist",
			members: {
				content: content
			}
		}
	}

	return {
		toString: toString,
		content: content
	}
});