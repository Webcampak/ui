/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.EmailBody");
//</debug>
Ext.define("WPAKT.view.core.email.EmailBody", {
    extend: "Ext.form.field.HtmlEditor"
    , alias : "widget.coreemailemailbody"

    , hideLabel: true
    , emptyText: i18n.gettext("Email Body")
    , allowBlank: false
});