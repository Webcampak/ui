//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.DesktopConfig');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.DesktopConfig", {
    extend: 'Ext.button.Button',
    alias: 'widget.desktoptoolbartopdesktopconfig'

    , glyph:0xf013 // cog
    , style: 'font-family:FontAwesome'

    ,config: {
        menu: {
            style: { overflow: 'visible' },
            itemId: 'menu',
            items: [{
                text: i18n.gettext('Manage Desktop Icons')
                , itemId: 'openDesktopIconsSettings'
                , glyph:0xf108 // desktop
            }, {
                text: i18n.gettext('Save Icons Locations')
                , itemId: 'saveDesktopIcons'
                , glyph:0xf0c7
            },'-', {
                text: i18n.gettext('Change Password')
                , itemId: 'openChangePassword'
                , glyph:0xf084 // key
            }, '-', {
                text: i18n.gettext('Français')
                , href: '/' + symfonyEnv + '/desktop-fr_Fr.utf8'
                , glyph:0xf11d // flag
            }, {
                text: i18n.gettext('English')
                , href: '/' + symfonyEnv + '/desktop'
                , glyph:0xf11d // flag
            }, '-', {
                text: 'Log Out'
                , href: 'logout'
                , glyph:0xf08b // sign-out
            }]
        }
    }
});

