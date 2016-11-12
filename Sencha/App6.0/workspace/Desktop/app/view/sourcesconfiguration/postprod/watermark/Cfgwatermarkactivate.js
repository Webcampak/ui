/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkactivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.watermark.Cfgwatermarkactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpostprodwatermarkcfgwatermarkactivate"

    , fieldLabel: i18n.gettext("Insert a watermark")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgwatermarkactivate");
        }
    }
});

