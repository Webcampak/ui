/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.syncreports.IntersectChart");
//</debug>
Ext.define("WPAKD.model.syncreports.IntersectChart", {
    extend: "Ext.data.Model"
    , fields: [
        {name: "NAME",      type: "string"  }
        , {name: "VALUE",   type: "int"     }
    ]
});
 