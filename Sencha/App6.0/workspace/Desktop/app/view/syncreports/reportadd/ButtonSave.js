/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.reportadd.ButtonSave");
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.ButtonSave", {
    extend: "Ext.button.Button"
    , alias : "widget.syncreportsreportaddbuttonsave"

    , text: i18n.gettext("Save")
    , glyph:0xf0c7 // fa-plus-square
});
