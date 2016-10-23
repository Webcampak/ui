/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.destination.Type");
//</debug>
Ext.define("WPAKD.view.syncreports.details.destination.Type", {
    extend: "Ext.form.field.Display"
    , alias : "widget.syncreportsdetailsdestinationtype"

    , fieldLabel: i18n.gettext("Type")
});