/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.PreviousButton");
//</debug>
Ext.define("WPAKD.view.pictures.display.PreviousButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturesdisplaypreviousbutton"

    , disabled: false
    , glyph:0xf048 // step-backward
});
