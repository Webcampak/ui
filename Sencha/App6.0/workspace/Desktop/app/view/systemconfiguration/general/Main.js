//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.systemconfiguration.general.Main');
//</debug>
Ext.define('WPAKD.view.systemconfiguration.general.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.systemconfigurationgeneralmain'

    , title: i18n.gettext('General')
    , scrollable: 'vertical'
    , bodyPadding:'0 18 0 0'
    , defaults: {
        margin: 10
    }
    , items: [{
        xtype: 'fieldset'
        , title: i18n.gettext('Network')
        , items: [{
            xtype: 'systemconfigurationgeneralcfgnetif'
        }, {
            xtype: 'systemconfigurationgeneralcfgxferthreads'            
        }, {
            xtype: 'systemconfigurationgeneralcfgxfermaxfilesperthread'
        }]
    }, {
        xtype: 'fieldset'
        , title: i18n.gettext('Timezone')
        , items: [{
            xtype: 'systemconfigurationgeneralcfgservertimezone'
        }]
    }, {
        xtype: 'fieldset'
        , title: i18n.gettext('Gphoto')
        , items: [{
            xtype: 'systemconfigurationgeneralcfggphotoports'
        }, {
            xtype: 'systemconfigurationgeneralcfggphotoportscameras'
        }]
    }, {
        xtype: 'fieldset'
        , title: i18n.gettext('Global FTP Account (resources)')
        , items: [{
            xtype: 'systemconfigurationgeneralcfgftpresourcesusername'
        }, {
            xtype: 'systemconfigurationgeneralcfgftpresourcespassword'
        }]
    }, {
        xtype: 'fieldset'
        , title: i18n.gettext('Phidget')
        , items: [{
            xtype: 'systemconfigurationgeneralcfgphidgetactivate'
        }]
    }, {
        xtype: 'fieldset'
        , title: i18n.gettext('Statistics')
        , items: [{
            xtype: 'systemconfigurationgeneralcfgstatsactivate'
        }]
    }
    ]
});

