/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.groups.Groups");
//</debug>
Ext.define("WPAKD.model.accesscontrol.groups.Groups", {
    extend: "Ext.data.Model",
    idProperty: "GRO_ID",
    fields: [
        {name: "GRO_ID",    type: "int"     }
        , {name: "NAME",    type: "string"  }
        , {name: "NOTES",   type: "string"  }
    ]
});
