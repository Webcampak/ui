/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.phidgets.sensors.SensorsList");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.phidgets.sensors.SensorsList", {
    extend: "Ext.grid.Panel",
    alias : "widget.sourcesconfigurationphidgetssensorssensorslist",

    store: "sourcesconfiguration.PhidgetPorts",

//    autoScroll: true,
    columns: [
        {text: i18n.gettext("ID"),      width: 40,  sortable: true, dataIndex: "ID"                 },
        {text: i18n.gettext("Type"),    dataIndex: "NAME",             align: "left",        width: 120,        sortable: true,
          field: {xtype: "sourcesconfigurationphidgetssensorsphidgetsportslist"},
          renderer: function(value) {
              if (!isNaN(value)){
                  if (Ext.data.StoreManager.lookup("sourcesconfiguration.PhidgetSensors").findRecord("ID", value, 0, false, false, true) !== null) {return Ext.data.StoreManager.lookup("sourcesconfiguration.PhidgetSensors").findRecord("ID", value, 0, false, false, true).get("NAME");}
                  else {return value;}
              }
              else if (typeof value !== "undefined") {
                  if (value.name !== null) {return value.name;}
                  else {return "";}
              }
              else {return "";}
          }
        },
        {text: i18n.gettext("Port"),    width: 60,  sortable: true, dataIndex: "PORT", allowBlank: false, 	field: {xtype: "numberfield", minValue: 0, maxValue: 20}},
        {text: i18n.gettext("Legend"),  flex: 1,    sortable: true, dataIndex: "LEGEND",    field: {xtype: "textfield"}},
        {text: i18n.gettext("Color"),   width: 80,  sortable: true, dataIndex: "COLOR",     field: {xtype: "textfield"}}
    ],
    selType: "rowmodel",
    plugins: [
        Ext.create("Ext.grid.plugin.RowEditing", {
            clicksToEdit: 2
        })
    ]
});
