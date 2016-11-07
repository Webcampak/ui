/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.Startup");
//</debug>
Ext.define("WPAKT.controller.core.Startup", {
    extend: "Ext.app.Controller",

    stores: [
        "core.authentication.Users"
        , "core.NavigationTree"
        , "core.Sources"

    ],

    models: [
        "core.authentication.Users"
        , "core.Sources"


    ],


    views: [
        "core.authentication.Main"
        , "core.loading.Main"
        , "core.skeleton.card.Main"
        , "core.skeleton.card.base.Main"
        , "core.Main"
        

    ],

    refs: [
        {ref: "coreauthenticationmain",         selector: "coreauthenticationmain",         autoCreate: true,   xtype: "coreauthenticationmain"         }
        , {ref: "coreloadingmain",              selector: "coreloadingmain",                autoCreate: true,   xtype: "coreloadingmain"                }
        , {ref: "coreskeletoncardmain",         selector: "coreskeletoncardmain",           autoCreate: true,   xtype: "coreskeletoncardmain"           }
        , {ref: "coreskeletoncardbasemain",     selector: "coreskeletoncardbasemain",       autoCreate: true,   xtype: "coreskeletoncardbasemain"       }
        , {ref: "coremain",                     selector: "coremain",                       autoCreate: true,   xtype: "coremain"                       }
    ]

    , init: function() {
        this.consoleLog("init()");
    }

    , onLaunch: function() {
        this.displayStartupMask();
    }

    , displayStartupMask: function() {
        this.consoleLog("displayStartupMask()");
        this.getCoreskeletoncardmain().add(this.getCoreskeletoncardbasemain());  
        this.getCoreskeletoncardbasemain().show();
        this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getCoremain(), "Starting up application ...");
    }
        
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Startup: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

});