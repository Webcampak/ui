/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.logs.Configuration");
//</debug>
Ext.define("WPAKD.model.logs.Configuration", {
    extend: "Ext.data.Model",
    fields: [
        {name: "LINE",          type: "int"     }
        , {name: "DATE",        type: "date"    }
        , {name: "USERNAME",    type: "string"  }
        , {name: "FILE",        type: "string"  }
        , {name: "PARAMETER",   type: "string"  }
        , {name: "OLD",         type: "string"  }
        , {name: "NEW",         type: "string"  }
    ]
});
