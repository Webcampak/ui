//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.emails.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.emails.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationadvancedemailsmain'

    , title: i18n.gettext('Emails')

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 250}
    , items: [
        {xtype: 'sourcesconfigurationadvancedemailscfgemaildirectalert'}
        , {xtype: 'sourcesconfigurationadvancedemailscfgemailschedulealert'}
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , items   : [
                {width: 320, labelWidth: 250, xtype: 'sourcesconfigurationadvancedemailscfgemailalertfailure'     }
                , {width: 140, labelWidth: 250,  xtype: 'fieldcontainer', fieldLabel: i18n.gettext('minutes late (0 = never)'), labelSeparator: '', padding: '0 5 0 5'  }
            ]
        }        
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , items   : [
                {width: 320, labelWidth: 250,   xtype: 'sourcesconfigurationadvancedemailscfgemailalertreminder'     }
                , {width: 140, labelWidth: 250,  xtype: 'fieldcontainer', fieldLabel: i18n.gettext('minutes (0 = never)'), labelSeparator: '', padding: '0 5 0 5'  }
            ]
        }
        , {xtype: 'sourcesconfigurationadvancedemailscfgemailalwaysnotify'}
    ]
});

