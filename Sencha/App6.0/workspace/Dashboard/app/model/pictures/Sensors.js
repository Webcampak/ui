//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.model.pictures.Sensors');
//</debug>
Ext.define('WPAKT.model.pictures.Sensors', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'SENSOR1',   type: 'string'  }
        , { name: 'SENSOR2',   type: 'string'  }
        , { name: 'SENSOR3',   type: 'string'  }
        , { name: 'SENSOR4',   type: 'string'  }
    ]
});

