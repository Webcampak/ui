/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.EmailSubject");
//</debug>
Ext.define("WPAKT.view.core.email.EmailSubject", {
    extend: "Ext.form.field.Text"
    , alias : "widget.coreemailemailsubject"

    , fieldLabel: i18n.gettext("Subject")
    , emptyText: i18n.gettext("Email Subject")
    , allowBlank: false
    , listeners: {
        specialkey: function(field, e){
            if (e.getKey() === e.ENTER) {
                // Some action
            }
        }
    }
});