"use strict";

define(["jquery", "use!debug", "knockoutjs"], function() {
	var content = {
		name: "Taylor Swift"
	};

	var dummy = "blah blah";

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
		content: content,
		dummy: dummy
	}
});