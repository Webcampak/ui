//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.devices.Lsusb');
//</debug>
Ext.define('WPAKD.view.devices.Lsusb', {
    extend: 'Ext.form.field.TextArea'
    , alias : 'widget.deviceslsusb'

    , style: 'margin:0'
    , readOnly: true
});

