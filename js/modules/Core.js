define("Core", ["MusicEntity"], function(musicEntity) {
	var secret = "secret";

	return {
		helloFunction: function() {
			console.log(musicEntity.getSourceUrl());

			console.log("Modifying source url");

			var su = musicEntity.getSourceUrl();

			su = "blah";

			console.log("su", su, "srcurl", musicEntity.getSourceUrl());

			console.log(musicEntity.sourceUrl);
			return "hello";
		},

		secretFunction: function() {
			return secret;
		}
	};
});