/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.pictures.HoursList");
//</debug>
Ext.define("WPAKD.store.pictures.HoursList", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.pictures.HoursList",

    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            SOURCEID: "0"
            , SELECTEDDAY: null
        },
        writer: {
            writeAllFields:true
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read: "Pictures.getHoursList"
        }
    }
});
