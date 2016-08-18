//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.shared.Password');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.shared.Password", {
    extend: 'Ext.form.field.Text',
     
    alias : 'widget.accesscontroluserssharedpassword',
                  
    fieldLabel: i18n.gettext('Password'),
    maxLength: 25
});