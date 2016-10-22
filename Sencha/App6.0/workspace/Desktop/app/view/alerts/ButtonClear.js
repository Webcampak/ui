/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.ButtonClear");
//</debug>
Ext.define("WPAKD.view.alerts.ButtonClear", {
    extend: "Ext.button.Button"
    , alias : "widget.alertsbuttonclear"

    , text: i18n.gettext("Clear Calendar")
    , glyph:0xf014
});
