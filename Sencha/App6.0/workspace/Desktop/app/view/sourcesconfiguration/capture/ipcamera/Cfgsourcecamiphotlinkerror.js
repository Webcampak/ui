/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.ipcamera.Cfgsourcecamiphotlinkerror");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.ipcamera.Cfgsourcecamiphotlinkerror", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcaptureipcameracfgsourcecamiphotlinkerror"

    , fieldLabel: i18n.gettext("Take actions if no new pictures in /tmp/ directory.")
    , uncheckedValue: "off"
    , inputValue: "on"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcecamiphotlinkerror");
        }
    }
});

