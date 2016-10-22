/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.skeleton.card.Main");
//</debug>
Ext.define("WPAKT.view.core.skeleton.card.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.coreskeletoncardmain"

    , flex: 1
    , reference: "mainCardPanel"
    , cls: "sencha-dash-right-main-container"
    , itemId: "contentPanel"
    , layout: {
        type: "card"
        , anchor: "100%"
    }
});

