/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.SendBCC");
//</debug>
Ext.define("WPAKT.view.core.email.SendBCC", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreemailsendbcc"

    , fieldLabel: i18n.gettext("BCC")
    , emptyText: i18n.gettext("Add one or more email addresses")
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});