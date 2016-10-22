/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnailborder");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.thumbnail.Cfgthumbnailborder", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpostprodthumbnailcfgthumbnailborder"

    , fieldLabel: i18n.gettext("Insert a border around thumbnail")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "Cfgthumbnailborder");
        }
    }
});

