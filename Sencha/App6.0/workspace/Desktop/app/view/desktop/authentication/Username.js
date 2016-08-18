//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.authentication.Username');
//</debug>
Ext.define("WPAKD.view.desktop.authentication.Username", {
    extend: 'Ext.form.field.Text',
    alias : 'widget.desktopauthenticationusername',

    fieldLabel: i18n.gettext('Username:'),
    emptyText: i18n.gettext('Username'),
    allowBlank: false,
//    plugins: new Ext.ux.form.field.ClearButton({hideClearButtonWhenMouseOut: false}),

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
                this.fireEvent('WPAKD.controller.desktop.Authentication.doFormLogin');
            }
        }
    }
});