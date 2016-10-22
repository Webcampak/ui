/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.SourceName");
//</debug>
Ext.define("WPAKD.view.alerts.SourceName", {
    extend: "Ext.container.Container"
    , alias : "widget.alertssourcename"

    , html: i18n.gettext("<- Please select a source to begin configuration")

});
