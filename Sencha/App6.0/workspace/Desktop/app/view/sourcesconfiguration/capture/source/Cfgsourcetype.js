//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Cfgsourcetype');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.capture.source.Cfgsourcetype', {
    extend: 'Ext.form.field.ComboBox'
    , alias: 'widget.sourcesconfigurationcapturesourcecfgsourcetype'

    , fieldLabel: i18n.gettext('Source Type')
    , flex: 1
    , mode: 'local'
    , value: 'gphoto'
    , triggerAction: 'all'
    , queryMode: 'local'
    , forceSelection: true
    , editable: false
    , displayField: 'name'
    , valueField: 'value'
    , store: Ext.create('Ext.data.Store', {
            fields : ['name', 'value']
            , data : [
                {name : i18n.gettext('Compact or DSLR USB Camera (Gphoto2 PTP mode)'),  value: 'gphoto'         }
                , {name : i18n.gettext('Webcampak Source'),                             value: 'wpak'           }
//                , {name : i18n.gettext('USB Webcam'),                                     value: 'webcam' }
                , {name : i18n.gettext('IP Camera (FTP)'),                              value: 'ipcam'          }
                , {name : i18n.gettext('Internet Picture (HTTP ou FTP)'),               value: 'webfile'        }
                , {name : i18n.gettext('Video Streaming (RTSP)'),                       value: 'rtsp'           }
                , {name : i18n.gettext('Sensor (Phidget)'),                             value: 'sensor'         }
                , {name : i18n.gettext('Test Picture'),                                 value: 'testpicture'    }
            ]
        })

    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent('WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue', newValue, oldValue, 'cfgsourcetype')
        }
    }
});

