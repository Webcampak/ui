//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.shared.Group');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Group", {
    extend: 'Ext.form.ComboBox',

    alias : 'widget.accesscontroluserssharedgroup',

    store: 'accesscontrol.groups.Groups',

    fieldLabel: i18n.gettext('Group'),

    valueField: 'GRO_ID',
    displayField: 'NAME',
    queryMode: 'local'
});