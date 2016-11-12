/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.sourcesconfigurationpostprodmain"

    , title: i18n.gettext("Post-prod Vids.")
    , disabled: true
    , scrollable: "vertical"
    , bodyPadding:"0 18 0 0"
    , defaults: {margin: 10}
    , items: [
        {xtype: "sourcesconfigurationpostprodfiltermain"       }
        , {xtype: "sourcesconfigurationpostprodrotatemain"     }
        , {xtype: "sourcesconfigurationpostprodcropmain"       }
        , {xtype: "sourcesconfigurationpostprodtransitionmain" }
        , {xtype: "sourcesconfigurationpostprodresizemain"     }
        , {xtype: "sourcesconfigurationpostprodthumbnailmain"  }
        , {xtype: "sourcesconfigurationpostprodwatermarkmain"  }
        , {xtype: "sourcesconfigurationpostprodtextmain"       }
        , {xtype: "sourcesconfigurationpostprodcreatemain"     }
    ]
});

