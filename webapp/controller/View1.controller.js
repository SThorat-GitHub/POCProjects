var that;
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment",
	"sap/ui/model/json/JSONModel"
], function (Controller, Fragment, JSONModel) {
	"use strict";

	return Controller.extend("sthorat.ST_Project1.controller.View1", {
		onInit: function () {

			that = this;
			var data = {
				"products": [{
					"productName": "iPhone X"
				}, {
					"productName": "iPAD"
				}, {
					"productName": "Galaxy X"
				}, {
					"productName": "iPhone 8"
				}, {
					"productName": "Apple Watch Series 1"
				}, {
					"productName": "Apple Watch Series 2"
				}]
			};

			var projModel = new sap.ui.model.json.JSONModel(data);
			/*	projModel.loadData(jQuery.sap.getModulePath("sthorat.ST_Project1.localdata",
					"/products.json"));*/
			that.getView().setModel(projModel);

		},
		handleValueHelp: function () {
			if (!this._oValueHelpDialog) {
				Fragment.load({
					name: "sthorat.ST_Project1.fragments.Dialog",
					controller: this
				}).then(function (oValueHelpDialog) {
					this._oValueHelpDialog = oValueHelpDialog;
					this.getView().addDependent(this._oValueHelpDialog);
					this._configValueHelpDialog();
					this._oValueHelpDialog.open();
				}.bind(this));
			} else {
				this._configValueHelpDialog();
				this._oValueHelpDialog.open();
			}
		},
		_configValueHelpDialog: function () {
			var sInputValue = that.byId("productInput").getValue(),
				oModel = that.getView().getModel(),
				aProducts = oModel.getProperty("/products");

			aProducts.forEach(function (oProduct) {
				oProduct.selected = (oProduct.Name === sInputValue);
			});
			oModel.setProperty("/products", aProducts);
		}
	});
});