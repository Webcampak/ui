/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.stats.sources.SourceName");
//</debug>
Ext.define("WPAKD.view.stats.sources.SourceName", {
    extend: "Ext.toolbar.TextItem"
    , alias : "widget.statssourcessourcename"

    , config: {
        html: i18n.gettext("No Source Selected")
    }
});
