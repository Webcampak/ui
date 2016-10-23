/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.loading.Mask");
//</debug>
/*
 * Handle displaying loading mask above some components as well as exception throughout the app
 * The primary objective is to be able to handle ext.direct failure and avoid having a spinner stuck in front of a component in this case. 
 * This makes application development and testing much easier
 */
Ext.define("WPAKT.controller.core.loading.Mask", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [

    ]

    , refs: [

    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            
        });
        this.listen({
            controller: {
                  "*": {
                      "WPAKT.controller.core.loading.Mask.beginLoading": this.beginLoading
                      , "WPAKT.controller.core.loading.Mask.endLoading": this.endLoading
                      , "WPAKT.controller.core.loading.Mask.killLoading": this.killLoading
                  }
            },
            store: {
                  "*": {
                      "WPAKT.controller.core.loading.Mask.beginLoading": this.beginLoading
                      , "WPAKT.controller.core.loading.Mask.endLoading": this.endLoading
                      , "WPAKT.controller.core.loading.Mask.killLoading": this.killLoading
                  }
            }
        });
    }

    /*
     * Gloabl declaration for ext.direct exception, might be better to declare this somewhere else than in this controller
     */
    , onLaunch: function() {
        this.consoleLog("onLaunch()");
        var scope = this;
        Ext.Direct.on("exception", function(event) {
            scope.processException("Ext.Direct Exception: " + event.message);
            if (event.message) {var errorMsg = event.message;}
            else {var errorMsg = "Unknown Error";}
            Ext.MessageBox.show({
                title: "Error",
                msg: i18n.gettext(errorMsg),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
            scope.killLoading();
        });
    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Loading->Mask: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Start displaying a loading message on top of a component
     */
    , beginLoading: function(extComponent, loadMessage) {
        this.consoleLog("beginLoading()");
        if (extComponent === "body") {
            Ext.getBody().mask(loadMessage);
        } else {
            this.consoleLog("beginLoading(): Current Component ID: " + extComponent.getId());
            if (this.loadMaskComponents === undefined) {
                this.loadMaskComponents = Array();
            }
            var componentFound = 0;
            for (var i = 0; i < this.loadMaskComponents.length; i++) {
                if (this.loadMaskComponents[i] !== undefined && this.loadMaskComponents[i].getId() === extComponent.getId()) {
                    var componentFound = 1;
                    this.loadMaskComponents[i].setLoading(loadMessage);
                }
            }
            if (componentFound === 0) {
                this.loadMaskComponents.push(extComponent);
                extComponent.setLoading(loadMessage);
            }
        }
    }

    /*
     * Remove the loading message in front of a component
     */
    , endLoading: function(extComponent) {
        this.consoleLog("endLoading(): function()");
        if (extComponent === "body") {
            Ext.getBody().unmask();
        } else {
            this.consoleLog("endLoading(): Current Component ID: " + extComponent.getId());
            if (this.loadMaskComponents !== undefined) {
                for (var i = 0; i < this.loadMaskComponents.length; i++) {
                    if (this.loadMaskComponents[i] !== undefined && this.loadMaskComponents[i].getId() === extComponent.getId()) {
                        this.loadMaskComponents[i].setLoading(false);
                        delete this.loadMaskComponents[i];
                    }
                }
            }
        }
    }

    /*
     * In case of an issue, kill all loading masks in front of all components
     */
    , killLoading: function(extComponent) {
        this.consoleLog("killLoading(): function()");
        Ext.getBody().unmask();
        if (this.loadMaskComponents !== undefined) {
            for (var i = 0; i < this.loadMaskComponents.length; i++) {
                if (this.loadMaskComponents[i] !== undefined) {
                    this.loadMaskComponents[i].setLoading(false);
                }
                delete this.loadMaskComponents[i];
            }
        }
    }

    /*
     * Display an exception message  
     */
    , processException: function(exceptionMsg) {
        this.consoleLog("processException()");
        Ext.MessageBox.show({
            title: i18n.gettext("Error"),
            msg: i18n.gettext("Webcampak encountered an error, please contact support for instructions."),
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.WARNING
        });
        this.killLoading();
    }
});