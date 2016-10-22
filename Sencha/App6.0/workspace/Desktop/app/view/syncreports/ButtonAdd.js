/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.ButtonAdd");
//</debug>
Ext.define("WPAKD.view.syncreports.ButtonAdd", {
    extend: "Ext.button.Button"
    , alias : "widget.syncreportsbuttonadd"

    , text: i18n.gettext("Create")
    , glyph:0xf0fe // fa-plus-square
});
