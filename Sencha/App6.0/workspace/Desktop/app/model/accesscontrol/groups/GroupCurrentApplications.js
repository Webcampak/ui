/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.accesscontrol.groups.GroupCurrentApplications");
//</debug>
Ext.define("WPAKD.model.accesscontrol.groups.GroupCurrentApplications", {
    extend: "Ext.data.Model",
    idProperty: "GROAPP_ID",
    fields: [
        {name: "GROAPP_ID", type: "int"     }
        , {name: "APP_ID",  type: "int"     }
        , {name: "GRO_ID",  type: "int"     }
        , {name: "NAME",    type: "string"  }
        , {name: "NOTES",   type: "string"  }
    ]
});

