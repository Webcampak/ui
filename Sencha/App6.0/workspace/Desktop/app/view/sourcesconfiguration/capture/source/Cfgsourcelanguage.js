/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgsourcelanguage");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgsourcelanguage", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcapturesourcecfgsourcelanguage"

    , fieldLabel: i18n.gettext("Language")

    , mode: "local"
    , value: "fr_FR.utf8"
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
                {name : i18n.gettext("French"),   value: "fr_FR.utf8"}
                , {name : i18n.gettext("English"),  value: "en_GB.utf8"}
            ]
        })
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcelanguage");
        }
    }
});

