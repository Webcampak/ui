/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.authentication.Profile");
//</debug>
/*
 * Handles actions when user click on its icon on the top-right corner of the screen
 */
Ext.define("WPAKT.controller.core.authentication.Profile", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [
        "core.authentication.Main"
        , "core.authentication.profile.Main"
        , "core.authentication.profile.ButtonChangePassword"
        , "core.authentication.profile.ButtonLogout"
        , "core.authentication.profile.ButtonCancel"
        , "core.authentication.profile.Label"
        
        , "core.toolbar.Username"
    ]

    , refs: [
        {ref: "coreauthenticationmain",                            selector: "coreauthenticationmain",                        autoCreate: true,   xtype: "coreauthenticationmain" }
        , {ref: "coreauthenticationloginmain",                     selector: "coreauthenticationloginmain"                    }
        , {ref: "coreauthenticationresetpasswordmain",             selector: "coreauthenticationresetpasswordmain"            }
        , {ref: "coreauthenticationchangepasswordmain",            selector: "coreauthenticationchangepasswordmain"           }
        , {ref: "coreauthenticationprofilemain",                   selector: "coreauthenticationprofilemain",                 autoCreate: true,   xtype: "coreauthenticationprofilemain"         }
        , {ref: "coreauthenticationprofilebuttonchangepassword",   selector: "coreauthenticationprofilebuttonchangepassword"  }
        , {ref: "coreauthenticationprofilebuttonlogout",           selector: "coreauthenticationprofilebuttonlogout"          }
        , {ref: "coreauthenticationprofilebuttoncancel",           selector: "coreauthenticationprofilebuttoncancel"          }
        , {ref: "coreauthenticationprofilelabel",                  selector: "coreauthenticationprofilelabel"                 }

        , {ref: "coretoolbarusername",                             selector: "coretoolbarusername"                            }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "coreauthenticationprofilebuttonchangepassword":   {click:  this.clickChangePassword   }
            , "coreauthenticationprofilebuttoncancel":         {click:  this.clickCancel           }
            , "coretoolbarusername":                           {click:  this.showProfileMenu       }
        });
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.core.authentication.Profile.showProfileMenu": this.showProfileMenu
                  }
             }
        });         
        
    }

    , onLaunch: function() {

    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Profile: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    /*
     * Show the profile meny
     */
    , showProfileMenu: function() {
        this.consoleLog("showProfileMenu()");
        this.getCoreauthenticationmain().show();                            
        this.getCoreauthenticationprofilemain().show();    
        this.getCoreauthenticationloginmain().hide();    
        this.getCoreauthenticationresetpasswordmain().hide();    
        this.getCoreauthenticationchangepasswordmain().hide();    
    }
    
    /*
     * If user click on change password, redirect to the proper screen
     */
    , clickChangePassword: function() {
        this.consoleLog("clickChangePassword()");
        this.redirectTo("auth/changepassword");
    }

    /*
     * If cancel, hide the view
     */
    , clickCancel: function() {
        this.consoleLog("clickCancel()");
        this.getCoreauthenticationmain().hide();                    
        this.getCoreauthenticationprofilemain().hide();     
        this.redirectTo("");
        
    }

});