/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.toolbar.Logo");
//</debug>
Ext.define("WPAKT.view.core.toolbar.Logo", {
    extend: "Ext.Component"
    , alias: "widget.coretoolbarlogo"

    , reference: "senchaLogo"
    , cls: "sencha-logo"
  //  , iconCls:"x-fa fa-user"
  //  , text: "core"
  //  , scale: "large"
    
    , html: "<div class=\"main-logo\"><img src=\"/resources/images/dashboard-icon2.png\">" + i18n.gettext("Webcampak") + "</div>"
    , width: 250
    
});
