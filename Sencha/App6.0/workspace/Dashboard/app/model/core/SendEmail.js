/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.core.SendEmail");
//</debug>
Ext.define("WPAKT.model.core.SendEmail", {
    extend: "Ext.data.Model"
    
    , idProperty: "EMA_ID"
    , fields: [
        {name: "EMA_ID",                type: "int"    }
        , {name: "EMAIL_FROM",          type: "string" }
        , {name: "EMAIL_TO",            type: "string" }
        , {name: "EMAIL_CC",            type: "string" }
        , {name: "ATTACHMENT_PATH",     type: "string" }
        , {name: "ATTACHMENT_NAME",     type: "string" }
        , {name: "ATTACHMENT_SOURCEID", type: "string" }
        , {name: "SUBJECT",             type: "string" }
        , {name: "BODY",                type: "string" }
        , {name: "FORMAT",              type: "string" }
        , {name: "STATUS",              type: "string" }
        , {name: "PROCESSED_DATE",      type: "string" }
        , {name: "NUMBER_RETRIES",      type: "int"    }
        , {name: "SOURCE",              type: "string" }
        , {name: "SOURCE_TABLE",        type: "string" }
        , {name: "SOURCE_ORASEQ",       type: "string" }
        , {name: "ATTACHMENTS",         type: "string" }
    ]

    , proxy:{
        type: "direct"
        , extraParams: {
            MASAGR_ID: "0"
        }
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            read:      "DesktopEmails.getEmails"
            , create:    "DesktopEmails.sendEmail"
            , destroy:   "DesktopEmails.removeEmail"
            , update:    "DesktopEmails.sendEmail"
        }
    }

});
