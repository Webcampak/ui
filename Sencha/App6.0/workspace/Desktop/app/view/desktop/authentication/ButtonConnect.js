//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.authentication.ButtonConnect');
//</debug>
Ext.define("WPAKD.view.desktop.authentication.ButtonConnect", {
    extend: 'Ext.button.Button',
    alias : 'widget.desktopauthenticationbuttonconnect',

//    iconCls: 'icon-connect_png',
    config: {
        glyph:0xf090 // sign-in
    },
    text: i18n.gettext('Connect')

});

