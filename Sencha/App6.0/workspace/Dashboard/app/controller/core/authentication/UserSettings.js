/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.authentication.UserSettings");
//</debug>
/*
 * Once user settings are obtained update various part of the application with those (such as username, build version, ...)
 */
Ext.define("WPAKT.controller.core.authentication.UserSettings", {
    extend: "Ext.app.Controller"

    , stores: [
        "core.authentication.UserSettings"
    ]

    , models: [
        "core.authentication.UserSettings"
    ]

    , views: [
        "core.toolbar.Username"
        
    ]

    , refs: [
        {ref: "coretoolbarusername", selector: "coretoolbarusername"    }

    ]
    
    , init: function() {
        this.consoleLog("init()");
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.core.authentication.UserSettings.loadUserSettings": this.loadUserSettings
                  }
             }
        });          
    
    }

    , onLaunch: function() {

    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->UserSettings: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Update the user settings store
     */
    , loadUserSettings: function() {
        this.consoleLog("loadUserSettings()");
        Ext.getBody().mask("Setting up permissions and preferences ...");
        this.getCoreAuthenticationUserSettingsStore().on("load", this.applyUserSettings, this, {single: true});
        this.getCoreAuthenticationUserSettingsStore().load();
    }

    /*
     * Once store is updated, modify some parts of the application
     */
    , applyUserSettings: function() {
        this.consoleLog("applyUserSettings()");
        var record = this.getCoreAuthenticationUserSettingsStore().findRecord("CODE", "CHANGEPASSWORD", 0, false, false, true);
        if (record && record.get("VALUE") === "Y") {
            this.fireEvent("WPAKT.controller.core.authentication.ChangePassword.showChangePassword");
        }
/*
        var record = this.getCoreAuthenticationUserSettingsStore().findRecord("CODE", "CURRENTBUILD", 0, false, false, true);
        if (record) {
            this.getDashboardtoolbarbottombuild().setText(i18n.gettext("Build: ") + record.get("VALUE"));
        }
*/
        var record = this.getCoreAuthenticationUserSettingsStore().findRecord("CODE", "CURRENTUSERNAME", 0, false, false, true);
        if (record && this.getCoretoolbarusername()) {
            this.getCoretoolbarusername().setText("<b>" + record.get("VALUE") + "</b>");
        }

        Ext.getBody().unmask();
    }

});