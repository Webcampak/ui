/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.Main");
//</debug>
Ext.define("WPAKD.view.syncreports.details.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.syncreportsdetailsmain"

    , hidden: true
    , layout: {type:"vbox", pack: "start", align: "stretch"}
    , items: [{
        xtype: "container"
        , layout: {type:"hbox", pack: "start", align: "stretch"}
        , height: 90
        , items: [{
            xtype: "fieldset"
            , title: i18n.gettext("Source")
            , flex: 2
            , margin: "2 10 2 10"
            , layout: {type:"vbox", pack: "start", align: "stretch"}
            , defaults: {labelWidth: 100}
            , items: [
                {xtype: "syncreportsdetailssourcesourceslist"}
                , {xtype: "syncreportsdetailssourcetype"}
                //, {xtype: "syncreportsdetailssourceftpserverslist"}
            ]
        }, {
            xtype: "fieldset"
            , title: i18n.gettext("Destination")
            , flex: 2
            , margin: "2 10 2 10"
            , layout: {type:"vbox", pack: "start", align: "stretch"}
            , defaults: {labelWidth: 100}
            , items: [
                {xtype: "syncreportsdetailsdestinationsourceslist"}
                , {xtype: "syncreportsdetailsdestinationtype"}
                //, {xtype: "syncreportsdetailsdestinationftpserverslist"}
            ]
        }, {
            xtype: "fieldset"
            , title: i18n.gettext("Actions")
            , flex: 1
            , margin: "2 10 2 10"
            , layout: {type:"vbox", pack: "start", align: "stretch"}
            , defaults: {labelWidth: 100}
            , items: [
                {xtype: "syncreportsdetailsbuttonxfer"}
            ]
        }]
    }, {
        xtype: "container"
        , layout: {type:"hbox", pack: "start", align: "stretch"}
        , flex: 1
        , defaults: {margin: "5 5 5 10"}
        , items: [{
            xtype: "fieldset"
            , flex: 1
            , title: i18n.gettext("Results")
            , items: [
                {xtype: "syncreportsdetailssummarysummarylist"}
            ]            
        }]
    }]   
    , dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        items: [
            {xtype: "syncreportsdetailsname"}
            , "->"
            , {xtype: "syncreportsdetailsbuttonclose"}
        ]        
    }]    
});