/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgprocessraw");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgprocessraw", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturesourcecfgprocessraw"

    , fieldLabel: i18n.gettext("Process RAW")
    , uncheckedValue: "no"
    , inputValue: "yes"

    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgprocessraw");
        }
    }
});

