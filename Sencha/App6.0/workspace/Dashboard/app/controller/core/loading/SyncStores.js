/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.loading.SyncStores");
//</debug>
Ext.define("WPAKT.controller.core.loading.SyncStores", {
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
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Core->Loading->SyncStores: Controller init: function()");
        this.listen({
            controller: {
                "*": {
                    "WPAKT.controller.core.loading.SyncStores.beginLoading": this.beginLoading
                }
            }
        });
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Loading->SyncStores: ";
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
            if (currentStore.action === "SYNC") {
                scope.consoleLog("beginLoading(): Loading: " + currentStore.store.storeId);
                // Load Store
                // 1- Add record to tracking store
                scope.getCoreLoadingStoresStore().add(
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
                        scope.consoleLog("beginLoading(): Store: " + currentStore.store.storeId + " synced");
                        scope.getCoreLoadingStoresStore().each(function (rec) {
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
            scope.getCoreLoadingStoresStore().each(function (rec) {
                if (rec.get("STATUS") === "SYNCED" && rec.get("SESSION_CODE") === sessionCode) {
                    storesStillLoading = storesStillLoading - 1;
                }
            });
//            console.log(new Date().toLocaleTimeString() + ": Log: Controller->Core->Loading->SyncStores: Controller beginLoading: Number of stores still loading: " + storesStillLoading);
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
