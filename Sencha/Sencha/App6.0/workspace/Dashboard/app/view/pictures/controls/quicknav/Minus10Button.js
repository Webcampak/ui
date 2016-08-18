//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.quicknav.Minus10Button');
//</debug>
Ext.define('WPAKT.view.pictures.controls.quicknav.Minus10Button', {
    extend: 'Ext.button.Button'
    , alias : 'widget.picturescontrolsquicknavminus10button'

    , flex: 1
    , scale: 'medium'
    , iconAlign: 'left'
    , iconCls: 'x-fa fa-minus'
    , ui: 'soft-green'
    , text: i18n.gettext('10')   
});