/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.pictures.DaysList");
//</debug>
Ext.define("WPAKT.model.pictures.DaysList", {
    extend: "Ext.data.Model",

    fields: [
        { name: "MIN",          type: "int"  }
        , { name: "MAX",        type: "int"  }
        , { name: "DISABLED",   type: "string"  }
    ]
});
