//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.accesscontrol.users.UserCurrentPermissions');
//</debug>
Ext.define('WPAKD.model.accesscontrol.users.UserCurrentPermissions', {
    extend: 'Ext.data.Model',
    idProperty: 'USEPRI_ID',
    fields: [
        {name: 'USEPRI_ID ', type: 'int'}
        , {name: 'SYSPRI_ID', type: 'int'}
        , {name: 'USE_ID', type: 'int'}
        , {name: 'CODE', type: 'string'}
        , {name: 'NOTES', type: 'string'}
    ]
});

