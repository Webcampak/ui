/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.store.shared.Applications");
//</debug>
Ext.define("WPAKD.store.shared.Applications", {
    extend: "Ext.data.Store",

    model: "WPAKD.model.shared.Applications",

    autoLoad: true,
    autoSync: true,

    proxy:{
        type: "direct",
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        api:{
            read:   "Applications.getApplications"
        }
/*
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
