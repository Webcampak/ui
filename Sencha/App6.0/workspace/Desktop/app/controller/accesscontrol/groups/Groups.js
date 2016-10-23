/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.accesscontrol.groups.Groups");
//</debug>
Ext.define("WPAKD.controller.accesscontrol.groups.Groups", {
    extend: "Ext.app.Controller",

    views: [
        "accesscontrol.groups.Main"
        , "accesscontrol.groups.GroupsList"
        , "accesscontrol.groups.Search"
        , "accesscontrol.groups.ToolbarRecords"
        , "accesscontrol.groups.shared.CustomersList"
        , "accesscontrol.groups.managepermissions.Main"
        , "accesscontrol.groups.managepermissions.GroupAvailablePermissions"
        , "accesscontrol.groups.managepermissions.GroupCurrentPermissions"
        , "accesscontrol.groups.managepermissions.GroupAvailableApplications"
        , "accesscontrol.groups.managepermissions.GroupCurrentApplications"
    ],

    stores: [
        "accesscontrol.groups.Groups"
        , "accesscontrol.groups.GroupAvailableApplications"
        , "accesscontrol.groups.GroupCurrentApplications"
        , "accesscontrol.groups.GroupAvailablePermissions"
        , "accesscontrol.groups.GroupCurrentPermissions"
    ],

    models: [
        "accesscontrol.groups.Groups"
        , "accesscontrol.groups.GroupAvailableApplications"
        , "accesscontrol.groups.GroupCurrentApplications"
        , "accesscontrol.groups.GroupAvailablePermissions"
        , "accesscontrol.groups.GroupCurrentPermissions"
    ],

    refs: [
        {ref: "accesscontrolgroupsmain",                    selector: "accesscontrolgroupsmain"                 }
        , {ref: "accesscontrolgroupsgroupslist",            selector: "accesscontrolgroupsgroupslist"           }
        , {ref: "accesscontrolgroupssearch",                selector: "accesscontrolgroupssearch"               }
        , {ref: "accesscontrolgroupstoolbarrecords",        selector: "accesscontrolgroupstoolbarrecords"       }
        , {ref: "accesscontrolgroupssharedcustomerslist",   selector: "accesscontrolgroupssharedcustomerslist"  }

        , {ref: "accesscontrolgroupsmanagepermissionsmain",                         selector: "accesscontrolgroupsmanagepermissionsmain",                       autoCreate: true,        xtype: "accesscontrolgroupsmanagepermissionsmain"     }
        , {ref: "accesscontrolgroupsmanagepermissionsgroupavailablepermissions",    selector: "accesscontrolgroupsmanagepermissionsgroupavailablepermissions"   }
        , {ref: "accesscontrolgroupsmanagepermissionsgroupcurrentpermissions",      selector: "accesscontrolgroupsmanagepermissionsgroupcurrentpermissions"     }
        , {ref: "accesscontrolgroupsmanagepermissionsgroupavailableapplications",   selector: "accesscontrolgroupsmanagepermissionsgroupavailableapplications"  }
        , {ref: "accesscontrolgroupsmanagepermissionsgroupcurrentapplications",     selector: "accesscontrolgroupsmanagepermissionsgroupcurrentapplications"    }
    ],

    init: function() {
        this.consoleLog("Controller init()");
        this.control({
            "accesscontrolgroupsgroupslist button[action=reloadGroups]":                {click:      this.reloadGroups                 }
            , "accesscontrolgroupsgroupslist button[action=openAddGroup]":              {click:      this.openAddGroup                 }
            , "accesscontrolgroupsgroupslist button[action=openEditGroup]":             {click:      this.openEditGroup                }
            , "accesscontrolgroupsgroupslist button[action=openDeleteGroup]":           {click:      this.openDeleteGroup             }
            , "accesscontrolgroupsgroupslist button[action=openPermissionAssignment]":  {click:      this.openPermissionAssignment }

            , "accesscontrolgroupsmain":  {activate:      this.updateTotalGroups         }

            , "accesscontrolgroupsgroupslist":  {selectionchange:   this.onGroupSelected
                                                , edit:             this.commitGroup
                                                , canceledit:       this.cancelGroupEdit
                                                }

            , "accesscontrolgroupssearch":    {change:     this.searchGroups        }

            , "accesscontrolgroupsmanagepermissionsmain tool[action=reloadGroupAvailablePermissions]":  {click:     this.reloadGroupAvailablePermissions    }
            , "accesscontrolgroupsmanagepermissionsmain tool[action=reloadGroupCurrentPermissions]":    {click:     this.reloadGroupCurrentPermissions      }
            , "accesscontrolgroupsmanagepermissionsmain tool[action=reloadGroupAvailableApplications]": {click:     this.reloadGroupAvailableApplications   }
            , "accesscontrolgroupsmanagepermissionsmain tool[action=reloadGroupCurrentApplications]":   {click:     this.reloadGroupCurrentApplications     }
        });
        this.listen({
            store: {
                "*": {
                  "WPAKD.controller.accesscontrol.groups.Groups.reloadGroupsAssociations": this.reloadGroupsAssociations
                  , "WPAKD.controller.accesscontrol.groups.Groups.openEditSource": this.openEditSource

                }
            }
        });
    },

    onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Groups: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }    
    
    , cancelGroupEdit: function() {
        this.consoleLog("cancelGroupEdit()");
        this.getAccesscontrolGroupsGroupsStore().rejectChanges();
    },

    reloadGroupsAssociations: function() {
        this.consoleLog("reloadGroupAvailableApplications()");
        this.reloadGroupAvailableApplications();
        this.reloadGroupCurrentApplications();
        this.reloadGroupAvailablePermissions();
        this.reloadGroupCurrentPermissions();
    },

    reloadGroupAvailableApplications: function() {
        this.consoleLog("reloadGroupAvailableApplications()");
        this.getAccesscontrolGroupsGroupAvailableApplicationsStore().load();
    },

    reloadGroupCurrentApplications: function() {
        this.consoleLog("reloadGroupCurrentApplications()");
        this.getAccesscontrolGroupsGroupCurrentApplicationsStore().load();
    },

    reloadGroupAvailablePermissions: function() {
        this.consoleLog("reloadGroupAvailablePermissions()");
        this.getAccesscontrolGroupsGroupAvailablePermissionsStore().load();
    },

    reloadGroupCurrentPermissions: function() {
        this.consoleLog("reloadGroupCurrentPermissions()");
        this.getAccesscontrolGroupsGroupCurrentPermissionsStore().load();
    },

    onGroupSelected: function() {
        this.consoleLog("onGroupSelected()");
        this.getAccesscontrolgroupsgroupslist().down("#editGroupBtn").setDisabled(false);
        this.getAccesscontrolgroupsgroupslist().down("#deleteGroupBtn").setDisabled(false);
        this.getAccesscontrolgroupsgroupslist().down("#openPermissionAssignmentBtn").setDisabled(false);
    },

    openApplicationAssignment: function() {
        this.consoleLog("openApplicationAssignment()");

        var seletedGroup = this.getAccesscontrolgroupsgroupslist().getSelectionModel().getSelection()[0];
        if (seletedGroup) {
            Ext.getStore("accesscontrol.groups.GroupAvailableApplications").getProxy().setExtraParam("GRO_ID", seletedGroup.get("GRO_ID"));
            Ext.getStore("accesscontrol.groups.GroupCurrentApplications").getProxy().setExtraParam("GRO_ID", seletedGroup.get("GRO_ID"));

            this.getAccesscontrolGroupsGroupCurrentApplicationsStore().load();
            this.getAccesscontrolGroupsGroupAvailableApplicationsStore().load();

            this.getAccesscontrolgroupsmanageapplicationsmain().show();
            this.getAccesscontrolgroupsmanageapplicationsmain().setTitle(i18n.gettext("Manage applications of group: ") + " " + seletedGroup.get("NAME"));
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a group first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    openPermissionAssignment: function() {
        this.consoleLog("openPermissionAssignment()");

        var seletedGroup = this.getAccesscontrolgroupsgroupslist().getSelectionModel().getSelection()[0];
        if (seletedGroup) {
            Ext.getStore("accesscontrol.groups.GroupAvailablePermissions").getProxy().setExtraParam("GRO_ID", seletedGroup.get("GRO_ID"));
            Ext.getStore("accesscontrol.groups.GroupCurrentPermissions").getProxy().setExtraParam("GRO_ID", seletedGroup.get("GRO_ID"));
            Ext.getStore("accesscontrol.groups.GroupAvailableApplications").getProxy().setExtraParam("GRO_ID", seletedGroup.get("GRO_ID"));
            Ext.getStore("accesscontrol.groups.GroupCurrentApplications").getProxy().setExtraParam("GRO_ID", seletedGroup.get("GRO_ID"));

            this.getAccesscontrolGroupsGroupCurrentPermissionsStore().load();
            this.getAccesscontrolGroupsGroupAvailablePermissionsStore().load();
            this.getAccesscontrolGroupsGroupCurrentApplicationsStore().load();
            this.getAccesscontrolGroupsGroupAvailableApplicationsStore().load();

            this.getAccesscontrolgroupsmanagepermissionsmain().show();
            this.getAccesscontrolgroupsmanagepermissionsmain().setTitle(i18n.gettext("Manage permissions of") + " " + seletedGroup.get("NAME"));
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a group first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    openAddGroup: function() {
        this.consoleLog("openAddGroup()");
        // Create a model instance
        var r = Ext.create("WPAKD.model.accesscontrol.groups.Groups", {
             NAME: "NEW_GROUP",
             NOTES: "Notes about the newly created group"
        });
        this.getAccesscontrolGroupsGroupsStore().insert(0, r);
        this.getAccesscontrolgroupsgroupslist().getPlugin("rowediting").startEdit(0, 0);
    },

    commitGroup: function() {
        this.consoleLog("commitGroup()");
        this.getAccesscontrolGroupsGroupsStore().sync();
    },

    updateGroupSuccess: function() {
        this.consoleLog("updateGroupSuccess()");
    },

    openEditGroup: function() {
        this.consoleLog("openEditGroup()");
        var seletedGroup = this.getAccesscontrolgroupsgroupslist().getSelectionModel().getSelection()[0];
        if (seletedGroup) {
            this.getAccesscontrolgroupsgroupslist().getPlugin("rowediting").startEdit(seletedGroup, 0);
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a group first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    openDeleteGroup: function() {
        this.consoleLog("openDeleteGroup()");
        var seletedGroup = this.getAccesscontrolgroupsgroupslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getAccesscontrolGroupsGroupsStore();
        var scope = this;
        if (seletedGroup) {
            Ext.Msg.show({
                title: i18n.gettext("Delete Group?"),
                msg: i18n.gettext("You are deleting a group permanently, this cannot be undone. Proceed ?"),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === "yes") {
                        scope.consoleLog("openDeleteGroup: currentStore.remove(selection):");
                        currentStore.remove(seletedGroup);
                        currentStore.sync();
                    }
                }
            });
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a group first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    },

    reloadGroups: function() {
        this.consoleLog("reloadGroups()");
        this.getAccesscontrolGroupsGroupsStore().load();
        this.getAccesscontrolGroupsGroupsStore().on("load",this.updateTotalGroups,this,{single:true});
        this.getAccesscontrolgroupssearch().setValue("");
    },

    updateTotalGroups: function() {
        this.consoleLog("updateTotalGroups()");
        if (this.getAccesscontrolgroupstoolbarrecords()) {
            this.getAccesscontrolgroupstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolGroupsGroupsStore().getTotalCount() );
        }
    },

    searchGroups: function() {
        this.consoleLog("searchGroups()");
        var currentContext = this;

        this.getAccesscontrolgroupsgroupslist().down("#editGroupBtn").setDisabled(true);
        this.getAccesscontrolgroupsgroupslist().down("#deleteGroupBtn").setDisabled(true);
        this.getAccesscontrolgroupsgroupslist().down("#openPermissionAssignmentBtn").setDisabled(true);

        this.getAccesscontrolGroupsGroupsStore().filterBy(function (record) {
            var currentFilter = currentContext.getAccesscontrolgroupssearch().getValue();
            currentFilter = currentFilter.toUpperCase();

            var currentName = record.data.NAME;
            currentName = currentName.toUpperCase();

            if (currentName.indexOf(currentFilter) !== -1) {return true;}
            else {return false;}
        });
        if (this.getAccesscontrolgroupssearch().getValue() === "") {
            this.getAccesscontrolgroupstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolGroupsGroupsStore().getTotalCount() );
        } else {
            this.getAccesscontrolgroupstoolbarrecords().setText(i18n.gettext("Number of filtered records: ") + this.getAccesscontrolGroupsGroupsStore().getCount() + " (" + i18n.gettext("Total") + ": " + this.getAccesscontrolGroupsGroupsStore().getTotalCount() + ")");
        }
    }
});