/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.Name");
//</debug>
Ext.define("WPAKD.view.syncreports.details.Name", {
    extend: "Ext.form.field.Display"
    , alias: "widget.syncreportsdetailsname"
    
    , fieldLabel: i18n.gettext("Report Name")
});