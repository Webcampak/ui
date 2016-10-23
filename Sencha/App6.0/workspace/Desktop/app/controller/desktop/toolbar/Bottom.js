/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.toolbar.Bottom");
//</debug>
Ext.define("WPAKD.controller.desktop.toolbar.Bottom", {
    extend: "Ext.app.Controller",

    stores: [
        "desktop.ServerAvailability"
    ],

    models: [
        "desktop.ServerAvailability"
    ],

    views: [
        "desktop.toolbar.bottom.Main"
        , "desktop.toolbar.bottom.ConnectionButton"
        , "desktop.toolbar.bottom.ExceptionButton"
        , "desktop.toolbar.bottom.LogoffButton"
        , "desktop.toolbar.bottom.Build"
    ],

    refs: [
        {ref: "desktoptoolbarbottommain",                   selector: "desktoptoolbarbottommain"                }
        , {ref: "desktoptoolbarbottomconnectionbutton",     selector: "desktoptoolbarbottomconnectionbutton"    }
        , {ref: "desktoptoolbarbottomexceptionbutton",      selector: "desktoptoolbarbottomexceptionbutton"     }
        , {ref: "desktoptoolbarbottomlogoffbutton",         selector: "desktoptoolbarbottomlogoffbutton"        }
        , {ref: "desktoptoolbarbottombuild",                selector: "desktoptoolbarbottombuild"               }
    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Toolbar->Bottom: Controller init: function()");
        this.control({

        });
        this.listen({
             controller: {
                  "*": {
                      "WPAKD.controller.desktop.toolbar.Bottom.updateStatusButtons": this.updateStatusButtons
                  }
             }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Toolbar->Bottom: onLaunch()");

    },

    updateStatusButtons: function() {
//        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Toolbar->Bottom: updateStatusButtons()");
        this.updateConectionButton();
    },

    updateConectionButton: function() {
//        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Toolbar->Bottom: updateConectionButton()");
        if (this.getDesktoptoolbarbottomconnectionbutton() !== undefined) {
            this.getDesktoptoolbarbottomconnectionbutton().setVisible(true);
            var currentStatus = this.getDesktopServerAvailabilityStore().first();
            if (currentStatus !== undefined && currentStatus.get("CODE") === "ONLINE") {
                //this.getDesktoptoolbarbottomconnectionbutton().setIconCls("icon-connect_png");
                this.getDesktoptoolbarbottomconnectionbutton().setGlyph(0xf0c1);
                this.getDesktoptoolbarbottomconnectionbutton().setText("ONLINE");
                this.getDesktoptoolbarbottomconnectionbutton().setTooltip("<b>Latency: </b>" + currentStatus.get("LATENCY") + "ms");
            } else {
                //this.getDesktoptoolbarbottomconnectionbutton().setIconCls("icon-disconnect_png");
                this.getDesktoptoolbarbottomconnectionbutton().setGlyph(0xf127);
                this.getDesktoptoolbarbottomconnectionbutton().setText("OFFLINE");
                this.getDesktoptoolbarbottomconnectionbutton().setTooltip("<b>Latency: </b>" + currentStatus.get("LATENCY") + "ms <br /><b>Message: </b>" + currentStatus.get("MSG"));
            }
        }
    }
});
