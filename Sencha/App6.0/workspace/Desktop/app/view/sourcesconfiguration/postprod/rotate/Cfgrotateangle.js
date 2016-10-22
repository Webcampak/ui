/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.rotate.Cfgrotateangle");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.rotate.Cfgrotateangle", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationpostprodrotatecfgrotateangle"

    , fieldLabel: i18n.gettext("Rotate angle (clockwise)")
    , allowBlank: false
    , step: 0.20
    , maxValue: 360
    , minValue:-360
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgrotateangle");
        }
    }
});
