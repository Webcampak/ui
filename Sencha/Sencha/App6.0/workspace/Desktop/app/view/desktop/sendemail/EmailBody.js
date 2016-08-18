//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.sendemail.EmailBody');
//</debug>
Ext.define("WPAKD.view.desktop.sendemail.EmailBody", {
    extend: 'Ext.form.field.HtmlEditor',

    alias : 'widget.desktopsendemailemailbody',

//    fieldLabel: i18n.gettext('Notes'),
    hideLabel: true,
//    height: 60,

    emptyText: i18n.gettext('Email Body'),
    allowBlank: false
});