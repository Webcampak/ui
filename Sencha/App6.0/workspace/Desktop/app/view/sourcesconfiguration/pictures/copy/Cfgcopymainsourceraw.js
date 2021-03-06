/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.copy.Cfgcopymainsourceraw");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.copy.Cfgcopymainsourceraw", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpicturescopycfgcopymainsourceraw"

    , fieldLabel: i18n.gettext("RAW")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcopymainsourceraw");
        }
    }
});

