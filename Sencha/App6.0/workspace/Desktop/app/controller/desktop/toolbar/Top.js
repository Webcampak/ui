/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.toolbar.Top");
//</debug>
Ext.define("WPAKD.controller.desktop.toolbar.Top", {
    extend: "Ext.app.Controller",

    stores: [

    ],

    models: [

    ],

    views: [
        "desktop.toolbar.top.Main"
        , "desktop.toolbar.top.DesktopConfig"
        , "desktop.toolbar.top.Menu"
        , "desktop.toolbar.top.OnlineStatus"
        , "desktop.toolbar.top.Taskbar"

    ],

    refs: [
        {ref: "desktoptoolbartopmain",              selector: "desktoptoolbartopmain"           }
        , {ref: "desktoptoolbartopdesktopconfig",   selector: "desktoptoolbartopdesktopconfig"  }
        , {ref: "desktoptoolbartopmenu",            selector: "desktoptoolbartopmenu"           }
        , {ref: "desktoptoolbartoponlinestatus",    selector: "desktoptoolbartoponlinestatus"   }
        , {ref: "desktoptoolbartopsearchbutton",    selector: "desktoptoolbartopsearchbutton"   }
        , {ref: "desktoptoolbartopsearchfield",     selector: "desktoptoolbartopsearchfield"    }
        , {ref: "desktoptoolbartopsearchtype",      selector: "desktoptoolbartopsearchtype"     }
        , {ref: "desktoptoolbartoptaskbar",         selector: "desktoptoolbartoptaskbar"        }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Toolbar->Bottom: Controller init: function()");
        this.control({

        });
        this.listen({
             controller: {
                  "*": {

                }
             }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Toolbar->Top: onLaunch()");

    }


});
