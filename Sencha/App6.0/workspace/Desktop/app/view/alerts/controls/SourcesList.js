/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.SourcesList");
//</debug>
Ext.define("WPAKD.view.alerts.controls.SourcesList", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.alertscontrolssourceslist"

    , store: "shared.Sources"

    //, fieldLabel: i18n.gettext("Source"),
    , hideLabel: true
    , width: 300
    , emptyText: i18n.gettext("Select a source")

    , valueField: "SOURCEID"
    , displayField: "NAME"
    , queryMode: "local"
});