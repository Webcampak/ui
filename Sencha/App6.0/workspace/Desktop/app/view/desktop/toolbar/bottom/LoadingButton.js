/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.LoadingButton");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.LoadingButton", {
    extend: "Ext.button.Button"
    , alias : "widget.desktoptoolbarbottomloadingbutton"

/*
    config: {
        glyph:0xf1d8 // fa-paper-plane
        , style: "font-family:FontAwesome"
    },
*/
    , glyph:0xf1d8 // fa-paper-plane
    , style: "font-family:FontAwesome"
    , disabled: false
    , hidden: false

//    iconCls: "icon-zoom_png"
});