//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH2641080pcreate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH2641080pcreate', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationvideosformatscfgvideocodecH2641080pcreate'

    , fieldLabel: i18n.gettext('H. 264 (1080p)')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideocodecH2641080pcreate');
        }
    }
});
