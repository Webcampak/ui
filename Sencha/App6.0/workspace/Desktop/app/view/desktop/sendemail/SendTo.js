//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.sendemail.SendTo');
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.SendTo", {
    extend: 'Ext.form.field.Text',

    alias : 'widget.desktopsendemailsendto',

    fieldLabel: i18n.gettext('To:'),

    emptyText: i18n.gettext('Add one or more email addresses'),

    listeners: {
        specialkey: function(field, e){
            if (e.getKey() == e.ENTER) {
                // Some action
            }
        }
    }
});