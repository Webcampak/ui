/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.statefulconfiguration.StatefulConfiguration");
//</debug>
Ext.define("WPAKD.store.desktop.statefulconfiguration.StatefulConfiguration", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.statefulconfiguration.StatefulConfiguration",

//    autoLoad: true,
    autoSync: true,

    proxy:{
        type: "direct",
        extraParams: {
            WIDGET: "null"
            , SENCHA_APP: "WPAKD"
        },
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:      "DesktopStatefulConfiguration.getStatefulConfiguration",
            create:    "DesktopStatefulConfiguration.addUpdateStatefulConfiguration",
            destroy:   "DesktopStatefulConfiguration.removeStatefulConfiguration",
            update:    "DesktopStatefulConfiguration.addUpdateStatefulConfiguration"
        }/*,
        afterRequest:function(request,success){
            if (success == false) {
                if (request.operation.error) {var errorMsg = request.operation.error;}
                else {var errorMsg = "Unknown Error";}
                Ext.MessageBox.show({
                    title: "Error",
                    msg: errorMsg,
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        }*/
    },
    listeners: {
        beforeload: function(store, opt){
            Ext.getBody().mask("Please wait, loading content...");
        },
        dataChanged: function(store) {
            Ext.getBody().unmask();
        }
    }
});
