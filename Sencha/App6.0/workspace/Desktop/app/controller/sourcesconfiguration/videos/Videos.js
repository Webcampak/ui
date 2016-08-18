//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.sourcesconfiguration.videos.Videos');
//</debug>
Ext.define('WPAKD.controller.sourcesconfiguration.videos.Videos', {
    extend: 'Ext.app.Controller',

    views: [
        'sourcesconfiguration.videos.Main'

        , 'sourcesconfiguration.videos.formats.Main'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH2641080pcreate'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH2641080pcreateflv'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH2641080pfps'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264720pcreate'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264720pcreateflv'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264720pfps'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264480pcreate'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264480pcreateflv'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264480pfps'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264customcreate'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264customcreateflv'
        , 'sourcesconfiguration.videos.formats.CfgvideocodecH264customfps'

        , 'sourcesconfiguration.videos.advanced.Main'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pbitrate'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pcropheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pcropwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pcropx'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pcropy'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH2641080pwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pbitrate'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pcropheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pcropwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pcropx'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pcropy'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264720pwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pbitrate'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pcropheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pcropwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pcropx'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pcropy'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264480pwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264custombitrate'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264customcropheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264customcropwidth'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264customcropx'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264customcropy'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264customheight'
        , 'sourcesconfiguration.videos.advanced.CfgvideocodecH264customwidth'

        , 'sourcesconfiguration.videos.filter.Main'
        , 'sourcesconfiguration.videos.filter.Cfgfilteractivate'
        , 'sourcesconfiguration.videos.filter.Cfgfiltervalue'
        , 'sourcesconfiguration.videos.filter.Cfgfilterwatermarkfile'

        , 'sourcesconfiguration.videos.watermark.Main'
        , 'sourcesconfiguration.videos.watermark.Cfgwatermarkactivate'
        , 'sourcesconfiguration.videos.watermark.Cfgwatermarkdissolve'
        , 'sourcesconfiguration.videos.watermark.Cfgwatermarkfile'
        , 'sourcesconfiguration.videos.watermark.Cfgwatermarkpositionx'
        , 'sourcesconfiguration.videos.watermark.Cfgwatermarkpositiony'

        , 'sourcesconfiguration.videos.preprocess.Main'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimagemagicktxt'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgdateformat'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtext'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextbasecolor'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextbaseposition'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextfont'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextgravity'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextovercolor'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextoverposition'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreimgtextsize'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreresize'
        , 'sourcesconfiguration.videos.preprocess.Cfgvideopreresizeres'

        , 'sourcesconfiguration.videos.audio.Main'
        , 'sourcesconfiguration.videos.audio.Cfgvideoaddaudio'
        , 'sourcesconfiguration.videos.audio.Cfgvideoaudiofile'

        , 'sourcesconfiguration.videos.ftp.Main'
        , 'sourcesconfiguration.videos.ftp.Cfgftphotlinkserveraviid'
        , 'sourcesconfiguration.videos.ftp.Cfgftphotlinkserveraviretry'
        , 'sourcesconfiguration.videos.ftp.Cfgftphotlinkservermp4id'
        , 'sourcesconfiguration.videos.ftp.Cfgftphotlinkservermp4retry'
        , 'sourcesconfiguration.videos.ftp.Cfgftpmainserveraviid'
        , 'sourcesconfiguration.videos.ftp.Cfgftpmainserveraviretry'
        , 'sourcesconfiguration.videos.ftp.Cfgftpmainservermp4id'
        , 'sourcesconfiguration.videos.ftp.Cfgftpmainservermp4retry'

    ],

    stores: [
        'shared.Sources'
        , 'sourcesconfiguration.Video'
        , 'sourcesconfiguration.SectionVideo'
        , 'sourcesconfiguration.ConfigurationTabs'

    ],

    models: [
        'shared.Sources'
        , 'sourcesconfiguration.Video'
        , 'sourcesconfiguration.SectionVideo'
        , 'sourcesconfiguration.ConfigurationTabs'

    ],

    refs: [
        {ref: 'sourcesconfigurationvideosmain',           selector: 'sourcesconfigurationvideosmain'        }

        , {ref: 'sourcesconfigurationvideosformatsmain',                                selector: 'sourcesconfigurationvideosformatsmain'                               }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH2641080pcreate',        selector: 'sourcesconfigurationvideosformatscfgvideocodecH2641080pcreate'       }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH2641080pcreateflv',     selector: 'sourcesconfigurationvideosformatscfgvideocodecH2641080pcreateflv'    }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH2641080pfps',           selector: 'sourcesconfigurationvideosformatscfgvideocodecH2641080pfps'          }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264720pcreate',         selector: 'sourcesconfigurationvideosformatscfgvideocodecH264720pcreate'        }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264720pcreateflv',      selector: 'sourcesconfigurationvideosformatscfgvideocodecH264720pcreateflv'     }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264720pfps',            selector: 'sourcesconfigurationvideosformatscfgvideocodecH264720pfps'           }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264480pcreate',         selector: 'sourcesconfigurationvideosformatscfgvideocodecH264480pcreate'        }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264480pcreateflv',      selector: 'sourcesconfigurationvideosformatscfgvideocodecH264480pcreateflv'     }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264480pfps',            selector: 'sourcesconfigurationvideosformatscfgvideocodecH264480pfps'           }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264customcreate',       selector: 'sourcesconfigurationvideosformatscfgvideocodecH264customcreate'      }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264customcreateflv',    selector: 'sourcesconfigurationvideosformatscfgvideocodecH264customcreateflv'   }
        , {ref: 'sourcesconfigurationvideosformatscfgvideocodecH264customfps',          selector: 'sourcesconfigurationvideosformatscfgvideocodecH264customfps'         }

        , {ref: 'sourcesconfigurationvideosadvancedmain',                               selector: 'sourcesconfigurationvideosadvancedmain'                              }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pbitrate',      selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pbitrate'     }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropheight',   selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropheight'  }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropwidth',    selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropwidth'   }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropx',        selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropx'       }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropy',        selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropy'       }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pheight',       selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pheight'      }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pwidth',        selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH2641080pwidth'       }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pbitrate',       selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pbitrate'      }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropheight',    selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropheight'   }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropwidth',     selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropwidth'    }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropx',         selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropx'        }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropy',         selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pcropy'        }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pheight',        selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pheight'       }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pwidth',         selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264720pwidth'        }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pbitrate',       selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pbitrate'      }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropheight',    selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropheight'   }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropwidth',     selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropwidth'    }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropx',         selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropx'        }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropy',         selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pcropy'        }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pheight',        selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pheight'       }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pwidth',         selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264480pwidth'        }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264custombitrate',     selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264custombitrate'    }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropheight',  selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropheight' }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropwidth',   selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropwidth'  }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropx',       selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropx'      }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropy',       selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customcropy'      }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customheight',      selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customheight'     }
        , {ref: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customwidth',       selector: 'sourcesconfigurationvideosadvancedcfgvideocodecH264customwidth'      }

        , {ref: 'sourcesconfigurationvideosfiltermain',                     selector: 'sourcesconfigurationvideosfiltermain'                   }
        , {ref: 'sourcesconfigurationvideosfiltercfgfilteractivate',        selector: 'sourcesconfigurationvideosfiltercfgfilteractivate'      }
        , {ref: 'sourcesconfigurationvideosfiltercfgfiltervalue',           selector: 'sourcesconfigurationvideosfiltercfgfiltervalue'         }
        , {ref: 'sourcesconfigurationvideosfiltercfgfilterwatermarkfile',   selector: 'sourcesconfigurationvideosfiltercfgfilterwatermarkfile' }

        , {ref: 'sourcesconfigurationvideoswatermarkmain',                  selector: 'sourcesconfigurationvideoswatermarkmain'                    }
        , {ref: 'sourcesconfigurationvideoswatermarkcfgwatermarkactivate',  selector: 'sourcesconfigurationvideoswatermarkcfgwatermarkactivate'    }
        , {ref: 'sourcesconfigurationvideoswatermarkcfgwatermarkdissolve',  selector: 'sourcesconfigurationvideoswatermarkcfgwatermarkdissolve'    }
        , {ref: 'sourcesconfigurationvideoswatermarkcfgwatermarkfile',      selector: 'sourcesconfigurationvideoswatermarkcfgwatermarkfile'        }
        , {ref: 'sourcesconfigurationvideoswatermarkcfgwatermarkpositionx', selector: 'sourcesconfigurationvideoswatermarkcfgwatermarkpositionx'   }
        , {ref: 'sourcesconfigurationvideoswatermarkcfgwatermarkpositiony', selector: 'sourcesconfigurationvideoswatermarkcfgwatermarkpositiony'   }

        , {ref: 'sourcesconfigurationvideospreprocessmain',                             selector: 'sourcesconfigurationvideospreprocessmain'                            }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimagemagicktxt',        selector: 'sourcesconfigurationvideospreprocesscfgvideopreimagemagicktxt'       }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgdateformat',         selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgdateformat'        }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtext',               selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtext'              }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextbasecolor',      selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextbasecolor'     }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextbaseposition',   selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextbaseposition'  }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextfont',           selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextfont'          }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextgravity',        selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextgravity'       }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextovercolor',      selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextovercolor'     }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextoverposition',   selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextoverposition'  }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextsize',           selector: 'sourcesconfigurationvideospreprocesscfgvideopreimgtextsize'          }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreresize',                selector: 'sourcesconfigurationvideospreprocesscfgvideopreresize'               }
        , {ref: 'sourcesconfigurationvideospreprocesscfgvideopreresizeres',             selector: 'sourcesconfigurationvideospreprocesscfgvideopreresizeres'            }

        , {ref: 'sourcesconfigurationvideosaudiomain',              selector: 'sourcesconfigurationvideosaudiomain'             }
        , {ref: 'sourcesconfigurationvideosaudiocfgvideoaddaudio',  selector: 'sourcesconfigurationvideosaudiocfgvideoaddaudio' }
        , {ref: 'sourcesconfigurationvideosaudiocfgvideoaudiofile', selector: 'sourcesconfigurationvideosaudiocfgvideoaudiofile'}

        , {ref: 'sourcesconfigurationvideosftpmain',                        selector: 'sourcesconfigurationvideosftpmain'                           }
        , {ref: 'sourcesconfigurationvideosftpcfgftphotlinkserveraviid',    selector: 'sourcesconfigurationvideosftpcfgftphotlinkserveraviid'       }
        , {ref: 'sourcesconfigurationvideosftpcfgftphotlinkserveraviretry', selector: 'sourcesconfigurationvideosftpcfgftphotlinkserveraviretry'    }
        , {ref: 'sourcesconfigurationvideosftpcfgftphotlinkservermp4id',    selector: 'sourcesconfigurationvideosftpcfgftphotlinkservermp4id'       }
        , {ref: 'sourcesconfigurationvideosftpcfgftphotlinkservermp4retry', selector: 'sourcesconfigurationvideosftpcfgftphotlinkservermp4retry'    }
        , {ref: 'sourcesconfigurationvideosftpcfgftpmainserveraviid',       selector: 'sourcesconfigurationvideosftpcfgftpmainserveraviid'          }
        , {ref: 'sourcesconfigurationvideosftpcfgftpmainserveraviretry',    selector: 'sourcesconfigurationvideosftpcfgftpmainserveraviretry'       }
        , {ref: 'sourcesconfigurationvideosftpcfgftpmainservermp4id',       selector: 'sourcesconfigurationvideosftpcfgftpmainservermp4id'          }
        , {ref: 'sourcesconfigurationvideosftpcfgftpmainservermp4retry',    selector: 'sourcesconfigurationvideosftpcfgftpmainservermp4retry'       }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration: Controller init: function()');
        this.control({
            '*': {
                'WPAKD.controller.sourcesconfiguration.videos.Videos.updateStoreValue': this.updateStoreValue
            }
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.sourcesconfiguration.videos.Videos.loadSettings':       this.loadSettings
                      , 'WPAKD.controller.sourcesconfiguration.videos.Videos.clearFTPServer':   this.clearFTPServer
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration->Videos: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationVideoStore().findRecord('NAME', configName, 0, false, false, true);
        if (configRecord !== undefined && configRecord !== null) {
            if (configRecord.get('VALUE') != newValue) {
                this.consoleLog('updateStoreValue(): update config: ' + configName + ' from: ' + configRecord.get('VALUE') + ' to: ' + newValue, 'info');
                configRecord.set('VALUE', newValue);
                this.fireEvent('WPAKD.controller.sourcesconfiguration.SourcesConfiguration.checkModifiedConfigStores');
            }
        } else {
            this.consoleLog('updateStoreValue(): Unable to find: ' + configName, 'warn');
        }
    }

    , loadSettings: function() {
        this.consoleLog('loadSettings()');
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord('NAME', 'config-source-videocustom', 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationvideosmain().setVisible(false);
            } else {
            var scope = this;

            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationVideoStore().each(function (rec) {
                var configValue = rec.get('VALUE');
                var configName = rec.get('NAME');
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty('cfgvideocodecH2641080pcreate')){this.getSourcesconfigurationvideosformatscfgvideocodecH2641080pcreate().setValue(configObj['cfgvideocodecH2641080pcreate']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH2641080pcreate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pcreateflv')){this.getSourcesconfigurationvideosformatscfgvideocodecH2641080pcreateflv().setValue(configObj['cfgvideocodecH2641080pcreateflv']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH2641080pcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pfps')){this.getSourcesconfigurationvideosformatscfgvideocodecH2641080pfps().setValue(configObj['cfgvideocodecH2641080pfps']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH2641080pfps().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pcreate')){this.getSourcesconfigurationvideosformatscfgvideocodecH264720pcreate().setValue(configObj['cfgvideocodecH264720pcreate']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264720pcreate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pcreateflv')){this.getSourcesconfigurationvideosformatscfgvideocodecH264720pcreateflv().setValue(configObj['cfgvideocodecH264720pcreateflv']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264720pcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pfps')){this.getSourcesconfigurationvideosformatscfgvideocodecH264720pfps().setValue(configObj['cfgvideocodecH264720pfps']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264720pfps().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pcreate')){this.getSourcesconfigurationvideosformatscfgvideocodecH264480pcreate().setValue(configObj['cfgvideocodecH264480pcreate']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264480pcreate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pcreateflv')){this.getSourcesconfigurationvideosformatscfgvideocodecH264480pcreateflv().setValue(configObj['cfgvideocodecH264480pcreateflv']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264480pcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pfps')){this.getSourcesconfigurationvideosformatscfgvideocodecH264480pfps().setValue(configObj['cfgvideocodecH264480pfps']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264480pfps().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customcreate')){this.getSourcesconfigurationvideosformatscfgvideocodecH264customcreate().setValue(configObj['cfgvideocodecH264customcreate']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264customcreate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customcreateflv')){this.getSourcesconfigurationvideosformatscfgvideocodecH264customcreateflv().setValue(configObj['cfgvideocodecH264customcreateflv']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264customcreateflv().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customfps')){this.getSourcesconfigurationvideosformatscfgvideocodecH264customfps().setValue(configObj['cfgvideocodecH264customfps']);
            } else {this.getSourcesconfigurationvideosformatscfgvideocodecH264customfps().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideocodecH2641080pbitrate')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pbitrate().setValue(configObj['cfgvideocodecH2641080pbitrate']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pbitrate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pcropheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropheight().setValue(configObj['cfgvideocodecH2641080pcropheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pcropwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropwidth().setValue(configObj['cfgvideocodecH2641080pcropwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pcropx')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropx().setValue(configObj['cfgvideocodecH2641080pcropx']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropx().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pcropy')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropy().setValue(configObj['cfgvideocodecH2641080pcropy']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pcropy().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pheight().setValue(configObj['cfgvideocodecH2641080pheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH2641080pwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pwidth().setValue(configObj['cfgvideocodecH2641080pwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH2641080pwidth().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideocodecH264720pbitrate')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pbitrate().setValue(configObj['cfgvideocodecH264720pbitrate']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pbitrate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pcropheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropheight().setValue(configObj['cfgvideocodecH264720pcropheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pcropwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropwidth().setValue(configObj['cfgvideocodecH264720pcropwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pcropx')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropx().setValue(configObj['cfgvideocodecH264720pcropx']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropx().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pcropy')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropy().setValue(configObj['cfgvideocodecH264720pcropy']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pcropy().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pheight().setValue(configObj['cfgvideocodecH264720pheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264720pwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pwidth().setValue(configObj['cfgvideocodecH264720pwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264720pwidth().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideocodecH264480pbitrate')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pbitrate().setValue(configObj['cfgvideocodecH264480pbitrate']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pbitrate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pcropheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropheight().setValue(configObj['cfgvideocodecH264480pcropheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pcropwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropwidth().setValue(configObj['cfgvideocodecH264480pcropwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pcropx')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropx().setValue(configObj['cfgvideocodecH264480pcropx']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropx().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pcropy')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropy().setValue(configObj['cfgvideocodecH264480pcropy']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pcropy().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pheight().setValue(configObj['cfgvideocodecH264480pheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264480pwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pwidth().setValue(configObj['cfgvideocodecH264480pwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264480pwidth().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideocodecH264custombitrate')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264custombitrate().setValue(configObj['cfgvideocodecH264custombitrate']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264custombitrate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customcropheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropheight().setValue(configObj['cfgvideocodecH264customcropheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customcropwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropwidth().setValue(configObj['cfgvideocodecH264customcropwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropwidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customcropx')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropx().setValue(configObj['cfgvideocodecH264customcropx']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropx().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customcropy')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropy().setValue(configObj['cfgvideocodecH264customcropy']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customcropy().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customheight')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customheight().setValue(configObj['cfgvideocodecH264customheight']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideocodecH264customwidth')){this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customwidth().setValue(configObj['cfgvideocodecH264customwidth']);
            } else {this.getSourcesconfigurationvideosadvancedcfgvideocodecH264customwidth().setVisible(false);}

            if(configObj.hasOwnProperty('cfgfilteractivate')){this.getSourcesconfigurationvideosfiltercfgfilteractivate().setValue(configObj['cfgfilteractivate']);
            } else {this.getSourcesconfigurationvideosfiltercfgfilteractivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgfiltervalue')){this.getSourcesconfigurationvideosfiltercfgfiltervalue().setValue(configObj['cfgfiltervalue']);
            } else {this.getSourcesconfigurationvideosfiltercfgfiltervalue().setVisible(false);}
            if(configObj.hasOwnProperty('cfgfilterwatermarkfile')){this.getSourcesconfigurationvideosfiltercfgfilterwatermarkfile().setValue(configObj['cfgfilterwatermarkfile']);
            } else {this.getSourcesconfigurationvideosfiltercfgfilterwatermarkfile().setVisible(false);}

            if(configObj.hasOwnProperty('cfgwatermarkactivate')){this.getSourcesconfigurationvideoswatermarkcfgwatermarkactivate().setValue(configObj['cfgwatermarkactivate']);
            } else {this.getSourcesconfigurationvideoswatermarkcfgwatermarkactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkdissolve')){this.getSourcesconfigurationvideoswatermarkcfgwatermarkdissolve().setValue(configObj['cfgwatermarkdissolve']);
            } else {this.getSourcesconfigurationvideoswatermarkcfgwatermarkdissolve().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkfile')){this.getSourcesconfigurationvideoswatermarkcfgwatermarkfile().setValue(configObj['cfgwatermarkfile']);
            } else {this.getSourcesconfigurationvideoswatermarkcfgwatermarkfile().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkpositionx')){this.getSourcesconfigurationvideoswatermarkcfgwatermarkpositionx().setValue(configObj['cfgwatermarkpositionx']);
            } else {this.getSourcesconfigurationvideoswatermarkcfgwatermarkpositionx().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkpositiony')){this.getSourcesconfigurationvideoswatermarkcfgwatermarkpositiony().setValue(configObj['cfgwatermarkpositiony']);
            } else {this.getSourcesconfigurationvideoswatermarkcfgwatermarkpositiony().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideopreimagemagicktxt')){this.getSourcesconfigurationvideospreprocesscfgvideopreimagemagicktxt().setValue(configObj['cfgvideopreimagemagicktxt']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimagemagicktxt().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgdateformat')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgdateformat().setValue(configObj['cfgvideopreimgdateformat']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgdateformat().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtext')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtext().setValue(configObj['cfgvideopreimgtext']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtext().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextbasecolor')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextbasecolor().setValue(configObj['cfgvideopreimgtextbasecolor']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextbasecolor().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextbaseposition')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextbaseposition().setValue(configObj['cfgvideopreimgtextbaseposition']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextbaseposition().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextfont')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextfont().setValue(configObj['cfgvideopreimgtextfont']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextfont().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextgravity')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextgravity().setValue(configObj['cfgvideopreimgtextgravity']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextgravity().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextovercolor')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextovercolor().setValue(configObj['cfgvideopreimgtextovercolor']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextovercolor().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextoverposition')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextoverposition().setValue(configObj['cfgvideopreimgtextoverposition']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextoverposition().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextsize')){this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextsize().setValue(configObj['cfgvideopreimgtextsize']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreimgtextsize().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreresize')){this.getSourcesconfigurationvideospreprocesscfgvideopreresize().setValue(configObj['cfgvideopreresize']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreresize().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreresizeres')){this.getSourcesconfigurationvideospreprocesscfgvideopreresizeres().setValue(configObj['cfgvideopreresizeres']);
            } else {this.getSourcesconfigurationvideospreprocesscfgvideopreresizeres().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideoaddaudio')){this.getSourcesconfigurationvideosaudiocfgvideoaddaudio().setValue(configObj['cfgvideoaddaudio']);
            } else {this.getSourcesconfigurationvideosaudiocfgvideoaddaudio().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideoaudiofile')){this.getSourcesconfigurationvideosaudiocfgvideoaudiofile().setValue(configObj['cfgvideoaudiofile']);
            } else {this.getSourcesconfigurationvideosaudiocfgvideoaudiofile().setVisible(false);}

            if(configObj.hasOwnProperty('cfgftphotlinkserveraviid')){this.getSourcesconfigurationvideosftpcfgftphotlinkserveraviid().setValue(configObj['cfgftphotlinkserveraviid']);
            } else {this.getSourcesconfigurationvideosftpcfgftphotlinkserveraviid().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftphotlinkserveraviretry')){this.getSourcesconfigurationvideosftpcfgftphotlinkserveraviretry().setValue(configObj['cfgftphotlinkserveraviretry']);
            } else {this.getSourcesconfigurationvideosftpcfgftphotlinkserveraviretry().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftphotlinkservermp4id')){this.getSourcesconfigurationvideosftpcfgftphotlinkservermp4id().setValue(configObj['cfgftphotlinkservermp4id']);
            } else {this.getSourcesconfigurationvideosftpcfgftphotlinkservermp4id().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftphotlinkservermp4retry')){this.getSourcesconfigurationvideosftpcfgftphotlinkservermp4retry().setValue(configObj['cfgftphotlinkservermp4retry']);
            } else {this.getSourcesconfigurationvideosftpcfgftphotlinkservermp4retry().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftpmainserveraviid')){this.getSourcesconfigurationvideosftpcfgftpmainserveraviid().setValue(configObj['cfgftpmainserveraviid']);
            } else {this.getSourcesconfigurationvideosftpcfgftpmainserveraviid().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftpmainserveraviretry')){this.getSourcesconfigurationvideosftpcfgftpmainserveraviretry().setValue(configObj['cfgftpmainserveraviretry']);
            } else {this.getSourcesconfigurationvideosftpcfgftpmainserveraviretry().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftpmainservermp4id')){this.getSourcesconfigurationvideosftpcfgftpmainservermp4id().setValue(configObj['cfgftpmainservermp4id']);
            } else {this.getSourcesconfigurationvideosftpcfgftpmainservermp4id().setVisible(false);}
            if(configObj.hasOwnProperty('cfgftpmainservermp4retry')){this.getSourcesconfigurationvideosftpcfgftpmainservermp4retry().setValue(configObj['cfgftpmainservermp4retry']);
            } else {this.getSourcesconfigurationvideosftpcfgftpmainservermp4retry().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideoaddaudio') && configObj['cfgvideoaddaudio'] == 'yes') {this.getSourcesconfigurationvideosaudiomain().expand();}
            else if (configObj.hasOwnProperty('cfgvideoaddaudio')) {this.getSourcesconfigurationvideosaudiomain().collapse();}
            if(configObj.hasOwnProperty('cfgvideopreimagemagicktxt') && configObj['cfgvideopreimagemagicktxt'] == 'yes') {this.getSourcesconfigurationvideospreprocessmain().expand();}
            else if (configObj.hasOwnProperty('cfgvideopreimagemagicktxt')) {this.getSourcesconfigurationvideospreprocessmain().collapse();}
            if(configObj.hasOwnProperty('cfgwatermarkactivate') && configObj['cfgwatermarkactivate'] == 'yes') {this.getSourcesconfigurationvideoswatermarkmain().expand();}
            else if (configObj.hasOwnProperty('cfgwatermarkactivate')) {this.getSourcesconfigurationvideoswatermarkmain().collapse();}
            if(configObj.hasOwnProperty('cfgfilteractivate') && configObj['cfgfilteractivate'] == 'yes') {this.getSourcesconfigurationvideosfiltermain().expand();}
            else if (configObj.hasOwnProperty('cfgfilteractivate')) {this.getSourcesconfigurationvideosfiltermain().collapse();}

            var configObj = {};
            this.getSourcesconfigurationSectionVideoStore().each(function (rec) {
                var configName = rec.get('NAME');
                configObj[configName] = true;
            });

            if(!configObj.hasOwnProperty('video')){this.getSourcesconfigurationvideosadvancedmain().setVisible(false);}
            if(!configObj.hasOwnProperty('audio')){this.getSourcesconfigurationvideosaudiomain().setVisible(false);}
            if(!configObj.hasOwnProperty('filter')){this.getSourcesconfigurationvideosfiltermain().setVisible(false);}
            if(!configObj.hasOwnProperty('video')){this.getSourcesconfigurationvideosformatsmain().setVisible(false);}
            if(!configObj.hasOwnProperty('ftp')){this.getSourcesconfigurationvideosftpmain().setVisible(false);}
            if(!configObj.hasOwnProperty('legend')){this.getSourcesconfigurationvideospreprocessmain().setVisible(false);}
            if(!configObj.hasOwnProperty('watermark')){this.getSourcesconfigurationvideoswatermarkmain().setVisible(false);}

            this.getSourcesconfigurationvideosmain().setDisabled(false);
        }
    }

    , clearFTPServer: function(serverId) {
        this.consoleLog('clearFTPServer()');
        if (this.getSourcesconfigurationvideosftpcfgftphotlinkserveraviid().getValue() == serverId) {
           this.getSourcesconfigurationvideosftpcfgftphotlinkserveraviid().setValue();
        }
        if (this.getSourcesconfigurationvideosftpcfgftphotlinkservermp4id().getValue() == serverId) {
           this.getSourcesconfigurationvideosftpcfgftphotlinkservermp4id().setValue();
        }
        if (this.getSourcesconfigurationvideosftpcfgftpmainserveraviid().getValue() == serverId) {
           this.getSourcesconfigurationvideosftpcfgftpmainserveraviid().setValue();
        }
        if (this.getSourcesconfigurationvideosftpcfgftpmainservermp4id().getValue() == serverId) {
           this.getSourcesconfigurationvideosftpcfgftpmainservermp4id().setValue();
        }
    }
});
