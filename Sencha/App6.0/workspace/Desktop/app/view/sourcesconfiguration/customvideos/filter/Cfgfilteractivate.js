/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.filter.Cfgfilteractivate");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.filter.Cfgfilteractivate", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationcustomvideosfiltercfgfilteractivate"

    , fieldLabel: i18n.gettext("Filter similar pictures")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue", newValue, oldValue, "cfgfilteractivate");
        }
    }
});

