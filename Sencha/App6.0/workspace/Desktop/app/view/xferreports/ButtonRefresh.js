/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.xferreports.ButtonRefresh");
//</debug>
Ext.define("WPAKD.view.xferreports.ButtonRefresh", {
    extend: "Ext.button.Button"
    , alias : "widget.xferreportsbuttonrefresh"

    , glyph:0xf021 // fa-refresh

});
