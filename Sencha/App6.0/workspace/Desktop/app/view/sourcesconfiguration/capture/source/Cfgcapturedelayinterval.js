/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturedelayinterval");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturedelayinterval", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcapturesourcecfgcapturedelayinterval"

    , mode: "local"
    , value: "minutes"
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
                {name : i18n.gettext("Minutes"),  value: "minutes"}
                , {name : i18n.gettext("Seconds"),  value: "seconds"}
            ]
        })

    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgcapturedelayinterval");
        }
    }
});

