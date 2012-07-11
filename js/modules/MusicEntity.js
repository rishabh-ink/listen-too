define("MusicEntity", ["debug"], function() {
	var sourceUrl = "data/dummy.json";

	var musicData = {};

	return {
		setSourceUrl: function(sourceUrl) {
			this.sourceUrl = sourceUrl;
		},
		getSourceUrl: function() {
			return sourceUrl;
		},
		toString: function() {
			debug.info("Source URL", this.sourceUrl);
		}
	};
});