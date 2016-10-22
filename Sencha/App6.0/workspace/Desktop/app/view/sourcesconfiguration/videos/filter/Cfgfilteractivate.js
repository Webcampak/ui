/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.filter.Cfgfilteractivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.filter.Cfgfilteractivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationvideosfiltercfgfilteractivate"

    , fieldLabel: i18n.gettext("Filter similar pictures")
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgfilteractivate");
        }
    }
});

