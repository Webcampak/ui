/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.reportadd.Main");
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.syncreportsreportaddmain"

    , title: i18n.gettext("Create a Report")
    , width: 800

    , modal: true
    , layout: {type:"vbox", pack: "start", align: "stretch"}
    , items: [
        {xtype: "syncreportsreportaddname", labelWidth: 100, margin: "5 5 5 10"}
        , {
            xtype: "container"
            , layout: {type:"hbox", pack: "start", align: "stretch"}
            , items: [{
                xtype: "fieldset"
                , title: i18n.gettext("Source")
                , width: 370
                , margin: "10 10 10 10"
                , layout: {type:"vbox", pack: "start", align: "stretch"}
                , defaults: {labelWidth: 100, margin: "5 5 5 10"}
                , items: [
                    {xtype: "syncreportsreportaddsourcesourceslist"}
                    , {xtype: "syncreportsreportaddsourcetype"}
                    , {xtype: "syncreportsreportaddsourceftpserverslist"}
                ]
            }, {
                xtype: "fieldset"
                , title: i18n.gettext("Destination")
                , width: 370                
                , margin: "10 10 10 10"
                , layout: {type:"vbox", pack: "start", align: "stretch"}
                , defaults: {labelWidth: 100, margin: "5 5 5 10"}
                , items: [
                    {xtype: "syncreportsreportadddestinationsourceslist"}
                    , {xtype: "syncreportsreportadddestinationtype"}
                    , {xtype: "syncreportsreportadddestinationftpserverslist"}
                ]
            }]
        }]
    , dockedItems: [{
        xtype: "toolbar",
        dock: "bottom",
        items: [
            {xtype: "syncreportsreportaddbuttoncancel"}
            , "->"
            , {xtype: "syncreportsreportaddbuttonsave"}
        ]
    }]    
});