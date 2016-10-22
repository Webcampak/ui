/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.videos.DaysList");
//</debug>
Ext.define("WPAKT.store.videos.DaysList", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.videos.DaysList",

    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            SOURCEID: "0"
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
            read: "Videos.getDaysList"
        }
    }
});
