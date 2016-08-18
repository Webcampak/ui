//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.ButtonDelete');
//</debug>
Ext.define('WPAKD.view.syncreports.ButtonDelete', {
    extend: 'Ext.button.Button'
    , alias : 'widget.syncreportsbuttondelete'

    , text: i18n.gettext('Delete')
    , glyph:0xf146 // fa-minus-square
    , disabled: true
});
