/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.Main");
//</debug>
Ext.define("WPAKD.view.alerts.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.alertsmain"

    , title: i18n.gettext("Sources alerts")

    , width: 1300
    , height: 700

    , stateful: true
    , stateId: "alertsmain"

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf0a2
    
    , layout: {type:"vbox", pack: "start", align: "stretch"}
    , dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        items: [
            {xtype: "alertscontrolssourceslist"}
            ,"->"
            , {xtype: "alertsbuttonclear"       }
            , {xtype: "alertsbuttonrefresh"     }
            , {xtype: "alertscontrolsweekdays"  }
        ]
    }, {
        xtype: "toolbar",
        dock: "bottom",
        items: [
            "->"
            , {xtype: "alertsbuttonsave"}
        ]        
    }]      
    , items: [{
        xtype: "panel"
        , height: 140
        , layout: {type:"hbox", pack: "start", align: "stretch"}
        , items: [{
            xtype: "container"
            , width: 10                    
        }, {                    
            xtype: "fieldset"
            , flex: 1
            , title: i18n.gettext("Help")
            , items: [{xtype: "alertscontrolsinstructionsmain"}]
        }, {
            xtype: "container"
            , width: 10                    
        }, {                    
            xtype: "fieldset"
            , title: i18n.gettext("Edit Calendar")
            , flex: 1
            , items: [{xtype: "alertscontrolseditmain"}]
        }, {  
            xtype: "container"
            , width: 10                    
        }]
    }, {
        xtype: "alertsschedule"
    }]    
});



