/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.loading.Stores");
//</debug>
Ext.define("WPAKT.controller.core.loading.Stores", {
    extend: "Ext.app.Controller"

    , stores: [
        "core.loading.Stores"
    ]

    , models: [
        "core.loading.Stores"
    ]

    , views: [

    ]

    , refs: [

    ]

    , init: function() {
        this.consoleLog("init()");
        this.listen({
            controller: {
                "*": {
                    "WPAKT.controller.core.loading.Stores.beginLoading": this.beginLoading
                }
            }
        });
    }

    , onLaunch: function() {
//        this.consoleLog("onLaunch()");
        
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Loading->Stores: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }    

    //SENCHA BUG EXTJS-11420
    // The callback function is not called at all in the case where the store does not have any records
    // See: http://www.sencha.com/forum/showthread.php?272483-Buffered-store-load-callback-interface-inconsistent-with-documentation
    , beginLoading: function(sessionCode, successEvent, requiredStores) {
        this.consoleLog("beginLoading()");
        var scope = this;
        var sessionCode = sessionCode;
        var successEvent = successEvent;
        var requiredStores = requiredStores;
        var nbStoresToLoad = 0;
        Ext.Array.each(requiredStores, function(currentStore) {
            scope.consoleLog("beginLoading(): Processing: " + currentStore.store.storeId + " Action: " + currentStore.action);
            if ((currentStore.action === "LOAD" && currentStore.store.getTotalCount() === 0) || currentStore.action === "REFRESH") {
                scope.consoleLog("beginLoading(): Loading: " + currentStore.store.storeId);
                // Load Store
                // 1- Add record to tracking store
                scope.getCoreLoadingStoresStore().add(
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
//                console.log(new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Loading->Stores: Controller beginLoading: Loading: " + currentStore.store.storeId );
                currentStore.store.load(function(records, operation, success) {
                    //4- Once store loaded, update store
                    scope.consoleLog("beginLoading(): Store: " + currentStore.store.storeId + " loaded");
                    scope.getCoreLoadingStoresStore().each(function (rec) {
                        if (rec.get("STORE_ID") === currentStore.store.storeId && rec.get("SESSION_CODE") === sessionCode) {
                            rec.set("STATUS", "LOADED");
                        }
                    });
                });
            }
        });
        var storeLoadingInterval = setInterval(function() {
            var storesStillLoading = nbStoresToLoad;
            scope.getCoreLoadingStoresStore().each(function (rec) {
                if (rec.get("STATUS") === "LOADED" && rec.get("SESSION_CODE") === sessionCode) {
                    storesStillLoading = storesStillLoading - 1;
                }
            });
//            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Loading->Stores: Controller beginLoading: Number of stores still loading: " + storesStillLoading);
            if (storesStillLoading === 0) {
                var recordsRemove = [];
                scope.getCoreLoadingStoresStore().each(function (rec) {
                    if (rec.get("SESSION_CODE") === sessionCode) {
                        recordsRemove.push(rec);
                    }
                });
                scope.getCoreLoadingStoresStore().remove(recordsRemove);
                scope.fireEvent(successEvent);
                clearInterval(storeLoadingInterval);
            }
        }, 100); // refresh every 100ms
        setTimeout(function(){clearInterval(storeLoadingInterval)},240000);
    }
});
