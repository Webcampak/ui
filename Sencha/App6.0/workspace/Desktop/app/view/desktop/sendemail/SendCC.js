/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.SendCC");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.SendCC", {
    extend: "Ext.form.field.Text",

    alias : "widget.desktopsendemailsendcc",

    fieldLabel: i18n.gettext("CC"),

    emptyText: i18n.gettext("Add one or more email addresses"),

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});