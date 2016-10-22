/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.syncreports.DetailsResults");
//</debug>
Ext.define("WPAKD.model.syncreports.DetailsResults", {
    extend: "Ext.data.Model"
    , fields: [
        {name: "NAME",                  type: "string"  }
        , {name: "FILES_COUNT_TOTAL",   type: "int"     }
        , {name: "FILES_COUNT_JPG",     type: "int"     }
        , {name: "FILES_COUNT_RAW",     type: "int"     }
        , {name: "FILES_SIZE_TOTAL",    type: "int"     }
        , {name: "FILES_SIZE_JPG",      type: "int"     }
        , {name: "FILES_SIZE_RAW",      type: "int"     }
    ]
});
 