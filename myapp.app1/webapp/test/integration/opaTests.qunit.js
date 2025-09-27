/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["myapp/app1/myapp/app1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
