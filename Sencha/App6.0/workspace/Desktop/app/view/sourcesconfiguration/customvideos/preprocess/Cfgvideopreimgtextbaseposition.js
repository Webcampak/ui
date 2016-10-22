/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextbaseposition");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextbaseposition", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbaseposition"

    , fieldLabel: i18n.gettext("Shadow Coordinates")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextbaseposition");
        }
    }
});
