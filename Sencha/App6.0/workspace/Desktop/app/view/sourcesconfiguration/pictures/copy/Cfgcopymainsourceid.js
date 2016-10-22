/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.copy.Cfgcopymainsourceid");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.copy.Cfgcopymainsourceid", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.sourcesconfigurationpicturescopycfgcopymainsourceid"

    , fieldLabel: i18n.gettext("Copy pictures to")
    , store: "shared.Sources"
    , valueField: "SOURCEID"
    , displayField: "NAME"
    , queryMode: "local"
    , emptyText: i18n.gettext("Disabled")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgcopymainsourceid");
        }
    }
});