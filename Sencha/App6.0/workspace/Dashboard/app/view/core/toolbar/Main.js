/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.toolbar.Main");
//</debug>
Ext.define("WPAKT.view.core.toolbar.Main", {
    extend: "Ext.toolbar.Toolbar"
    , alias: "widget.coretoolbarmain"

    , cls: "sencha-dash-dash-headerbar toolbar-btn-shadow"
    , height: 64
    , items: [{
            xtype: "coretoolbarlogo"
        }, {
            xtype: "coretoolbarnavicon"
            /*
            margin: "0 0 0 8",
            cls: "delete-focus-bg",
            iconCls:"x-fa fa-navicon",
            id: "main-navigation-btn",
            handler: "onToggleNavigationSize"
            */
        }, {
            xtype: "tbspacer",
            flex: 1
        }, {
            xtype: "coretoolbarusername"
        }]
});
