/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.sourcesconfiguration.pictures.Pictures");
//</debug>
Ext.define("WPAKD.controller.sourcesconfiguration.pictures.Pictures", {
    extend: "Ext.app.Controller",

    views: [
        "sourcesconfiguration.pictures.Main"

        , "sourcesconfiguration.pictures.rotate.Main"
        , "sourcesconfiguration.pictures.rotate.Cfgrotateactivate"
        , "sourcesconfiguration.pictures.rotate.Cfgrotateangle"

        , "sourcesconfiguration.pictures.crop.Main"
        , "sourcesconfiguration.pictures.crop.Cfgcropactivate"
        , "sourcesconfiguration.pictures.crop.Cfgcropsizewidth"
        , "sourcesconfiguration.pictures.crop.Cfgcropsizeheight"
        , "sourcesconfiguration.pictures.crop.Cfgcropxpos"
        , "sourcesconfiguration.pictures.crop.Cfgcropypos"

        , "sourcesconfiguration.pictures.watermark.Main"
        , "sourcesconfiguration.pictures.watermark.Cfgpicwatermarkactivate"
        , "sourcesconfiguration.pictures.watermark.Cfgpicwatermarkdissolve"
        , "sourcesconfiguration.pictures.watermark.Cfgpicwatermarkfile"
        , "sourcesconfiguration.pictures.watermark.Cfgpicwatermarkpositionx"
        , "sourcesconfiguration.pictures.watermark.Cfgpicwatermarkpositiony"

        , "sourcesconfiguration.pictures.text.Main"
        , "sourcesconfiguration.pictures.text.Cfgimagemagicktxt"
        , "sourcesconfiguration.pictures.text.Cfgimgdateformat"
        , "sourcesconfiguration.pictures.text.Cfgimgtext"
        , "sourcesconfiguration.pictures.text.Cfgimgtextbasecolor"
        , "sourcesconfiguration.pictures.text.Cfgimgtextbaseposition"
        , "sourcesconfiguration.pictures.text.Cfgimgtextfont"
        , "sourcesconfiguration.pictures.text.Cfgimgtextgravity"
        , "sourcesconfiguration.pictures.text.Cfgimgtextovercolor"
        , "sourcesconfiguration.pictures.text.Cfgimgtextoverposition"
        , "sourcesconfiguration.pictures.text.Cfgimgtextsize"

        , "sourcesconfiguration.pictures.hotlink.Main"
        , "sourcesconfiguration.pictures.hotlink.Cfghotlinksize1"
        , "sourcesconfiguration.pictures.hotlink.Cfghotlinksize2"
        , "sourcesconfiguration.pictures.hotlink.Cfghotlinksize3"
        , "sourcesconfiguration.pictures.hotlink.Cfghotlinksize4"
        , "sourcesconfiguration.pictures.hotlink.Cfghotlinkerrorcreate"

        , "sourcesconfiguration.pictures.archives.Main"
        , "sourcesconfiguration.pictures.archives.Cfgarchivesize"
        , "sourcesconfiguration.pictures.archives.Cfgcapturedeleteafterdays"
        , "sourcesconfiguration.pictures.archives.Cfgcapturemaxdirsize"
        , "sourcesconfiguration.pictures.archives.Cfgcaptureminisize"
        , "sourcesconfiguration.pictures.archives.Cfgsavepictures"

        , "sourcesconfiguration.pictures.ftp.Main"
        , "sourcesconfiguration.pictures.ftp.Cfgftphotlinkserverid"
        , "sourcesconfiguration.pictures.ftp.Cfgftphotlinkserverretry"
        , "sourcesconfiguration.pictures.ftp.Cfgftpmainserverid"
        , "sourcesconfiguration.pictures.ftp.Cfgftpmainserverraw"
        , "sourcesconfiguration.pictures.ftp.Cfgftpmainserverretry"
        , "sourcesconfiguration.pictures.ftp.Cfgftpsecondserverid"
        , "sourcesconfiguration.pictures.ftp.Cfgftpsecondserverraw"
        , "sourcesconfiguration.pictures.ftp.Cfgftpsecondserverretry"

        , "sourcesconfiguration.pictures.copy.Main"
        , "sourcesconfiguration.pictures.copy.Cfgcopymainenable"
        , "sourcesconfiguration.pictures.copy.Cfgcopysecondsourceid"
        , "sourcesconfiguration.pictures.copy.Cfgcopymainsourceraw"
        , "sourcesconfiguration.pictures.copy.Cfgcopysecondenable"
        , "sourcesconfiguration.pictures.copy.Cfgcopymainsourceid"
        , "sourcesconfiguration.pictures.copy.Cfgcopysecondsourceraw"


    ],

    stores: [
        "shared.Sources"

        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.ConfigurationTabs"
    ],

    models: [
        "shared.Sources"

        , "sourcesconfiguration.Capture"
        , "sourcesconfiguration.SectionCapture"
        , "sourcesconfiguration.ConfigurationTabs"
    ],

    refs: [
        {ref: "sourcesconfigurationpicturesmain",           selector: "sourcesconfigurationpicturesmain"        }

        , {ref: "sourcesconfigurationpicturesrotatemain",               selector: "sourcesconfigurationpicturesrotatemain"              }
        , {ref: "sourcesconfigurationpicturesrotatecfgrotateactivate",  selector: "sourcesconfigurationpicturesrotatecfgrotateactivate" }
        , {ref: "sourcesconfigurationpicturesrotatecfgrotateangle",     selector: "sourcesconfigurationpicturesrotatecfgrotateangle"    }

        , {ref: "sourcesconfigurationpicturescropmain",                 selector: "sourcesconfigurationpicturescropmain"              }
        , {ref: "sourcesconfigurationpicturescropcfgcropactivate",      selector: "sourcesconfigurationpicturescropcfgcropactivate"   }
        , {ref: "sourcesconfigurationpicturescropcfgcropsizewidth",     selector: "sourcesconfigurationpicturescropcfgcropsizewidth"  }
        , {ref: "sourcesconfigurationpicturescropcfgcropsizeheight",    selector: "sourcesconfigurationpicturescropcfgcropsizeheight" }
        , {ref: "sourcesconfigurationpicturescropcfgcropxpos",          selector: "sourcesconfigurationpicturescropcfgcropxpos"       }
        , {ref: "sourcesconfigurationpicturescropcfgcropypos",          selector: "sourcesconfigurationpicturescropcfgcropypos"       }

        , {ref: "sourcesconfigurationpictureswatermarkmain",                    selector: "sourcesconfigurationpictureswatermarkmain"                       }
        , {ref: "sourcesconfigurationpictureswatermarkcfgpicwatermarkactivate", selector: "sourcesconfigurationpictureswatermarkcfgpicwatermarkactivate"    }
        , {ref: "sourcesconfigurationpictureswatermarkcfgpicwatermarkdissolve", selector: "sourcesconfigurationpictureswatermarkcfgpicwatermarkdissolve"    }
        , {ref: "sourcesconfigurationpictureswatermarkcfgpicwatermarkfile",     selector: "sourcesconfigurationpictureswatermarkcfgpicwatermarkfile"        }
        , {ref: "sourcesconfigurationpictureswatermarkcfgpicwatermarkpositionx",selector: "sourcesconfigurationpictureswatermarkcfgpicwatermarkpositionx"   }
        , {ref: "sourcesconfigurationpictureswatermarkcfgpicwatermarkpositiony",selector: "sourcesconfigurationpictureswatermarkcfgpicwatermarkpositiony"   }

        , {ref: "sourcesconfigurationpicturestextmain",                     selector: "sourcesconfigurationpicturestextmain"                    }
        , {ref: "sourcesconfigurationpicturestextcfgimagemagicktxt",        selector: "sourcesconfigurationpicturestextcfgimagemagicktxt"       }
        , {ref: "sourcesconfigurationpicturestextcfgimgdateformat",         selector: "sourcesconfigurationpicturestextcfgimgdateformat"        }
        , {ref: "sourcesconfigurationpicturestextcfgimgtext",               selector: "sourcesconfigurationpicturestextcfgimgtext"              }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextbasecolor",      selector: "sourcesconfigurationpicturestextcfgimgtextbasecolor"     }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextbaseposition",   selector: "sourcesconfigurationpicturestextcfgimgtextbaseposition"  }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextfont",           selector: "sourcesconfigurationpicturestextcfgimgtextfont"          }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextgravity",        selector: "sourcesconfigurationpicturestextcfgimgtextgravity"       }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextovercolor",      selector: "sourcesconfigurationpicturestextcfgimgtextovercolor"     }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextoverposition",   selector: "sourcesconfigurationpicturestextcfgimgtextoverposition"  }
        , {ref: "sourcesconfigurationpicturestextcfgimgtextsize",           selector: "sourcesconfigurationpicturestextcfgimgtextsize"          }

        , {ref: "sourcesconfigurationpictureshotlinkmain",                  selector: "sourcesconfigurationpictureshotlinkmain"                 }
        , {ref: "sourcesconfigurationpictureshotlinkcfghotlinksize1",       selector: "sourcesconfigurationpictureshotlinkcfghotlinksize1"      }
        , {ref: "sourcesconfigurationpictureshotlinkcfghotlinksize2",       selector: "sourcesconfigurationpictureshotlinkcfghotlinksize2"      }
        , {ref: "sourcesconfigurationpictureshotlinkcfghotlinksize3",       selector: "sourcesconfigurationpictureshotlinkcfghotlinksize3"      }
        , {ref: "sourcesconfigurationpictureshotlinkcfghotlinksize4",       selector: "sourcesconfigurationpictureshotlinkcfghotlinksize4"      }
        , {ref: "sourcesconfigurationpictureshotlinkcfghotlinkerrorcreate", selector: "sourcesconfigurationpictureshotlinkcfghotlinkerrorcreate"}

        , {ref: "sourcesconfigurationpicturesarchivesmain",                         selector: "sourcesconfigurationpicturesarchivesmain"                        }
        , {ref: "sourcesconfigurationpicturesarchivescfgsavepictures",              selector: "sourcesconfigurationpicturesarchivescfgsavepictures"             }
        , {ref: "sourcesconfigurationpicturesarchivescfgarchivesize",               selector: "sourcesconfigurationpicturesarchivescfgarchivesize"              }
        , {ref: "sourcesconfigurationpicturesarchivescfgcaptureminisize",           selector: "sourcesconfigurationpicturesarchivescfgcaptureminisize"          }
        , {ref: "sourcesconfigurationpicturesarchivescfgcapturedeleteafterdays",    selector: "sourcesconfigurationpicturesarchivescfgcapturedeleteafterdays"   }
        , {ref: "sourcesconfigurationpicturesarchivescfgcapturemaxdirsize",         selector: "sourcesconfigurationpicturesarchivescfgcapturemaxdirsize"        }

        , {ref: "sourcesconfigurationpicturesftpmain",                         selector: "sourcesconfigurationpicturesftpmain"                        }
        , {ref: "sourcesconfigurationpicturesftpcfgftpmainserverid",           selector: "sourcesconfigurationpicturesftpcfgftpmainserverid"          }
        , {ref: "sourcesconfigurationpicturesftpcfgftpmainserverraw",          selector: "sourcesconfigurationpicturesftpcfgftpmainserverraw"         }
        , {ref: "sourcesconfigurationpicturesftpcfgftpmainserverretry",        selector: "sourcesconfigurationpicturesftpcfgftpmainserverretry"       }
        , {ref: "sourcesconfigurationpicturesftpcfgftpsecondserverid",         selector: "sourcesconfigurationpicturesftpcfgftpsecondserverid"        }
        , {ref: "sourcesconfigurationpicturesftpcfgftpsecondserverraw",        selector: "sourcesconfigurationpicturesftpcfgftpsecondserverraw"       }
        , {ref: "sourcesconfigurationpicturesftpcfgftpsecondserverretry",      selector: "sourcesconfigurationpicturesftpcfgftpsecondserverretry"     }
        , {ref: "sourcesconfigurationpicturesftpcfgftphotlinkserverid",        selector: "sourcesconfigurationpicturesftpcfgftphotlinkserverid"       }
        , {ref: "sourcesconfigurationpicturesftpcfgftphotlinkserverretry",     selector: "sourcesconfigurationpicturesftpcfgftphotlinkserverretry"    }

        , {ref: "sourcesconfigurationpicturescopymain",                     selector: "sourcesconfigurationpicturescopymain"                    }
        , {ref: "sourcesconfigurationpicturescopycfgcopysecondsourceid",    selector: "sourcesconfigurationpicturescopycfgcopysecondsourceid"   }
        , {ref: "sourcesconfigurationpicturescopycfgcopymainsourceraw",     selector: "sourcesconfigurationpicturescopycfgcopymainsourceraw"    }
        , {ref: "sourcesconfigurationpicturescopycfgcopymainenable",        selector: "sourcesconfigurationpicturescopycfgcopymainenable"       }
        , {ref: "sourcesconfigurationpicturescopycfgcopymainsourceid",      selector: "sourcesconfigurationpicturescopycfgcopymainsourceid"     }
        , {ref: "sourcesconfigurationpicturescopycfgcopysecondsourceraw",   selector: "sourcesconfigurationpicturescopycfgcopysecondsourceraw"  }
        , {ref: "sourcesconfigurationpicturescopycfgcopysecondenable",      selector: "sourcesconfigurationpicturescopycfgcopysecondenable"     }


    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration: Controller init: function()");
        this.control({
            "*": {
                "WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue": this.updateStoreValue
            }
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.sourcesconfiguration.pictures.Pictures.loadSettings":       this.loadSettings
                      , "WPAKD.controller.sourcesconfiguration.pictures.Pictures.clearFTPServer":   this.clearFTPServer
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->Pictures: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationCaptureStore().findRecord("NAME", configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            if (configRecord.get("VALUE") != newValue) {
                this.consoleLog("updateStoreValue(): update config: " + configName + " from: " + configRecord.get("VALUE") + " to: " + newValue, "info");
                configRecord.set("VALUE", newValue);
                this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
            }
        } else {
            this.consoleLog("updateStoreValue(): Unable to find: " + configName, "warn");
        }
    }

    , loadSettings: function() {
        this.consoleLog("loadSettings()");
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord("NAME", "config-source", 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationpicturesmain().setVisible(false);
        } else {
            var scope = this;

            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationCaptureStore().each(function (rec) {
                var configValue = rec.get("VALUE");
                var configName = rec.get("NAME");
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty("cfgrotateactivate")){this.getSourcesconfigurationpicturesrotatecfgrotateactivate().setValue(configObj["cfgrotateactivate"]);
            } else {this.getSourcesconfigurationpicturesrotatecfgrotateactivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgrotateangle")){this.getSourcesconfigurationpicturesrotatecfgrotateangle().setValue(configObj["cfgrotateangle"]);
            } else {this.getSourcesconfigurationpicturesrotatecfgrotateangle().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcropactivate")){this.getSourcesconfigurationpicturescropcfgcropactivate().setValue(configObj["cfgcropactivate"]);
            } else {this.getSourcesconfigurationpicturescropcfgcropactivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcropsizewidth")){this.getSourcesconfigurationpicturescropcfgcropsizewidth().setValue(configObj["cfgcropsizewidth"]);
            } else {this.getSourcesconfigurationpicturescropcfgcropsizewidth().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcropsizeheight")){this.getSourcesconfigurationpicturescropcfgcropsizeheight().setValue(configObj["cfgcropsizeheight"]);
            } else {this.getSourcesconfigurationpicturescropcfgcropsizeheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcropxpos")){this.getSourcesconfigurationpicturescropcfgcropxpos().setValue(configObj["cfgcropxpos"]);
            } else {this.getSourcesconfigurationpicturescropcfgcropxpos().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcropypos")){this.getSourcesconfigurationpicturescropcfgcropypos().setValue(configObj["cfgcropypos"]);
            } else {this.getSourcesconfigurationpicturescropcfgcropypos().setVisible(false);}

            if(configObj.hasOwnProperty("cfgpicwatermarkactivate")){this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkactivate().setValue(configObj["cfgpicwatermarkactivate"]);
            } else {this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkactivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgpicwatermarkdissolve")){this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkdissolve().setValue(configObj["cfgpicwatermarkdissolve"]);
            } else {this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkdissolve().setVisible(false);}
            if(configObj.hasOwnProperty("cfgpicwatermarkfile")){this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkfile().setValue(configObj["cfgpicwatermarkfile"]);
            } else {this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkfile().setVisible(false);}
            if(configObj.hasOwnProperty("cfgpicwatermarkpositionx")){this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkpositionx().setValue(configObj["cfgpicwatermarkpositionx"]);
            } else {this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkpositionx().setVisible(false);}
            if(configObj.hasOwnProperty("cfgpicwatermarkpositiony")){this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkpositiony().setValue(configObj["cfgpicwatermarkpositiony"]);
            } else {this.getSourcesconfigurationpictureswatermarkcfgpicwatermarkpositiony().setVisible(false);}

            if(configObj.hasOwnProperty("cfgimagemagicktxt")){this.getSourcesconfigurationpicturestextcfgimagemagicktxt().setValue(configObj["cfgimagemagicktxt"]);
            } else {this.getSourcesconfigurationpicturestextcfgimagemagicktxt().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgdateformat")){this.getSourcesconfigurationpicturestextcfgimgdateformat().setValue(configObj["cfgimgdateformat"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgdateformat().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtext")){this.getSourcesconfigurationpicturestextcfgimgtext().setValue(configObj["cfgimgtext"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtext().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextbasecolor")){this.getSourcesconfigurationpicturestextcfgimgtextbasecolor().setValue(configObj["cfgimgtextbasecolor"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextbasecolor().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextbaseposition")){this.getSourcesconfigurationpicturestextcfgimgtextbaseposition().setValue(configObj["cfgimgtextbaseposition"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextbaseposition().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextfont")){this.getSourcesconfigurationpicturestextcfgimgtextfont().setValue(configObj["cfgimgtextfont"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextfont().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextgravity")){this.getSourcesconfigurationpicturestextcfgimgtextgravity().setValue(configObj["cfgimgtextgravity"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextgravity().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextovercolor")){this.getSourcesconfigurationpicturestextcfgimgtextovercolor().setValue(configObj["cfgimgtextovercolor"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextovercolor().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextoverposition")){this.getSourcesconfigurationpicturestextcfgimgtextoverposition().setValue(configObj["cfgimgtextoverposition"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextoverposition().setVisible(false);}
            if(configObj.hasOwnProperty("cfgimgtextsize")){this.getSourcesconfigurationpicturestextcfgimgtextsize().setValue(configObj["cfgimgtextsize"]);
            } else {this.getSourcesconfigurationpicturestextcfgimgtextsize().setVisible(false);}

            if(configObj.hasOwnProperty("cfghotlinksize1")){this.getSourcesconfigurationpictureshotlinkcfghotlinksize1().setValue(configObj["cfghotlinksize1"]);
            } else {this.getSourcesconfigurationpictureshotlinkcfghotlinksize1().setVisible(false);}
            if(configObj.hasOwnProperty("cfghotlinksize2")){this.getSourcesconfigurationpictureshotlinkcfghotlinksize2().setValue(configObj["cfghotlinksize2"]);
            } else {this.getSourcesconfigurationpictureshotlinkcfghotlinksize2().setVisible(false);}
            if(configObj.hasOwnProperty("cfghotlinksize3")){this.getSourcesconfigurationpictureshotlinkcfghotlinksize3().setValue(configObj["cfghotlinksize3"]);
            } else {this.getSourcesconfigurationpictureshotlinkcfghotlinksize3().setVisible(false);}
            if(configObj.hasOwnProperty("cfghotlinksize4")){this.getSourcesconfigurationpictureshotlinkcfghotlinksize4().setValue(configObj["cfghotlinksize4"]);
            } else {this.getSourcesconfigurationpictureshotlinkcfghotlinksize4().setVisible(false);}
            if(configObj.hasOwnProperty("cfghotlinkerrorcreate")){this.getSourcesconfigurationpictureshotlinkcfghotlinkerrorcreate().setValue(configObj["cfghotlinkerrorcreate"]);
            } else {this.getSourcesconfigurationpictureshotlinkcfghotlinkerrorcreate().setVisible(false);}

            if(configObj.hasOwnProperty("cfgsavepictures")){this.getSourcesconfigurationpicturesarchivescfgsavepictures().setValue(configObj["cfgsavepictures"]);
            } else {this.getSourcesconfigurationpicturesarchivescfgsavepictures().setVisible(false);}
            if(configObj.hasOwnProperty("cfgarchivesize")){this.getSourcesconfigurationpicturesarchivescfgarchivesize().setValue(configObj["cfgarchivesize"]);
            } else {this.getSourcesconfigurationpicturesarchivescfgarchivesize().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcaptureminisize")){this.getSourcesconfigurationpicturesarchivescfgcaptureminisize().setValue(configObj["cfgcaptureminisize"]);
            } else {this.getSourcesconfigurationpicturesarchivescfgcaptureminisize().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcapturedeleteafterdays")){this.getSourcesconfigurationpicturesarchivescfgcapturedeleteafterdays().setValue(configObj["cfgcapturedeleteafterdays"]);
            } else {this.getSourcesconfigurationpicturesarchivescfgcapturedeleteafterdays().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcapturemaxdirsize")){this.getSourcesconfigurationpicturesarchivescfgcapturemaxdirsize().setValue(configObj["cfgcapturemaxdirsize"]);
            } else {this.getSourcesconfigurationpicturesarchivescfgcapturemaxdirsize().setVisible(false);}

            if(configObj.hasOwnProperty("cfgftpmainserverid")){this.getSourcesconfigurationpicturesftpcfgftpmainserverid().setValue(configObj["cfgftpmainserverid"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftpmainserverid().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpmainserverraw")){this.getSourcesconfigurationpicturesftpcfgftpmainserverraw().setValue(configObj["cfgftpmainserverraw"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftpmainserverraw().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpmainserverretry")){this.getSourcesconfigurationpicturesftpcfgftpmainserverretry().setValue(configObj["cfgftpmainserverretry"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftpmainserverretry().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpsecondserverid")){this.getSourcesconfigurationpicturesftpcfgftpsecondserverid().setValue(configObj["cfgftpsecondserverid"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftpsecondserverid().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpsecondserverraw")){this.getSourcesconfigurationpicturesftpcfgftpsecondserverraw().setValue(configObj["cfgftpsecondserverraw"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftpsecondserverraw().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftpsecondserverretry")){this.getSourcesconfigurationpicturesftpcfgftpsecondserverretry().setValue(configObj["cfgftpsecondserverretry"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftpsecondserverretry().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftphotlinkserverid")){this.getSourcesconfigurationpicturesftpcfgftphotlinkserverid().setValue(configObj["cfgftphotlinkserverid"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftphotlinkserverid().setVisible(false);}
            if(configObj.hasOwnProperty("cfgftphotlinkserverretry")){this.getSourcesconfigurationpicturesftpcfgftphotlinkserverretry().setValue(configObj["cfgftphotlinkserverretry"]);
            } else {this.getSourcesconfigurationpicturesftpcfgftphotlinkserverretry().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcopymainsourceid")){this.getSourcesconfigurationpicturescopycfgcopymainsourceid().setValue(configObj["cfgcopymainsourceid"]);
            } else {this.getSourcesconfigurationpicturescopycfgcopymainsourceid().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcopymainsourceraw")){this.getSourcesconfigurationpicturescopycfgcopymainsourceraw().setValue(configObj["cfgcopymainsourceraw"]);
            } else {this.getSourcesconfigurationpicturescopycfgcopymainsourceraw().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcopymainenable")){this.getSourcesconfigurationpicturescopycfgcopymainenable().setValue(configObj["cfgcopymainenable"]);
            } else {this.getSourcesconfigurationpicturescopycfgcopymainenable().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcopysecondsourceid")){this.getSourcesconfigurationpicturescopycfgcopysecondsourceid().setValue(configObj["cfgcopysecondsourceid"]);
            } else {this.getSourcesconfigurationpicturescopycfgcopysecondsourceid().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcopysecondsourceraw")){this.getSourcesconfigurationpicturescopycfgcopysecondsourceraw().setValue(configObj["cfgcopysecondsourceraw"]);
            } else {this.getSourcesconfigurationpicturescopycfgcopysecondsourceraw().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcopysecondenable")){this.getSourcesconfigurationpicturescopycfgcopysecondenable().setValue(configObj["cfgcopysecondenable"]);
            } else {this.getSourcesconfigurationpicturescopycfgcopysecondenable().setVisible(false);}

            if(configObj.hasOwnProperty("cfgrotateactivate") && configObj["cfgrotateactivate"] == "yes") {this.getSourcesconfigurationpicturesrotatemain().expand();}
            else if (configObj.hasOwnProperty("cfgrotateactivate")) {this.getSourcesconfigurationpicturesrotatemain().collapse();}

            if(configObj.hasOwnProperty("cfgcropactivate") && configObj["cfgcropactivate"] == "yes") {this.getSourcesconfigurationpicturescropmain().expand();}
            else if (configObj.hasOwnProperty("cfgcropactivate")) {this.getSourcesconfigurationpicturescropmain().collapse();}

            if(configObj.hasOwnProperty("cfgpicwatermarkactivate") && configObj["cfgpicwatermarkactivate"] == "yes") {this.getSourcesconfigurationpictureswatermarkmain().expand();}
            else if (configObj.hasOwnProperty("cfgpicwatermarkactivate")) {this.getSourcesconfigurationpictureswatermarkmain().collapse();}

            if(configObj.hasOwnProperty("cfgimagemagicktxt") && configObj["cfgimagemagicktxt"] == "yes") {this.getSourcesconfigurationpicturestextmain().expand();}
            else if (configObj.hasOwnProperty("cfgimagemagicktxt")) {this.getSourcesconfigurationpicturestextmain().collapse();}

            if(configObj.hasOwnProperty("cfghotlinksize1") && configObj["cfghotlinksize1"] == "") {this.getSourcesconfigurationpictureshotlinkmain().expand();}
            else if (configObj.hasOwnProperty("cfghotlinksize1")) {this.getSourcesconfigurationpictureshotlinkmain().collapse();}

            if(configObj.hasOwnProperty("cfgsavepictures") && configObj["cfgsavepictures"] == "") {this.getSourcesconfigurationpicturesarchivesmain().expand();}
            else if (configObj.hasOwnProperty("cfgsavepictures")) {this.getSourcesconfigurationpicturesarchivesmain().collapse();}

            var configObj = {};
            this.getSourcesconfigurationSectionCaptureStore().each(function (rec) {
                var configName = rec.get("NAME");
                configObj[configName] = true;
            });

            if(!configObj.hasOwnProperty("archives")){this.getSourcesconfigurationpicturesarchivesmain().setVisible(false);}
            if(!configObj.hasOwnProperty("local-copy")){this.getSourcesconfigurationpicturescopymain().setVisible(false);}
            if(!configObj.hasOwnProperty("crop")){this.getSourcesconfigurationpicturescropmain().setVisible(false);}
            if(!configObj.hasOwnProperty("ftp-copy")){this.getSourcesconfigurationpicturesftpmain().setVisible(false);}
            if(!configObj.hasOwnProperty("hotlink")){this.getSourcesconfigurationpictureshotlinkmain().setVisible(false);}
            if(!configObj.hasOwnProperty("rotate")){this.getSourcesconfigurationpicturesrotatemain().setVisible(false);}
            if(!configObj.hasOwnProperty("text")){this.getSourcesconfigurationpicturestextmain().setVisible(false);}
            if(!configObj.hasOwnProperty("watermark")){this.getSourcesconfigurationpictureswatermarkmain().setVisible(false);}

            this.getSourcesconfigurationpicturesmain().setDisabled(false);
        }
    }

    , clearFTPServer: function(serverId) {
        this.consoleLog("clearFTPServer()");
        if (this.getSourcesconfigurationpicturesftpcfgftpmainserverid().getValue() == serverId) {
           this.getSourcesconfigurationpicturesftpcfgftpmainserverid().setValue();
        }
        if (this.getSourcesconfigurationpicturesftpcfgftpsecondserverid().getValue() == serverId) {
           this.getSourcesconfigurationpicturesftpcfgftpsecondserverid().setValue();
        }
        if (this.getSourcesconfigurationpicturesftpcfgftphotlinkserverid().getValue() == serverId) {
           this.getSourcesconfigurationpicturesftpcfgftphotlinkserverid().setValue();
        }
    }

});
