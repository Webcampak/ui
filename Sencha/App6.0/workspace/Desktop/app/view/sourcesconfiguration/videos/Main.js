/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.sourcesconfigurationvideosmain"

    , title: i18n.gettext("Videos")
    , disabled: true
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "sourcesconfigurationvideosformatsmain"         }
        , {xtype: "sourcesconfigurationvideosadvancedmain"      }
        , {xtype: "sourcesconfigurationvideosfiltermain"        }
        , {xtype: "sourcesconfigurationvideoswatermarkmain"     }
        , {xtype: "sourcesconfigurationvideospreprocessmain"    }
        , {xtype: "sourcesconfigurationvideosaudiomain"         }
        , {xtype: "sourcesconfigurationvideosftpmain"           }
    ]
});

