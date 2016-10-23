/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.videos.Main");
//</debug>
Ext.define("WPAKD.view.logs.videos.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.logsvideosmain"

    , title: i18n.gettext("Videos")
    , disabled: false
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "logsvideosvideoslogs"}
    ]
});

