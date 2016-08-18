//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.stats.system.Range');
//</debug>
Ext.define('WPAKD.view.stats.system.Range', {
    extend: 'Ext.form.field.ComboBox'
    , alias: 'widget.statssystemrange'

    , fieldLabel: i18n.gettext('Range')
    , flex: 1
    , mode: 'local'
    , value: 'day'
    , triggerAction: 'all'
    , queryMode: 'local'
    , forceSelection: true
    , editable: false
    , displayField: 'name'
    , valueField: 'value'
    , store: Ext.create('Ext.data.Store', {
            fields : ['name', 'value']
            , data : [
                {name : i18n.gettext('Day'),        value: 'day'    }
                , {name : i18n.gettext('Month'),    value: 'month'  }
                , {name : i18n.gettext('Year'),     value: 'year'   }
            ]
        })
});

