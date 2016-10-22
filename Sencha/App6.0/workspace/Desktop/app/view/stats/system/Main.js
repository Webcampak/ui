/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.system.Main");
//</debug>
Ext.define("WPAKD.view.stats.system.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.statssystemmain"

    , title: i18n.gettext("System Statistics")

    , width: 900
    , height: 600

    , stateful: true
    , stateId: "statssystemmain"

    , scroll: false
    , autoScroll: false
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf1fe

    , dockedItems: [{
        xtype: "toolbar",
        dock: "top",
        items: [{
            xtype: "statssystemrange"
        }, "->", {
            xtype: "statssystembuttonrefresh"
        }]
    }]

    , layout: "fit"
    , items: [{
        layout: {type: "vbox", align : "stretch", pack  : "start"}
        , items: [{
            flex:1
            , layout: {type: "hbox", pack: "start", align: "stretch"}
            , items: [
                {xtype: "statssystembandwidth", flex:1}
                , {xtype: "statssystemdisk", flex:1}
            ]
        }, {
            flex:1
            , layout: {type: "hbox", pack: "start", align: "stretch"}
            , items: [
                {xtype: "statssystemmemory", flex:1}
                , {xtype: "statssystemcpu", flex:1}
            ]
        }]
    }]
});

