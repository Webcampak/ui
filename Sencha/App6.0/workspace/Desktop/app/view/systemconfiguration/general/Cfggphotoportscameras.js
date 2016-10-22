/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.general.Cfggphotoportscameras");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.general.Cfggphotoportscameras", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.systemconfigurationgeneralcfggphotoportscameras"

    , fieldLabel: i18n.gettext("Source Type")
    , labelWidth: 200
    , flex: 1
    , mode: "local"
    , value: "different"
    , triggerAction: "all"
    , queryMode: "local"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , store: Ext.create("Ext.data.Store", {
            fields : ["name", "value"]
            , data : [
                {name :     i18n.gettext("Different DSLR cameras"),  value: "different"}
                , {name :   i18n.gettext("Identical DSLR cameras"),  value: "identical"}
            ]
        })

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.systemconfiguration.SystemConfiguration.updateStoreValue", newValue, oldValue, "cfggphotoportscameras")
        }
    }
});

