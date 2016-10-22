/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.copy.Cfgcopysecondenable");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.copy.Cfgcopysecondenable", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpicturescopycfgcopysecondenable"

    , fieldLabel: i18n.gettext("Enable")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcopysecondenable");
        }
    }
});

