/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.sourcesconfigurationmain"

    , title: i18n.gettext("Sources Configuration")

    , width: 1200
    , height: 700

//    , stateful: true
//    , stateId: "sourcesconfigurationmain"

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf013
    , layout: {
        type:"hbox"
        , pack: "start"
        , align: "stretch"
    }
    , items: [{
        xtype: "sourcesconfigurationsourceslist"
        , width: 300
        , title: i18n.gettext("Available Sources")
    }, {
        xtype: "sourcesconfigurationsourcesconfiguration"
        , flex: 1
    }]
});

