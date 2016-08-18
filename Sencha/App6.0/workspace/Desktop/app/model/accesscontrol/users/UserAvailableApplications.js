//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.accesscontrol.users.UserAvailableApplications');
//</debug>
Ext.define('WPAKD.model.accesscontrol.users.UserAvailableApplications', {
    extend: 'Ext.data.Model',
    idProperty: 'APP_ID',
    fields: [
        {name: 'APP_ID', type: 'int'}
        , {name: 'USE_ID', type: 'int'}
        , {name: 'LABEL', type: 'string'}
    ]
});

