//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.profile.ButtonCancel');
//</debug>
Ext.define("WPAKT.view.core.authentication.profile.ButtonCancel", {
    extend: 'Ext.button.Button'
    , alias : 'widget.coreauthenticationprofilebuttoncancel'

    , scale: 'large'
    , text: i18n.gettext('Cancel')
});