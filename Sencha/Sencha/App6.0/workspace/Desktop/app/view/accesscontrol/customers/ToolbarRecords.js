//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.customers.ToolbarRecords');
//</debug>
Ext.define("WPAKD.view.accesscontrol.customers.ToolbarRecords", {
    extend: 'Ext.toolbar.TextItem',
     
    alias : 'widget.accesscontrolcustomerstoolbarrecords',
    text: i18n.gettext('Empty')
});