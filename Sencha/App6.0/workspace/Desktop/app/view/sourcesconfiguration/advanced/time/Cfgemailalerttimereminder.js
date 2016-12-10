/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.time.Cfgemailalerttimereminder");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.time.Cfgemailalerttimereminder", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationadvancedtimecfgemailalerttimereminder"

    , fieldLabel: i18n.gettext("Send a reminder every")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalerttimereminder");
        }
    }
});
