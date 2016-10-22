/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.profile.ButtonChangePassword");
//</debug>
Ext.define("WPAKT.view.core.authentication.profile.ButtonChangePassword", {
    extend: "Ext.button.Button"
    , alias : "widget.coreauthenticationprofilebuttonchangepassword"

    , scale: "large"
    , text: i18n.gettext("Change Password")

});