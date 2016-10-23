/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.xferreports.Search");
//</debug>
Ext.define("WPAKD.view.xferreports.Search", {
    extend: "Ext.form.field.Text"     
    , alias : "widget.xferreportssearch"

    , width: 200
    , hideLabel: true
    , emptyText: i18n.gettext("Filter by Thread UUID")        
});