//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.pictures.display.EmailButton');
//</debug>
Ext.define('WPAKD.view.pictures.display.EmailButton', {
    extend: 'Ext.button.Button'
    , alias : 'widget.picturesdisplayemailbutton'

    , text: i18n.gettext('Email')
    , disabled: false
    , glyph:0xf003 // envelope
});
