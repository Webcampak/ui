/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.webcampak.Cfgsourcewpaktype");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.webcampak.Cfgsourcewpaktype", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcapturewebcampakcfgsourcewpaktype"

    , mode: "local"
    , value: "rec"
    , triggerAction: "all"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , queryMode: "local"
    , fieldLabel: i18n.gettext("Select capture mode")
    , store: Ext.create("Ext.data.Store", {
                fields : ["name", "value"]
                , data   : [
                    {name : i18n.gettext("Get: Pictures copied from an other source"),  value: "get"}
                    , {name : i18n.gettext("Receive: Pictures sent by another source"),   value: "rec"}
                ]
            })
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcewpaktype");
        }
    }
});

