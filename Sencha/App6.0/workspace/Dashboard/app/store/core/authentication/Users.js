/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.core.authentication.Users");
//</debug>
Ext.define("WPAKT.store.core.authentication.Users", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.core.authentication.Users",

    autosync: true,

    proxy: {
        type: "memory"
    }
});
