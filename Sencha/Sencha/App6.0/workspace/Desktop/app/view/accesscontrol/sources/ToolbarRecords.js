//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.sources.ToolbarRecords');
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.ToolbarRecords", {
    extend: 'Ext.toolbar.TextItem',
     
    alias : 'widget.accesscontrolsourcestoolbarrecords',
    text: i18n.gettext('Empty')
});