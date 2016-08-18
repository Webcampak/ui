//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.quicknav.Minus5Button');
//</debug>
Ext.define('WPAKT.view.pictures.controls.quicknav.Minus5Button', {
    extend: 'Ext.button.Button'
    , alias : 'widget.picturescontrolsquicknavminus5button'

    , flex: 1
    , scale: 'medium'
    , iconAlign: 'left'
    , iconCls: 'x-fa fa-minus'
    , ui: 'soft-green'
    , text: i18n.gettext('5')      
});