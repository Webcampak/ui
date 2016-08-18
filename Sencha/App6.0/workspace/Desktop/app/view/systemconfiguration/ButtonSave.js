//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.systemconfiguration.ButtonSave');
//</debug>
Ext.define('WPAKD.view.systemconfiguration.ButtonSave', {
    extend: 'Ext.button.Button'
    , alias : 'widget.systemconfigurationbuttonsave'

    , text: i18n.gettext('Save')
    , disabled: true
    , glyph:0xf0c7 // disk
});
