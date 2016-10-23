/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.login.RememberMe");
//</debug>
Ext.define("WPAKT.view.core.authentication.login.RememberMe", {
    extend: "Ext.form.field.Checkbox"
    , alias : "widget.coreauthenticationloginrememberme"

    , flex : 1
    , cls: "form-panel-font-color rememberMeCheckbox"
    , height: 30
    , boxLabel: i18n.gettext("Remember me")
});