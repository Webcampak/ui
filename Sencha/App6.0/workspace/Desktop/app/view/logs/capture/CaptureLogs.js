/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.capture.CaptureLogs");
//</debug>
Ext.define("WPAKD.view.logs.capture.CaptureLogs", {
    extend: "Ext.grid.Panel",
    alias : "widget.logscapturecapturelogs",

    store: "logs.Capture",

    autoScroll: true,
    columns: [
        {text: i18n.gettext("Line"),        dataIndex: "LINE",      align: "left",    width: 50,   sortable: true   }
        , {text: i18n.gettext("Content"),   dataIndex: "CONTENT",   align: "left",    flex: 1,     sortable: false  }
    ],
    selType: "rowmodel"
});
