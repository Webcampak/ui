/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.SendCC");
//</debug>
Ext.define("WPAKT.view.core.email.SendCC", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreemailsendcc"

    , fieldLabel: i18n.gettext("CC")
    , emptyText: i18n.gettext("Add one or more email addresses")
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
                // Some action
            }
        }
    }
});