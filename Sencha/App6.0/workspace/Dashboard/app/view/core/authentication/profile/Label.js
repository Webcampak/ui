//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.profile.Label');
//</debug>
Ext.define("WPAKT.view.core.authentication.profile.Label", {
    extend: 'Ext.form.Label'
    , alias : 'widget.coreauthenticationprofilelabel'

    , text: i18n.gettext('Select an action')
});