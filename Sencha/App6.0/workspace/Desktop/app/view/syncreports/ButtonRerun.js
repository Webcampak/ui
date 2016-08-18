//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.ButtonRerun');
//</debug>
Ext.define('WPAKD.view.syncreports.ButtonRerun', {
    extend: 'Ext.button.Button'
    , alias : 'widget.syncreportsbuttonrerun'

    , text: i18n.gettext('Re-run report')
    , glyph:0xf0fe // fa-plus-square
    , disabled: true
});
