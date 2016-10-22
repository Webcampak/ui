/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.devices.GphotoCapabilities");
//</debug>
Ext.define("WPAKD.view.devices.GphotoCapabilities", {
    extend: "Ext.form.field.TextArea"
    , alias : "widget.devicesgphotocapabilities"

    , style: "margin:0"
    , readOnly: true
});

