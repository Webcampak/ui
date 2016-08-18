//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.accesscontrol.sources.SourceAvailableUsers');
//</debug>
Ext.define('WPAKD.model.accesscontrol.sources.SourceAvailableUsers', {
    extend: 'Ext.data.Model',
    idProperty: 'USE_ID',
    fields: [
        {name: 'USE_ID',        type: 'int'}
        , {name: 'SOU_ID',      type: 'int'}
        , {name: 'USERNAME',    type: 'string'}
        , {name: 'FIRSTNAME',   type: 'string'}
        , {name: 'LASTNAME',    type: 'string'}
        , {name: 'ALERTS_FLAG', type: 'string'}
    ]
});
