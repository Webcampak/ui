//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.profile.ButtonLogout');
//</debug>
Ext.define("WPAKT.view.core.authentication.profile.ButtonLogout", {
    extend: 'Ext.button.Button'
    , alias : 'widget.coreauthenticationprofilebuttonlogout'

    , scale: 'large'
    , text: i18n.gettext('Logout')
    , href: '/' + symfonyEnv + '/logout'
});