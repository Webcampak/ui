//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.ButtonCancel');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.ButtonCancel', {
    extend: 'Ext.button.Button'
    , alias : 'widget.sourcesconfigurationbuttoncancel'

    , text: i18n.gettext('Cancel')
    , disabled: true
    , glyph:0xf00d // cancel
});
