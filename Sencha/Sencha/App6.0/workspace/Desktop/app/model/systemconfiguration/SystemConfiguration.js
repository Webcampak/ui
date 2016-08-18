//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.systemconfiguration.SystemConfiguration');
//</debug>
Ext.define('WPAKD.model.systemconfiguration.SystemConfiguration', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'NAME',         type: 'string'     }
        , { name: 'VALUE',      type: 'string'     }
    ]
});
