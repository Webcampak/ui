/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.summary.SummaryList");
//</debug>
Ext.define("WPAKD.view.syncreports.details.summary.SummaryList", {
    extend: "Ext.grid.Panel"
    , alias : "widget.syncreportsdetailssummarysummarylist"

    , store: "syncreports.DetailsResults"

    , autoScroll: true
    , columns: [
        {text: i18n.gettext("Type"),    dataIndex: "NAME",              align: "left",    flex: 1,     sortable: true   }
        , {
            text: i18n.gettext("File Count")
            , columns: [
                {text: i18n.gettext("Total"), dataIndex: "FILES_COUNT_TOTAL", align: "right",   width: 80,  sortable: true    }
                , {text: i18n.gettext("JPG"),   dataIndex: "FILES_COUNT_JPG",   align: "right",   width: 80,  sortable: true    }
                , {text: i18n.gettext("RAW"),   dataIndex: "FILES_COUNT_RAW",   align: "right",   width: 80,  sortable: true    }
            ]
        }, {
            text: i18n.gettext("File Size")
            , columns: [
            { text: i18n.gettext("Total"), dataIndex: "FILES_SIZE_TOTAL",  align: "left",    width: 80,   sortable: true, renderer:
                function(value, metaData) {
                    if (value !== "") {return Ext.util.Format.fileSize(value);}
                    else {return value;}
                }                    
            }
            , {text: i18n.gettext("JPG"), dataIndex: "FILES_SIZE_JPG",      align: "left",    width: 80,   sortable: true, renderer:
                function(value, metaData) {
                    if (value !== "") {return Ext.util.Format.fileSize(value);}
                    else {return value;}
                }                    
            }
            , {text: i18n.gettext("RAW"), dataIndex: "FILES_SIZE_RAW",      align: "left",    width: 80,   sortable: true, renderer:
                function(value, metaData) {
                    if (value !== "") {return Ext.util.Format.fileSize(value);}
                    else {return value;}
                }                    
            }]
        }
    ]

    , selType: "rowmodel"
});
