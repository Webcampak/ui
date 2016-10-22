/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.Alerts");
//</debug>
Ext.define("WPAKD.view.alerts.Alerts", {
    extend: "Ext.tab.Panel"
    , alias: "widget.alertsalerts"

    , title: i18n.gettext("<- Please select a source to access alerts")

    , tools:[
        {xtype: "alertsbuttonrefresh"}
    ]
    
    , layout: {type:"vbox", pack: "start", align: "stretch"}
    , items: [{
            xtype: "panel"
            , title: i18n.gettext("Configuration")
            , height: 50
            , items: [
                {xtype: "alertscontrolssourceslist"}
                , {xtype: "alertscontrolsweekdays"}
            ]
        }, {
            xtype: "panel"
            , title: i18n.gettext("Calendar")
            , height: 400
            , items: [
                {xtype: "alertsschedule"}
            ]
        }, {
            xtype: "container"
            , flex: 1
        }
    ]
});

