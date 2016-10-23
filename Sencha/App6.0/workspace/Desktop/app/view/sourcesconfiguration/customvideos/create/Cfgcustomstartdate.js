/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomstartdate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.create.Cfgcustomstartdate", {
    extend: "Ext.form.field.Date"
    , alias: "widget.sourcesconfigurationcustomvideoscreatecfgcustomstartdate"

    , format: "d/m/Y"
    , fieldLabel: i18n.gettext("From")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            if (scope.isValid() && oldValue !== null) {
                this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateDate", newValue, oldValue, "start");
            }
        }
    }
});
