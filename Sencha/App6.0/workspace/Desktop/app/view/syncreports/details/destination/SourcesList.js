/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.destination.SourcesList");
//</debug>
Ext.define("WPAKD.view.syncreports.details.destination.SourcesList", {
    extend: "Ext.form.field.Display"
    , alias : "widget.syncreportsdetailsdestinationsourceslist"

    , fieldLabel: i18n.gettext("Source")
});