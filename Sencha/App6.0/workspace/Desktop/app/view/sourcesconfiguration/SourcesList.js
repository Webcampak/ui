/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.SourcesList");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.SourcesList", {
    extend: "Ext.grid.Panel",
    alias : "widget.sourcesconfigurationsourceslist",

    store: "shared.Sources",

    stateful: true,
    stateId: "sourcesconfigurationsourceslist",

    autoScroll: true,
    columns: [
        {text: i18n.gettext("SOU_ID"),    dataIndex: "USE_ID",        align: "right",   width: 40,   sortable: true,    hidden: true}
        , {text: i18n.gettext("ID"),      dataIndex: "SOURCEID",      align: "left",    width: 40,   sortable: true                 }
        , {text: i18n.gettext("Name"),    dataIndex: "NAME",          align: "left",    flex: 1,     sortable: true                 }
        /*{text: i18n.gettext("Remote"),    dataIndex: "REMOTE_HOST",   align: "left",    width: 40,     sortable: true,
          renderer: function(value) {
              if (value === "") {return "NO";}
              else {return "YES";}
          }
        }*/
    ],

    selType: "rowmodel"
});
