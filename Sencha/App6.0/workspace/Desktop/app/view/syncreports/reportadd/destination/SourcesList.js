/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.reportadd.destination.SourcesList");
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.destination.SourcesList", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.syncreportsreportadddestinationsourceslist"

    , store: "shared.Sources"

    , fieldLabel: i18n.gettext("Source")
    , valueField: "SOURCEID"
    , displayField: "NAME"
    , queryMode: "local"
});