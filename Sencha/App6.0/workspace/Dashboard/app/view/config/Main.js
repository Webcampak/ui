/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.Main");
//</debug>
Ext.define("WPAKT.view.config.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.configmain"

    , requires: [
        "Ext.ux.layout.ResponsiveColumn"
    ]

    , id: "dashboard"

    , layout: {
         type: "responsivecolumn",
         states: {
             small: 1300,
             medium: 1400,
             large: 0
         }
    }  
    
    , items: [{
        xtype: "configcapturesourcemain"
        , responsiveCls: "big-40 small-100"
    }, {
        xtype: "configcapturecalendarmain"
        , responsiveCls: "big-60 small-100"
    }, {
        xtype: "configcapturesavemain"
        , responsiveCls: "big-40 small-100"
    }]
});
