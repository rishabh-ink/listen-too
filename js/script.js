/* Author: See /humans.txt

*/

jQuery(document).ready(function() {
	require.config({
		paths: {
			'bootstrap': "libs/bootstrap/bootstrap.min",
			'debug': "libs/ba.debug",
			'Core': "modules/Core"
		},
		shim: {
			'Core': {
				deps: ["bootstrap", "debug"],
				exports: "Core"
			}
		}
	});

	require(["Core"], function(Core) {
		debug.log("All systems ready.");

		debug.log(Core.helloFunction());
	});
});
