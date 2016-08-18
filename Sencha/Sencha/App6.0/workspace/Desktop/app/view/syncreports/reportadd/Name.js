//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.syncreports.reportadd.Name');
//</debug>
Ext.define("WPAKD.view.syncreports.reportadd.Name", {
    extend: 'Ext.form.field.Text'
    , alias : 'widget.syncreportsreportaddname'
                  
    , fieldLabel: i18n.gettext('Report Name')
    , allowBlank: false
    , maxLength: 25
    , minLength: 3
});