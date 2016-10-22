/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.ipcamera.Cfgsourcecamiptemplate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.ipcamera.Cfgsourcecamiptemplate", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationcaptureipcameracfgsourcecamiptemplate"

    , mode: "local"
    , value: "rec"
    , triggerAction: "all"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , queryMode: "local"
    , fieldLabel: i18n.gettext("Define picture date based upon")
    , store: Ext.create("Ext.data.Store", {
                fields : ["name", "value"]
                , data   : [
                    {name : i18n.gettext("Date when file was save into /tmp/ directory"),       value: "filedate"       },
                    {name : i18n.gettext("Picture filename (Webcampak) - (YYYYMMDDHHMMSS.jpg)"),value: "webcampak"      },
                    //{name : i18n.gettext("Canon IP Camera - (YYYYMMDDHHMMSSxxx.jpg)"),          value: "canonipcamera"  },
                    {name : i18n.gettext("EXIF Metadata (date)"),                               value: "exif"           }
                ]
            })
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcecamiptemplate");
        }
    }
});

