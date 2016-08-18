//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.accesscontrol.groups.GroupAvailableApplications');
//</debug>
Ext.define('WPAKD.model.accesscontrol.groups.GroupAvailableApplications', {
    extend: 'Ext.data.Model',
    idProperty: 'APP_ID',
    fields: [
        {name: 'APP_ID', type: 'int'}
        , {name: 'GRO_ID', type: 'int'}
        , {name: 'NAME', type: 'string'}
        , {name: 'NOTES', type: 'string'}
    ]
});

