/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.EmailAttachments");
//</debug>
Ext.define("WPAKT.view.core.email.EmailAttachments", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreemailemailattachments"

    , fieldLabel: i18n.gettext("Attachments")
    , emptyText: i18n.gettext("No Attachments")
    , allowBlank: false
    , disabled: true
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});