/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.time.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.time.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationadvancedtimemain"

    , title: i18n.gettext("Time Based Alerts")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 300}
    , items: [
        {xtype: "sourcesconfigurationadvancedtimecfgemailalerttime"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 370, labelWidth: 300, xtype: "sourcesconfigurationadvancedtimecfgemailalerttimefailure"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("minutes"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }        
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 370, labelWidth: 300,   xtype: "sourcesconfigurationadvancedtimecfgemailalerttimereminder"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("minutes"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }
    ]
});

