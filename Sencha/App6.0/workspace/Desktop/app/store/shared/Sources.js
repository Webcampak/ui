/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.shared.Sources");
//</debug>
Ext.define("WPAKD.store.shared.Sources", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.shared.Sources",

    autoSync: false,

    proxy:{
        type: "direct",
        writer: {
            writeAllFields: true
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read: "Sources.getSources"
        }
    },
    listeners: {
        datachanged: function(store, operation) {
            if (store.count() === 0 && this.fireEvent("WPAKD.controller.desktop.Authentication.isAuthenticated") === true) {
                Ext.raise({
                    title: i18n.gettext("Source permission required")
                    , msg: i18n.gettext("Your currently don\"t have access to any sources.") + "<br/>" + i18n.gettext("Please contact support and restart your browser")
                });

            }
        }
    }
});






