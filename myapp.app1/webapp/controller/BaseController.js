sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {

    "use strict";
    const MODEL_NAMES = {
        MAIN: "main",
        DEVICE: "device",
        I18N: "i18n"
    }

    const oBaseController = {

        onInit() {
            sap.m.MessageToast.show("Application starts here! Have a safe journey ❤️!");
            this.oI18nModel = this._getModel(MODEL_NAMES.I18N).getResourceBundle();
            this._getRouter().attachRouteMatched(this._onRouteMatched, this);

        },
        _getModel(sName) {
            return this.getOwnerComponent().getModel(sName);
        },

        _getRouter() {
            return this.getOwnerComponent().getRouter();
        }
    }
    return Controller.extend("myapp/app1/myapp/app1/controller/BaseController", oBaseController);
}) 