/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.email.Main");
//</debug>
Ext.define("WPAKT.view.core.email.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.coreemailmain"

    , cls: "auth-locked-window"

    , closable: false
    , resizable: false
    , titleAlign: "center"
    , maximized: true
    , modal: true
    , frameHeader: false

    , title: i18n.gettext("Send an Email")
    , defaultFocus: "coreemailsendto" // Focus the Auth Form to force field focus as well

    , layout: {type: "vbox", align: "center", pack: "center"}
//    , defaults: {margin: "5 5 0 5"}
    , items: [{
        xtype: "panel"
        , bodyPadding: "20 20"
        , cls: "auth-dialog-login"
        , header: false
        , width: 415
        , layout: {type: "vbox", align: "stretch"}
        , defaults : {margin : "5 0"}
        , items: [
             {xtype: "coreemailsendfrom"}
             , {xtype: "coreemailsendto"}
             , {xtype: "coreemailsendcc"}
             , {xtype: "coreemailemailsubject"}
             , {xtype: "coreemailemailattachments"}
             , {xtype: "coreemailemailbody",flex: 1}
         ]
         , dockedItems: [{
             xtype: "toolbar"
             , dock: "bottom"
             , items: ["->", {
                 xtype: "coreemailbuttoncancel"
             }, {
                 xtype: "coreemailbuttonsend"
            }]
         }]
     }]      
});
