/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextgravity");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.text.Cfgvideopreimgtextgravity", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.sourcesconfigurationpostprodtextcfgvideopreimgtextgravity"

    , fieldLabel: i18n.gettext("Text location")
    , mode: "local"
    , value: "0"
    , triggerAction: "all"
    , queryMode: "local"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , store: Ext.create("Ext.data.Store", {
        fields : ["name", "value"]
        , data   : [
            {name : i18n.gettext("South West"),     value: "southwest"  }
            , {name : i18n.gettext("South"),        value: "south"      }
            , {name : i18n.gettext("South East"),   value: "southeast"  }
            , {name : i18n.gettext("East"),         value: "east"       }
            , {name : i18n.gettext("North East"),   value: "northeast"  }
            , {name : i18n.gettext("North"),        value: "north"      }
            , {name : i18n.gettext("North West"),   value: "northwest"  }
            , {name : i18n.gettext("West"),         value: "west"       }
        ]
    })
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue", newValue, oldValue, "cfgvideopreimgtextgravity");
        }
    }
});

