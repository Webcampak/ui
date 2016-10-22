/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.bottom.ExceptionButton");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.ExceptionButton", {
    extend: "Ext.button.Button"
    , alias : "widget.desktoptoolbarbottomexceptionbutton"

    , disabled: false
    , hidden: true
    , glyph:0xf06a // exclamation-circle
    , style: "font-family:FontAwesome"

//    iconCls: "icon-error_png"
});