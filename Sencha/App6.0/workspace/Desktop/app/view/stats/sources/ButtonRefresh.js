/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.sources.ButtonRefresh");
//</debug>
Ext.define("WPAKD.view.stats.sources.ButtonRefresh", {
    extend: "Ext.button.Button"
    , alias : "widget.statssourcesbuttonrefresh"

    , text: i18n.gettext("Refresh")
    , disabled: false
    , glyph:0xf021 // refresh
});
