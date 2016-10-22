/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.videos.VideosLogs");
//</debug>
Ext.define("WPAKD.view.logs.videos.VideosLogs", {
    extend: "Ext.grid.Panel",
    alias : "widget.logsvideosvideoslogs",

    store: "logs.Videos",

    autoScroll: true,
    columns: [
        {text: i18n.gettext("Line"),        dataIndex: "LINE",      align: "left",    width: 50,   sortable: true   }
        , {text: i18n.gettext("Content"),   dataIndex: "CONTENT",   align: "left",    flex: 1,     sortable: false  }
    ],
    selType: "rowmodel"
});
