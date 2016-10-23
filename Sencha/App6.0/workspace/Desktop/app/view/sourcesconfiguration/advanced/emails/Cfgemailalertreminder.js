/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailalertreminder");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailalertreminder", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationadvancedemailscfgemailalertreminder"

    , fieldLabel: i18n.gettext("Send a reminder every")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalertreminder");
        }
    }
});
