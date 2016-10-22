/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.pictures.Sensors");
//</debug>
Ext.define("WPAKD.model.pictures.Sensors", {
    extend: "Ext.data.Model",

    fields: [
        { name: "SENSOR1",   type: "string"  }
        , { name: "SENSOR2",   type: "string"  }
        , { name: "SENSOR3",   type: "string"  }
        , { name: "SENSOR4",   type: "string"  }
    ]
});

