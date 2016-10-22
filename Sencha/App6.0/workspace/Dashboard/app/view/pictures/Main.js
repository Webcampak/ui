/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.Main");
//</debug>
Ext.define("WPAKT.view.pictures.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.picturesmain"

    , requires: [
        "Ext.ux.layout.ResponsiveColumn"
    ]

    , id: "dashboard"

    , layout: "responsivecolumn"

    , items: [{
        xtype: "picturespicturemain"
        , responsiveCls: "big-70 small-100"         
    }, {
        xtype: "picturescontrolsdatemain"
        , responsiveCls: "big-30 small-50"      
    }, {
        xtype: "picturescontrolsdetailsmain"
        , responsiveCls: "big-30 small-50"        
    }]
});