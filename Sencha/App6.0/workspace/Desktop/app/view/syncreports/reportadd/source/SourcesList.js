/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.reportadd.source.SourcesList");
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.source.SourcesList", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.syncreportsreportaddsourcesourceslist"

    , store: "shared.Sources"

    , fieldLabel: i18n.gettext("Source")
    , valueField: "SOURCEID"
    , displayField: "NAME"
    , queryMode: "local"
});