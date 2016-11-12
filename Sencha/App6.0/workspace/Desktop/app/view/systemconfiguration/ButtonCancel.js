/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.ButtonCancel");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.ButtonCancel", {
    extend: "Ext.button.Button"
    , alias : "widget.systemconfigurationbuttoncancel"

    , text: i18n.gettext("Cancel")
    , disabled: true
    , glyph:0xf00d // cancel
});
