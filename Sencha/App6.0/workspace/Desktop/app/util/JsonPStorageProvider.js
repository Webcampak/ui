/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.util.JsonPStorageProvider");
//</debug>
Ext.define("WPAKD.util.JsonPStorageProvider", {
     /* Begin Definitions */
     extend : "Ext.state.Provider",
     alias : "state.jsonpstorage",

     config: {
         timeout: 30000
     },

     constructor : function(config) {
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: constructor: function()");

          this.initConfig(config);
          var me = this;

          this.state = this.restoreState(this);
     },

     set : function(name, value) {
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: set: function()");
          var me = this;

          if( typeof value == "undefined" || value === null) {
                me.clear(name);
                return;
          }
          //console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: set() - presist");
          me.persist(name, value);
          //console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: set() - callParent");
          //me.callParent(arguments);
          //console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: set() - end");
     },

     // private
    restoreState : function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: restoreState: function()");
        var currentState = {};
        var me = this;
        var statefulStore = Ext.getStore("desktop.StatefulConfiguration");
        statefulStore.each(function(result){
            var currentValues = result.get("STATEFULCONFIG");
            var currentName = result.get("WIDGET");
            console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: restoreState: Restoring state of widget: " + currentName);
            currentState[currentName] = me.decodeValue(currentValues);
        });
        return currentState;
     },

     // private
     clear : function(name) {
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: clear: function()");

          this.clearKey(name);
          this.callParent(arguments);
     },
     // private
     persist : function(currentGridWidget, value) {
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: persist: function()");
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: persist: name: " + currentGridWidget);

        var statefulStore = Ext.getStore("desktop.StatefulConfiguration");
        var record = statefulStore.findRecord("WIDGET", currentGridWidget, 0, false, false, true);
        if (record) {
            console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: persist: There were already some settings for widget: " + currentGridWidget + " updating..");
            record.set("STATEFULCONFIG", this.encodeValue(value));
        } else {
            console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: persist: Adding columns settings for widget: " + currentGridWidget);
            statefulStore.add(
                [{
                    WIDGET:      currentGridWidget
                    , STATEFULCONFIG:  this.encodeValue(value)
                    , SENCHA_APP: statefulStore.getProxy().extraParams.SENCHA_APP
                }]
            );
        }

     },
     // private
     clearKey : function(name) {
        console.log(new Date().toLocaleTimeString() + ": Log: Util->JsonPStorageProvider: clearKey: function()");

     }
});

