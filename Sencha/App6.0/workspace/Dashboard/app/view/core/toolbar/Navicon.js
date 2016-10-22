/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.toolbar.Navicon");
//</debug>
Ext.define("WPAKT.view.core.toolbar.Navicon", {
    extend: "Ext.button.Button"
    , alias: "widget.coretoolbarnavicon"

    , margin: "0 0 0 8"
    , cls: "delete-focus-bg"
    , iconCls:"x-fa fa-navicon"
    , id: "main-navigation-btn"
    //handler: "onToggleNavigationSize"
});
