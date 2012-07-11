define("MusicEntity", ["debug"], function() {

	var self = this;

	debug.warn("self", self);

	self.sourceUrl = "data/dummy.json";

	self.musicData = {'content': "taylor swift"};

	return {
		setSourceUrl: function(sourceUrl) {
			self.sourceUrl = sourceUrl;
		},

		getSourceUrl: function() {
			return self.sourceUrl;
		},

		getMusicData: function() {
			return self.musicData;
		}
	};
});