/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.SourceName");
//</debug>
Ext.define("WPAKD.view.pictures.SourceName", {
    extend: "Ext.toolbar.TextItem"
    , alias : "widget.picturessourcename"
    
    , config: {
        html: i18n.gettext("No Source Selected")
    }
});
