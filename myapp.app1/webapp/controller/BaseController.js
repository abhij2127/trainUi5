sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    "use strict";
    const MODEL_NAMES = {
        MAIN: "main",
        DEVICE: "device"
    }

    const oCustomController = {

        onInit() {
            // Controller.prototype.onInit.apply(this);
            console.log("Application starts here! Have a safe journey!");
            this._getRouter().attachRouteMatched(this._onRouteMatched, this);

        },
        _getModel(sName) {
            return this.getOwnerComponent().getModel(sName);
        },

        _getRouter() {
            return this.getOwnerComponent().getRouter();
        }
    }
    return Controller.extend("myapp/app1/myapp/app1/controller/BaseController", oCustomController);
}) 