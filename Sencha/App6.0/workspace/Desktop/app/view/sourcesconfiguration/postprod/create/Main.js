/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.postprod.create.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.postprod.create.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpostprodcreatemain"

    , title: i18n.gettext("Initiate processing")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 250}
    , items   : [
        {xtype: "sourcesconfigurationpostprodcreatecfgcustomvidname"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items : [
                {flex: 1,labelWidth: 250, xtype: "sourcesconfigurationpostprodcreatecfgcustomstartdate"     }
                , {width: 10,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("at"), labelSeparator: "", padding: "0 5 0 5"  }
                , {width: 50,   xtype: "sourcesconfigurationpostprodcreatecfgcustomstarthour"     }
                , {width: 10,   xtype: "label",	html: ":",                  padding: 2                         }
                , {width: 50,   xtype: "sourcesconfigurationpostprodcreatecfgcustomstartminute"   }
            ]
        }, {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items : [
                {flex: 1,labelWidth: 250, xtype: "sourcesconfigurationpostprodcreatecfgcustomenddate"     }
                , {width: 10,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("at"), labelSeparator: "", padding: "0 5 0 5"  }
                , {width: 50,   xtype: "sourcesconfigurationpostprodcreatecfgcustomendhour"     }
                , {width: 10,   xtype: "label",	html: ":",                  padding: 2          }
                , {width: 50,   xtype: "sourcesconfigurationpostprodcreatecfgcustomendminute"   }
            ]
        }, {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items : [
                {width: 310, labelWidth: 250, xtype : "sourcesconfigurationpostprodcreatecfgcustomkeepstarthour"   }
                , {width: 10,	xtype: "label",	html: ":",                  padding: 2               }
                , {width: 50,	xtype : "sourcesconfigurationpostprodcreatecfgcustomkeepstartminute" }
                , {width: 30,   xtype: "fieldcontainer", fieldLabel: i18n.gettext("and"), labelSeparator: "", padding: "0 5 0 5"  }
                , {width: 50,	xtype : "sourcesconfigurationpostprodcreatecfgcustomkeependhour"     }
                , {width: 10,   xtype: "label",	html: ":",                  padding: 2               }
                , {width: 50,	xtype : "sourcesconfigurationpostprodcreatecfgcustomkeependminute"   }
            ]
        }, {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 310, labelWidth: 250, xtype: "sourcesconfigurationpostprodcreatecfgvidminintervalvalue" }
                , {width: 100,   xtype: "sourcesconfigurationpostprodcreatecfgvidmininterval"                   }
            ]
        }
        , {xtype: "sourcesconfigurationpostprodcreatecfgmovefilestosource"}
        , {xtype: "sourcesconfigurationpostprodcreatecfgemailmovieactivate"}
        , {xtype: "sourcesconfigurationpostprodcreatecfgcustomactive"}
    ]
});

