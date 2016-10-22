/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.sourcesconfiguration.customvideos.Videos");
//</debug>
Ext.define("WPAKD.controller.sourcesconfiguration.customvideos.Videos", {
    extend: "Ext.app.Controller",

    views: [
        "sourcesconfiguration.customvideos.Main"

        , "sourcesconfiguration.customvideos.formats.Main"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pcreate"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pcreateflv"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH2641080pfps"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264720pcreate"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264720pcreateflv"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264720pfps"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264480pcreate"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264480pcreateflv"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264480pfps"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264customcreate"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264customcreateflv"
        , "sourcesconfiguration.customvideos.formats.CfgvideocodecH264customfps"

        , "sourcesconfiguration.customvideos.advanced.Main"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pbitrate"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pcropheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pcropwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pcropx"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pcropy"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH2641080pwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pbitrate"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pcropheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pcropwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pcropx"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pcropy"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264720pwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pbitrate"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pcropheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pcropwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pcropx"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pcropy"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264480pwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264custombitrate"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customcropheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customcropwidth"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customcropx"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customcropy"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customheight"
        , "sourcesconfiguration.customvideos.advanced.CfgvideocodecH264customwidth"

        , "sourcesconfiguration.customvideos.filter.Main"
        , "sourcesconfiguration.customvideos.filter.Cfgfilteractivate"
        , "sourcesconfiguration.customvideos.filter.Cfgfiltervalue"
        , "sourcesconfiguration.customvideos.filter.Cfgfilterwatermarkfile"

        , "sourcesconfiguration.customvideos.watermark.Main"
        , "sourcesconfiguration.customvideos.watermark.Cfgwatermarkactivate"
        , "sourcesconfiguration.customvideos.watermark.Cfgwatermarkdissolve"
        , "sourcesconfiguration.customvideos.watermark.Cfgwatermarkfile"
        , "sourcesconfiguration.customvideos.watermark.Cfgwatermarkpositionx"
        , "sourcesconfiguration.customvideos.watermark.Cfgwatermarkpositiony"

        , "sourcesconfiguration.customvideos.preprocess.Main"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimagemagicktxt"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgdateformat"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtext"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextbasecolor"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextbaseposition"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextfont"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextgravity"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextovercolor"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextoverposition"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreimgtextsize"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreresize"
        , "sourcesconfiguration.customvideos.preprocess.Cfgvideopreresizeres"

        , "sourcesconfiguration.customvideos.audio.Main"
        , "sourcesconfiguration.customvideos.audio.Cfgvideoaddaudio"
        , "sourcesconfiguration.customvideos.audio.Cfgvideoaudiofile"

        , "sourcesconfiguration.customvideos.create.Main"
        , "sourcesconfiguration.customvideos.create.Cfgcustomactive"
        , "sourcesconfiguration.customvideos.create.Cfgcustomenddate"
        , "sourcesconfiguration.customvideos.create.Cfgcustomendhour"
        , "sourcesconfiguration.customvideos.create.Cfgcustomendminute"
        , "sourcesconfiguration.customvideos.create.Cfgcustomkeependhour"
        , "sourcesconfiguration.customvideos.create.Cfgcustomkeependminute"
        , "sourcesconfiguration.customvideos.create.Cfgcustomkeepstarthour"
        , "sourcesconfiguration.customvideos.create.Cfgcustomkeepstartminute"
        , "sourcesconfiguration.customvideos.create.Cfgcustomstartdate"
        , "sourcesconfiguration.customvideos.create.Cfgcustomstarthour"
        , "sourcesconfiguration.customvideos.create.Cfgcustomstartminute"
        , "sourcesconfiguration.customvideos.create.Cfgcustomvidname"
        , "sourcesconfiguration.customvideos.create.Cfgemailmovieactivate"
        , "sourcesconfiguration.customvideos.create.Cfgvidmininterval"
        , "sourcesconfiguration.customvideos.create.Cfgvidminintervalvalue"

    ],

    stores: [
        "shared.Sources"
        , "sourcesconfiguration.VideoCustom"
        , "sourcesconfiguration.SectionVideoCustom"
        , "sourcesconfiguration.ConfigurationTabs"

    ],

    models: [
        "shared.Sources"
        , "sourcesconfiguration.VideoCustom"
        , "sourcesconfiguration.SectionVideoCustom"
        , "sourcesconfiguration.ConfigurationTabs"

    ],

    refs: [
        {ref: "sourcesconfigurationcustomvideosmain",           selector: "sourcesconfigurationcustomvideosmain"        }

        , {ref: "sourcesconfigurationcustomvideosformatsmain",                                selector: "sourcesconfigurationcustomvideosformatsmain"                               }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreate",        selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreate"       }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreateflv",     selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreateflv"    }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pfps",           selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH2641080pfps"          }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreate",         selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreate"        }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreateflv",      selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreateflv"     }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pfps",            selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264720pfps"           }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreate",         selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreate"        }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreateflv",      selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreateflv"     }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pfps",            selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264480pfps"           }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreate",       selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreate"      }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreateflv",    selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customcreateflv"   }
        , {ref: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customfps",          selector: "sourcesconfigurationcustomvideosformatscfgvideocodecH264customfps"         }

        , {ref: "sourcesconfigurationcustomvideosadvancedmain",                               selector: "sourcesconfigurationcustomvideosadvancedmain"                              }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pbitrate",      selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pbitrate"     }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropheight",   selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropheight"  }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropwidth",    selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropwidth"   }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropx",        selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropx"       }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropy",        selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropy"       }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pheight",       selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pheight"      }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pwidth",        selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pwidth"       }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pbitrate",       selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pbitrate"      }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropheight",    selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropheight"   }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropwidth",     selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropwidth"    }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropx",         selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropx"        }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropy",         selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropy"        }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pheight",        selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pheight"       }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pwidth",         selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pwidth"        }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pbitrate",       selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pbitrate"      }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropheight",    selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropheight"   }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropwidth",     selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropwidth"    }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropx",         selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropx"        }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropy",         selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropy"        }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pheight",        selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pheight"       }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pwidth",         selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pwidth"        }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264custombitrate",     selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264custombitrate"    }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropheight",  selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropheight" }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropwidth",   selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropwidth"  }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropx",       selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropx"      }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropy",       selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropy"      }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customheight",      selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customheight"     }
        , {ref: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customwidth",       selector: "sourcesconfigurationcustomvideosadvancedcfgvideocodecH264customwidth"      }

        , {ref: "sourcesconfigurationcustomvideosfiltermain",                     selector: "sourcesconfigurationcustomvideosfiltermain"                   }
        , {ref: "sourcesconfigurationcustomvideosfiltercfgfilteractivate",        selector: "sourcesconfigurationcustomvideosfiltercfgfilteractivate"      }
        , {ref: "sourcesconfigurationcustomvideosfiltercfgfiltervalue",           selector: "sourcesconfigurationcustomvideosfiltercfgfiltervalue"         }
        , {ref: "sourcesconfigurationcustomvideosfiltercfgfilterwatermarkfile",   selector: "sourcesconfigurationcustomvideosfiltercfgfilterwatermarkfile" }

        , {ref: "sourcesconfigurationcustomvideoswatermarkmain",                  selector: "sourcesconfigurationcustomvideoswatermarkmain"                    }
        , {ref: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkactivate",  selector: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkactivate"    }
        , {ref: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkdissolve",  selector: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkdissolve"    }
        , {ref: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkfile",      selector: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkfile"        }
        , {ref: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositionx", selector: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositionx"   }
        , {ref: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositiony", selector: "sourcesconfigurationcustomvideoswatermarkcfgwatermarkpositiony"   }

        , {ref: "sourcesconfigurationcustomvideospreprocessmain",                             selector: "sourcesconfigurationcustomvideospreprocessmain"                            }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimagemagicktxt",        selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimagemagicktxt"       }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgdateformat",         selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgdateformat"        }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtext",               selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtext"              }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbasecolor",      selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbasecolor"     }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbaseposition",   selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbaseposition"  }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextfont",           selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextfont"          }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextgravity",        selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextgravity"       }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextovercolor",      selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextovercolor"     }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextoverposition",   selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextoverposition"  }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextsize",           selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextsize"          }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreresize",                selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreresize"               }
        , {ref: "sourcesconfigurationcustomvideospreprocesscfgvideopreresizeres",             selector: "sourcesconfigurationcustomvideospreprocesscfgvideopreresizeres"            }

        , {ref: "sourcesconfigurationcustomvideosaudiomain",              selector: "sourcesconfigurationcustomvideosaudiomain"             }
        , {ref: "sourcesconfigurationcustomvideosaudiocfgvideoaddaudio",  selector: "sourcesconfigurationcustomvideosaudiocfgvideoaddaudio" }
        , {ref: "sourcesconfigurationcustomvideosaudiocfgvideoaudiofile", selector: "sourcesconfigurationcustomvideosaudiocfgvideoaudiofile"}

        , {ref: "sourcesconfigurationcustomvideoscreatemain",                           selector: "sourcesconfigurationcustomvideoscreatemain"                          }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomactive",                selector: "sourcesconfigurationcustomvideoscreatecfgcustomactive"               }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomenddate",               selector: "sourcesconfigurationcustomvideoscreatecfgcustomenddate"              }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomendhour",               selector: "sourcesconfigurationcustomvideoscreatecfgcustomendhour"              }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomendminute",             selector: "sourcesconfigurationcustomvideoscreatecfgcustomendminute"            }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomkeependhour",           selector: "sourcesconfigurationcustomvideoscreatecfgcustomkeependhour"          }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomkeependminute",         selector: "sourcesconfigurationcustomvideoscreatecfgcustomkeependminute"        }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomkeepstarthour",         selector: "sourcesconfigurationcustomvideoscreatecfgcustomkeepstarthour"        }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomkeepstartminute",       selector: "sourcesconfigurationcustomvideoscreatecfgcustomkeepstartminute"      }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomstartdate",             selector: "sourcesconfigurationcustomvideoscreatecfgcustomstartdate"            }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomstarthour",             selector: "sourcesconfigurationcustomvideoscreatecfgcustomstarthour"            }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomstartminute",           selector: "sourcesconfigurationcustomvideoscreatecfgcustomstartminute"          }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgcustomvidname",               selector: "sourcesconfigurationcustomvideoscreatecfgcustomvidname"              }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgemailmovieactivate",          selector: "sourcesconfigurationcustomvideoscreatecfgemailmovieactivate"         }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgvidmininterval",              selector: "sourcesconfigurationcustomvideoscreatecfgvidmininterval"             }
        , {ref: "sourcesconfigurationcustomvideoscreatecfgvidminintervalvalue",         selector: "sourcesconfigurationcustomvideoscreatecfgvidminintervalvalue"        }

    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration: Controller init: function()");
        this.control({
            "*": {
                "WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateStoreValue": this.updateStoreValue
                , "WPAKD.controller.sourcesconfiguration.customvideos.Videos.updateDate": this.updateDate
            }
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.sourcesconfiguration.customvideos.Videos.loadSettings":       this.loadSettings
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->SourcesConfiguration->CustomVideos: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationVideoCustomStore().findRecord("NAME", configName, 0, false, false, true);
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

    , updateDate: function(newValue, oldValue, dateType) {
        //Date Type is either end or start
        if (newValue !== null) {
            var configRecordDay = this.getSourcesconfigurationVideoCustomStore().findRecord("NAME", "cfgcustom" + dateType + "day", 0, false, false, true);
            if (configRecordDay !== undefined && configRecordDay !== null) {
                var fieldDay = newValue.getDate();
                if (fieldDay < 10) {
                    fieldDay = "0" + fieldDay;
                }
                if (configRecordDay.get("VALUE") != fieldDay) {
                    this.consoleLog("updateDate(): update config: " + "cfgcustom" + dateType + "day" + " from: " + configRecordDay.get("VALUE") + " to: " + fieldDay, "info");
                    configRecordDay.set("VALUE", fieldDay);
                    this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
                }
            }
            var configRecordMonth = this.getSourcesconfigurationVideoCustomStore().findRecord("NAME", "cfgcustom" + dateType + "month", 0, false, false, true);
            if (configRecordMonth !== undefined && configRecordMonth !== null) {
                var fieldMonth = newValue.getMonth() + 1;
                if (fieldMonth < 10) {
                    fieldMonth = "0" + fieldMonth;
                }
                if (configRecordMonth.get("VALUE") != fieldMonth) {
                    this.consoleLog("updateDate(): update config: " + "cfgcustom" + dateType + "month" + " from: " + configRecordMonth.get("VALUE") + " to: " + fieldMonth, "info");
                    configRecordMonth.set("VALUE", fieldMonth);
                    this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
                }
            }
            var configRecordYear = this.getSourcesconfigurationVideoCustomStore().findRecord("NAME", "cfgcustom" + dateType + "year", 0, false, false, true);
            if (configRecordYear !== undefined && configRecordYear !== null) {
                var fieldYear = newValue.getFullYear();
                if (configRecordYear.get("VALUE") != fieldYear) {
                    this.consoleLog("updateDate(): update config: " + "cfgcustom" + dateType + "year" + " from: " + configRecordYear.get("VALUE") + " to: " + fieldYear, "info");
                    configRecordYear.set("VALUE", fieldYear);
                    this.fireEvent("WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores");
                }
            } else {
                this.consoleLog("updateStoreValue(): Unable to find: " + configName, "warn");
            }
        }
    }


    , loadSettings: function() {
        this.consoleLog("loadSettings()");
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord("NAME", "config-source-video", 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationcustomvideosmain().setVisible(false);
        } else {

            var scope = this;

            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationVideoCustomStore().each(function (rec) {
                var configValue = rec.get("VALUE");
                var configName = rec.get("NAME");
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty("cfgvideocodecH2641080pcreate")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreate().setValue(configObj["cfgvideocodecH2641080pcreate"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pcreateflv")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreateflv().setValue(configObj["cfgvideocodecH2641080pcreateflv"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH2641080pcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pfps")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH2641080pfps().setValue(configObj["cfgvideocodecH2641080pfps"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH2641080pfps().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pcreate")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreate().setValue(configObj["cfgvideocodecH264720pcreate"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pcreateflv")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreateflv().setValue(configObj["cfgvideocodecH264720pcreateflv"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264720pcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pfps")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264720pfps().setValue(configObj["cfgvideocodecH264720pfps"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264720pfps().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pcreate")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreate().setValue(configObj["cfgvideocodecH264480pcreate"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pcreateflv")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreateflv().setValue(configObj["cfgvideocodecH264480pcreateflv"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264480pcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pfps")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264480pfps().setValue(configObj["cfgvideocodecH264480pfps"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264480pfps().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customcreate")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264customcreate().setValue(configObj["cfgvideocodecH264customcreate"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264customcreate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customcreateflv")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264customcreateflv().setValue(configObj["cfgvideocodecH264customcreateflv"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264customcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customfps")){this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264customfps().setValue(configObj["cfgvideocodecH264customfps"]);
            } else {this.getSourcesconfigurationcustomvideosformatscfgvideocodecH264customfps().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideocodecH2641080pbitrate")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pbitrate().setValue(configObj["cfgvideocodecH2641080pbitrate"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pbitrate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pcropheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropheight().setValue(configObj["cfgvideocodecH2641080pcropheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pcropwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropwidth().setValue(configObj["cfgvideocodecH2641080pcropwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pcropx")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropx().setValue(configObj["cfgvideocodecH2641080pcropx"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropx().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pcropy")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropy().setValue(configObj["cfgvideocodecH2641080pcropy"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pcropy().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pheight().setValue(configObj["cfgvideocodecH2641080pheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH2641080pwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pwidth().setValue(configObj["cfgvideocodecH2641080pwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH2641080pwidth().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideocodecH264720pbitrate")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pbitrate().setValue(configObj["cfgvideocodecH264720pbitrate"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pbitrate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pcropheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropheight().setValue(configObj["cfgvideocodecH264720pcropheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pcropwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropwidth().setValue(configObj["cfgvideocodecH264720pcropwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pcropx")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropx().setValue(configObj["cfgvideocodecH264720pcropx"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropx().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pcropy")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropy().setValue(configObj["cfgvideocodecH264720pcropy"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pcropy().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pheight().setValue(configObj["cfgvideocodecH264720pheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264720pwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pwidth().setValue(configObj["cfgvideocodecH264720pwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264720pwidth().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideocodecH264480pbitrate")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pbitrate().setValue(configObj["cfgvideocodecH264480pbitrate"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pbitrate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pcropheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropheight().setValue(configObj["cfgvideocodecH264480pcropheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pcropwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropwidth().setValue(configObj["cfgvideocodecH264480pcropwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pcropx")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropx().setValue(configObj["cfgvideocodecH264480pcropx"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropx().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pcropy")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropy().setValue(configObj["cfgvideocodecH264480pcropy"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pcropy().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pheight().setValue(configObj["cfgvideocodecH264480pheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264480pwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pwidth().setValue(configObj["cfgvideocodecH264480pwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264480pwidth().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideocodecH264custombitrate")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264custombitrate().setValue(configObj["cfgvideocodecH264custombitrate"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264custombitrate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customcropheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropheight().setValue(configObj["cfgvideocodecH264customcropheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customcropwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropwidth().setValue(configObj["cfgvideocodecH264customcropwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customcropx")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropx().setValue(configObj["cfgvideocodecH264customcropx"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropx().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customcropy")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropy().setValue(configObj["cfgvideocodecH264customcropy"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customcropy().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customheight")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customheight().setValue(configObj["cfgvideocodecH264customheight"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customheight().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideocodecH264customwidth")){this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customwidth().setValue(configObj["cfgvideocodecH264customwidth"]);
            } else {this.getSourcesconfigurationcustomvideosadvancedcfgvideocodecH264customwidth().setVisible(false);}

            if(configObj.hasOwnProperty("cfgfilteractivate")){this.getSourcesconfigurationcustomvideosfiltercfgfilteractivate().setValue(configObj["cfgfilteractivate"]);
            } else {this.getSourcesconfigurationcustomvideosfiltercfgfilteractivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgfiltervalue")){this.getSourcesconfigurationcustomvideosfiltercfgfiltervalue().setValue(configObj["cfgfiltervalue"]);
            } else {this.getSourcesconfigurationcustomvideosfiltercfgfiltervalue().setVisible(false);}
            if(configObj.hasOwnProperty("cfgfilterwatermarkfile")){this.getSourcesconfigurationcustomvideosfiltercfgfilterwatermarkfile().setValue(configObj["cfgfilterwatermarkfile"]);
            } else {this.getSourcesconfigurationcustomvideosfiltercfgfilterwatermarkfile().setVisible(false);}

            if(configObj.hasOwnProperty("cfgwatermarkactivate")){this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkactivate().setValue(configObj["cfgwatermarkactivate"]);
            } else {this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkactivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgwatermarkdissolve")){this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkdissolve().setValue(configObj["cfgwatermarkdissolve"]);
            } else {this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkdissolve().setVisible(false);}
            if(configObj.hasOwnProperty("cfgwatermarkfile")){this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkfile().setValue(configObj["cfgwatermarkfile"]);
            } else {this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkfile().setVisible(false);}
            if(configObj.hasOwnProperty("cfgwatermarkpositionx")){this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkpositionx().setValue(configObj["cfgwatermarkpositionx"]);
            } else {this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkpositionx().setVisible(false);}
            if(configObj.hasOwnProperty("cfgwatermarkpositiony")){this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkpositiony().setValue(configObj["cfgwatermarkpositiony"]);
            } else {this.getSourcesconfigurationcustomvideoswatermarkcfgwatermarkpositiony().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideopreimagemagicktxt")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimagemagicktxt().setValue(configObj["cfgvideopreimagemagicktxt"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimagemagicktxt().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgdateformat")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgdateformat().setValue(configObj["cfgvideopreimgdateformat"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgdateformat().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtext")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtext().setValue(configObj["cfgvideopreimgtext"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtext().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextbasecolor")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbasecolor().setValue(configObj["cfgvideopreimgtextbasecolor"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbasecolor().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextbaseposition")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbaseposition().setValue(configObj["cfgvideopreimgtextbaseposition"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbaseposition().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextfont")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextfont().setValue(configObj["cfgvideopreimgtextfont"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextfont().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextgravity")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextgravity().setValue(configObj["cfgvideopreimgtextgravity"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextgravity().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextovercolor")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextovercolor().setValue(configObj["cfgvideopreimgtextovercolor"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextovercolor().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextoverposition")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextoverposition().setValue(configObj["cfgvideopreimgtextoverposition"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextoverposition().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreimgtextsize")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextsize().setValue(configObj["cfgvideopreimgtextsize"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreimgtextsize().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreresize")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreresize().setValue(configObj["cfgvideopreresize"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreresize().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideopreresizeres")){this.getSourcesconfigurationcustomvideospreprocesscfgvideopreresizeres().setValue(configObj["cfgvideopreresizeres"]);
            } else {this.getSourcesconfigurationcustomvideospreprocesscfgvideopreresizeres().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideoaddaudio")){this.getSourcesconfigurationcustomvideosaudiocfgvideoaddaudio().setValue(configObj["cfgvideoaddaudio"]);
            } else {this.getSourcesconfigurationcustomvideosaudiocfgvideoaddaudio().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvideoaudiofile")){this.getSourcesconfigurationcustomvideosaudiocfgvideoaudiofile().setValue(configObj["cfgvideoaudiofile"]);
            } else {this.getSourcesconfigurationcustomvideosaudiocfgvideoaudiofile().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcustomactive")){this.getSourcesconfigurationcustomvideoscreatecfgcustomactive().setValue(configObj["cfgcustomactive"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomactive().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcustomendday")){
                var currentEndDate = configObj["cfgcustomendday"] + "/" + configObj["cfgcustomendmonth"] + "/" + configObj["cfgcustomendyear"];
                this.getSourcesconfigurationcustomvideoscreatecfgcustomenddate().setValue(currentEndDate);
            } else {
                this.getSourcesconfigurationcustomvideoscreatecfgcustomenddate().setVisible(false);
            }
            if(configObj.hasOwnProperty("cfgcustomendhour")){this.getSourcesconfigurationcustomvideoscreatecfgcustomendhour().setValue(configObj["cfgcustomendhour"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomendhour().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcustomendminute")){this.getSourcesconfigurationcustomvideoscreatecfgcustomendminute().setValue(configObj["cfgcustomendminute"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomendminute().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcustomkeependhour")){this.getSourcesconfigurationcustomvideoscreatecfgcustomkeependhour().setValue(configObj["cfgcustomkeependhour"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomkeependhour().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcustomkeependminute")){this.getSourcesconfigurationcustomvideoscreatecfgcustomkeependminute().setValue(configObj["cfgcustomkeependminute"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomkeependminute().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcustomkeepstarthour")){this.getSourcesconfigurationcustomvideoscreatecfgcustomkeepstarthour().setValue(configObj["cfgcustomkeepstarthour"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomkeepstarthour().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcustomkeepstartminute")){this.getSourcesconfigurationcustomvideoscreatecfgcustomkeepstartminute().setValue(configObj["cfgcustomkeepstartminute"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomkeepstartminute().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcustomstartday")){
                var currentStartDate = configObj["cfgcustomstartday"] + "/" + configObj["cfgcustomstartmonth"] + "/" + configObj["cfgcustomstartyear"];
                this.getSourcesconfigurationcustomvideoscreatecfgcustomstartdate().setValue(currentStartDate);
            } else {
                this.getSourcesconfigurationcustomvideoscreatecfgcustomstartdate().setVisible(false);
            }
            if(configObj.hasOwnProperty("cfgcustomstarthour")){this.getSourcesconfigurationcustomvideoscreatecfgcustomstarthour().setValue(configObj["cfgcustomstarthour"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomstarthour().setVisible(false);}
            if(configObj.hasOwnProperty("cfgcustomstartminute")){this.getSourcesconfigurationcustomvideoscreatecfgcustomstartminute().setValue(configObj["cfgcustomstartminute"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomstartminute().setVisible(false);}

            if(configObj.hasOwnProperty("cfgcustomvidname")){this.getSourcesconfigurationcustomvideoscreatecfgcustomvidname().setValue(configObj["cfgcustomvidname"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgcustomvidname().setVisible(false);}
            if(configObj.hasOwnProperty("cfgemailmovieactivate")){this.getSourcesconfigurationcustomvideoscreatecfgemailmovieactivate().setValue(configObj["cfgemailmovieactivate"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgemailmovieactivate().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvidmininterval")){this.getSourcesconfigurationcustomvideoscreatecfgvidmininterval().setValue(configObj["cfgvidmininterval"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgvidmininterval().setVisible(false);}
            if(configObj.hasOwnProperty("cfgvidminintervalvalue")){this.getSourcesconfigurationcustomvideoscreatecfgvidminintervalvalue().setValue(configObj["cfgvidminintervalvalue"]);
            } else {this.getSourcesconfigurationcustomvideoscreatecfgvidminintervalvalue().setVisible(false);}

            if(configObj.hasOwnProperty("cfgvideoaddaudio") && configObj["cfgvideoaddaudio"] == "yes") {this.getSourcesconfigurationcustomvideosaudiomain().expand();}
            else if (configObj.hasOwnProperty("cfgvideoaddaudio")) {this.getSourcesconfigurationcustomvideosaudiomain().collapse();}
            if(configObj.hasOwnProperty("cfgvideopreimagemagicktxt") && configObj["cfgvideopreimagemagicktxt"] == "yes") {this.getSourcesconfigurationcustomvideospreprocessmain().expand();}
            else if (configObj.hasOwnProperty("cfgvideopreimagemagicktxt")) {this.getSourcesconfigurationcustomvideospreprocessmain().collapse();}
            if(configObj.hasOwnProperty("cfgwatermarkactivate") && configObj["cfgwatermarkactivate"] == "yes") {this.getSourcesconfigurationcustomvideoswatermarkmain().expand();}
            else if (configObj.hasOwnProperty("cfgwatermarkactivate")) {this.getSourcesconfigurationcustomvideoswatermarkmain().collapse();}
            if(configObj.hasOwnProperty("cfgfilteractivate") && configObj["cfgfilteractivate"] == "yes") {this.getSourcesconfigurationcustomvideosfiltermain().expand();}
            else if (configObj.hasOwnProperty("cfgfilteractivate")) {this.getSourcesconfigurationcustomvideosfiltermain().collapse();}

            var configObj = {};
            this.getSourcesconfigurationSectionVideoCustomStore().each(function (rec) {
                var configName = rec.get("NAME");
                configObj[configName] = true;
            });

            if(!configObj.hasOwnProperty("video")){this.getSourcesconfigurationcustomvideosadvancedmain().setVisible(false);}
            if(!configObj.hasOwnProperty("audio")){this.getSourcesconfigurationcustomvideosaudiomain().setVisible(false);}
            if(!configObj.hasOwnProperty("filter")){this.getSourcesconfigurationcustomvideosfiltermain().setVisible(false);}
            if(!configObj.hasOwnProperty("video")){this.getSourcesconfigurationcustomvideosformatsmain().setVisible(false);}
            if(!configObj.hasOwnProperty("legend")){this.getSourcesconfigurationcustomvideospreprocessmain().setVisible(false);}
            if(!configObj.hasOwnProperty("watermark")){this.getSourcesconfigurationcustomvideoswatermarkmain().setVisible(false);}

            this.getSourcesconfigurationcustomvideosmain().setDisabled(false);
        }
    }
});
