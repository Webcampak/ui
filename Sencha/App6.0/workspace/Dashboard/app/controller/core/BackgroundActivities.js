/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.BackgroundActivities");
//</debug>
Ext.define("WPAKT.controller.core.BackgroundActivities", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [
        //"core.toolbar.bottom.LoadingButton"

    ]

    , refs: [
        //{ref: "coretoolbarbottomloadingbutton",    selector: "coretoolbarbottomloadingbutton"}

    ]

    , init: function() {
        this.consoleLog("startAjaxLoading()");
        this.control({

        });
        this.listen({
             controller: {
                  "*": {
                      "WPAKT.controller.core.BackgroundActivities.startAjaxLoading": this.startAjaxLoading
                      , "WPAKT.controller.core.BackgroundActivities.endAjaxLoading": this.endAjaxLoading
                  }
             }
        });
    }

    , onLaunch: function() {
//        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Desktop->ServerAvailability: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }    

    , startAjaxLoading: function() {
        this.consoleLog("startAjaxLoading()");
        if (this.extAjaxCallCount === undefined) {
            this.extAjaxCallCount = 0;
        }
        this.extAjaxCallCount = this.extAjaxCallCount + 1;
    }

    , endAjaxLoading: function() {
        this.consoleLog("endAjaxLoading()");
        if (this.extAjaxCallCount === undefined) {
            this.extAjaxCallCount = 0;
        }
        if (this.extAjaxCallCount > 0) {
            this.extAjaxCallCount = this.extAjaxCallCount - 1;
        } else {
            this.extAjaxCallCount = 0;
        }
    }

});