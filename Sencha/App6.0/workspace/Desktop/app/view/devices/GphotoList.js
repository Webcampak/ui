/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.devices.GphotoList");
//</debug>
Ext.define("WPAKD.view.devices.GphotoList", {
    extend: "Ext.form.field.TextArea"
    , alias : "widget.devicesgphotolist"

    , style: "margin:0"
    , readOnly: true

});

