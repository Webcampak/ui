/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.accesscontrol.sources.Sources");
//</debug>
Ext.define("WPAKD.controller.accesscontrol.sources.Sources", {
    extend: "Ext.app.Controller",

    views: [
        "accesscontrol.sources.Main"
        , "accesscontrol.sources.SourcesList"
        , "accesscontrol.sources.Search"
        , "accesscontrol.sources.ToolbarRecords"
        , "accesscontrol.sources.manageusers.Main"
        , "accesscontrol.sources.manageusers.SourceAvailableUsers"
        , "accesscontrol.sources.manageusers.SourceCurrentUsers"
    ],

    stores: [
        "accesscontrol.sources.Sources"
        , "accesscontrol.sources.SourceAvailableUsers"
        , "accesscontrol.sources.SourceCurrentUsers"
        , "shared.Sources"
    ],

    models: [
        "accesscontrol.sources.Sources"
        , "accesscontrol.sources.SourceAvailableUsers"
        , "accesscontrol.sources.SourceCurrentUsers"
        , "shared.Sources"
    ],

    refs: [
        {ref: "accesscontrolsourcesmain",                   selector: "accesscontrolsourcesmain"                }
        , {ref: "accesscontrolsourcessourceslist",          selector: "accesscontrolsourcessourceslist"         }
        , {ref: "accesscontrolsourcessearch",               selector: "accesscontrolsourcessearch"              }
        , {ref: "accesscontrolsourcestoolbarrecords",       selector: "accesscontrolsourcestoolbarrecords"      }

        , {ref: "accesscontrolsourcesmanageusersmain",                  selector: "accesscontrolsourcesmanageusersmain",                autoCreate: true,   xtype: "accesscontrolsourcesmanageusersmain"    }
        , {ref: "accesscontrolsourcesmanageuserssourceavailableusers",  selector: "accesscontrolsourcesmanageuserssourceavailableusers" }
        , {ref: "accesscontrolsourcesmanageuserssourcecurrentusers",    selector: "accesscontrolsourcesmanageuserssourcecurrentusers"   }

    ],

    init: function() {
        this.consoleLog("Controller init()");
        this.control({
            "accesscontrolsourcessourceslist button[action=reloadSources]":         {click:      this.reloadSources             }
            , "accesscontrolsourcessourceslist button[action=openAddSource]":       {click:      this.openAddSource             }
            , "accesscontrolsourcessourceslist button[action=openEditSource]":      {click:      this.openEditSource            }
            , "accesscontrolsourcessourceslist button[action=openDeleteSource]":    {click:      this.openDeleteSource          }
            , "accesscontrolsourcessourceslist button[action=openUserAssignment]":  {click:      this.openUserAssignment         }

            , "accesscontrolsourcesmain":  {activate:      this.updateTotalSources         }

            , "accesscontrolsourcesmanageuserssourceavailableusers tool[action=reloadSourceAvailableUsers]":    {click: this.reloadSourcepAvailableUsers }
            , "accesscontrolsourcesmanageuserssourcecurrentusers tool[action=reloadSourceCurrentUsers]":        {click: this.reloadSourceCurrentUsers    }

            , "accesscontrolsourcessourceslist":    {selectionchange:   this.onSourceSelected
                                                    , edit:             this.commitSource
                                                    , beforeedit:        this.beforeEditRecord
                                                    , canceledit:       this.cancelSourceEdit
                                                    }
            , "accesscontrolsourcessearch": {change:    this.searchSources  }
        });
        this.listen({
            store: {
                "*": {
                  "WPAKD.controller.accesscontrol.sources.Sources.reloadUsers": this.reloadUsers
                  , "WPAKD.controller.accesscontrol.sources.Sources.openEditSource": this.openEditSource
                  , "WPAKD.controller.accesscontrol.sources.Sources.reloadSharedSources": this.reloadSharedSources
                }
            }
        });
    },

    onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Sources: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }   

    , onSourceSelected: function() {
        this.consoleLog("onSourceSelected()");
        this.getAccesscontrolsourcessourceslist().down("#editSourceBtn").setDisabled(false);
        this.getAccesscontrolsourcessourceslist().down("#deleteSourceBtn").setDisabled(false);
        this.getAccesscontrolsourcessourceslist().down("#openUserAssignmentBtn").setDisabled(false);
    },

    reloadSharedSources: function() {
        this.consoleLog("reloadSharedSources()");
        this.getSharedSourcesStore().load();
    },

    cancelSourceEdit: function() {
        this.consoleLog("cancelSourceEdit()");
        this.getAccesscontrolSourcesSourcesStore().rejectChanges();
    },

    reloadUsers: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Groups->Groups: reloadUsers()");
        this.reloadSourcepAvailableUsers();
        this.reloadSourceCurrentUsers();
    },

    reloadSourcepAvailableUsers: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Groups->Groups: reloadSourcepAvailableUsers()");
        this.getAccesscontrolSourcesSourceAvailableUsersStore().load();
    },

    reloadSourceCurrentUsers: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Groups->Groups: reloadSourceCurrentUsers()");
        this.getAccesscontrolSourcesSourceCurrentUsersStore().load();
    },

    openAddSource: function() {
        this.consoleLog("openAddSource()");

        // Create a model instance
        var r = Ext.create("WPAKD.model.accesscontrol.sources.Sources", {
             NAME: "NEW_SOURCE"
        });
        this.getAccesscontrolSourcesSourcesStore().insert(0, r);
        this.getAccesscontrolsourcessourceslist().getPlugin("rowediting").startEdit(0, 0);
    },

    beforeEditRecord: function(editor, e) {
        this.consoleLog("beforeEditRecord()");
        var quotaValueB = e.record.get("QUOTA");
        var quotaValueGB = quotaValueB / 1000000000;        
        e.record.set("QUOTA", quotaValueGB);
    },


    commitSource: function(editor, e) {
        this.consoleLog("commitSource()");
        var quotaValueGB = e.record.get("QUOTA");
        var quotaValueB = quotaValueGB * 1000000000;
        e.record.set("QUOTA", quotaValueB);
        this.getAccesscontrolSourcesSourcesStore().sync();
        this.reloadSharedSources();
    },

    updateSourceSuccess: function() {
        this.consoleLog("updateSourceSuccess()");
        this.reloadSharedSources();
    },

    openEditSource: function() {
        this.consoleLog("openEditSource()");
        var seletedSource = this.getAccesscontrolsourcessourceslist().getSelectionModel().getSelection()[0];
        if (seletedSource) {
            this.getAccesscontrolsourcessourceslist().getPlugin("rowediting").startEdit(seletedSource, 0);
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a source first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    openDeleteSource: function() {
        this.consoleLog("openDeleteSource()");
        var seletedSource = this.getAccesscontrolsourcessourceslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getAccesscontrolSourcesSourcesStore();
        var scope = this;
        var currentScope = this;
        if (seletedSource) {
            Ext.Msg.show({
                title: i18n.gettext("Delete Source?"),
                msg: i18n.gettext("You are deleting a source permanently, this cannot be undone. Proceed ?"),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === "yes") {
                        scope.consoleLog("openDeleteSource: currentStore.remove(selection):");
                        currentStore.remove(seletedSource);
                        currentStore.sync();
                        currentScope.reloadSharedSources();
                    }
                }
            });
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a source first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    },

    reloadSources: function() {
        this.consoleLog("reloadSources()");
        this.getAccesscontrolSourcesSourcesStore().load();
        this.getAccesscontrolSourcesSourcesStore().on("load",this.updateTotalSources,this,{single:true});
        this.getAccesscontrolsourcessearch().setValue("");
    },

    updateTotalSources: function() {
        this.consoleLog("updateTotalSources()");
        if (this.getAccesscontrolsourcestoolbarrecords()) {
            this.getAccesscontrolsourcestoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolSourcesSourcesStore().getTotalCount() );
        }
    },

    searchSources: function() {
        this.consoleLog("searchSources()");
        var currentContext = this;

        this.getAccesscontrolsourcessourceslist().down("#editSourceBtn").setDisabled(true);
        this.getAccesscontrolsourcessourceslist().down("#deleteSourceBtn").setDisabled(true);
        this.getAccesscontrolsourcessourceslist().down("#openUserAssignmentBtn").setDisabled(false);

        this.getAccesscontrolSourcesSourcesStore().filterBy(function (record) {
            var currentName = record.data.NAME;
            currentName = currentName.toUpperCase();

            var currentFilter = currentContext.getAccesscontrolsourcessearch().getValue();
            currentFilter = currentFilter.toUpperCase();

            if (currentName.indexOf(currentFilter) !== -1) {return true;}
            else {return false;}
        });
        if (this.getAccesscontrolsourcessearch().getValue() === "") {
            this.getAccesscontrolsourcestoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolSourcesSourcesStore().getTotalCount() );
        } else {
            this.getAccesscontrolsourcestoolbarrecords().setText(i18n.gettext("Number of filtered records: ") + this.getAccesscontrolSourcesSourcesStore().getCount() + " (" + i18n.gettext("Total") + ": " + this.getAccesscontrolSourcesSourcesStore().getTotalCount() + ")");
        }
    },

    openUserAssignment: function() {
        this.consoleLog("openUserAssignment()");

        var seletedSource = this.getAccesscontrolsourcessourceslist().getSelectionModel().getSelection()[0];
        if (seletedSource) {
            Ext.getStore("accesscontrol.sources.SourceAvailableUsers").getProxy().setExtraParam("SOU_ID", seletedSource.get("SOU_ID"));
            Ext.getStore("accesscontrol.sources.SourceCurrentUsers").getProxy().setExtraParam("SOU_ID", seletedSource.get("SOU_ID"));

            this.getAccesscontrolSourcesSourceCurrentUsersStore().load();
            this.getAccesscontrolSourcesSourceAvailableUsersStore().load();

            this.getAccesscontrolsourcesmanageusersmain().show();
            this.getAccesscontrolsourcesmanageusersmain().setTitle(i18n.gettext("Manage users of source: ") + " " + seletedSource.get("NAME"));
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a source first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    }

});