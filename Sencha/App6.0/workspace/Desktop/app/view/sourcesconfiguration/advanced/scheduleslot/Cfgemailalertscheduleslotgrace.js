/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Cfgemailalertscheduleslotgrace");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Cfgemailalertscheduleslotgrace", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslotgrace"

    , fieldLabel: i18n.gettext("Grace period")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalertscheduleslotgrace");
        }
    }
});
