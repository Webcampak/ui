/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.reportadd.destination.Type");
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.destination.Type", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.syncreportsreportadddestinationtype"

    , fieldLabel: i18n.gettext("Type")

    , store: Ext.create("Ext.data.Store", {
        fields: [{name: "type", type: "string"}, {name: "value", type: "string"}]
        , data : [{type : i18n.gettext("FTP"), value: "ftp"}, {type : i18n.gettext("Local"), value: "filesystem"}]
    })
    , displayField: "type"
    , valueField: "value"

    , queryMode: "local"
});