/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.changepassword.Label");
//</debug>
Ext.define("WPAKT.view.core.authentication.changepassword.Label", {
    extend: "Ext.form.Label"
    , alias : "widget.coreauthenticationchangepasswordlabel"

    , text: i18n.gettext("Change your password")
});