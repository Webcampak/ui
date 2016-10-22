/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.RefreshButton");
//</debug>
Ext.define("WPAKD.view.pictures.display.RefreshButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturesdisplayrefreshbutton"

    , disabled: false
    , glyph:0xf021 // fast-forward
});
