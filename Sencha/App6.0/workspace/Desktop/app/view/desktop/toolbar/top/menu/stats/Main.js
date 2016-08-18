//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.menu.stats.Main');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.stats.Main", {
    extend: 'Ext.menu.Item'
    , alias: 'widget.desktoptoolbartopmenustatsmain'

    , text: i18n.gettext('Statistics & Reports')
    , glyph: 0xf201
    , hidden: true
    , menu: {
        items: [
            {xtype: 'desktoptoolbartopmenustatssources'}
            , {xtype: 'desktoptoolbartopmenustatssystem'}
            , {xtype: 'desktoptoolbartopmenuconfigsyncreports'}
            , {xtype: 'desktoptoolbartopmenuconfigxferreports'}
        ]
    }
});