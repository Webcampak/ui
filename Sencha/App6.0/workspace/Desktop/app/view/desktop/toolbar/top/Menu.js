//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.Menu');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.Menu", {
    extend: 'Ext.button.Button'
    , alias: 'widget.desktoptoolbartopmenu'

    , text: i18n.gettext('Webcampak')
    , glyph: 0xf030
    , menu: {
        style: { overflow: 'visible' }
        , items: [{
            text: i18n.gettext('Pictures')
            , itemId: 'menuOpenWEB_DSP_PICTURES'
            , glyph: 0xf030
            , hidden: false
        }, {
            text: i18n.gettext('Videos')
            , itemId: 'menuOpenWEB_DSP_VIDEOS'
            , glyph: 0xf03d
            , hidden: false
        }, '-', {
            text: i18n.gettext('Statistics & Reports')
            , glyph: 0xf201
            , hidden: false
            , menu: {
                items: [{
                    text: i18n.gettext('Sources Statistics')
                    , itemId: 'menuOpenWEB_DSP_STATS_SOURCES'
                    , glyph: 0xf201
                    , hidden: false
                }, {
                    text: i18n.gettext('System Statistics')
                    , itemId: 'menuOpenWEB_DSP_STATS_SYSTEM'
                    , glyph: 0xf1fe
                    , hidden: false
                }]
            }
        }, '-', {
            text: i18n.gettext('Configuration')
            , glyph: 0xf013
            , hidden: false
            , menu: {
                items: [{
                    text: i18n.gettext('Sources')
                    , itemId: 'menuOpenWEB_CFG_SOURCES'
                    , glyph: 0xf013
                    , hidden: false
                }, {
                    text: i18n.gettext('Access Control')
                    , itemId: 'menuOpenWEB_CFG_ACCESSCONTROL'
                    , glyph: 0xf0c0
                    , hidden: false
                }, {
                    text: i18n.gettext('System Conf.')
                    , itemId: 'menuOpenWEB_CFG_SYSTEM'
                    , glyph: 0xf013
                    , hidden: false
                }, {
                    text: i18n.gettext('Connected Devices')
                    , itemId: 'menuOpenWEB_DSP_DEVICES'
                    , glyph: 0xf0f1
                    , hidden: false
                }]
            }
        }, {
            text: i18n.gettext('Logs')
            , itemId: 'menuOpenWEB_DSP_LOGS'
            , glyph: 0xf03a
            , hidden: false
        }, '-', {
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
        }]
    }
});

