/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.videos.Main");
//</debug>
Ext.define("WPAKD.view.videos.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.videosmain"

    , title: i18n.gettext("Webcampak Videos")

    , width: 1000
    , height: 700

    , stateful: true
    , stateId: "videosmain"

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf03d // video-camera
    , layout: {type: "hbox", pack: "start", align: "stretch"}
    , dockedItems: [{
        xtype: "toolbar"
        , dock: "top"
        , items: [{
            xtype: "videossourceslist"
            , width: 335
        }, "->", {
            xtype: "videossourcename"
            , flex: 1
        }, "->", {
            xtype: "videosdisplayrefreshbutton"
        }]
    }]
    , defaults: {frame: true}
    , items: [{
        xtype: "videosselectionmain"
        , width: 250
    }, {
        xtype: "videosdisplaymain"
        , flex: 1
    }]
});

