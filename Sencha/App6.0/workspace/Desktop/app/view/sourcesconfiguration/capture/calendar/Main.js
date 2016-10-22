/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.calendar.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.calendar.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcapturecalendarmain"

    , title: i18n.gettext("Capture Calendar")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , items: [{
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items : [
            {width: 150,	xtype: "sourcesconfigurationcapturecalendarcfgcroncalendar"                    }
            , {
                flex: 1
                , xtype: "fieldcontainer"
                , fieldLabel: i18n.gettext("If disabled, the system will capture 24/7")
                , labelSeparator: ""
                , labelWidth: 300
            }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable1"                    }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour1"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute1"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour1"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute1"           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable2"                    }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour2"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute2"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour2"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute2"           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable3"                    }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour3"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute3"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour3"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute3"           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable4"            }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour4"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute4"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour4"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute4"           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable5"                    }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour5"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute5"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour5"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute5"           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable6"                    }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour6"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute6"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour6"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute6"           }
        ]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,	xtype: "sourcesconfigurationcapturecalendarcfgcapturedayenable7"                    }
            , {width: 60,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("Between"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestarthour7"           }
            , {width: 10,	xtype: "label",                 html: ":", padding: 2                       }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcapturestartminute7"         }
            , {width: 30,	xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), 	labelSeparator: "", padding: 2  }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendhour7"             }
            , {width: 10,	xtype: "label",                 html: ":",padding: 2                        }
            , {width: 50,	xtype : "sourcesconfigurationcapturecalendarcfgcaptureendminute7"           }
        ]
    }]
});

