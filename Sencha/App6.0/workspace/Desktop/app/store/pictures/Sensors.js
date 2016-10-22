/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.pictures.Sensors");
//</debug>
Ext.define("WPAKD.store.pictures.Sensors", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.pictures.Sensors",

    autoSync: false,

    proxy:{
        type: "direct",
        extraParams: {
            SOURCEID: "0"
            , PICTUREDATE: null
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
            read: "Pictures.getSensors"
        }
    }
});
