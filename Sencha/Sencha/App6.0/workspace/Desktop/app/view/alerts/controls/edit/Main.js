//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.alerts.controls.edit.Main');
//</debug>
Ext.define('WPAKD.view.alerts.controls.edit.Main', {
    extend: 'Ext.form.Panel'
    , alias: 'widget.alertscontrolseditmain'

    , items: [{
        xtype: 'container'
        , layout: {type:'hbox', pack: 'start', align: 'stretch'}      
        , items: [
            {width: 120,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('From: '), labelSeparator: '', padding: 2  }
            , {width: 235, xtype: 'alertscontrolseditstartday'}
            , {width: 30,  xtype: 'fieldcontainer', fieldLabel: i18n.gettext('To:'), labelSeparator: '', padding: 2  }                                
            , {width: 235, xtype: 'alertscontrolseditendday'}                        
        ]
    }, {
        xtype: 'container'
        , layout: {type:'hbox', pack: 'start', align: 'stretch'}      
        , items: [
            {width: 120,    xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Daily, from:'), labelSeparator: '', padding: 2  }
            , {width: 50,   xtype : 'alertscontrolseditstarthour'}
            , {width: 10,   xtype: 'label', html: ':', padding: 2 }
            , {width: 50,   xtype : 'alertscontrolseditstartminute'}
            , {width: 117,  xtype: 'label', html: ''}                                
            , {width: 30,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('To:'), labelSeparator: '', padding: 2  }
            , {width: 50,   xtype : 'alertscontrolseditendhour'}
            , {width: 10,   xtype: 'label', html: ':',padding: 2}
            , {width: 50,   xtype : 'alertscontrolseditendminute'}                             
        ]
    }, {       
        xtype: 'container'
        , layout: {type:'hbox', pack: 'start', align: 'stretch'}      
        , items: [
            {width: 120,    xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Frequency:'), labelSeparator: '', padding: 2  }
            , {width: 50,   xtype : 'alertscontrolseditrate'}
            , {width: 100,  xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Minutes'), labelSeparator: '', padding: 2  }
        ]                            
    }, {
        xtype: 'container'
        , layout: {type:'hbox', pack: 'start', align: 'stretch'}      
        , items: [
            {width: 120,    xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Action:'), labelSeparator: '', padding: 2  }
            , {xtype : 'alertscontrolsedittype'}
            , {width: 30,   xtype: 'label', html: ''}   
            , {xtype : 'alertscontrolseditbuttonapply'}
        ]
    }]    
    
});



