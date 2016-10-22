/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.NextButton");
//</debug>
Ext.define("WPAKD.view.pictures.display.NextButton", {
    extend: "Ext.button.Button"
    , alias : "widget.picturesdisplaynextbutton"

    , disabled: false
    , glyph:0xf051 // step-forward
});
