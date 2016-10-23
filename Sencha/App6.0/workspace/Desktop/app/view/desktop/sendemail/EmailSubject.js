/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.EmailSubject");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.EmailSubject", {
    extend: "Ext.form.field.Text",

    alias : "widget.desktopsendemailemailsubject",

    fieldLabel: i18n.gettext("Subject"),

    emptyText: i18n.gettext("Email Subject"),

    allowBlank: false,

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});