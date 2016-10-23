/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.system.Range");
//</debug>
Ext.define("WPAKD.view.stats.system.Range", {
    extend: "Ext.form.field.ComboBox"
    , alias: "widget.statssystemrange"

    , fieldLabel: i18n.gettext("Range")
    , flex: 1
    , mode: "local"
    , value: "recent"
    , triggerAction: "all"
    , queryMode: "local"
    , forceSelection: true
    , editable: false
    , displayField: "name"
    , valueField: "value"
    , store: Ext.create("Ext.data.Store", {
            fields : ["name", "value"]
            , data : [
                {name : i18n.gettext("Most Recent"),    value: "recent" }
                , {name : i18n.gettext("Hours"),        value: "hours"  }
                , {name : i18n.gettext("Days"),         value: "days"   }
                , {name : i18n.gettext("Months"),       value: "months" }
            ]
        })
});

