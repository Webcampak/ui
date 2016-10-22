/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropactivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.crop.Cfgcropactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpicturescropcfgcropactivate"

    , fieldLabel: i18n.gettext("Crop pictures")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcropactivate");
        }
    }
});

