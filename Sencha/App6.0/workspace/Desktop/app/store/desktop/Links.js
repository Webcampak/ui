/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.Links");
//</debug>
Ext.define("WPAKD.store.desktop.Links", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.Links",

    // autoLoad: true,
    autoSync: true,

    proxy: {
        type: "direct",
        extraParams: {
            WIDGET: "null"
            , SENCHA_APP: "null"
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api: {
            read: "DesktopLinks.getLinks"
        }
    }
});
