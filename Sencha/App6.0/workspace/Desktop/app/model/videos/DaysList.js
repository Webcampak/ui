/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.videos.DaysList");
//</debug>
Ext.define("WPAKD.model.videos.DaysList", {
    extend: "Ext.data.Model",

    fields: [
        { name: "MIN",          type: "int"  }
        , { name: "MAX",        type: "int"  }
        , { name: "DISABLED",   type: "string"  }
    ]
});
