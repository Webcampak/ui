/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextoverposition");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextoverposition", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpostprodtextcfgvideopreimgtextoverposition"

    , fieldLabel: i18n.gettext("Legend Coordinates")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextoverposition");
        }
    }
});
