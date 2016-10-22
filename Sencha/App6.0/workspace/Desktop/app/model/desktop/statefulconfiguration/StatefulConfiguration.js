/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.desktop.statefulconfiguration.StatefulConfiguration");
//</debug>
Ext.define("WPAKD.model.desktop.statefulconfiguration.StatefulConfiguration", {
  extend: "Ext.data.Model",

  fields: [
     { name: "WIDPREPRO_ID",     type: "int"        },
     { name: "WIDGET",             type: "string"  },
     { name: "STATEFULCONFIG",  type: "string"  }
  ]
});
