/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.icons.Main");
//</debug>
Ext.define("WPAKD.view.desktop.icons.Main", {
  extend: "Ext.Container",
//  extend: "Ext.panel.Panel",

  alias: "widget.desktopiconsmain",

  layout: "fit",

  items: [
      {xtype: "desktopiconsaccesscontrol"}
      , {xtype: "desktopiconsdevices"}
      , {xtype: "desktopiconslogs"}
      , {xtype: "desktopiconspictures"}
      , {xtype: "desktopiconssourcesconfiguration"}
      , {xtype: "desktopiconsstatssources"}
      , {xtype: "desktopiconsstatssystem"}
      , {xtype: "desktopiconssystemconfiguration"}
      , {xtype: "desktopiconsvideos"}
  ]
});