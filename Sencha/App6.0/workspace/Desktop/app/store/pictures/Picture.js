/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.pictures.Picture");
//</debug>
Ext.define("WPAKD.store.pictures.Picture", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.pictures.Picture",

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
