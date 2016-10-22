/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.ipcamera.Cfgsourcecamiplimiterotation");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.ipcamera.Cfgsourcecamiplimiterotation", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcaptureipcameracfgsourcecamiplimiterotation"

    , fieldLabel: i18n.gettext("Limit hotlink processing to one picture per rotation")
    , uncheckedValue: "off"
    , inputValue: "on"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcecamiplimiterotation");
        }
    }
});

