/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.systemconfiguration.SystemConfiguration");
//</debug>
Ext.define("WPAKD.view.systemconfiguration.SystemConfiguration", {
    extend: "Ext.tab.Panel"
    , alias: "widget.systemconfigurationsystemconfiguration"

    //, activeTab: "systemconfigurationcapturemain"

    , items: [
        {xtype: "systemconfigurationgeneralmain"           }
        , {xtype: "systemconfigurationrebootmain"          }
    ]

    , dockedItems: [{
        xtype: "toolbar"
        , dock: "bottom"
        , items: [
            {xtype: "systemconfigurationbuttonsave"}
            , {xtype: "systemconfigurationbuttoncancel"}
            , "->"
            , {xtype: "systemconfigurationsystemconfigurationchanges"}
        ]
    }]
});

