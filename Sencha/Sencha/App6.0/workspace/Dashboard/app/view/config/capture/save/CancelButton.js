//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.save.CancelButton');
//</debug>
Ext.define('WPAKT.view.config.capture.save.CancelButton', {
    extend: 'Ext.button.Button'
    , alias: 'widget.configcapturesavecancelbutton'

    , scale: 'medium'
    , iconAlign: 'left'
    , iconCls: 'x-fa fa-envelope'
    , ui: 'soft-green'
    , text: i18n.gettext('Cancel')    
});