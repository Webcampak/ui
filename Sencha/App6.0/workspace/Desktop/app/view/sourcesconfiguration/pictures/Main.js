/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.sourcesconfigurationpicturesmain"

    , title: i18n.gettext("Pictures")
    , disabled: true
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "sourcesconfigurationpicturesrotatemain"        }
        , {xtype: "sourcesconfigurationpicturescropmain"        }
        , {xtype: "sourcesconfigurationpictureswatermarkmain"   }
        , {xtype: "sourcesconfigurationpicturestextmain"        }
        , {xtype: "sourcesconfigurationpictureshotlinkmain"     }
        , {xtype: "sourcesconfigurationpicturesarchivesmain"    }
        , {xtype: "sourcesconfigurationpicturesftpmain"         }
        , {xtype: "sourcesconfigurationpicturescopymain"        }
    ]
});

