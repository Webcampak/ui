/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextovercolor");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextovercolor", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpostprodtextcfgvideopreimgtextovercolor"

    , fieldLabel: i18n.gettext("Legend Color")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextovercolor");
        }
    }
});
