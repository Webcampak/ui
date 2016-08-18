//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.sourcesconfiguration.ConfigurationTabs');
//</debug>
Ext.define('WPAKD.model.sourcesconfiguration.ConfigurationTabs', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'NAME',     type: 'string'     }
    ]
});
