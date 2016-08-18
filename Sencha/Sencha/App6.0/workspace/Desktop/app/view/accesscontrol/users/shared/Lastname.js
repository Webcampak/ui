//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.shared.Lastname');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Lastname", {
    extend: 'Ext.form.field.Text',

    alias : 'widget.accesscontroluserssharedlastname',

    fieldLabel: i18n.gettext('Lastname'),
    allowBlank: false,
    maxLength: 25,
    minLength: 3
});