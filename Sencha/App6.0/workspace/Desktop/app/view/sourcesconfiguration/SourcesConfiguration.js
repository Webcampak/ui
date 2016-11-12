/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.SourcesConfiguration");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.SourcesConfiguration", {
    extend: "Ext.tab.Panel"
    , alias: "widget.sourcesconfigurationsourcesconfiguration"

    , title: i18n.gettext("<- Please select a source to begin configuration")

    //, activeTab: "sourcesconfigurationcapturemain"

    , items: [
        {xtype: "sourcesconfigurationcapturemain"           }
        , {xtype: "sourcesconfigurationpicturesmain"        }
        , {xtype: "sourcesconfigurationvideosmain"          }
        , {xtype: "sourcesconfigurationcustomvideosmain"    }
        , {xtype: "sourcesconfigurationpostprodmain"        }
        , {xtype: "sourcesconfigurationphidgetsmain"        }
        , {xtype: "sourcesconfigurationadvancedmain"        }
        , {xtype: "sourcesconfigurationftpmain"             }
    ]
    , dockedItems: [{
        xtype: "toolbar"
        , dock: "bottom"
        , items: [
            {xtype: "sourcesconfigurationbuttonsave"}
            , {xtype: "sourcesconfigurationbuttoncancel"}
            , "->"
            , {xtype: "sourcesconfigurationsourcesconfigurationchanges"}
        ]
    }]
});

