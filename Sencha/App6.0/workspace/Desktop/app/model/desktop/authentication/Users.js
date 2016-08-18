//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.desktop.authentication.Users');
//</debug>
Ext.define('WPAKD.model.desktop.authentication.Users', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'USE_ID',              type: 'int'     }
        , {name: 'USERNAME',         type: 'string' }
        , {name: 'AUTH_TOKEN',      type: 'string' }
        , {name: 'AUTHENTICATED',  type: 'string' } // Y or N
    ]
});
