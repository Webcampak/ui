/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.DownloadButton");
//</debug>
Ext.define("WPAKD.view.pictures.display.DownloadButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturesdisplaydownloadbutton"

    , disabled: false
    , glyph:0xf019 // download
});
