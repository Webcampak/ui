/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.Main");
//</debug>
Ext.define("WPAKD.view.logs.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.logsmain"

    , title: i18n.gettext("Sources Logs")

    , width: 1000
    , height: 600

    , stateful: true
    , stateId: "logsmain"

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf03a
    , layout: {
        type:"hbox"
        , pack: "start"
        , align: "stretch"
    }
    , items: [{
        xtype: "logssourceslist"
        , width: 300
        , title: i18n.gettext("Available Sources")
    }, {
        xtype: "logslogs"
        , flex: 1
    }]
});

