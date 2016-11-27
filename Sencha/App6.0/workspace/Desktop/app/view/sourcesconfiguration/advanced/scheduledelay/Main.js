/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.advanced.scheduledelay.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.advanced.scheduledelay.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationadvancedscheduledelaymain"

    , title: i18n.gettext("Schedule Based Alerts (time since on-schedule last capture)")

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 250}
    , items: [
        {xtype: "sourcesconfigurationadvancedscheduledelaycfgemailalertscheduledelay"}
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 320, labelWidth: 250, xtype: "sourcesconfigurationadvancedscheduledelaycfgemailalertscheduledelayfailure"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("minutes"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }        
        , {
            xtype: "container"
            , layout: {type:"hbox", align: "stretch", pack: "start"}
            , items   : [
                {width: 320, labelWidth: 250,   xtype: "sourcesconfigurationadvancedscheduledelaycfgemailalertscheduledelayreminder"     }
                , {width: 140, labelWidth: 250,  xtype: "fieldcontainer", fieldLabel: i18n.gettext("minutes"), labelSeparator: "", padding: "0 5 0 5"  }
            ]
        }
    ]
});

