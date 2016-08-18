//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.groups.ToolbarRecords');
//</debug>
Ext.define("WPAKD.view.accesscontrol.groups.ToolbarRecords", {
    extend: 'Ext.toolbar.TextItem',
     
    alias : 'widget.accesscontrolgroupstoolbarrecords',
    text: i18n.gettext('Empty')
});