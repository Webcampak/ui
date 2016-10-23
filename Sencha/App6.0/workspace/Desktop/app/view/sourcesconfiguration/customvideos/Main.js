/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.sourcesconfigurationcustomvideosmain"

    , title: i18n.gettext("Custom Vids.")
    , disabled: true
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "sourcesconfigurationcustomvideosformatsmain"         }
        , {xtype: "sourcesconfigurationcustomvideosadvancedmain"      }
        , {xtype: "sourcesconfigurationcustomvideosfiltermain"        }
        , {xtype: "sourcesconfigurationcustomvideoswatermarkmain"     }
        , {xtype: "sourcesconfigurationcustomvideospreprocessmain"    }
        , {xtype: "sourcesconfigurationcustomvideosaudiomain"         }
        , {xtype: "sourcesconfigurationcustomvideoscreatemain"        }
    ]
});

