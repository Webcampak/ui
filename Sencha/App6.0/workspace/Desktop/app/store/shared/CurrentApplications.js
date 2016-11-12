/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.shared.CurrentApplications");
//</debug>
Ext.define("WPAKD.store.shared.CurrentApplications", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.shared.Applications",

    autoLoad: true,
    autoSync: true,

    proxy:{
        type: "direct",
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:   "Applications.getCurrentApplications"
        }
    },
    listeners: {
        datachanged: function(store, operation) {
            if (store.count() === 0 && this.fireEvent("WPAKD.controller.desktop.Authentication.isAuthenticated") === true) {
                Ext.raise({
                    title: i18n.gettext("Applications permission required")
                    , msg: i18n.gettext("Your currently don\"t have access to any applications.") + "<br/>" + i18n.gettext("Please contact support and restart your browser")
                });
            }
        }
    }
});
