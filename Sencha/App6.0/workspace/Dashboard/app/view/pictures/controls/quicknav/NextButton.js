//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.quicknav.NextButton');
//</debug>
Ext.define('WPAKT.view.pictures.controls.quicknav.NextButton', {
    extend: 'Ext.button.Button'
    , alias : 'widget.picturescontrolsquicknavnextbutton'

    , flex: 1
    , scale: 'medium'
    , iconAlign: 'right'
    , iconCls: 'x-fa fa-step-forward'
    , ui: 'soft-green'
    , text: i18n.gettext('Next')    
});