/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextovercolor");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextovercolor", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextovercolor"

    , fieldLabel: i18n.gettext("Legend Color")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextovercolor");
        }
    }
});
