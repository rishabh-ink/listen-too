define(["Artist", "MusicEntity"], function(artist, musicEntity) {
	var initialize = function() {
		debug.info(musicEntity);
		artist.initialize();
		musicEntity.initialize();

		debug.info(artist.getDataUrl());

		artist.setDataUrl("blah");

		debug.info(artist.getDataUrl());

		debug.info("Core initialized");
	}

	return {
		initialize: initialize
	}
});