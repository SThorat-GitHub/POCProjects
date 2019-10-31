/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sthorat/ST_Project1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});