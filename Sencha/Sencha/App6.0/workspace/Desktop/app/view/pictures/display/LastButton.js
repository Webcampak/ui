//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.pictures.display.LastButton');
//</debug>
Ext.define('WPAKD.view.pictures.display.LastButton', {
    extend: 'Ext.button.Button'
    , alias : 'widget.picturesdisplaylastbutton'

    , disabled: false
    , glyph:0xf050 // fast-forward
});
