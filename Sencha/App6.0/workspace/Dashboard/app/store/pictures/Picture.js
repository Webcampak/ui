/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.pictures.Picture");
//</debug>
Ext.define("WPAKT.store.pictures.Picture", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.pictures.Picture",

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
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        },
        api:{
            read: "Pictures.getPicture"
        }
    }
});
