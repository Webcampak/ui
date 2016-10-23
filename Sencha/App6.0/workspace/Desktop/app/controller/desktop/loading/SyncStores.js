/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.loading.SyncStores");
//</debug>
Ext.define("WPAKD.controller.desktop.loading.SyncStores", {
    extend: "Ext.app.Controller",

    stores: [
        "desktop.loading.Stores"
    ],

    models: [
        "desktop.loading.Stores"
    ],

    views: [

    ],

    refs: [

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller init: function()");
        this.listen({
            controller: {
                "*": {
                    "WPAKD.controller.desktop.loading.SyncStores.beginLoading": this.beginLoading
                }
            }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller onLaunch: function()");

    },

    //SENCHA BUG EXTJS-11420
    // The callback function is not called at all in the case where the store does not have any records
    // See: http://www.sencha.com/forum/showthread.php?272483-Buffered-store-load-callback-interface-inconsistent-with-documentation
    beginLoading: function(sessionCode, successEvent, requiredStores) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller beginLoading: function()");
        var currentContext = this;
        var nbStoresToLoad = 0;
        Ext.Array.each(requiredStores, function(currentStore) {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller beginLoading: Processing: " + currentStore.store.storeId + " Action: " + currentStore.action);
            if (currentStore.action === "SYNC") {
                console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller beginLoading: Loading: " + currentStore.store.storeId);
                // Load Store
                // 1- Add record to tracking store
                currentContext.getDesktopLoadingStoresStore().add(
                    [{
                        SESSION_CODE:  sessionCode
                        , STORE_ID:     currentStore.store.storeId
                        , STATUS:        "SYNCING"
                    }]
                );
                nbStoresToLoad = nbStoresToLoad + 1;

                // 3- Sync store
                currentStore.store.sync({
                    callback: function(records, operation, success) {
                        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller beginLoading: Store: " + currentStore.store.storeId + " synced");
                        currentContext.getDesktopLoadingStoresStore().each(function (rec) {
                            if (rec.get("STORE_ID") === currentStore.store.storeId && rec.get("SESSION_CODE") === sessionCode) {
                                rec.set("STATUS", "SYNCED");
                            }
                        });
                    }
                });
            }
        });
        var storeLoadingInterval = setInterval(function() {
            var storesStillLoading = nbStoresToLoad;
            currentContext.getDesktopLoadingStoresStore().each(function (rec) {
                if (rec.get("STATUS") === "SYNCED" && rec.get("SESSION_CODE") === sessionCode) {
                    storesStillLoading = storesStillLoading - 1;
                }
            });
//            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->SyncStores: Controller beginLoading: Number of stores still loading: " + storesStillLoading);
            if (storesStillLoading === 0) {
                var recordsRemove = [];
                currentContext.getDesktopLoadingStoresStore().each(function (rec) {
                    if (rec.get("SESSION_CODE") === sessionCode) {
                        recordsRemove.push(rec);
                    }
                });
                currentContext.getDesktopLoadingStoresStore().remove(recordsRemove);
                currentContext.fireEvent(successEvent);
                clearInterval(storeLoadingInterval);
            }
        }, 100); // refresh every 100ms
        setTimeout(function(){clearInterval(storeLoadingInterval);},240000);
    }
});
