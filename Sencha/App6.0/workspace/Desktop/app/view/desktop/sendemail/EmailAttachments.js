/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.EmailAttachments");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.EmailAttachments", {
    extend: "Ext.form.field.Text",

    alias : "widget.desktopsendemailemailattachments",

    fieldLabel: i18n.gettext("Attachments"),

    emptyText: i18n.gettext("No Attachments"),

    allowBlank: false,
    disabled: true,

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});