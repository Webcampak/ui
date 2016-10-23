/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.sourcesconfiguration.ftp.Ftp");
//</debug>
Ext.define("WPAKD.controller.sourcesconfiguration.ftp.Ftp", {
    extend: "Ext.app.Controller",

    views: [
        "sourcesconfiguration.ftp.Main"
        , "sourcesconfiguration.ftp.FtpServersList"

        , "sourcesconfiguration.ftp.local.Main"
        , "sourcesconfiguration.ftp.local.Cfglocalftppass"
        , "sourcesconfiguration.ftp.local.Cfglocalftpusername"
    ],

    stores: [
        "shared.Sources"
        , "sourcesconfiguration.FTPServers"
        , "sourcesconfiguration.ConfigurationTabs"
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"


    ],

    models: [
        "shared.Sources"
        , "sourcesconfiguration.FTPServers"
        , "sourcesconfiguration.ConfigurationTabs"
        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"


    ],

    refs: [
        {ref: "sourcesconfigurationftpmain",                selector: "sourcesconfigurationftpmain"             }
        , {ref: "sourcesconfigurationftpftpserverslist",    selector: "sourcesconfigurationftpftpserverslist"   }

        , {ref: "sourcesconfigurationftplocalmain",                  selector: "sourcesconfigurationftplocalmain"                 }
        , {ref: "sourcesconfigurationftplocalcfglocalftppass",       selector: "sourcesconfigurationftplocalcfglocalftppass"      }
        , {ref: "sourcesconfigurationftplocalcfglocalftpusername",   selector: "sourcesconfigurationftplocalcfglocalftpusername"  }

    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration: Controller init: function()");
        this.control({
            "sourcesconfigurationftpftpserverslist button[action=reloadFtpServers]":       {click:     this.reloadFTPServers    }
            , "sourcesconfigurationftpftpserverslist button[action=openAddFtpServer]":     {click:     this.openAddFTPServer    }
            , "sourcesconfigurationftpftpserverslist button[action=openEditFtpServer]":    {click:     this.openEditFTPServer   }
            , "sourcesconfigurationftpftpserverslist button[action=openDeleteFtpServer]":  {click:     this.openDeleteFTPServer }

            , "sourcesconfigurationftpftpserverslist":{  selectionchange:   this.onFTPServerSelected
                                                        , edit:             this.commitFTPServer
                                                        , canceledit:       this.cancelFTPServerEdit
                                                    }
            , "*": {
                "WPAKD.controller.sourcesconfiguration.ftp.Ftp.updateStoreValue": this.updateStoreValue
            }
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.sourcesconfiguration.ftp.Ftp.loadSettings": this.loadSettings
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->FTP: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        //console.log(new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->Capture: updateStoreValue: function()");
        var configRecord = this.getSourcesconfigurationCaptureStore().findRecord("NAME", configName, 0, false, false, true);
        if (configRecord !== undefined) {
            if (configRecord.get("VALUE") !== newValue) {
                this.consoleLog("updateStoreValue(): update config: " + configName + " from: " + configRecord.get("VALUE") + " to: " + newValue, "info");
                configRecord.set("VALUE", newValue);
                this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
            }
        }
    }

    , loadSettings: function() {
        this.consoleLog("loadSettings()");
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->Ftp: loadSettings: function()");

        var scope = this;
        //We store the content of the store in a Javascript object
        var configObj = {};
        var configName = null;
        this.getSourcesconfigurationCaptureStore().each(function (rec) {
            configName = rec.get("NAME");
            configObj[configName] = rec.get("VALUE");
        });

        if(configObj.hasOwnProperty("cfglocalftppass")){
            this.getSourcesconfigurationftplocalcfglocalftppass().setValue(configObj["cfglocalftppass"]);
            this.getSourcesconfigurationftplocalcfglocalftpusername().setValue("source" + this.getSourcesconfigurationCaptureStore().getProxy().extraParams.SOURCEID);
        } else {
            this.getSourcesconfigurationftplocalcfglocalftppass().setVisible(false);
            this.getSourcesconfigurationftplocalcfglocalftpusername().setVisible(false);
        }
        configObj = {};
        this.getSourcesconfigurationSectionCaptureStore().each(function (rec) {
            configName = rec.get("NAME");
            configObj[configName] = true;
        });

        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord("NAME", "config-source-ftpservers", 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationftpmain().setVisible(false);
        } else {
            this.getSourcesconfigurationftpmain().setDisabled(false);
        }
    }

    , onFTPServerSelected: function() {
        this.consoleLog("onFTPServerSelected()");
        this.getSourcesconfigurationftpftpserverslist().down("#editFTPServerBtn").setDisabled(false);
        this.getSourcesconfigurationftpftpserverslist().down("#deleteFTPServerBtn").setDisabled(false);
    }

    , cancelFTPServerEdit: function() {
        this.consoleLog("cancelFTPServerEdit()");
        this.getSourcesconfigurationFTPServersStore().rejectChanges();
    }

    , openAddFTPServer: function() {
        this.consoleLog("openAddFTPServer()");
        // Create a model instance
        var newFtpServer = Ext.create("WPAKD.model.sourcesconfiguration.FTPServers", {
             NAME: i18n.gettext("NEW_SERVER")
            , SOURCEID: this.getSourcesconfigurationFTPServersStore().getProxy().extraParams.SOURCEID
        });
        this.getSourcesconfigurationFTPServersStore().insert(0, newFtpServer);
        this.getSourcesconfigurationftpftpserverslist().getPlugin("rowediting").startEdit(0, 0);
    }

    /*
     * We don"t want to keep any un-synced ID, so we save the line for any FTP server creation
     */
    , commitFTPServer: function() {
        this.consoleLog("commitFTPServer()");
        var scope = this;
        var isNewRecord = false;
        var editRecord;
        this.getSourcesconfigurationFTPServersStore().each(function (rec) {
            var currentID = rec.get("ID");
            scope.consoleLog("commitFTPServer(): CurrentID: " + currentID);
            if (isNaN(currentID) && currentID.indexOf("FTP_") > -1) {
                scope.consoleLog("commitFTPServer(): currentID.indexOf: " + currentID.indexOf("FTP_"));
                isNewRecord = true;
                editRecord = rec;
            }
        });
        if (isNewRecord === true) {
            Ext.Msg.show({
                title: i18n.gettext("Add new server"),
                msg: i18n.gettext("This new server will be saved in configuration. Proceed ?"),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === "yes") {
                        scope.getSourcesconfigurationFTPServersStore().sync();
                    } else {
                        scope.getSourcesconfigurationftpftpserverslist().getPlugin("rowediting").startEdit(editRecord, 0);
                    }
                }
            });
        } else {
            scope.getSourcesconfigurationFTPServersStore().sync();
        }
    }

    , openEditFTPServer: function() {
        this.consoleLog("openEditFTPServer()");
        var seletedFTPServer = this.getSourcesconfigurationftpftpserverslist().getSelectionModel().getSelection()[0];
        if (seletedFTPServer) {
            this.getSourcesconfigurationftpftpserverslist().getPlugin("rowediting").startEdit(seletedFTPServer, 0);
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a server first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    }

    , openDeleteFTPServer: function() {
        this.consoleLog("openDeleteFTPServer()");
        var seletedFTPServer = this.getSourcesconfigurationftpftpserverslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getSourcesconfigurationFTPServersStore();
        var scope = this;
        if (seletedFTPServer) {
            Ext.Msg.show({
                title: i18n.gettext("Delete FTP Server ?"),
                msg: i18n.gettext("You are deleting this FTP Server permanently, this cannot be undone. Proceed ?"),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === "yes") {
                        scope.consoleLog("openDeleteFTPServer(): currentStore.remove(selection)");
                        scope.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.clearFTPServer", seletedFTPServer.get("ID"));
                        scope.fireEvent("WPAKD.controller.sourcesconfiguration.advanced.Advanced.clearFTPServer", seletedFTPServer.get("ID"));
                        scope.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.clearFTPServer", seletedFTPServer.get("ID"));
                        currentStore.remove(seletedFTPServer);
                        currentStore.sync();
                    }
                }
            });
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a server first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    }

    , reloadFTPServers: function() {
        this.consoleLog("reloadFTPServers()");
        this.getSourcesconfigurationFTPServersStore().load();
    }

});
