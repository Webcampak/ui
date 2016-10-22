/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.BackgroundActivities");
//</debug>
Ext.define("WPAKD.controller.desktop.BackgroundActivities", {
    extend: "Ext.app.Controller",

    stores: [
        "desktop.authentication.UserSettings"

    ],

    models: [
        "desktop.authentication.UserSettings"

    ],

    views: [
        "desktop.toolbar.bottom.LoadingButton"

    ],

    refs: [
        {ref: "desktoptoolbarbottomloadingbutton",    selector: "desktoptoolbarbottomloadingbutton"}

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Notifications->Notifications: Controller init()");
        this.control({

        });
        this.listen({
             controller: {
                  "*": {
                      "WPAKD.controller.desktop.BackgroundActivities.startAjaxLoading": this.startAjaxLoading
                      , "WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading": this.endAjaxLoading
                  }
             }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Notifications->Notifications: Controller onLaunch()");
        var scope = this;
        if (this.extAjaxCallCount === undefined) {this.extAjaxCallCount = 0;}
        var interval = setInterval(function() {
            if (scope.getDesktoptoolbarbottomloadingbutton() != undefined) {
                var databaseCalls = parseInt(Ext.direct.Manager.transactions.getCount() + scope.extAjaxCallCount);
                if (databaseCalls == 0) {
                    scope.getDesktoptoolbarbottomloadingbutton().setIconCls("icon-database_png");
                    scope.getDesktoptoolbarbottomloadingbutton().setText("");
                    scope.getDesktoptoolbarbottomloadingbutton().setTooltip();
                } else {
                    scope.getDesktoptoolbarbottomloadingbutton().setIconCls("icon-database_connect_png");
                    scope.getDesktoptoolbarbottomloadingbutton().setText("(" + databaseCalls + ")");
                    var tooltipContent = "<b>Currently processing: </b><br />";
                    Ext.direct.Manager.transactions.each(function (item) {
                         tooltipContent = tooltipContent + item.action + "->" + item.method + "<br />";
                    });
                    scope.getDesktoptoolbarbottomloadingbutton().setTooltip(tooltipContent);
                }
            }
        }, 100); // refresh every 200ms
    },

    startAjaxLoading: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->ServerAvailability: startAjaxLoading()");
        if (this.extAjaxCallCount === undefined) {
            this.extAjaxCallCount = 0;
        }
        this.extAjaxCallCount = this.extAjaxCallCount + 1;
    },

    endAjaxLoading: function() {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->ServerAvailability: endAjaxLoading()");
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