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
        },

        _onRouteMatched(oEvent) {
            const { name } = oEvent.getParameters();
            if (name === "myCustoApp") {
                console.log("My Custom App is now loaded");
                const sPath = this._getModel(MODEL_NAMES.MAIN).createOrderPath(10284);
                this.getView().bindElement({
                    path: sPath,
                    model: MODEL_NAMES.MAIN
                });
                // this._getModel(MODEL_NAMES.MAIN).getOrderData(10284, (data) => {
                //     const sPath = this._getModel(MODEL_NAMES.MAIN).createOrderPath(10284);
                //     this.getView().bindElement({ 
                //         path: sPath, 
                //         model: MODEL_NAMES.MAIN
                //     });

                // }, (error) => {
                //     console.error(error);
                // });
            }
        }
    }
    return Controller.extend("myapp.app1.myapp.app1.controller.Custom", oCustomController);
}) 