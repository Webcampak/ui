//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.sourcesconfiguration.VideoCustom');
//</debug>
Ext.define('WPAKD.model.sourcesconfiguration.VideoCustom', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'NAME',     type: 'string'     }
        , { name: 'VALUE',  type: 'string'     }
        , { name: 'SOURCEID',   type: 'int'    }

    ]
});
