/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.edit.Type");
//</debug>
Ext.define("WPAKD.view.alerts.controls.edit.Type", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.alertscontrolsedittype"

    , hideLabel: true
    , flex: 1
    , mode: "local"
    , value: "add"
    , triggerAction: "all"
    , queryMode: "local"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , allowBlank: false
    , store: Ext.create("Ext.data.Store", {
            fields : ["name", "value"]
            , data : [
                {name : i18n.gettext("Addition"),                                               value: "add"   }
                , {name : i18n.gettext("Addition, exclusive (remove any in-between values)"),   value: "addex" }
                , {name : i18n.gettext("Deletion"),                                             value: "del"   }
            ]
        })
});

