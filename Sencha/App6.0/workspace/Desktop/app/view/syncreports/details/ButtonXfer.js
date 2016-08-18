//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.details.ButtonXfer');
//</debug>
Ext.define('WPAKD.view.syncreports.details.ButtonXfer', {
    extend: 'Ext.button.Button'
    , alias : 'widget.syncreportsdetailsbuttonxfer'

    , text: i18n.gettext('Re-run and Sync')
    , glyph:0xf0ec // fa-exchange
});
