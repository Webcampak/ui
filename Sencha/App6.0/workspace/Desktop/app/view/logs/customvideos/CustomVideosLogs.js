//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.logs.customvideos.CustomVideosLogs');
//</debug>
Ext.define("WPAKD.view.logs.customvideos.CustomVideosLogs", {
    extend: 'Ext.grid.Panel',
    alias : 'widget.logscustomvideoscustomvideoslogs',

    store: 'logs.CustomVideos',

    autoScroll: true,
    columns: [
        {text: i18n.gettext('Line'),        dataIndex: 'LINE',      align: 'left',    width: 50,   sortable: true   }
        , {text: i18n.gettext('Content'),   dataIndex: 'CONTENT',   align: 'left',    flex: 1,     sortable: false  }
    ],

    selType: 'rowmodel'
});
