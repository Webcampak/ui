//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.authentication.ButtonRecoverPassword');
//</debug>
Ext.define("WPAKD.view.desktop.authentication.ButtonRecoverPassword", {
    extend: 'Ext.menu.Item',
    alias : 'widget.desktopauthenticationbuttonrecoverpassword',

    config: {
        glyph:0xf084 // key
    },
    //iconCls: 'icon-email_png',

    text: i18n.gettext('Recover Lost Password')

});

