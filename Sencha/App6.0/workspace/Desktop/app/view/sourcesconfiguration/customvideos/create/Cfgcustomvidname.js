/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomvidname");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomvidname", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationcustomvideoscreatecfgcustomvidname"

    , fieldLabel: i18n.gettext("Filename")
    , vtype: "alphanum"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgcustomvidname");
        }
    }
});
