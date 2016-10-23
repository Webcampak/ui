/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturetimezone");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Cfgcapturetimezone", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcapturesourcecfgcapturetimezone"

    , fieldLabel: i18n.gettext("Timezone")
    , store: "shared.Timezones"

    , valueField: "NAME"
    , displayField: "NAME"
    , queryMode: "local"

    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgcapturetimezone");
        }
    }
});

