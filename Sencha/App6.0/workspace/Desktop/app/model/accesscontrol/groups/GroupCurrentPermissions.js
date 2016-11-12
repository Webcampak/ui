/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.groups.GroupCurrentPermissions");
//</debug>
Ext.define("WPAKD.model.accesscontrol.groups.GroupCurrentPermissions", {
    extend: "Ext.data.Model",
    idProperty: "GROPER_ID",
    fields: [
        {name: "GROPER_ID ",    type: "int"     }
        , {name: "GRO_ID",      type: "int"     }
        , {name: "PER_ID",      type: "int"     }
        , {name: "NAME",        type: "string"  }
        , {name: "NOTES",       type: "string"  }
    ]
});

