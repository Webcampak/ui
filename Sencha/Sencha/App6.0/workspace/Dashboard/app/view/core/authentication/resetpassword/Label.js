//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.resetpassword.Label');
//</debug>
Ext.define("WPAKT.view.core.authentication.resetpassword.Label", {
    extend: 'Ext.form.Label'
    , alias : 'widget.coreauthenticationresetpasswordlabel'

    , text: i18n.gettext('Enter your email address for further reset instructions')
});