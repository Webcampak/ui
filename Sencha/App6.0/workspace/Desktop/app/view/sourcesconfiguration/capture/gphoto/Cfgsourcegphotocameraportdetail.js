//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotocameraportdetail');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotocameraportdetail', {
    extend: 'Ext.form.field.ComboBox'
    , alias: 'widget.sourcesconfigurationcapturegphotocfgsourcegphotocameraportdetail'

    , fieldLabel: i18n.gettext('Camera Port')
    , store: 'shared.UsbPorts'

    , valueField: 'ID'
    //, displayField: 'NAME'
    , queryMode: 'remote'
    
    , tpl: Ext.create('Ext.XTemplate'
            , '<tpl for=".">'
            , '<div class="x-boundlist-item">'
            , '{NAME} ({ID})'
            , '</div>'
            , '</tpl>'
        )
    , displayTpl: Ext.create('Ext.XTemplate'
            , '<tpl for=".">'
            , '{NAME} ({ID})'
            , '</tpl>'
        )
    
    , listeners: {
        // delete the previous query in the beforequery event or set
        // combo.lastQuery = null (this will reload the store the next time it expands)
        beforequery: function(qe){
            delete qe.combo.lastQuery;
        }
        , change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue', newValue, oldValue, 'cfgsourcegphotocameraportdetail')
        }
    }
});

