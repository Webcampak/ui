//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.stats.system.ButtonRefresh');
//</debug>
Ext.define('WPAKD.view.stats.system.ButtonRefresh', {
    extend: 'Ext.button.Button'
    , alias : 'widget.statssystembuttonrefresh'

    , text: i18n.gettext('Refresh')
    , disabled: false
    , glyph:0xf021 // refresh
});
