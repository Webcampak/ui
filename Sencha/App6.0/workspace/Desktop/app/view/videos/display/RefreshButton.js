/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.videos.display.RefreshButton");
//</debug>
Ext.define("WPAKD.view.videos.display.RefreshButton", {
    extend: "Ext.button.Button"
    , alias : "widget.videosdisplayrefreshbutton"

    , disabled: false
    , glyph:0xf021 // fast-forward
});
