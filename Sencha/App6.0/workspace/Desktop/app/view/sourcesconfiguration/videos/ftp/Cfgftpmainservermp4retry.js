//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.ftp.Cfgftpmainservermp4retry');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.ftp.Cfgftpmainservermp4retry', {
    extend: 'Ext.form.field.Number'
    , alias: 'widget.sourcesconfigurationvideosftpcfgftpmainservermp4retry'

    , fieldLabel: i18n.gettext('Retries')
    , allowBlank: false
    , minValue: 0
    , maxValue: 4
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgftpmainservermp4retry')
        }
    }
});
