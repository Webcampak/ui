/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.xferreports.ReportsList");
//</debug>
Ext.define("WPAKD.view.xferreports.ReportsList", {
    extend: "Ext.grid.Panel"
    , alias : "widget.xferreportsreportslist"

    , store: "xferreports.XferReports"

    , autoScroll: true
    , columns: [
        {text: i18n.gettext("UUID"),        dataIndex: "UUID",          align: "left",    flex: 1,  sortable: true}
        , {text: i18n.gettext("PID"),       dataIndex: "PID",           align: "left",    width: 70,   sortable: true                     }
        , {text: i18n.gettext("Created"),   dataIndex: "DATE_CREATED",  align: "left",    width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
        , {text: i18n.gettext("Updated"),   dataIndex: "DATE_UPDATED",  align: "left",    width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
        , {text: i18n.gettext("Queue"),     dataIndex: "QUEUE",         align: "left",    width: 80,   sortable: true}
        , {
            text: i18n.gettext("Last Job")
            , columns: [
                {text: i18n.gettext("Started"),     dataIndex: "JOB_STARTED",   align: "left",  width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
                , {text: i18n.gettext("Completed"), dataIndex: "JOB_COMPLETED", align: "left",  width: 130,  sortable: true, formatter:"date(\"Y-m-d H:i\")" }
                , {text: i18n.gettext("Direction"), dataIndex: "JOB_DIRECTION", align: "left",  width: 80,  sortable: true}
                , { text: i18n.gettext("Size"),     dataIndex: "JOB_SIZE",      align: "left",  width: 80,   sortable: true, renderer:
                    function(value, metaData) {
                        if (value !== "") {return Ext.util.Format.fileSize(value);} 
                        else {return value;}
                    }                    
                }  
                , { text: i18n.gettext("Rate"),     dataIndex: "JOB_RATE",      align: "left",  width: 100,   sortable: true, renderer:
                    function(value, metaData) {
                        if (value !== "") {return Ext.util.Format.fileSize(value) + "/s";} 
                        else {return value;}
                    }                    
                }                                
            ]    
        }    
    ]

    , selType: "rowmodel"
});
