//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.systemconfiguration.reboot.Main');
//</debug>
Ext.define('WPAKD.view.systemconfiguration.reboot.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.systemconfigurationrebootmain'

    , title: i18n.gettext('Reboot')
    , scrollable: 'vertical'
    , bodyPadding:'0 18 0 0'
    , defaults: {
        margin: 10
    }
    , items: [{
        xtype: 'fieldset'
        , title: i18n.gettext('Are you sure you want to reboot ?')
        , items: [{
            xtype: 'systemconfigurationrebootbuttonreboot'
        }]
    }]
});

