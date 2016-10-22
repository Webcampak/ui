/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgsourceactive");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgsourceactive", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcapturesourcecfgsourceactive"

    , fieldLabel: i18n.gettext("Activate Source")
    , uncheckedValue: "no"
    , inputValue: "yes"

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourceactive");
        }
    }
});

