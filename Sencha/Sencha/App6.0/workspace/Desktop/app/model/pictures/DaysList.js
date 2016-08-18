//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.pictures.DaysList');
//</debug>
Ext.define('WPAKD.model.pictures.DaysList', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'MIN',          type: 'int'  }
        , { name: 'MAX',        type: 'int'  }
        , { name: 'DISABLED',   type: 'string'  }
    ]
});
