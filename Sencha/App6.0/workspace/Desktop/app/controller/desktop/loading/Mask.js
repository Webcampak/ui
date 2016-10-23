/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.loading.Mask");
//</debug>
Ext.define("WPAKD.controller.desktop.loading.Mask", {
    extend: "Ext.app.Controller",

    stores: [

    ],

    models: [

    ],

    views: [
        "desktop.toolbar.bottom.ExceptionButton"
        , "desktop.toolbar.bottom.LoadingButton"
        , "desktop.toolbar.bottom.exceptions.Exceptions"
        , "desktop.toolbar.bottom.exceptions.Main"
    ],

    refs: [
        {ref: "desktoptoolbarbottomloadingbutton",           selector: "desktoptoolbarbottomloadingbutton"        }
        , {ref: "desktoptoolbarbottomexceptionbutton",       selector: "desktoptoolbarbottomexceptionbutton"      }
        , {ref: "desktoptoolbarbottomexceptionsmain",        selector: "desktoptoolbarbottomexceptionsmain",      autoCreate: true,        xtype: "desktoptoolbarbottomexceptionsmain"            }
        , {ref: "desktoptoolbarbottomexceptionsexceptions",  selector: "desktoptoolbarbottomexceptionsexceptions" }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller init()");
        this.control({
            "desktoptoolbarbottomexceptionbutton":        { click:     this.openExceptionWindow      }

        });
        this.listen({
            controller: {
                  "*": {
                      "WPAKD.controller.desktop.loading.Mask.beginLoading": this.beginLoading
                      , "WPAKD.controller.desktop.loading.Mask.endLoading": this.endLoading
                      , "WPAKD.controller.desktop.loading.Mask.killLoading": this.killLoading
                  }
            },
            store: {
                  "*": {
                      "WPAKD.controller.desktop.loading.Mask.beginLoading": this.beginLoading
                      , "WPAKD.controller.desktop.loading.Mask.endLoading": this.endLoading
                      , "WPAKD.controller.desktop.loading.Mask.killLoading": this.killLoading
                  }
            }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller onLaunch: function()");
        var scope = this;
        Ext.Direct.on("exception", function(event) {
            scope.processException("Ext.Direct Exception: " + event.message);
            var errorMsg = "Unknown Error";
            if (event.message) {errorMsg = event.message;}
            Ext.MessageBox.show({
                title: "Error",
                msg: i18n.gettext(errorMsg),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
            scope.killLoading();
        });
    },

    beginLoading: function(extComponent, loadMessage) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller beginLoading: function()");
        if (extComponent === "body") {
            Ext.getBody().mask(loadMessage);
        } else {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller beginLoading: Current Component ID: " + extComponent.getId());
            if (this.loadMaskComponents === undefined) {
                this.loadMaskComponents = Array();
            }
            var componentFound = 0;
            for (var i = 0; i < this.loadMaskComponents.length; i++) {
                if (this.loadMaskComponents[i] !== undefined && this.loadMaskComponents[i].getId() === extComponent.getId()) {
                    componentFound = 1;
                    this.loadMaskComponents[i].setLoading(loadMessage);
                }
            }
            if (componentFound === 0) {
                this.loadMaskComponents.push(extComponent);
                extComponent.setLoading(loadMessage);
            }
        }
    },

    endLoading: function(extComponent) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller endLoading: function()");
        if (extComponent === "body") {
            Ext.getBody().unmask();
        } else {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller endLoading: Current Component ID: " + extComponent.getId());
            if (this.loadMaskComponents !== undefined) {
                for (var i = 0; i < this.loadMaskComponents.length; i++) {
                    if (this.loadMaskComponents[i] !== undefined && this.loadMaskComponents[i].getId() === extComponent.getId()) {
                        this.loadMaskComponents[i].setLoading(false);
                        delete this.loadMaskComponents[i];
                    }
                }
            }
        }
    },

    killLoading: function(extComponent) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller killLoading: function()");
        Ext.getBody().unmask();
        if (this.loadMaskComponents !== undefined) {
            for (var i = 0; i < this.loadMaskComponents.length; i++) {
                if (this.loadMaskComponents[i] !== undefined) {
                    this.loadMaskComponents[i].setLoading(false);
                }
                delete this.loadMaskComponents[i];
            }
        }
    },

    processException: function(exceptionMsg) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller processException: function()");
//        console.log(exceptionMsg);
//        this.getDesktoptoolbarbottomexceptionbutton().setVisible(true);
        this.getDesktoptoolbarbottomexceptionsmain().show();
        this.getDesktoptoolbarbottomexceptionsexceptions().setValue(exceptionMsg);
        this.getDesktoptoolbarbottomexceptionsmain().hide();
        var currentDate = new Date().toUTCString();
        this.getDesktoptoolbarbottomexceptionsmain().setTitle(i18n.gettext("Exception happened on:") + " " + currentDate);
        Ext.MessageBox.show({
            title: i18n.gettext("Error"),
            msg: i18n.gettext("Webcampak encountered an error, please contact support for instructions."),
            buttons: Ext.MessageBox.OK,
            icon: Ext.MessageBox.WARNING
        });
        this.killLoading();
    },

    openExceptionWindow: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Mask: Controller openExceptionWindow: function()");
        this.getDesktoptoolbarbottomexceptionsmain().show();
    }


});