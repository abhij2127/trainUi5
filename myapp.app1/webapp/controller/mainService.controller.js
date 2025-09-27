sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("myapp.app1.myapp.app1.controller.mainService", {
        onInit() {
            console.log("Here");
        }
    });
});