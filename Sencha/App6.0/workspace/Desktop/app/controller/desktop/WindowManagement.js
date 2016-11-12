/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.WindowManagement");
//</debug>
Ext.define("WPAKD.controller.desktop.WindowManagement", {
    extend: "Ext.app.Controller"

    , stores: []
    , models: []

    , views: [
        "desktop.Main"
    ]

    , refs: [
        {ref: "desktopmain",   selector: "desktopmain"  }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({

        });
        this.listen({
             controller: {
                  "*": {
                      "WPAKD.controller.desktop.WindowManagement.adjustWindowSize": this.adjustWindowSize
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Desktop->WindowManagement: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    // This function compares the available screen size and ensures that windows are not too large for the screen (would hide some buttons)
    // appWindow: Window object currently being opened
    , adjustWindowSize: function(appWindow) {
        this.consoleLog("adjustWindowSize()");
        var widthDifference = appWindow.getWidth() - this.getDesktopmain().getWidth();
        var heightDifference = appWindow.getHeight() - this.getDesktopmain().getHeight();
        if (heightDifference >= 150 || widthDifference >= 150) {
            Ext.Msg.show({
                title: i18n.gettext("Screen Size")
                , msg: i18n.gettext("Your screen definition is not large enough to fit this window") + "<br />" + i18n.gettext("The window will be trimmed down but might display incorrectly")
                , buttons: Ext.Msg.OK
                , icon: Ext.Msg.INFO
            });
        }
        if (appWindow.getHeight() > this.getDesktopmain().getHeight()) {
            this.consoleLog("adjustWindowSize(): Window size too tall, will need to be trimmed down");
            this.consoleLog("adjustWindowSize(): Height difference: " + heightDifference);
            appWindow.setHeight(this.getDesktopmain().getHeight() - 10);
        }
        if (appWindow.getWidth() > this.getDesktopmain().getWidth()) {
            this.consoleLog("adjustWindowSize(): Window size too large, will need to be trimmed down");
            this.consoleLog("adjustWindowSize(): Width difference: " + widthDifference);
            appWindow.setWidth(this.getDesktopmain().getWidth() - 10);
        }
    }

});