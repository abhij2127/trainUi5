/*global QUnit*/

sap.ui.define([
	"myapp/app1/myapp/app1/controller/mainService.controller"
], function (Controller) {
	"use strict";

	QUnit.module("mainService Controller");

	QUnit.test("I should test the mainService controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
