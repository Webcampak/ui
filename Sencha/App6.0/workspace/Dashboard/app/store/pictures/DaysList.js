/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.pictures.DaysList");
//</debug>
Ext.define("WPAKT.store.pictures.DaysList", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.pictures.DaysList",

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
            read: "Pictures.getDaysList"
        }
    }
});
