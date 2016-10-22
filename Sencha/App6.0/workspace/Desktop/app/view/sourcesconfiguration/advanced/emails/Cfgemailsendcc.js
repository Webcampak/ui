/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailsendcc");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.emails.Cfgemailsendcc", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationadvancedemailscfgemailsendcc"

    , fieldLabel: i18n.gettext("Send a copy of the emails to (CC)")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.updateStoreValue", newValue, oldValue, "cfgemailsendcc")
        }
    }
});
