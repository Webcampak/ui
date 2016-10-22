/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.accesscontrol.users.Users");
//</debug>
Ext.define("WPAKD.controller.accesscontrol.users.Users", {
    extend: "Ext.app.Controller",

    views: [
        "accesscontrol.users.Main"
        , "accesscontrol.users.UsersList"
        , "accesscontrol.users.Search"
        , "accesscontrol.users.ToolbarRecords"
        , "accesscontrol.users.useradd.Main"
        , "accesscontrol.users.useredit.Main"
        , "accesscontrol.users.shared.ActiveFlag"
        , "accesscontrol.users.shared.ChangePwdFlag"
        , "accesscontrol.users.shared.Customer"
        , "accesscontrol.users.shared.CustomersList"
        , "accesscontrol.users.shared.Group"
        , "accesscontrol.users.shared.GroupsList"
        , "accesscontrol.users.shared.Username"
        , "accesscontrol.users.shared.Password"
        , "accesscontrol.users.shared.Email"
        , "accesscontrol.users.shared.Firstname"
        , "accesscontrol.users.shared.Lastname"
        , "accesscontrol.users.managesources.Main"
        , "accesscontrol.users.managesources.UserAvailableSources"
        , "accesscontrol.users.managesources.UserCurrentSources"
    ],

    stores: [
        "accesscontrol.users.Users"
        , "accesscontrol.users.UserAvailableSources"
        , "accesscontrol.users.UserCurrentSources"
    ],

    models: [
        "accesscontrol.users.Users"
        , "accesscontrol.users.UserAvailableSources"
        , "accesscontrol.users.UserCurrentSources"
    ],

    refs: [
        {ref: "accesscontrolusersmain",                     selector: "accesscontrolusersmain"                  }
        , {ref: "accesscontrolusersuserslist",              selector: "accesscontrolusersuserslist"             }
        , {ref: "accesscontroluserssearch",                 selector: "accesscontroluserssearch"                }
        , {ref: "accesscontroluserstoolbarrecords",         selector: "accesscontroluserstoolbarrecords"        }
        , {ref: "accesscontrolusersuseraddmain",            selector: "accesscontrolusersuseraddmain",          autoCreate: true,        xtype: "accesscontrolusersuseraddmain"     }
        , {ref: "accesscontrolusersusereditmain",           selector: "accesscontrolusersusereditmain",         autoCreate: true,        xtype: "accesscontrolusersusereditmain"    }
        , {ref: "accesscontroluserssharedactiveflag",       selector: "accesscontroluserssharedactiveflag"      }
        , {ref: "accesscontroluserssharedchangepwdflag",    selector: "accesscontroluserssharedchangepwdflag"   }
        , {ref: "accesscontroluserssharedcustomer",         selector: "accesscontroluserssharedcustomer"        }
        , {ref: "accesscontroluserssharedcustomerslist",    selector: "accesscontroluserssharedcustomerslist"   }
        , {ref: "accesscontroluserssharedgroup",            selector: "accesscontroluserssharedgroup"           }
        , {ref: "accesscontroluserssharedgroupslist",       selector: "accesscontroluserssharedgroupslist"      }
        , {ref: "accesscontroluserssharedusername",         selector: "accesscontroluserssharedusername",       autoCreate: true,        xtype: "accesscontroluserssharedusername"     }
        , {ref: "accesscontroluserssharedpassword",         selector: "accesscontroluserssharedpassword"        }
        , {ref: "accesscontroluserssharedemail",            selector: "accesscontroluserssharedemail"           }
        , {ref: "accesscontroluserssharedfirstname",        selector: "accesscontroluserssharedfirstname"       }
        , {ref: "accesscontroluserssharedlastname",         selector: "accesscontroluserssharedlastname"        }

        , {ref: "accesscontrolusersmanagesourcesmain",                  selector: "accesscontrolusersmanagesourcesmain",                autoCreate: true, xtype: "accesscontrolusersmanagesourcesmain"}
        , {ref: "accesscontrolusersmanagesourcesuseravailablesources",  selector: "accesscontrolusersmanagesourcesuseravailablesources" }
        , {ref: "accesscontrolusersmanagesourcesusercurrentsources",    selector: "accesscontrolusersmanagesourcesusercurrentsources"   }
    ],

    init: function() {
        this.consoleLog("Controller init()");
        this.control({
            "accesscontrolusersuserslist button[action=reloadUsers]":               {click: this.reloadUsers            }
            , "accesscontrolusersuserslist button[action=openAddUser]":             {click: this.openAddUser            }
            , "accesscontrolusersuserslist button[action=openEditUser]":            {click: this.openEditUser           }
            , "accesscontrolusersuserslist button[action=openDeleteUser]":          {click: this.openDeleteUser         }
            , "accesscontrolusersuserslist button[action=openSourceAssignment]":    {click: this.openSourceAssignment   }

            , "accesscontrolusersmain":  {activate:      this.updateTotalUsers         }

            , "accesscontrolusersuserslist":                                        {selectionchange:   this.onUserSelected}

            , "accesscontrolusersuseraddmain button[action=closeAddUser]":  {click: this.closeAddUser   }
            , "accesscontrolusersuseraddmain button[action=addUser]":       {click: this.addUser        }

            , "accesscontrolusersusereditmain button[action=closeEditUser]":  {click:   this.closeEditUser  }
            , "accesscontrolusersusereditmain button[action=editUser]":       {click:   this.editUser       }

            , "accesscontroluserssharedusername":       {change:  this.checkUserExists }

            , "accesscontroluserssearch":               {change:   this.searchUsers    }

            , "accesscontrolusersmanagesourcesmain tool[action=reloadUserAvailableSources]":    {click: this.reloadUserAvailableSources }
            , "accesscontrolusersmanagesourcesmain tool[action=reloadUserCurrentSources]":      {click: this.reloadUserCurrentSources   }
        });
        this.listen({
            store: {
                "*": {
                  "WPAKD.controller.accesscontrol.users.Users.reloadSources": this.reloadSources
                }
            }
        });
    },

    onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Users: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }  

    , reloadSources: function() {
        this.consoleLog("reloadSources()");
        this.reloadUserAvailableSources();
        this.reloadUserCurrentSources();
    },

    reloadUserAvailableSources: function() {
        this.consoleLog("reloadUserAvailableSources()");
        this.getAccesscontrolUsersUserAvailableSourcesStore().load();
    },
    reloadUserCurrentSources: function() {
        this.consoleLog("reloadUserCurrentSources()");
        this.getAccesscontrolUsersUserCurrentSourcesStore().load();
    },

    onUserSelected: function() {
        this.consoleLog("onUserSelected()");
        this.getAccesscontrolusersuserslist().down("#editUserBtn").setDisabled(false);
        this.getAccesscontrolusersuserslist().down("#deleteUserBtn").setDisabled(false);
        this.getAccesscontrolusersuserslist().down("#openSourceAssignmentBtn").setDisabled(false);
    },

    openSourceAssignment: function() {
        this.consoleLog("openSourceAssignment()");

        var seletedUser = this.getAccesscontrolusersuserslist().getSelectionModel().getSelection()[0];
        if (seletedUser) {
            Ext.getStore("accesscontrol.users.UserAvailableSources").getProxy().setExtraParam("USE_ID", seletedUser.get("USE_ID"));
            Ext.getStore("accesscontrol.users.UserCurrentSources").getProxy().setExtraParam("USE_ID", seletedUser.get("USE_ID"));

            this.getAccesscontrolUsersUserCurrentSourcesStore().load();
            this.getAccesscontrolUsersUserAvailableSourcesStore().load();

            this.getAccesscontrolusersmanagesourcesmain().show();
            this.getAccesscontrolusersmanagesourcesmain().setTitle(i18n.gettext("Manage sources of") + " " + seletedUser.get("FIRSTNAME") + " " + seletedUser.get("LASTNAME") + " (" + seletedUser.get("USERNAME") + ")");
        }
    },

    openAddUser: function() {
        this.consoleLog("openAddUser()");
        this.getAccesscontrolusersuseraddmain().show();

        this.getAccesscontroluserssharedusername().setValue("");
        this.getAccesscontroluserssharedusername().setDisabled(false);
        this.getAccesscontroluserssharedpassword().setValue("");
        this.getAccesscontroluserssharedcustomer().setValue("");
        this.getAccesscontroluserssharedgroup().setValue("");
        this.getAccesscontroluserssharedfirstname().setValue("");
        this.getAccesscontroluserssharedlastname().setValue("");
        this.getAccesscontroluserssharedemail().setValue("");

        this.getAccesscontroluserssharedactiveflag().setValue(true);
        this.getAccesscontroluserssharedchangepwdflag().setValue(false);
    },

    closeAddUser: function() {
        this.consoleLog("closeAddUser()");
        this.getAccesscontrolusersuseraddmain().hide();
    },

    addUser: function() {
        this.consoleLog("addUser()");

        var addUserValues = new Array()
        addUserValues["USERNAME"]   = this.getAccesscontroluserssharedusername().getValue();
        addUserValues["PASSWORD"]   = this.getAccesscontroluserssharedpassword().getValue();
        addUserValues["CUS_ID"]     = this.getAccesscontroluserssharedcustomer().getValue();
        addUserValues["GRO_ID"]     = this.getAccesscontroluserssharedgroup().getValue();
        addUserValues["FIRSTNAME"]  = this.getAccesscontroluserssharedfirstname().getValue();
        addUserValues["LASTNAME"]   = this.getAccesscontroluserssharedlastname().getValue();
        addUserValues["EMAIL"]      = this.getAccesscontroluserssharedemail().getValue();

        if (this.getAccesscontroluserssharedactiveflag().getValue() == true) {addUserValues["ACTIVE_FLAG"] = "Y";}
        else {addUserValues["ACTIVE_FLAG"] = "N";}
        if (this.getAccesscontroluserssharedchangepwdflag().getValue() == true) {addUserValues["CHANGE_PWD_FLAG"] = "Y";}
        else {addUserValues["CHANGE_PWD_FLAG"] = "N";}

        this.getAccesscontrolUsersUsersStore().add(
            [{
                USERNAME:           addUserValues["USERNAME"]
                , PASSWORD:         addUserValues["PASSWORD"]
                , CUS_ID:           addUserValues["CUS_ID"]
                , GRO_ID:           addUserValues["GRO_ID"]
                , FIRSTNAME:        addUserValues["FIRSTNAME"]
                , LASTNAME:         addUserValues["LASTNAME"]
                , EMAIL:            addUserValues["EMAIL"]
                , ACTIVE_FLAG:      addUserValues["ACTIVE_FLAG"]
                , CHANGE_PWD_FLAG:  addUserValues["CHANGE_PWD_FLAG"]
            }]
        );

        this.getAccesscontrolUsersUsersStore().on("add",this.updateUserSuccess,this,{single:true});
        this.getAccesscontrolusersuseraddmain().hide();
    },

    updateUserSuccess: function() {
        this.consoleLog("updateUserSuccess()");
    },

    openEditUser: function() {
        this.consoleLog("openEditUser()");
        var seletedUser = this.getAccesscontrolusersuserslist().getSelectionModel().getSelection()[0];
        if (seletedUser) {
            this.getAccesscontrolusersusereditmain().show();
            console.log(this.getAccesscontroluserssharedusername());
            this.getAccesscontroluserssharedusername().setValue(seletedUser.get("USERNAME"));
            this.getAccesscontroluserssharedusername().setDisabled(true);
            this.getAccesscontroluserssharedpassword().setValue("");
            this.getAccesscontroluserssharedcustomer().setValue(seletedUser.get("CUS_ID"));
            this.getAccesscontroluserssharedgroup().setValue(seletedUser.get("GRO_ID"));
            this.getAccesscontroluserssharedfirstname().setValue(seletedUser.get("FIRSTNAME"));
            this.getAccesscontroluserssharedlastname().setValue(seletedUser.get("LASTNAME"));
            this.getAccesscontroluserssharedemail().setValue(seletedUser.get("EMAIL"));
            if (seletedUser.get("ACTIVE_FLAG") == "Y") {this.getAccesscontroluserssharedactiveflag().setValue(true)}
            else {this.getAccesscontroluserssharedactiveflag().setValue(false)}
            if (seletedUser.get("CHANGE_PWD_FLAG") == "Y") {this.getAccesscontroluserssharedchangepwdflag().setValue(true)}
            else {this.getAccesscontroluserssharedchangepwdflag().setValue(false)}
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a user first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    closeEditUser: function() {
        this.consoleLog("closeEditUser()");
        this.getAccesscontrolusersusereditmain().hide();
    },

    editUser: function() {
        this.consoleLog("editUser()");
        var seletedUser = this.getAccesscontrolusersuserslist().getSelectionModel().getSelection()[0];
        if (seletedUser) {
            this.consoleLog("editUser: Editing user: " + seletedUser.get("USERNAME"));
            console.log(seletedUser);
            var editUserValues = new Array()
            editUserValues["PASSWORD"]      = this.getAccesscontroluserssharedpassword().getValue();
            editUserValues["CUS_ID"]        = this.getAccesscontroluserssharedcustomer().getValue();
            editUserValues["GRO_ID"]        = this.getAccesscontroluserssharedgroup().getValue();
            editUserValues["FIRSTNAME"]     = this.getAccesscontroluserssharedfirstname().getValue();
            editUserValues["LASTNAME"]      = this.getAccesscontroluserssharedlastname().getValue();
            editUserValues["EMAIL"]         = this.getAccesscontroluserssharedemail().getValue();

            if (this.getAccesscontroluserssharedactiveflag().getValue() == true) {editUserValues["ACTIVE_FLAG"] = "Y";}
            else {editUserValues["ACTIVE_FLAG"] = "N";}
            if (this.getAccesscontroluserssharedchangepwdflag().getValue() == true) {editUserValues["CHANGE_PWD_FLAG"] = "Y";}
            else {editUserValues["CHANGE_PWD_FLAG"] = "N";}

            this.getAccesscontrolUsersUsersStore().suspendAutoSync();
            if (editUserValues["PASSWORD"] != "") {
                seletedUser.set("PASSWORD", editUserValues["PASSWORD"]);
            }
            seletedUser.set("CUS_ID", editUserValues["CUS_ID"]);
            seletedUser.set("GRO_ID", editUserValues["GRO_ID"]);
            seletedUser.set("FIRSTNAME", editUserValues["FIRSTNAME"]);
            seletedUser.set("LASTNAME", editUserValues["LASTNAME"]);
            seletedUser.set("EMAIL", editUserValues["EMAIL"]);
            seletedUser.set("ACTIVE_FLAG", editUserValues["ACTIVE_FLAG"]);
            seletedUser.set("CHANGE_PWD_FLAG", editUserValues["CHANGE_PWD_FLAG"]);

            this.getAccesscontrolUsersUsersStore().resumeAutoSync();

            this.getAccesscontrolUsersUsersStore().on("sync",this.updateUserSuccess,this,{single:true});
            this.getAccesscontrolUsersUsersStore().sync();
            console.log(seletedUser);

            this.getAccesscontrolusersusereditmain().hide();

        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a user first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    },


    hideLoadMask: function() {
        this.consoleLog("hideLoadMask()");
        Ext.getBody().unmask();
    },

    openDeleteUser: function() {
        this.consoleLog("openDeleteUser()");
        var seletedUser = this.getAccesscontrolusersuserslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getAccesscontrolUsersUsersStore();
        var scope = this;
        if (seletedUser) {
            Ext.Msg.show({
                title: i18n.gettext("Delete User?"),
                msg: i18n.gettext("You are deleting a user permanently, this cannot be undone. Proceed ?"),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === "yes") {
                        scope.consoleLog("openDeleteUser: currentStore.remove(selection):");
                        currentStore.remove(seletedUser);
                        currentStore.load();
                    }
                }
            });
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a user first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    },

    checkUserExists: function() {
        this.consoleLog("checkUserExists()");
        if (!this.getAccesscontrolusersusereditmain().isVisible()) {
            if (this.getAccesscontroluserssharedusername().getValue().length < 3) {
                this.getAccesscontroluserssharedusername().setFieldStyle("color:red;");
                this.getAccesscontroluserssharedusername().markInvalid(i18n.gettext("Username too short"));
            } else if (this.getAccesscontrolUsersUsersStore().find("USERNAME",this.getAccesscontroluserssharedusername().getValue()) == -1) {
                this.getAccesscontroluserssharedusername().setFieldStyle("color:green;");
            } else {
                this.getAccesscontroluserssharedusername().setFieldStyle("color:red;");
                this.getAccesscontroluserssharedusername().markInvalid(i18n.gettext("Username already exists"));
            }
        } else {
                this.getAccesscontroluserssharedusername().setFieldStyle("color:black;");
        }
    },


    reloadUsers: function() {
        this.consoleLog("reloadUsers()");
        this.getAccesscontrolUsersUsersStore().on("load",this.updateTotalUsers,this,{single:true});
        this.getAccesscontrolUsersUsersStore().load();
        this.getAccesscontroluserssearch().setValue("");
    },

    updateTotalUsers: function() {
        this.consoleLog("updateTotalUsers()");
        if (this.getAccesscontroluserstoolbarrecords()) {
            this.getAccesscontroluserstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolUsersUsersStore().getTotalCount() );
        }
    },

    searchUsers: function() {
        this.consoleLog("searchUsers()");
        var scope = this;

        this.getAccesscontrolusersuserslist().down("#editUserBtn").setDisabled(true);
        this.getAccesscontrolusersuserslist().down("#deleteUserBtn").setDisabled(true);
        this.getAccesscontrolusersuserslist().down("#openSourceAssignmentBtn").setDisabled(true);

        this.getAccesscontrolUsersUsersStore().filterBy(function (record) {
            var currentFilter = scope.getAccesscontroluserssearch().getValue();
            currentFilter = currentFilter.toUpperCase();

            var currentFirstname = record.data.FIRSTNAME;
            currentFirstname = currentFirstname.toUpperCase();

            var currentLastname = record.data.LASTNAME;
            currentLastname = currentLastname.toUpperCase();

            var currentUsername = record.data.USERNAME;
            currentUsername = currentUsername.toUpperCase();

            if (currentFirstname.indexOf(currentFilter) !== -1) {return true;}
            else if (currentUsername.indexOf(currentFilter) !== -1) {return true;}
            else if (currentLastname.indexOf(currentFilter) !== -1) {return true;}
            else {return false;}
        });
        if (this.getAccesscontroluserssearch().getValue() == "") {
            this.getAccesscontroluserstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolUsersUsersStore().getTotalCount() );
        } else {
            this.getAccesscontroluserstoolbarrecords().setText(i18n.gettext("Number of filtered records: ") + this.getAccesscontrolUsersUsersStore().getCount() + " (" + i18n.gettext("Total") + ": " + this.getAccesscontrolUsersUsersStore().getTotalCount() + ")");
        }
    }
});