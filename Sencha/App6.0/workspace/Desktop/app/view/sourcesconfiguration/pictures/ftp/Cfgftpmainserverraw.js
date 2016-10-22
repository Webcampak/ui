/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpmainserverraw");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpmainserverraw", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpicturesftpcfgftpmainserverraw"

    , fieldLabel:i18n.gettext("RAW")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgftpmainserverraw");
        }
    }
});

