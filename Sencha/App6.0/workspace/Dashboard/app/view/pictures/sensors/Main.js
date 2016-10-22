/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.sensors.Main");
//</debug>
Ext.define("WPAKT.view.pictures.sensors.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.picturessensorsmain"

    , cls: "auth-locked-window"

    , closable: true
    , resizable: false
    , titleAlign: "center"
    , maximized: true
    , modal: true
    , frameHeader: false

    , title: i18n.gettext("Webcampak Sensors")
    , defaultFocus: "coreemailsendto" // Focus the Auth Form to force field focus as well

    , layout: {type: "vbox", align: "center", pack: "center"}
//    , defaults: {margin: "5 5 0 5"}
    , items: [{
        xtype: "panel"
        , bodyPadding: "20 20"
        , cls: "auth-dialog-login"
        , header: false
        , width: 510
        , layout: {type: "vbox", align: "stretch"}
        , defaults : {margin : "5 0"}
        , items: [
            {xtype: "picturessensorssensor1"}
            , {xtype: "picturessensorssensor2"}
            , {xtype: "picturessensorssensor3"}
            , {xtype: "picturessensorssensor4"}
        ]        
         , dockedItems: [{
             xtype: "toolbar"
             , dock: "bottom"
             , items: ["->", {
                 xtype: "picturessensorsbuttonclose"
            }]
         }]        
/*        , items: [
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
                 xtype: "coreemailbuttonsend"
            }]
         }]
         */
     }]      
});
