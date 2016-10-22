/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomenddate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomenddate", {
    extend: "Ext.form.field.Date"
    , alias: "widget.sourcesconfigurationcustomvideoscreatecfgcustomenddate"

    , format: "d/m/Y"
    , fieldLabel: i18n.gettext("To")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (scope.isValid() && oldValue !== null) {
                this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateDate", newValue, oldValue, "end");
            }
        }
    }
});
