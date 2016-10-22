/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.Logs");
//</debug>
Ext.define("WPAKD.view.logs.Logs", {
    extend: "Ext.tab.Panel"
    , alias: "widget.logslogs"

    , title: i18n.gettext("<- Please select a source to access logs")

    , tools:[
        {xtype: "logsbuttonrefresh"}
    ]
    , items: [
        {xtype: "logscapturemain"           }
        , {xtype: "logsvideosmain"          }
        , {xtype: "logscustomvideosmain"    }
        , {xtype: "logspostprodmain"        }
        , {xtype: "logsconfigurationmain"   }
    ]
});

