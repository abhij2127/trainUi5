/**
 * odataLib.js
 * Extension library for OData operations in UI5 applications.
 */

sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function(ODataModel, JSONModel, MessageToast) {
    "use strict";

    return ODataModel.extend("myapp.app1.myapp.app1.utils.odataLib", {
        entity: {
            Orders: "/Orders",
            Products: "/Products",
            Customers: "/Customers",
            Employees: "/Employees"
        },
        createOrderPath(orderId) {
            return `${this.entity.Orders}(${orderId})`;
        },
        createProductPath(productId) {
            return `${this.entity.Products}(${productId})`;
        },
        createCustomerPath(customerId) {
            return `${this.entity.Customers}('${customerId}')`;
        },
        createEmployeePath(employeeId) {
            return `${this.entity.Employees}(${employeeId})`;
        },
        showMessage(message) {
            MessageToast.show(message);
        },
        getOrderData(orderId, successCallback, errorCallback) {
            this.read(this.createOrderPath(orderId), {
                success: successCallback,
                error: errorCallback
            });
        },
        getProductData(productId, successCallback, errorCallback) {
            this.read(this.createProductPath(productId), {
                success: successCallback,
                error: errorCallback
            });
        }
    });
});