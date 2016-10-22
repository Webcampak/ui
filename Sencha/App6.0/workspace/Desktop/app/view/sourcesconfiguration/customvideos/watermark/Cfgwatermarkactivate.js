/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkactivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.watermark.Cfgwatermarkactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcustomvideoswatermarkcfgwatermarkactivate"

    , fieldLabel: i18n.gettext("Insert a watermark")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgwatermarkactivate");
        }
    }
});

