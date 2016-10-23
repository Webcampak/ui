/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.accesscontrol.customers.Customers");
//</debug>
Ext.define("WPAKD.controller.accesscontrol.customers.Customers", {
    extend: "Ext.app.Controller"

    , views: [
        "accesscontrol.customers.Main"
        , "accesscontrol.customers.CustomersList"
        , "accesscontrol.customers.Search"
        , "accesscontrol.customers.ToolbarRecords"
    ]

    , stores: [
        "accesscontrol.customers.Customers"
    ]

    , models: [
        "accesscontrol.customers.Customers"
    ]

    , refs: [
        {ref: "accesscontrolcustomersmain",                     selector: "accesscontrolcustomersmain"                  }
        , {ref: "accesscontrolcustomerscustomerslist",          selector: "accesscontrolcustomerscustomerslist"         }
        , {ref: "accesscontrolcustomerssearch",                 selector: "accesscontrolcustomerssearch"                }
        , {ref: "accesscontrolcustomerstoolbarrecords",         selector: "accesscontrolcustomerstoolbarrecords"        }
        , {ref: "accesscontrolcustomerssharedcustomerslist",    selector: "accesscontrolcustomerssharedcustomerslist"   }
    ]

    , init: function() {
        this.consoleLog("Controller init()");
        this.control({
            "accesscontrolcustomerscustomerslist button[action=reloadCustomers]":       {click:     this.reloadCustomers    }
            , "accesscontrolcustomerscustomerslist button[action=openAddCustomer]":     {click:     this.openAddCustomer    }
            , "accesscontrolcustomerscustomerslist button[action=openEditCustomer]":    {click:     this.openEditCustomer   }
            , "accesscontrolcustomerscustomerslist button[action=openDeleteCustomer]":  {click:     this.openDeleteCustomer }

            , "accesscontrolcustomersmain":  {activate:      this.updateTotalCustomers         }

            , "accesscontrolcustomerscustomerslist":{  selectionchange:     this.onCustomerSelected
                                                        , edit:     this.commitCustomer
                                                        , canceledit:     this.cancelCustomerEdit
                                                    }
            , "accesscontrolcustomerssearch":       {change:     this.searchCustomers        }
        });
        this.listen({
            store: {
                "*": {
                  "WPAKD.controller.accesscontrol.customers.Customers.openEditCustomer": this.openEditCustomer
                }
            }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->AccessControl->Customers: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }    

    , onCustomerSelected: function() {
        this.consoleLog("onCustomerSelected()");
        this.getAccesscontrolcustomerscustomerslist().down("#editCustomerBtn").setDisabled(false);
        this.getAccesscontrolcustomerscustomerslist().down("#deleteCustomerBtn").setDisabled(false);
    },

    cancelCustomerEdit: function() {
        this.consoleLog("cancelCustomerEdit()");
        this.getAccesscontrolCustomersCustomersStore().rejectChanges();
    },

    openAddCustomer: function() {
        this.consoleLog("openAddCustomer()");
        // Create a model instance
        var newCustomer = Ext.create("WPAKD.model.accesscontrol.customers.Customers", {
             NAME: i18n.gettext("NEW_CUSTOMER")
        });
        this.getAccesscontrolCustomersCustomersStore().insert(0, newCustomer);
        this.getAccesscontrolcustomerscustomerslist().getPlugin("rowediting").startEdit(0, 0);
    },

    commitCustomer: function() {
        this.consoleLog("commitCustomer()");
        this.getAccesscontrolCustomersCustomersStore().sync();
    },

    openEditCustomer: function() {
        this.consoleLog("openEditCustomer()");
        var seletedCustomer = this.getAccesscontrolcustomerscustomerslist().getSelectionModel().getSelection()[0];
        if (seletedCustomer) {
            this.getAccesscontrolcustomerscustomerslist().getPlugin("rowediting").startEdit(seletedCustomer, 0);
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a customer first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    openDeleteCustomer: function() {
        this.consoleLog("openDeleteCustomer()");
        var seletedCustomer = this.getAccesscontrolcustomerscustomerslist().getSelectionModel().getSelection()[0];
        var currentStore = this.getAccesscontrolCustomersCustomersStore();
        var scope = this;
        if (seletedCustomer) {
            Ext.Msg.show({
                title: i18n.gettext("Delete Customer?"),
                msg: i18n.gettext("You are deleting this customer permanently, this cannot be undone. Proceed ?"),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function(btn){
                    if(btn === "yes") {
                        scope.consoleLog("openDeleteCustomer: currentStore.remove(selection):");
                        currentStore.remove(seletedCustomer);
                        currentStore.sync();
                    }
                }
            });
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please select a customer first"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }

    },

    reloadCustomers: function() {
        this.consoleLog("reloadCustomers()");
        this.getAccesscontrolCustomersCustomersStore().load();
        this.getAccesscontrolCustomersCustomersStore().on("load",this.updateTotalCustomers,this,{single:true});
        this.getAccesscontrolcustomerssearch().setValue("");
    },

    updateTotalCustomers: function() {
        this.consoleLog("updateTotalCustomers()");
        if (this.getAccesscontrolcustomerstoolbarrecords()) {
            this.getAccesscontrolcustomerstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolCustomersCustomersStore().getTotalCount() );
        }
    },

    searchCustomers: function() {
        this.consoleLog("searchCustomers()");
        var currentContext = this;

        this.getAccesscontrolcustomerscustomerslist().down("#editCustomerBtn").setDisabled(true);
        this.getAccesscontrolcustomerscustomerslist().down("#deleteCustomerBtn").setDisabled(true);

        this.getAccesscontrolCustomersCustomersStore().filterBy(function (record) {
            var currentName = record.data.NAME;
            currentName = currentName.toUpperCase();

            var currentFilter = currentContext.getAccesscontrolcustomerssearch().getValue();
            currentFilter = currentFilter.toUpperCase();

            if (currentName.indexOf(currentFilter) !== -1) {return true;}
            else {return false;}
        });
        if (this.getAccesscontrolcustomerssearch().getValue() === "") {
            this.getAccesscontrolcustomerstoolbarrecords().setText(i18n.gettext("Total number of records: ") + this.getAccesscontrolCustomersCustomersStore().getTotalCount() );
        } else {
            this.getAccesscontrolcustomerstoolbarrecords().setText(i18n.gettext("Number of filtered records: ") + this.getAccesscontrolCustomersCustomersStore().getCount() + " (" + i18n.gettext("Total") + ": " + this.getAccesscontrolCustomersCustomersStore().getTotalCount() + ")");
        }
    }
});