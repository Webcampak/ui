/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.Password");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.Password", {
    extend: "Ext.form.field.Text",
    alias : "widget.desktopauthenticationpassword",

    fieldLabel: i18n.gettext("Password:"),
    emptyText: i18n.gettext("Password"),
    allowBlank: false,
    inputType: "password",
//    plugins: new Ext.ux.form.field.ClearButton({hideClearButtonWhenMouseOut: false}),

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKD.controller.desktop.Authentication.doFormLogin");
            }
        }
    }
});