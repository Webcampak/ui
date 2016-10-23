/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.loading.Stores");
//</debug>
Ext.define("WPAKD.controller.desktop.loading.Stores", {
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
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller init: function()");
        this.listen({
            controller: {
                "*": {
                    "WPAKD.controller.desktop.loading.Stores.beginLoading": this.beginLoading
                }
            }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller onLaunch: function()");
        
    },

    //SENCHA BUG EXTJS-11420
    // The callback function is not called at all in the case where the store does not have any records
    // See: http://www.sencha.com/forum/showthread.php?272483-Buffered-store-load-callback-interface-inconsistent-with-documentation
    beginLoading: function(sessionCode, successEvent, requiredStores) {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller beginLoading: function()");
        var currentContext = this;
        var nbStoresToLoad = 0;
        Ext.Array.each(requiredStores, function(currentStore) {
            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller beginLoading: Processing: " + currentStore.store.storeId + " Action: " + currentStore.action);
            if ((currentStore.action === "LOAD" && currentStore.store.getTotalCount() === 0) || currentStore.action === "REFRESH") {
                console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller beginLoading: Loading: " + currentStore.store.storeId);
                // Load Store
                // 1- Add record to tracking store
                currentContext.getDesktopLoadingStoresStore().add(
                    [{
                        SESSION_CODE:  sessionCode
                        , STORE_ID:     currentStore.store.storeId
                        , STATUS:        "LOADING"
                    }]
                );
                nbStoresToLoad = nbStoresToLoad + 1;
                // 2- Remove all previous records in store prior to loading, useful in case of exception when refreshing to ensure store is empty
                if (currentStore.action === "REFRESH") {
                    currentStore.store.removeAll(true);
                }
                // 3- Load store
//                console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller beginLoading: Loading: " + currentStore.store.storeId );
                currentStore.store.load(function(records, operation, success) {
                    //4- Once store loaded, update store
                    console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller beginLoading: Store: " + currentStore.store.storeId + " loaded");
                    currentContext.getDesktopLoadingStoresStore().each(function (rec) {
                        if (rec.get("STORE_ID") === currentStore.store.storeId && rec.get("SESSION_CODE") === sessionCode) {
                            rec.set("STATUS", "LOADED");
                        }
                    });
                });
            }
        });
        var storeLoadingInterval = setInterval(function() {
            var storesStillLoading = nbStoresToLoad;
            currentContext.getDesktopLoadingStoresStore().each(function (rec) {
                if (rec.get("STATUS") === "LOADED" && rec.get("SESSION_CODE") === sessionCode) {
                    storesStillLoading = storesStillLoading - 1;
                }
            });
//            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Loading->Stores: Controller beginLoading: Number of stores still loading: " + storesStillLoading);
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
