/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.logs.customvideos.Main");
//</debug>
Ext.define("WPAKD.view.logs.customvideos.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.logscustomvideosmain"

    , title: i18n.gettext("Custom Vids.")
    , disabled: false
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "logscustomvideoscustomvideoslogs"         }
    ]
});

