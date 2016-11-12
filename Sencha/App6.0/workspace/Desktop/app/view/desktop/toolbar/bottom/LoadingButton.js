/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.LoadingButton");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.LoadingButton", {
    extend: "Ext.button.Button"
    , alias : "widget.desktoptoolbarbottomloadingbutton"

    , glyph: 0xf1c0 // fa-paper-plane
    , disabled: false
    , hidden: false
});