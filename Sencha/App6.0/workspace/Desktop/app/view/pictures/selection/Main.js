/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.selection.Main");
//</debug>
Ext.define("WPAKD.view.pictures.selection.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.picturesselectionmain"

    , layout: {type: "vbox", align: "stretch"}
    , defaults: {frame: true}
    , items: [{
        xtype: "container"
        , layout: {type: "vbox", pack: "start", align: "center"}
        , height: 210 //flex: 1,
        , items: [{
            xtype: "picturesselectiondayslist"
        }]
    }, {
        xtype: "container"
        , layout: {type: "vbox", pack: "start", align: "center"}
        , items: [{
            xtype: "container"
            , html: i18n.gettext("Select a picture below")
        }]
    }, {
        xtype: "container"
        , layout: {type: "vbox", pack: "start", align: "center"}
        , flex: 1
        , items: [{
                xtype: "picturesselectionhourslist"
        }]
    }]
});

