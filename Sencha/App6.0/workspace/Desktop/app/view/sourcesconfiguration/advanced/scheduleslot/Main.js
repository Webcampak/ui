/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.scheduleslot.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationadvancedscheduleslotmain"

    , title: i18n.gettext("Schedule Based Alerts (missed captures)")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 300}
    , items: [
        {xtype: "sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslot"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 370, labelWidth: 300, xtype: "sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslotfailure"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("missing captures"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 370, labelWidth: 300, xtype: "sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslotgrace"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("minutes"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 370, labelWidth: 300,   xtype: "sourcesconfigurationadvancedscheduleslotcfgemailalertscheduleslotreminder"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("missing captures"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }
    ]
});

