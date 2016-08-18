//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.bottom.ConnectionButton');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.ConnectionButton", {
    extend: 'Ext.button.Button'
    , alias : 'widget.desktoptoolbarbottomconnectionbutton'

    , glyph:0xf0c1
    , style: 'font-family:FontAwesome'
    , disabled: false
    , hidden: true
});