//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.accesscontrol.sources.SourceCurrentUsers');
//</debug>
Ext.define('WPAKD.model.accesscontrol.sources.SourceCurrentUsers', {
    extend: 'Ext.data.Model',
    idProperty: 'USESOU_ID',
    fields: [
        {name: 'USESOU_ID',     type: 'int'}
        , {name: 'USE_ID',      type: 'int'}
        , {name: 'SOU_ID',      type: 'int'}
        , {name: 'USERNAME',    type: 'string'}
        , {name: 'FIRSTNAME',   type: 'string'}
        , {name: 'LASTNAME',    type: 'string'}
        , {name: 'ALERTS_FLAG', type: 'string'}
    ]
});
