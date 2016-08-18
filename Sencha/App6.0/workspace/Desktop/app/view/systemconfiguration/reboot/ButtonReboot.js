//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.systemconfiguration.reboot.ButtonReboot');
//</debug>
Ext.define('WPAKD.view.systemconfiguration.reboot.ButtonReboot', {
    extend: 'Ext.button.Button'
    , alias : 'widget.systemconfigurationrebootbuttonreboot'

    , text: i18n.gettext('Yes, Reboot')
    , disabled: false
    , glyph:0xf011 // power-off
});
