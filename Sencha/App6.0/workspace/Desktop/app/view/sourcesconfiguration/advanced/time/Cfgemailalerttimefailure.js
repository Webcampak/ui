/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.time.Cfgemailalerttimefailure");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.time.Cfgemailalerttimefailure", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationadvancedtimecfgemailalerttimefailure"

    , fieldLabel: i18n.gettext("Send an email if no capture for more than ")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalerttimefailure");
        }
    }
});
