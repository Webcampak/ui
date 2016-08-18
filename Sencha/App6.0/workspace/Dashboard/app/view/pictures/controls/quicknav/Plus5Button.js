//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.quicknav.Plus5Button');
//</debug>
Ext.define('WPAKT.view.pictures.controls.quicknav.Plus5Button', {
    extend: 'Ext.button.Button'
    , alias : 'widget.picturescontrolsquicknavplus5button'

    , flex: 1                    
    , scale: 'medium'
    , iconAlign: 'right'
    , iconCls: 'x-fa fa-plus'
    , ui: 'soft-green'
    , text: i18n.gettext('5')     
});