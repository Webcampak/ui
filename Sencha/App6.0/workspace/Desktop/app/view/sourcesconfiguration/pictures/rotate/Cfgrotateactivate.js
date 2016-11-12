/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.rotate.Cfgrotateactivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.rotate.Cfgrotateactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpicturesrotatecfgrotateactivate"

    , fieldLabel: i18n.gettext("Rotate pictures")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgrotateactivate");
        }
    }
});

