define("Core", function() {
	var secret = "secret";

	return {
		helloFunction: function() {
			return "hello";
		},

		secretFunction: function() {
			return secret;
		}
	};
});