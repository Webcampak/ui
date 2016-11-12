/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.accesscontrol.AccessControl");
//</debug>
Ext.define("WPAKD.controller.accesscontrol.AccessControl", {
    extend: "Ext.app.Controller"

    , views: [
        "desktop.Main"
        , "desktop.toolbar.top.Taskbar"
        , "accesscontrol.Main"
        , "accesscontrol.users.Main"
        , "accesscontrol.users.ToolbarRecords"
        , "accesscontrol.groups.ToolbarRecords"

    ]

    , stores: [
        "accesscontrol.users.Users"
        , "accesscontrol.groups.Groups"
        , "accesscontrol.customers.Customers"
        , "accesscontrol.sources.Sources"
        , "desktop.statefulconfiguration.StatefulConfiguration"

    ]

    , models: [
        "accesscontrol.users.Users"
        , "accesscontrol.groups.Groups"
        , "accesscontrol.customers.Customers"
        , "accesscontrol.sources.Sources"
        , "desktop.statefulconfiguration.StatefulConfiguration"

    ]

    , refs: [
        {ref: "desktopmain",                        selector: "desktopmain"                         }
        , {ref: "desktoptoolbartoptaskbar",         selector: "desktoptoolbartoptaskbar"            }
        , {ref: "accesscontrolmain",                selector: "accesscontrolmain"                   ,  autoCreate: true,        xtype: "accesscontrolmain" }
        , {ref: "accesscontrolusersmain",           selector: "accesscontrolusersmain"              }
        , {ref: "accesscontroluserstoolbarrecords", selector: "accesscontroluserstoolbarrecords"    }
        , {ref: "accesscontrolgroupstoolbarrecords",selector: "accesscontrolgroupstoolbarrecords"   }

    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Application: Controller init: function()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_CFG_ACCESSCONTROL]":   {click:     this.openAccessControl                                              }
            , "accesscontrolmain":                                 {hide:     this.closeAccessControl,    minimize: this.openAccessControl    }
            , "#menuOpenWEB_CFG_ACCESSCONTROL":                    {click:     this.menuOpenAccessControl                                              }
        });
        this.listen({
             controller: {
                  "*": {
                      openAccessControl: this.menuOpenAccessControl
                      , "WPAKD.controller.accesscontrol.AccessControl.menuOpenAccessControl": this.menuOpenAccessControl
                      , "WPAKD.controller.accesscontrol.AccessControl.openAccessControl": this.openAccessControl
                  }
             }
        });
    }

    , onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->dataanalysis->DataAnalysis: onLaunch: function()");
    }

    , menuOpenAccessControl: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: menuOpenAccessControl: function()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");
        var requiredStores = [];
        requiredStores.push({store: this.getAccesscontrolGroupsGroupsStore(),       action: "LOAD"});
        requiredStores.push({store: this.getAccesscontrolUsersUsersStore(),         action: "LOAD"});
        requiredStores.push({store: this.getAccesscontrolCustomersCustomersStore(), action: "LOAD"});
        requiredStores.push({store: this.getAccesscontrolSourcesSourcesStore(),     action: "LOAD"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_CFG_ACCESSCONTROL"
            , "WPAKD.controller.accesscontrol.AccessControl.openAccessControl"
            , requiredStores);

        var applicationName = "WEB_CFG_ACCESSCONTROL";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    }

    , openAccessControl: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: openAccessControl: function()");
        if(this.getAccesscontrolmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getAccesscontrolmain().getId()) {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: openAccessControl: getAccesscontrolmain().toFront()");
            this.getAccesscontrolmain().toFront();
        } else if(!this.getAccesscontrolmain().isVisible()) {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: openAccessControl - getAccesscontrolmain().setVisible(true)");
            this.getDesktopmain().add(this.getAccesscontrolmain());
            this.getAccesscontrolmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbaccesscontrol").setVisible(true);
            this.fireEvent("WPAKD.controller.desktop.WindowManagement.adjustWindowSize", this.getAccesscontrolmain());
            Ext.getBody().unmask();
            this.refreshTotalCount();
        } else {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: openAccessControl - getDataanalysiswindow().setVisible(false)");
            this.getAccesscontrolmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbaccesscontrol").setVisible(true);
        }
    }

    , closeAccessControl: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: closeAccessControl: function()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbaccesscontrol").setVisible(false);
    }

    , refreshTotalCount: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->AccessControl: refreshTotalCount: function()");
        this.getAccesscontroluserstoolbarrecords().setText(i18n.gettext("Total number of records: " + this.getAccesscontrolUsersUsersStore().getTotalCount()) );
        this.getAccesscontrolgroupstoolbarrecords().setText(i18n.gettext("Total number of records: " + this.getAccesscontrolGroupsGroupsStore().getTotalCount()) );
    }

});