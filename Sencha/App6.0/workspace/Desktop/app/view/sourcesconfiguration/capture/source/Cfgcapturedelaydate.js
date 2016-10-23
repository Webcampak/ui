/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturedelaydate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturedelaydate", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcapturesourcecfgcapturedelaydate"

    , fieldLabel: i18n.gettext("Picture date")
    , mode: "local"
    , value: "capture"
    , triggerAction: "all"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , queryMode: "local"
    , store:
        Ext.create("Ext.data.Store", {
            fields : ["name", "value"]
            , data   : [
                {name : i18n.gettext("Capture time"),       value: "capture"}
                , {name : i18n.gettext("Script start time"),  value: "script"}
            ]
        })
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgcapturedelaydate");
        }
    }
});

