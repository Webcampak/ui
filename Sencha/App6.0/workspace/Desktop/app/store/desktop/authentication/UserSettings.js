/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.desktop.authentication.UserSettings");
//</debug>
Ext.define("WPAKD.store.desktop.authentication.UserSettings", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.desktop.authentication.UserSettings",
/*
    proxy: {
        type: "memory"
    }
*/
    proxy:{
        type: "direct",
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        extraParams: {
            TZ_OFFSET: -new Date().getTimezoneOffset()/60
            , SENCHA_APP: "null"
        },
        api:{
            read:        "UserSettings.getSettings"
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
    }
});
