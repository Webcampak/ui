//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.menu.config.Devices');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.menu.config.Devices", {
    extend: 'Ext.menu.Item'
    , alias: 'widget.desktoptoolbartopmenuconfigdevices'

    , text: i18n.gettext('Connected Devices')
    , itemId: 'menuOpenWEB_DSP_DEVICES'
    , glyph: 0xf0f1
    , hidden: true
});

