//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264720pcreate');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.videos.formats.CfgvideocodecH264720pcreate', {
    extend: 'Ext.form.field.Checkbox'
    , alias: 'widget.sourcesconfigurationvideosformatscfgvideocodecH264720pcreate'

    , fieldLabel: i18n.gettext('H. 264 (720p)')
    , uncheckedValue: 'no'
    , inputValue: 'yes'
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = 'yes'} else {newValue = 'no'}
            if (oldValue === true) {oldValue = 'yes'} else {oldValue = 'no'}
            this.fireEvent('WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue', newValue, oldValue, 'cfgvideocodecH264720pcreate');
        }
    }
});

