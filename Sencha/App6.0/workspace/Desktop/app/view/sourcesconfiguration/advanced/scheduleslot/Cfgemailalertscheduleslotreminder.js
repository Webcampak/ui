/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Cfgemailalertscheduleslotreminder");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Cfgemailalertscheduleslotreminder", {
    extend: "Ext.form.field.Number"
    , alias: "widget.sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslotreminder"

    , fieldLabel: i18n.gettext("Send a reminder every")
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailalertscheduleslotreminder");
        }
    }
});
