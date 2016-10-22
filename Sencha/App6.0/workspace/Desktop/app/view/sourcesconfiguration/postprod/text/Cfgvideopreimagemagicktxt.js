/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimagemagicktxt");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimagemagicktxt", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpostprodtextcfgvideopreimagemagicktxt"

    , fieldLabel: i18n.gettext("Insert legend")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimagemagicktxt");
        }
    }
});

