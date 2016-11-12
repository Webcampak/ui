/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.source.SourcesList");
//</debug>
Ext.define("WPAKD.view.syncreports.details.source.SourcesList", {
    extend: "Ext.form.field.Display"
    , alias : "widget.syncreportsdetailssourcesourceslist"

    , fieldLabel: i18n.gettext("Source")
});