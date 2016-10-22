/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.desktop.StatefulConfiguration");
//</debug>
Ext.define("WPAKD.model.desktop.StatefulConfiguration", {
  extend: "Ext.data.Model",

  fields: [
     { name: "USEPRE_ID",           type: "int"     }
     , { name: "WIDGET",            type: "string"  }
     , { name: "STATEFULCONFIG",    type: "string"  }
     , { name: "SENCHA_APP",        type: "string"  }
  ]
});
