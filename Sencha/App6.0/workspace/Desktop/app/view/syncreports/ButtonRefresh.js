/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.ButtonRefresh");
//</debug>
Ext.define("WPAKD.view.syncreports.ButtonRefresh", {
    extend: "Ext.button.Button"
    , alias : "widget.syncreportsbuttonrefresh"

    , glyph:0xf021 // fa-refresh

});
