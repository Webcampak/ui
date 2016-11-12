/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.lostpassword.Username");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.lostpassword.Username", {
    extend: "Ext.form.field.Text",
    alias : "widget.desktopauthenticationlostpasswordusername",

    fieldLabel: i18n.gettext("Username:"),
    emptyText: i18n.gettext("Username"),
    allowBlank: false,

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKD.controller.desktop.Authentication.doFormLostPassword");
            }
        }
    }
});