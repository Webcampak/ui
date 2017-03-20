/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.formats.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.formats.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcustomvideosformatsmain"

    , title: i18n.gettext("Custom video creation")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items   : [{
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {width: 200,   labelWidth: 120, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreate"                                        }
            , {flex: 1,    labelWidth: 300, xtype: "fieldcontainer", fieldLabel: i18n.gettext("HD Format, Highest quality."), labelSeparator: "",	padding: 2  }
            , {width: 160, labelWidth: 100, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreateflv"                                     }
            , {width: 160, labelWidth: 80,  xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pfps"                                           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch",	pack: "start"}
        , items   : [
            {width: 200,   labelWidth: 120, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreate"                                         }
            , {flex: 1,    labelWidth: 300, xtype: "fieldcontainer", fieldLabel: i18n.gettext("HD Format, High quality."), labelSeparator: "",    padding: 2    }
            , {width: 160, labelWidth: 100, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreateflv"                                      }
            , {width: 160, labelWidth: 80,  xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pfps"                                            }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch",	pack: "start"}
        , items   : [
            {width: 200,   labelWidth: 120, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreate"                                         }
            , {flex: 1,    labelWidth: 300, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Similar to DVD."), labelSeparator: "",             padding: 2    }
            , {width: 160, labelWidth: 100, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreateflv"                                      }
            , {width: 160, labelWidth: 80,  xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pfps"                                            }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch",	pack: "start"}
        , items   : [
            {width: 200,   labelWidth: 120, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreate"                                       }
            , {flex: 1,    labelWidth: 300, xtype: "fieldcontainer", fieldLabel: i18n.gettext("H.264, custom settings."), labelSeparator: "",        padding: 2 }
            , {width: 160, labelWidth: 100, xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreateflv"                                    }
            , {width: 160, labelWidth: 80,  xtype: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customfps"                                          }
        ]
    }]
});

