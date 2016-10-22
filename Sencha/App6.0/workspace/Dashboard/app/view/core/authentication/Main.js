/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.authentication.Main");
//</debug>
Ext.define("WPAKT.view.core.authentication.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.coreauthenticationmain"

    , cls: "auth-locked-window"

    , closable: false
    , resizable: false
//    , autoShow: true
    , titleAlign: "center"
    , maximized: true
    , modal: true
    , frameHeader: false

    , layout: {type: "vbox", align: "center", pack: "center"}

    , title: i18n.gettext("Webcampak Dashboard Authentication")
    , defaultFocus: "coreauthenticationloginmain" // Focus the Auth Form to force field focus as well

    , items: [
        {xtype: "coreauthenticationloginmain"              }
        , {xtype: "coreauthenticationresetpasswordmain"    }
        , {xtype: "coreauthenticationchangepasswordmain"   }
        , {xtype: "coreauthenticationprofilemain"   }
    ]

    , initComponent: function() {
        this.addCls("user-login-register-container");
        this.callParent(arguments);
    }


});
