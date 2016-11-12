/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.ButtonSave");
//</debug>
Ext.define("WPAKD.view.alerts.ButtonSave", {
    extend: "Ext.button.Button"
    , alias : "widget.alertsbuttonsave"

    , text: i18n.gettext("Save Changes")
    , glyph:0xf0c7
});
