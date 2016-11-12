/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.filter.Cfgfiltervalue");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.filter.Cfgfiltervalue", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationvideosfiltercfgfiltervalue"

    , fieldLabel: i18n.gettext("Max distance")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue", newValue, oldValue, "cfgfiltervalue");
        }
    }
});
