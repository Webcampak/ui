//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.create.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.create.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationcustomvideoscreatemain'

    , title: i18n.gettext('Create a custom video')

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 250}
    , items   : [
        {xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomvidname'}
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , items   : [
                //{flex: 1,       xtype: 'label',	html: i18n.gettext('From')                                     }
                {flex: 1,labelWidth: 250, xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomstartdate'     }
                , {width: 10,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('at'), labelSeparator: '', padding: '0 5 0 5'  }
                , {width: 50,   xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomstarthour'     }
                , {width: 10,   xtype: 'label',	html: ':',                  padding: 2                         }
                , {width: 50,   xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomstartminute'   }
            ]
	}, {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , items   : [
                {flex: 1,labelWidth: 250, xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomenddate'     }
                , {width: 10,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('at'), labelSeparator: '', padding: '0 5 0 5'  }
                , {width: 50,   xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomendhour'     }
                , {width: 10,   xtype: 'label',	html: ':',                  padding: 2                         }
                , {width: 50,   xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomendminute'   }
            ]
	}, {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , items   : [
                , {width: 310, labelWidth: 250, xtype : 'sourcesconfigurationcustomvideoscreatecfgcustomkeepstarthour'   }
                , {width: 10,	xtype: 'label',	html: ':',                  padding: 2                   }
                , {width: 50,	xtype : 'sourcesconfigurationcustomvideoscreatecfgcustomkeepstartminute' }
                , {width: 30,   xtype: 'fieldcontainer', fieldLabel: i18n.gettext('and'), labelSeparator: '', padding: '0 5 0 5'  }
                , {width: 50,	xtype : 'sourcesconfigurationcustomvideoscreatecfgcustomkeependhour'     }
                , {width: 10,   xtype: 'label',	html: ':',                  padding: 2                   }
                , {width: 50,	xtype : 'sourcesconfigurationcustomvideoscreatecfgcustomkeependminute'   }
            ]
	}, {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , items   : [
                , {width: 310, labelWidth: 250, xtype: 'sourcesconfigurationcustomvideoscreatecfgvidminintervalvalue'       }
                , {width: 100,   xtype: 'sourcesconfigurationcustomvideoscreatecfgvidmininterval'            }
            ]
	}
        , {xtype: 'sourcesconfigurationcustomvideoscreatecfgemailmovieactivate'}
        , {xtype: 'sourcesconfigurationcustomvideoscreatecfgcustomactive'}
    ]
});

