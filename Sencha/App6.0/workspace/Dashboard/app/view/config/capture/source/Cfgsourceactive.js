/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.source.Cfgsourceactive");
//</debug>
Ext.define("WPAKT.view.config.capture.source.Cfgsourceactive", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.configcapturesourcecfgsourceactive"

    , fieldLabel: i18n.gettext("Activate Source")
    , uncheckedValue: "no"
    , inputValue: "yes"

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKT.controller.config.Config.updateStoreValue", newValue, oldValue, "cfgsourceactive")
        }
    }
});

