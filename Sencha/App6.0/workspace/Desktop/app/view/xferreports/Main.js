/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.xferreports.Main");
//</debug>
Ext.define("WPAKD.view.xferreports.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.xferreportsmain"

    , title: i18n.gettext("FTP Xfer Reports")

    , width: 1100
    , height: 600

    , stateful: true
    , stateId: "xferreportsmain"

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
        xtype: "xferreportsreportslist"
        , flex: 1
        , dockedItems: [{
            xtype: "toolbar",
            dock: "bottom",
            items: ["->", {
                xtype: "xferreportstoolbarrecords"
            }]        
        }]        
    }]
    , dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        items: [          
            "->"
            , {xtype: "xferreportssearch"}
            , "-"
            , {xtype: "xferreportsbuttonrefresh"}
        ]      
    }]    
});
