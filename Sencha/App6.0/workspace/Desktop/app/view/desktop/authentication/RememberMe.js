/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.authentication.RememberMe");
//</debug>
Ext.define("WPAKD.view.desktop.authentication.RememberMe", {
    extend: "Ext.form.field.Checkbox",
    alias : "widget.desktopauthenticationrememberme",

    fieldLabel: i18n.gettext("Remember Me:"),

    checked: true,
    listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                this.fireEvent("WPAKD.controller.desktop.Authentication.doFormLogin");
            }
        }
    }

});

