define("Core", ["MusicEntity"], function(musicEntity) {

	var self = this;
	debug.warn("core, self", self);

	return {
		helloFunction: function() {

			debug.info("Before", musicEntity.getSourceUrl());

			musicEntity.setSourceUrl("blaha");

			debug.info("After", musicEntity.getSourceUrl());

			debug.info("Data", musicEntity.getMusicData());

			return "OK";
		}
	};
});