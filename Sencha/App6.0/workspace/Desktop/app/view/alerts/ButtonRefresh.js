/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.ButtonRefresh");
//</debug>
Ext.define("WPAKD.view.alerts.ButtonRefresh", {
    extend: "Ext.button.Button"
    , alias : "widget.alertsbuttonrefresh"

    , text: i18n.gettext("Reload Calendar")
    , glyph:0xf021
});
