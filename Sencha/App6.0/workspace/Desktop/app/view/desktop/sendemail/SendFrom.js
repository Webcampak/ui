/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.sendemail.SendFrom");
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.SendFrom", {
    extend: "Ext.form.field.Text",

    alias : "widget.desktopsendemailsendfrom",

    fieldLabel: i18n.gettext("From:"),

    disabled: true
});