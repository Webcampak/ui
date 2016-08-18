//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.reportadd.ButtonCancel');
//</debug>
Ext.define('WPAKD.view.syncreports.reportadd.ButtonCancel', {
    extend: 'Ext.button.Button'
    , alias : 'widget.syncreportsreportaddbuttoncancel'

    , text: i18n.gettext('Cancel')
    , glyph:0xf00d // fa-plus-square
});
