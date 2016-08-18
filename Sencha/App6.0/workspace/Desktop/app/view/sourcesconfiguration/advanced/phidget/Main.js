//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.phidget.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.phidget.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationadvancedphidgetmain'

    , title: i18n.gettext('Phidget board')

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 270}
    , items: [
        {xtype: 'sourcesconfigurationadvancedphidgetcfgphidgeterroractivate'}
        , {xtype: 'sourcesconfigurationadvancedphidgetcfgphidgetfailure'}
        , {xtype: 'sourcesconfigurationadvancedphidgetcfgphidgetcameraport'}
        , {xtype: 'sourcesconfigurationadvancedphidgetcfgphidgetsensorsgraph'}
        , {
            xtype: 'container',
            layout: {type:'hbox',	align: 'stretch',	pack: 'start'},
            items   : [
                {flex: 1, labelWidth: 270, xtype: 'sourcesconfigurationadvancedphidgetcfgftpphidgetserverid'     }
                , {width: 10, xtype: 'container'}
                , {width: 200, labelWidth: 120,   xtype: 'sourcesconfigurationadvancedphidgetcfgftpphidgetserverretry'     }
            ]
        }
    ]
});

