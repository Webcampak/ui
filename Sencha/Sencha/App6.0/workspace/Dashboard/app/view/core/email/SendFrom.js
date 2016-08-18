//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.email.SendFrom');
//</debug>
Ext.define("WPAKT.view.core.email.SendFrom", {
    extend: 'Ext.form.field.Text'
    , alias : 'widget.coreemailsendfrom'

    , fieldLabel: i18n.gettext('From:')
    , disabled: true
});