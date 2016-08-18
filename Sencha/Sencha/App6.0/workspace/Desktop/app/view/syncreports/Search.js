//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.Search');
//</debug>
Ext.define("WPAKD.view.syncreports.Search", {
    extend: 'Ext.form.field.Text'     
    , alias : 'widget.syncreportssearch'

    , width: 200
    , hideLabel: true
    , emptyText: i18n.gettext('Filter by Report Name or Source Name')        
});