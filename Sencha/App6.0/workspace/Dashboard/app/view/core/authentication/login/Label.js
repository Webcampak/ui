//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.login.Label');
//</debug>
Ext.define("WPAKT.view.core.authentication.login.Label", {
    extend: 'Ext.form.Label'
    , alias : 'widget.coreauthenticationloginlabel'

    , text: i18n.gettext('Sign into your account')
});