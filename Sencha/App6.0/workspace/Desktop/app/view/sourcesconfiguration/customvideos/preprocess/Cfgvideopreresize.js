/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreresize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreresize", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcustomvideospreprocesscfgvideopreresize"

    , fieldLabel: i18n.gettext("Enable")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (newValue === true) {newValue = "yes";} else {newValue = "no";}
            if (oldValue === true) {oldValue = "yes";} else {oldValue = "no";}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreresize");
        }
    }
});

