/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.core.ServerAvailability");
//</debug>
/*
 * Used to store server availability details
 */
Ext.define("WPAKT.model.core.ServerAvailability", {
    extend: "Ext.data.Model"
    
    , fields: [
        {name: "CODE",              type: "string"  }
        , {name: "MSG",             type: "string"  }
        , {name: "LATENCY",         type: "int"     }
        , {name: "USERNAME",        type: "string"  }
        , {name: "AUTHENTICATED",   type: "string"  }
    ]
});
