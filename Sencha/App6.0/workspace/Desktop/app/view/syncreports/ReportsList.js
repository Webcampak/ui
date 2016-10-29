/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.ReportsList");
//</debug>
Ext.define("WPAKD.view.syncreports.ReportsList", {
    extend: "Ext.grid.Panel"
    , alias : "widget.syncreportsreportslist"

    , store: "syncreports.SyncReports"

    , autoScroll: true

    , features: [{
        id: "group"
        , ftype: "grouping"
        , groupHeaderTpl: "{name}"
        , hideGroupedHeader: false
        , enableGroupingMenu: false
    }]

    , columns: [
        {text: i18n.gettext("Status"),    dataIndex: "STATUS",        align: "left",    width: 100,  sortable: true,     renderer:
            function(value, metaData) {
                if (value === "queued") {
                    metaData.style = "background:#66ff99;";
                    return value;
                } else if (value === "process") {
                    metaData.style = "background:#ff6666;";
                    return value;                    
                } else {
                    return value;
                }
            }
        }
        , {text: i18n.gettext("Name"),      dataIndex: "NAME",          align: "left",    flex: 1,     sortable: true                     }
        , {text: i18n.gettext("Source")
            , columns: [
                {text: i18n.gettext("Name"),   dataIndex: "SRC_NAME", align: "left", width: 150,  sortable: true             }
                , {text: i18n.gettext("Size"), dataIndex: "SRC_SIZE", align: "left", width: 80,   sortable: true, renderer:
                    function(value) {
                        if (value !== "") {return Ext.util.Format.fileSize(value);}
                        else {return value;}
                    }
                }
            ]
        }
        , {text: i18n.gettext("Destination")
            , columns: [
                {text: i18n.gettext("Name"),   dataIndex: "DST_NAME", align: "left", width: 150,  sortable: true             }
                , {text: i18n.gettext("Size"), dataIndex: "DST_SIZE", align: "left", width: 80,   sortable: true, renderer:
                    function(value) {
                        if (value !== "") {return Ext.util.Format.fileSize(value);}
                        else {return value;}
                    }
                }
            ]
        }
        , {text: i18n.gettext("Queued"),    dataIndex: "DATE_QUEUED",   align: "left",    width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
        , {text: i18n.gettext("Started"),   dataIndex: "DATE_START",    align: "left",    width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
        , {text: i18n.gettext("Completed"), dataIndex: "DATE_COMPLETED",align: "left",    width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
        , {text: i18n.gettext("Xfer"), dataIndex: "XFER",      align: "left",    width: 50,   sortable: true, renderer:
            function(value) {
                if (value === true) {return i18n.gettext("Yes");}
                else {return i18n.gettext("No");}
            }
        }
    ]
    , selType: "rowmodel"
});
