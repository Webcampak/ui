//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.shared.Applications');
//</debug>
Ext.define('WPAKD.model.shared.Applications', {
    extend: 'Ext.data.Model',

    idProperty : 'APP_ID',

    fields: [
        { name: 'APP_ID',     type: 'int'        }
        , { name: 'CODE',     type: 'string'     }
        , { name: 'NAME',     type: 'string'     }
    ]
});
