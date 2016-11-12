/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.postprod.PostprodLogs");
//</debug>
Ext.define("WPAKD.view.logs.postprod.PostprodLogs", {
    extend: "Ext.grid.Panel",
    alias : "widget.logspostprodpostprodlogs",

    store: "logs.Postprod",

    autoScroll: true,
    columns: [
        {text: i18n.gettext("Line"),        dataIndex: "LINE",      align: "left",    width: 50,   sortable: true   }
        , {text: i18n.gettext("Content"),   dataIndex: "CONTENT",   align: "left",    flex: 1,     sortable: false  }
    ],

    selType: "rowmodel"
});
