/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.resize.Cfgvideosizeactivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.resize.Cfgvideosizeactivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpostprodresizecfgvideosizeactivate"

    , fieldLabel: i18n.gettext("Resize Picture")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideosizeactivate");
        }
    }
});

