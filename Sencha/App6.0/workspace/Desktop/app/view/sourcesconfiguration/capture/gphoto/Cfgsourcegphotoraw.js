/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotoraw");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotoraw", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturegphotocfgsourcegphotoraw"

    , fieldLabel: i18n.gettext("Process RAW files")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcegphotoraw");
        }
    }
});

