//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.shared.Username');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Username", {
    extend: 'Ext.form.field.Text',
     
    alias : 'widget.accesscontroluserssharedusername',
                  
    fieldLabel: i18n.gettext('Username'),
    allowBlank: false,
    vtype: 'username',
    maxLength: 25,
    minLength: 3
});