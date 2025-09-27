sap.ui.define([
    "myapp/app1/myapp/app1/controller/BaseController"
], function (Controller) {

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
            const args = oEvent.getParameters().arguments;
            if (name === "OrderDetails") {
                debugger;
                console.log("My Custom App is now loaded");
                const sPath = this._getModel(MODEL_NAMES.MAIN).createOrderPath(args.orderId);
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
        },
        
    }
    return Controller.extend("myapp/app1.myapp.app1.controller.Custom", oCustomController);
})  