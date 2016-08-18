//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftphotlinkserverretry');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.pictures.ftp.Cfgftphotlinkserverretry', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationpicturesftpcfgftphotlinkserverretry'

    , fieldLabel: i18n.gettext('Number of retries')
    , allowBlank: false
    , minValue:0
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue', newValue, oldValue, 'cfgftphotlinkserverretry')
        }
    }
});
