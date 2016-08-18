//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.calendar.Main');
//</debug>
Ext.define('WPAKT.view.config.capture.calendar.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.configcapturecalendarmain'

    , cls: 'quick-graph-panel shadow-panel'
    //, layout: 'fit'
    , headerPosition: 'top'
    , iconCls: 'x-fa fa-calendar'
    , title: i18n.gettext('Calendar')

//    , padding: 10
//    , layout: 'fit'
    , items: [{
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items : [
            {width: 150,	xtype: 'configcapturecalendarcfgcroncalendar'}
            , {
                flex: 1
                , xtype: 'fieldcontainer'
                , fieldLabel: i18n.gettext('If disabled, the system will capture 24/7')
                , labelSeparator: ''
                , labelWidth: 300
            }
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable1'                    }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'),   labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour1'             }
            , {width: 10,   xtype: 'label', html: ''}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute1'           }
            , {width: 5,    xtype: 'container', html: ''}            
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'),       labelSeparator: '', padding: 2, labelWidth: 30}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour1'               }
            , {width: 10,   xtype: 'label', html: '' }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute1'             }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable2'                    }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'), 	labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour2'           }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute2'         }
            , {width: 5,    xtype: 'container', html: ''}         
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), 	labelSeparator: '', padding: 2, labelWidth: 30  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour2'             }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute2'           }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable3'                    }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'), 	labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour3'           }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute3'         }
            , {width: 5,    xtype: 'container', html: ''}         
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), 	labelSeparator: '', padding: 2, labelWidth: 30  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour3'             }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute3'           }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable4'            }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'), 	labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour4'           }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute4'         }
            , {width: 5,    xtype: 'container', html: ''}         
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), 	labelSeparator: '', padding: 2, labelWidth: 30  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour4'             }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute4'           }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable5'                    }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'), 	labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour5'           }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute5'         }
            , {width: 5,    xtype: 'container', html: ''}         
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), 	labelSeparator: '', padding: 2, labelWidth: 30  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour5'             }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute5'           }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable6'                    }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'), 	labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour6'           }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute6'         }
            , {width: 5,    xtype: 'container', html: ''}         
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), 	labelSeparator: '', padding: 2, labelWidth: 30  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour6'             }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute6'           }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }, {
        xtype: 'container'
        , padding: '0 10 10 10'
        , layout: {type:'hbox',	align: 'stretch', pack: 'start'}
        , items   : [
            {width: 150,    xtype: 'configcapturecalendarcfgcapturedayenable7'                    }
            , {width: 60,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('Between'), 	labelSeparator: '', padding: 2  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestarthour7'           }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcapturestartminute7'         }
            , {width: 5,    xtype: 'container', html: ''}         
            , {width: 40,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), 	labelSeparator: '', padding: 2, labelWidth: 30  }
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendhour7'             }
            , {width: 10,   xtype: 'label'}
            , {width: 70,   xtype : 'configcapturecalendarcfgcaptureendminute7'           }
            , {flex: 1 ,    xtype : 'label', html: ''}
        ]
    }]
});

