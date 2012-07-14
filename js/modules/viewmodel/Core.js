"use strict";

define(["model.Artist", "viewmodel.SearchViewModel", "jquery", "use!bootstrap", "knockoutjs", "use!debug"], function(artist, searchViewModel, jquery, bootstrap, ko, debug) {
	debug.info("Core initialized", searchViewModel.toString());

	debug.info("Applying KnockoutJS bindings...", searchViewModel);
	ko.applyBindings(searchViewModel);

	var toString = function() {
		return {
			classname: "viewmodel.Core",
			members: {}
		}
	}

	return {
		toString: toString
	};
});