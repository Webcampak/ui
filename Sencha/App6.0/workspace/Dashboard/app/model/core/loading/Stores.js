/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.core.loading.Stores");
//</debug>
/*
 * List loading status of stores, used for async loading
 */
Ext.define("WPAKT.model.core.loading.Stores", {
  extend: "Ext.data.Model"

  , fields: [
     { name: "SESSION_CODE",    type: "string"  }
     , { name: "STORE_ID",      type: "string"  }
     , { name: "STATUS",        type: "string"  }
  ]
});

