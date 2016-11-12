/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinkerrorcreate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.hotlink.Cfghotlinkerrorcreate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpictureshotlinkcfghotlinkerrorcreate"

    , fieldLabel: i18n.gettext("Generate error hotlink")
//    , boxLabel: i18n.gettext("In case of error, a hotlink with an error message will be displayed")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfghotlinkerrorcreate");
        }
    }
});

