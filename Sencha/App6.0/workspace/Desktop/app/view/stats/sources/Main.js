/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.sources.Main");
//</debug>
Ext.define("WPAKD.view.stats.sources.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.statssourcesmain"

    , title: i18n.gettext("Sources Statistics")

    , width: 900
    , height: 600

    , stateful: true
    , stateId: "statssourcesmain"

    , scroll: false
    , autoScroll: false
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf201

    , dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        items: [{
            xtype: "statssourcessourceslist"
            , width: 300
        }, "->", {
            xtype: "statssourcessourcename"
        }, "->", {
            xtype: "statssourcesbuttonrefresh"
        }]
    }]

    , layout: "fit"
    , items: [{
        layout: {type: "vbox", align : "stretch", pack  : "start"}
        , items: [{
            xtype: "statssourcespicturescount"
            , flex:1
        }, {
            xtype: "statssourcespicturessize"
            , flex:1
        }, {
            xtype: "statssourcesdiskusage"
            , flex:1
        }]
    }]
});

