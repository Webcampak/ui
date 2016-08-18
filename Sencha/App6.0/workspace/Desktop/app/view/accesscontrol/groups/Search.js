//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.groups.Search');
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.Search", {
    extend: 'Ext.form.field.Text',
     
    alias : 'widget.accesscontrolgroupssearch',

    width: 200,
    hideLabel: true,
    emptyText: i18n.gettext('Filter by Name')        
});