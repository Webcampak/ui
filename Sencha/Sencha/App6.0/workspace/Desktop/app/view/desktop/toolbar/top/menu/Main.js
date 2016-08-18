//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.menu.Main');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.Main", {
    extend: 'Ext.button.Button'
    , alias: 'widget.desktoptoolbartopmenumain'

    , text: i18n.gettext('Webcampak')
    , glyph: 0xf030
    , style: 'font-family:FontAwesome'

    , menu: {
        style: { overflow: 'visible' }
        , items: [
            {xtype: 'desktoptoolbartopmenupictures'}
            , {xtype: 'desktoptoolbartopmenuvideos'}
            , '-'
            , {xtype: 'desktoptoolbartopmenustatsmain'}
            , '-'
            , {xtype: 'desktoptoolbartopmenuconfigmain'}
            , '-'
            , {xtype: 'desktoptoolbartopmenulogs'}
            , '-', {
                text: i18n.gettext('Documentation')
                , glyph: 0xf02d
                , href: 'http://www.webcampak.com/doc/'
                , tooltip: i18n.gettext('Link to Webcampak documentation, available in English & French')
            }, {
                text: i18n.gettext('Blog')
                , glyph: 0xf0ac
                , href: 'http://blog.webcampak.com'
                , tooltip: i18n.gettext('Link to Webcampak.com blog')
            }, {
                text: i18n.gettext('About')
                , glyph: 0xf0ac
                , href: 'http://www.webcampak.com'
                , tooltip: i18n.gettext('Link to Webcampak.com website')
            }
        ]

    }
});