/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.statefulconfiguration.StatefulConfiguration");
//</debug>
Ext.define("WPAKD.store.desktop.statefulconfiguration.StatefulConfiguration", {
    extend: "Ext.data.Store"

    , model: "WPAKD.model.desktop.statefulconfiguration.StatefulConfiguration"

//    autoLoad: true,
    , autoSync: true

    , proxy:{
        type: "direct"
        , extraParams: {
            WIDGET: "null"
            , SENCHA_APP: "WPAKD"
        }
        , reader: {
            type: "json"
            , rootProperty: "results"
            , totalProperty: "total"
        }
        , api:{
            read:      "DesktopStatefulConfiguration.getStatefulConfiguration"
            , create:    "DesktopStatefulConfiguration.addUpdateStatefulConfiguration"
            , destroy:   "DesktopStatefulConfiguration.removeStatefulConfiguration"
            , update:    "DesktopStatefulConfiguration.addUpdateStatefulConfiguration"
        }
    }
    , listeners: {
        beforeload: function(){
            Ext.getBody().mask("Please wait, loading content...");
        }
        , dataChanged: function() {
            Ext.getBody().unmask();
        }
    }
});
