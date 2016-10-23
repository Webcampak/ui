/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.videos.SourceName");
//</debug>
Ext.define("WPAKD.view.videos.SourceName", {
    extend: "Ext.toolbar.TextItem"
    , alias : "widget.videossourcename"
    
    , config: {
        html: i18n.gettext("No Source Selected")
    }
});
