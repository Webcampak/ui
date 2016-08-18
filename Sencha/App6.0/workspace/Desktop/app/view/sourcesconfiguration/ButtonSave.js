//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.ButtonSave');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.ButtonSave', {
    extend: 'Ext.button.Button'
    , alias : 'widget.sourcesconfigurationbuttonsave'

    , text: i18n.gettext('Save')
    , disabled: true
    , glyph:0xf0c7 // disk
});
