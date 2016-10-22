/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.filter.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.filter.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationvideosfiltermain"

    , title: i18n.gettext("Filter similar pictures")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items   : [
        {xtype: "sourcesconfigurationvideosfiltercfgfilteractivate"}
        , {xtype: "sourcesconfigurationvideosfiltercfgfilterwatermarkfile"}
        , {xtype: "sourcesconfigurationvideosfiltercfgfiltervalue"}
    ]
});

