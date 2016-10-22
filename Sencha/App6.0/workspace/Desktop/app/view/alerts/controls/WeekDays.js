/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.WeekDays");
//</debug>
Ext.define("WPAKD.view.alerts.controls.WeekDays", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.alertscontrolsweekdays"

    , fieldLabel: i18n.gettext("Display")
    , width: 150
    , labelWidth: 50
    , mode: "local"
    , value: "Monday"
    , triggerAction: "all"
    , queryMode: "local"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , store: Ext.create("Ext.data.Store", {
            fields : ["name", "value"]
            , data : [
                {name : i18n.gettext("Monday"),     value: "Monday"     }
                , {name : i18n.gettext("Tuesday"),  value: "Tuesday"    }
                , {name : i18n.gettext("Wednesday"),value: "Wednesday"  }
                , {name : i18n.gettext("Thursday"), value: "Thursday"   }
                , {name : i18n.gettext("Friday"),   value: "Friday"     }
                , {name : i18n.gettext("Saturday"), value: "Saturday"   }
                , {name : i18n.gettext("Sunday"),   value: "Sunday"     }
                , {name : i18n.gettext("All"),      value: "All"        }
            ]
        })
});

