/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.Main");
//</debug>
Ext.define("WPAKD.view.syncreports.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.syncreportsmain"

    , title: i18n.gettext("FTP Sync Reports")

    , width: 1100
    , height: 800

    , stateful: true
    , stateId: "syncreportsmain"

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf03a
    , layout: {
        type:"vbox"
        , pack: "start"
        , align: "stretch"
    }
    , items: [{
        xtype: "syncreportsreportslist"
        , flex: 1
        , dockedItems: [{
            xtype: "toolbar",
            dock: "bottom",
            items: ["->", {
                xtype: "syncreportstoolbarrecords"
            }]        
        }]        
    }, {
        xtype: "syncreportsdetailsmain"
        , height: 420
    }]
    , dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        items: [
            {xtype: "syncreportsbuttonadd"}
            , {xtype: "syncreportsbuttondelete"}
            , {xtype: "syncreportsbuttonrerun"}
            , "->"
            , {xtype: "syncreportssearch"}
            , "-"
            , {xtype: "syncreportsbuttonrefresh"}
        ]      
    }]    
});
