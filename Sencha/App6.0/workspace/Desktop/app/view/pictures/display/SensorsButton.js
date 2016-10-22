/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.SensorsButton");
//</debug>
Ext.define("WPAKD.view.pictures.display.SensorsButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturesdisplaysensorsbutton"

    , text: i18n.gettext("Sensors")
    , disabled: false
    , glyph:0xf1fe // area-chart
});
