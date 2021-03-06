/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.advanced.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.advanced.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationvideosadvancedmain"

    , title: i18n.gettext("Advanced video settings")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , items: [{
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , defaults: {padding: 2}
        , items   : [
            {flex: 1,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("1080p:"), labelSeparator: ""     }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Bitrate:"), labelSeparator: "" }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pbitrate"          }
            , {width: 40, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Size:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pwidth"            }
            , {width: 10, xtype: "label", html: "x"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pheight"           }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Crop:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropwidth"        }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropheight"       }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropx"            }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropy"            }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , defaults: {padding: 2}
        , items   : [
            {flex: 1,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("720p:"), labelSeparator: ""      }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Bitrate:"), labelSeparator: "" }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pbitrate"           }
            , {width: 40, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Size:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pwidth"             }
            , {width: 10, xtype: "label", html: "x"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pheight"            }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Crop:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropwidth"         }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropheight"        }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropx"             }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropy"             }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , defaults: {padding: 2}
        , items   : [
            {flex: 1,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("480p:"), labelSeparator: ""      }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Bitrate:"), labelSeparator: "" }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pbitrate"           }
            , {width: 40, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Size:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pwidth"             }
            , {width: 10, xtype: "label", html: "x"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pheight"            }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Crop:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropwidth"         }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropheight"        }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropx"             }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropy"             }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , defaults: {padding: 2}
        , items   : [
            {flex: 1,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("Custom:"), labelSeparator: ""    }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Bitrate:"), labelSeparator: "" }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264custombitrate"         }
            , {width: 40, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Size:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264customwidth"           }
            , {width: 10, xtype: "label", html: "x"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264customheight"          }
            , {width: 50, xtype: "fieldcontainer", fieldLabel: i18n.gettext("Crop:"), labelSeparator: ""    }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264customcropwidth"       }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264customcropheight"      }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264customcropx"           }
            , {width: 10, xtype: "label", html: ":"                                                        }
            , {width: 75, xtype: "sourcesconfigurationvideosadvancedcfgvideocodecH264customcropy"           }
        ]
    }]
});

