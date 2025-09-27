sap.ui.define([
    "myapp/app1/myapp/app1/controller/BaseController"
], function (Controller) {

    "use strict";
    const MODEL_NAMES = {
        MAIN: "main",
        DEVICE: "device"
    }

    const oCustomController = {

        onInit() {
            Controller.prototype.onInit.apply(this);
            
        },
        _onRouteMatched(oEvent) {
            const { name } = oEvent.getParameters();
            if (name === "myCustoApp") {
                console.log("My Custom App is now loaded");
                const sPath = this._getModel(MODEL_NAMES.MAIN).createOrderPath(10284);
                
            }
        },
        onPressOrder(oEvent){
            const oItem = oEvent.getSource();
            const sOrderId = oItem.getBindingContext(MODEL_NAMES.MAIN).getProperty("OrderID");
            this._getRouter().navTo("OrderDetails", {
                orderId: sOrderId
            });
        }
    }
    return Controller.extend("myapp.app1.myapp.app1.controller.Custom", oCustomController);
}) 