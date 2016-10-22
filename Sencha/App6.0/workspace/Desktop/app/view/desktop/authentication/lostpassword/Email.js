/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.lostpassword.Email");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.lostpassword.Email", {
    extend: "Ext.form.field.Text",
    alias : "widget.desktopauthenticationlostpasswordemail",

    fieldLabel: i18n.gettext("Email:"),
    emptyText: i18n.gettext("Email"),
    allowBlank: false,

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
                this.fireEvent("WPAKD.controller.desktop.Authentication.doFormLostPassword");
            }
        }
    }
});