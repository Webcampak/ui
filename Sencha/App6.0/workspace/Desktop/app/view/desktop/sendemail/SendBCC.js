/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.SendBCC");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.SendBCC", {
    extend: "Ext.form.field.Text",

    alias : "widget.desktopsendemailsendbcc",

    fieldLabel: i18n.gettext("BCC"),

    emptyText: i18n.gettext("Add one or more email addresses"),

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});