//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpsecondserverraw');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftpsecondserverraw', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationpicturesftpcfgftpsecondserverraw'

    , fieldLabel: i18n.gettext('RAW')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgftpsecondserverraw');
        }
    }
});

