//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.devices.ButtonRefresh');
//</debug>
Ext.define('WPAKD.view.devices.ButtonRefresh', {
    extend: 'Ext.button.Button'
    , alias : 'widget.devicesbuttonrefresh'

    , text: i18n.gettext('Refresh')
    , disabled: false
    , glyph:0xf021 // refresh
});
