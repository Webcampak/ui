/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.desktop.Links");
//</debug>
Ext.define("WPAKD.model.desktop.Links", {
  extend: "Ext.data.Model",

  fields: [
    { name: "LOCATION", type: "string" }
    , { name: "NAME", type: "string" }
    , { name: "LINK", type: "string" }
    , { name: "GLYPH", type: "string" }
    , { name: "TOOLTIP", type: "string" }
  ]
});
