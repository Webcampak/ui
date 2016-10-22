/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.source.Type");
//</debug>
Ext.define("WPAKD.view.syncreports.details.source.Type", {
    extend: "Ext.form.field.Display"
    , alias : "widget.syncreportsdetailssourcetype"

    , fieldLabel: i18n.gettext("Type")

});