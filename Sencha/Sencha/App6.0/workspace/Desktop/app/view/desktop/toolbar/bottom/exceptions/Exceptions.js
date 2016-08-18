//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.bottom.exceptions.Exceptions');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.exceptions.Exceptions", {
    extend: 'Ext.form.field.TextArea',

    alias : 'widget.desktoptoolbarbottomexceptionsexceptions',

    hideLabel: true,

    emptyText: i18n.gettext('Exception Message')
});