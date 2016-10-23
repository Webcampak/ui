/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimagemagicktxt");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimagemagicktxt", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcustomvideospreprocesscfgvideopreimagemagicktxt"

    , fieldLabel: i18n.gettext("Insert legend")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimagemagicktxt");
        }
    }
});

