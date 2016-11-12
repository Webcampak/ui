/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.videos.video.Main");
//</debug>
Ext.define("WPAKT.view.videos.video.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.videosvideomain"

    , cls: "dashboard-main-chart shadow-panel"

    , bodyPadding: 15

    , title: ""
    , layout: {type: "vbox",align: "stretch"} 
    , items: [
        {xtype: "videosvideovideo", flex: 1}
        , {xtype: "container", height: 5}
        , {xtype: "videoscontrolsvideoslist"}
    ]
});
