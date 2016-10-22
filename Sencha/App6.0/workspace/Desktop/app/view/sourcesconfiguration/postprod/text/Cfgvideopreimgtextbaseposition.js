/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextbaseposition");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextbaseposition", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpostprodtextcfgvideopreimgtextbaseposition"

    , fieldLabel: i18n.gettext("Shadow Coordinates")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextbaseposition");
        }
    }
});
