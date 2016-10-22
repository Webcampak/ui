/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.videos.display.Main");
//</debug>
Ext.define("WPAKD.view.videos.display.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.videosdisplaymain"

    , layout: {type: "vbox", pack: "start", align: "stretch"}
    , items: [{
        xtype: "videosdisplaycurrentvideoname"
    }, {
        xtype: "videosdisplayvideo"
    }, {
        xtype: "videosselectionvideoslist"
    }]
});
