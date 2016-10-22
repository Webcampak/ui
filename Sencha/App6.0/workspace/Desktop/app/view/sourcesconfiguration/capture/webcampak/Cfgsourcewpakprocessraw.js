/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.webcampak.Cfgsourcewpakprocessraw");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.webcampak.Cfgsourcewpakprocessraw", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturewebcampakcfgsourcewpakprocessraw"

    , fieldLabel: i18n.gettext("Process RAW files")
    , uncheckedValue: "off"
    , inputValue: "on"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcewpakprocessraw");
        }
    }
});

