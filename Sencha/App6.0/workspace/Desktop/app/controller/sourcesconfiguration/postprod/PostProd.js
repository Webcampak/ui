//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.sourcesconfiguration.postprod.PostProd');
//</debug>
Ext.define('WPAKD.controller.sourcesconfiguration.postprod.PostProd', {
    extend: 'Ext.app.Controller',

    views: [
        'sourcesconfiguration.postprod.Main'

        , 'sourcesconfiguration.postprod.create.Main'
        , 'sourcesconfiguration.postprod.create.Cfgcustomactive'
        , 'sourcesconfiguration.postprod.create.CfgcustomendtimestampDate'
        , 'sourcesconfiguration.postprod.create.CfgcustomendtimestampHour'
        , 'sourcesconfiguration.postprod.create.CfgcustomendtimestampMinute'
        , 'sourcesconfiguration.postprod.create.Cfgcustomkeependhour'
        , 'sourcesconfiguration.postprod.create.Cfgcustomkeependminute'
        , 'sourcesconfiguration.postprod.create.Cfgcustomkeepstarthour'
        , 'sourcesconfiguration.postprod.create.Cfgcustomkeepstartminute'
        , 'sourcesconfiguration.postprod.create.CfgcustomstarttimestampDate'
        , 'sourcesconfiguration.postprod.create.CfgcustomstarttimestampHour'
        , 'sourcesconfiguration.postprod.create.CfgcustomstarttimestampMinute'
        , 'sourcesconfiguration.postprod.create.Cfgcustomvidname'
        , 'sourcesconfiguration.postprod.create.Cfgemailmovieactivate'
        , 'sourcesconfiguration.postprod.create.Cfgmovefilestosource'
        , 'sourcesconfiguration.postprod.create.Cfgvidmininterval'
        , 'sourcesconfiguration.postprod.create.Cfgvidminintervalvalue'

        , 'sourcesconfiguration.postprod.crop.Main'
        , 'sourcesconfiguration.postprod.crop.Cfgcropactivate'
        , 'sourcesconfiguration.postprod.crop.Cfgcropsizewidth'
        , 'sourcesconfiguration.postprod.crop.Cfgcropsizeheight'
        , 'sourcesconfiguration.postprod.crop.Cfgcropxpos'
        , 'sourcesconfiguration.postprod.crop.Cfgcropypos'

        , 'sourcesconfiguration.postprod.filter.Main'
        , 'sourcesconfiguration.postprod.filter.Cfgfilteractivate'
        , 'sourcesconfiguration.postprod.filter.Cfgfiltervalue'
        , 'sourcesconfiguration.postprod.filter.Cfgfilterwatermarkfile'

        , 'sourcesconfiguration.postprod.resize.Main'
        , 'sourcesconfiguration.postprod.resize.Cfgvideosizeactivate'
        , 'sourcesconfiguration.postprod.resize.Cfgvideosizeheight'
        , 'sourcesconfiguration.postprod.resize.Cfgvideosizewidth'

        , 'sourcesconfiguration.postprod.rotate.Main'
        , 'sourcesconfiguration.postprod.rotate.Cfgrotateactivate'
        , 'sourcesconfiguration.postprod.rotate.Cfgrotateangle'

        , 'sourcesconfiguration.postprod.text.Main'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimagemagicktxt'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgdateformat'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtext'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextbasecolor'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextbaseposition'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextfont'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextgravity'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextovercolor'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextoverposition'
        , 'sourcesconfiguration.postprod.text.Cfgvideopreimgtextsize'

        , 'sourcesconfiguration.postprod.thumbnail.Main'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnailactivate'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnailborder'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropsizeheight'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropsizewidth'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropxpos'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnaildstcropypos'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropsizeheight'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropsizewidth'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropxpos'
        , 'sourcesconfiguration.postprod.thumbnail.Cfgthumbnailsrccropypos'

        , 'sourcesconfiguration.postprod.transition.Main'
        , 'sourcesconfiguration.postprod.transition.Cfgtransitionactivate'
        , 'sourcesconfiguration.postprod.transition.Cfgtransitioncropsizeheight'
        , 'sourcesconfiguration.postprod.transition.Cfgtransitioncropsizewidth'
        , 'sourcesconfiguration.postprod.transition.Cfgtransitioncropxpos'
        , 'sourcesconfiguration.postprod.transition.Cfgtransitioncropypos'

        , 'sourcesconfiguration.postprod.watermark.Main'
        , 'sourcesconfiguration.postprod.watermark.Cfgwatermarkactivate'
        , 'sourcesconfiguration.postprod.watermark.Cfgwatermarkdissolve'
        , 'sourcesconfiguration.postprod.watermark.Cfgwatermarkfile'
        , 'sourcesconfiguration.postprod.watermark.Cfgwatermarkpositionx'
        , 'sourcesconfiguration.postprod.watermark.Cfgwatermarkpositiony'

    ],

    stores: [
        'shared.Sources'
        , 'sourcesconfiguration.VideoPost'
        , 'sourcesconfiguration.SectionVideoPost'
        , 'sourcesconfiguration.ConfigurationTabs'

    ],

    models: [
        'shared.Sources'
        , 'sourcesconfiguration.VideoPost'
        , 'sourcesconfiguration.SectionVideoPost'
        , 'sourcesconfiguration.ConfigurationTabs'

    ],

    refs: [
        {ref: 'sourcesconfigurationpostprodmain',           selector: 'sourcesconfigurationpostprodmain'        }

        , {ref: 'sourcesconfigurationpostprodcreatemain',                           selector: 'sourcesconfigurationpostprodcreatemain'                          }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomactive',                selector: 'sourcesconfigurationpostprodcreatecfgcustomactive'               }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomendtimestampdate',      selector: 'sourcesconfigurationpostprodcreatecfgcustomendtimestampdate'     }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomendhour',      selector: 'sourcesconfigurationpostprodcreatecfgcustomendhour'     }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomendminute',    selector: 'sourcesconfigurationpostprodcreatecfgcustomendminute'   }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomkeependhour',           selector: 'sourcesconfigurationpostprodcreatecfgcustomkeependhour'          }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomkeependminute',         selector: 'sourcesconfigurationpostprodcreatecfgcustomkeependminute'        }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomkeepstarthour',         selector: 'sourcesconfigurationpostprodcreatecfgcustomkeepstarthour'        }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomkeepstartminute',       selector: 'sourcesconfigurationpostprodcreatecfgcustomkeepstartminute'      }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomstarttimestampdate',    selector: 'sourcesconfigurationpostprodcreatecfgcustomstarttimestampdate'   }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomstarthour',    selector: 'sourcesconfigurationpostprodcreatecfgcustomstarthour'   }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomstartminute',  selector: 'sourcesconfigurationpostprodcreatecfgcustomstartminute' }
        , {ref: 'sourcesconfigurationpostprodcreatecfgcustomvidname',               selector: 'sourcesconfigurationpostprodcreatecfgcustomvidname'              }
        , {ref: 'sourcesconfigurationpostprodcreatecfgemailmovieactivate',          selector: 'sourcesconfigurationpostprodcreatecfgemailmovieactivate'         }
        , {ref: 'sourcesconfigurationpostprodcreatecfgmovefilestosource',           selector: 'sourcesconfigurationpostprodcreatecfgmovefilestosource'          }
        , {ref: 'sourcesconfigurationpostprodcreatecfgvidmininterval',              selector: 'sourcesconfigurationpostprodcreatecfgvidmininterval'             }
        , {ref: 'sourcesconfigurationpostprodcreatecfgvidminintervalvalue',         selector: 'sourcesconfigurationpostprodcreatecfgvidminintervalvalue'        }

        , {ref: 'sourcesconfigurationpostprodcropmain',                 selector: 'sourcesconfigurationpostprodcropmain'              }
        , {ref: 'sourcesconfigurationpostprodcropcfgcropactivate',      selector: 'sourcesconfigurationpostprodcropcfgcropactivate'   }
        , {ref: 'sourcesconfigurationpostprodcropcfgcropsizewidth',     selector: 'sourcesconfigurationpostprodcropcfgcropsizewidth'  }
        , {ref: 'sourcesconfigurationpostprodcropcfgcropsizeheight',    selector: 'sourcesconfigurationpostprodcropcfgcropsizeheight' }
        , {ref: 'sourcesconfigurationpostprodcropcfgcropxpos',          selector: 'sourcesconfigurationpostprodcropcfgcropxpos'       }
        , {ref: 'sourcesconfigurationpostprodcropcfgcropypos',          selector: 'sourcesconfigurationpostprodcropcfgcropypos'       }

        , {ref: 'sourcesconfigurationpostprodfiltermain',                     selector: 'sourcesconfigurationpostprodfiltermain'                   }
        , {ref: 'sourcesconfigurationpostprodfiltercfgfilteractivate',        selector: 'sourcesconfigurationpostprodfiltercfgfilteractivate'      }
        , {ref: 'sourcesconfigurationpostprodfiltercfgfiltervalue',           selector: 'sourcesconfigurationpostprodfiltercfgfiltervalue'         }
        , {ref: 'sourcesconfigurationpostprodfiltercfgfilterwatermarkfile',   selector: 'sourcesconfigurationpostprodfiltercfgfilterwatermarkfile' }

        , {ref: 'sourcesconfigurationpostprodresizemain',                 selector: 'sourcesconfigurationpostprodresizemain'                }
        , {ref: 'sourcesconfigurationpostprodresizecfgvideosizeactivate', selector: 'sourcesconfigurationpostprodresizecfgvideosizeactivate'}
        , {ref: 'sourcesconfigurationpostprodresizecfgvideosizeheight',   selector: 'sourcesconfigurationpostprodresizecfgvideosizeheight'  }
        , {ref: 'sourcesconfigurationpostprodresizecfgvideosizewidth',    selector: 'sourcesconfigurationpostprodresizecfgvideosizewidth'   }

        , {ref: 'sourcesconfigurationpostprodrotatemain',               selector: 'sourcesconfigurationpostprodrotatemain'              }
        , {ref: 'sourcesconfigurationpostprodrotatecfgrotateactivate',  selector: 'sourcesconfigurationpostprodrotatecfgrotateactivate' }
        , {ref: 'sourcesconfigurationpostprodrotatecfgrotateangle',     selector: 'sourcesconfigurationpostprodrotatecfgrotateangle'    }

        , {ref: 'sourcesconfigurationpostprodtextmain',                             selector: 'sourcesconfigurationpostprodtextmain'                            }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimagemagicktxt',        selector: 'sourcesconfigurationpostprodtextcfgvideopreimagemagicktxt'       }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgdateformat',         selector: 'sourcesconfigurationpostprodtextcfgvideopreimgdateformat'        }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtext',               selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtext'              }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextbasecolor',      selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextbasecolor'     }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextbaseposition',   selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextbaseposition'  }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextfont',           selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextfont'          }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextgravity',        selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextgravity'       }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextovercolor',      selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextovercolor'     }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextoverposition',   selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextoverposition'  }
        , {ref: 'sourcesconfigurationpostprodtextcfgvideopreimgtextsize',           selector: 'sourcesconfigurationpostprodtextcfgvideopreimgtextsize'          }

        , {ref: 'sourcesconfigurationpostprodthumbnailmain',                            selector: 'sourcesconfigurationpostprodthumbnailmain'                           }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnailactivate',            selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnailactivate'           }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnailborder',              selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnailborder'             }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizeheight',   selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizeheight'  }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizewidth',    selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizewidth'   }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropxpos',         selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropxpos'        }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropypos',         selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnaildstcropypos'        }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizeheight',   selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizeheight'  }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizewidth',    selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizewidth'   }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropxpos',         selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropxpos'        }
        , {ref: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropypos',         selector: 'sourcesconfigurationpostprodthumbnailcfgthumbnailsrccropypos'        }

        , {ref: 'sourcesconfigurationpostprodtransitionmain',                           selector: 'sourcesconfigurationpostprodtransitionmain'                          }
        , {ref: 'sourcesconfigurationpostprodtransitioncfgtransitionactivate',          selector: 'sourcesconfigurationpostprodtransitioncfgtransitionactivate'         }
        , {ref: 'sourcesconfigurationpostprodtransitioncfgtransitioncropsizeheight',    selector: 'sourcesconfigurationpostprodtransitioncfgtransitioncropsizeheight'   }
        , {ref: 'sourcesconfigurationpostprodtransitioncfgtransitioncropsizewidth',     selector: 'sourcesconfigurationpostprodtransitioncfgtransitioncropsizewidth'    }
        , {ref: 'sourcesconfigurationpostprodtransitioncfgtransitioncropxpos',          selector: 'sourcesconfigurationpostprodtransitioncfgtransitioncropxpos'         }
        , {ref: 'sourcesconfigurationpostprodtransitioncfgtransitioncropypos',          selector: 'sourcesconfigurationpostprodtransitioncfgtransitioncropypos'         }

        , {ref: 'sourcesconfigurationpostprodwatermarkmain',                  selector: 'sourcesconfigurationpostprodwatermarkmain'                    }
        , {ref: 'sourcesconfigurationpostprodwatermarkcfgwatermarkactivate',  selector: 'sourcesconfigurationpostprodwatermarkcfgwatermarkactivate'    }
        , {ref: 'sourcesconfigurationpostprodwatermarkcfgwatermarkdissolve',  selector: 'sourcesconfigurationpostprodwatermarkcfgwatermarkdissolve'    }
        , {ref: 'sourcesconfigurationpostprodwatermarkcfgwatermarkfile',      selector: 'sourcesconfigurationpostprodwatermarkcfgwatermarkfile'        }
        , {ref: 'sourcesconfigurationpostprodwatermarkcfgwatermarkpositionx', selector: 'sourcesconfigurationpostprodwatermarkcfgwatermarkpositionx'   }
        , {ref: 'sourcesconfigurationpostprodwatermarkcfgwatermarkpositiony', selector: 'sourcesconfigurationpostprodwatermarkcfgwatermarkpositiony'   }

    ]

    , init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration: Controller init: function()');
        this.control({
            '*': {
                'WPAKD.controller.sourcesconfiguration.postprod.PostProd.updateStoreValue': this.updateStoreValue
            }
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.sourcesconfiguration.postprod.PostProd.loadSettings':       this.loadSettings
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->SourcesConfiguration->PostProd: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , updateStoreValue: function(newValue, oldValue, configName) {
        var configRecord = this.getSourcesconfigurationVideoPostStore().findRecord('NAME', configName, 0, false, false, true);
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
        var isVisible = this.getSourcesconfigurationConfigurationTabsStore().findRecord('NAME', 'config-source-videopost', 0, false, false, true);
        if (isVisible === null) {
            this.getSourcesconfigurationpostprodmain().setVisible(false);
        } else {
            var scope = this;

            //We store the content of the store in a Javascript object
            var configObj = {};
            this.getSourcesconfigurationVideoPostStore().each(function (rec) {
                var configValue = rec.get('VALUE');
                var configName = rec.get('NAME');
                configObj[configName] = configValue;
            });

            if(configObj.hasOwnProperty('cfgcustomactive')){this.getSourcesconfigurationpostprodcreatecfgcustomactive().setValue(configObj['cfgcustomactive']);
            } else {this.getSourcesconfigurationpostprodcreatecfgcustomactive().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcustomendday')){
                this.getSourcesconfigurationpostprodcreatecfgcustomendtimestampdate().setValue(configObj['cfgcustomendtimestampdate']);
                this.getSourcesconfigurationpostprodcreatecfgcustomendhour().setValue(configObj['cfgcustomendhour']);
                this.getSourcesconfigurationpostprodcreatecfgcustomendminute().setValue(configObj['cfgcustomendminute']);
            } else {
                this.getSourcesconfigurationpostprodcreatecfgcustomendtimestampdate().setVisible(false);
                this.getSourcesconfigurationpostprodcreatecfgcustomendhour().setVisible(false);
                this.getSourcesconfigurationpostprodcreatecfgcustomendminute().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcustomkeependhour')){this.getSourcesconfigurationpostprodcreatecfgcustomkeependhour().setValue(configObj['cfgcustomkeependhour']);
            } else {this.getSourcesconfigurationpostprodcreatecfgcustomkeependhour().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcustomkeependminute')){this.getSourcesconfigurationpostprodcreatecfgcustomkeependminute().setValue(configObj['cfgcustomkeependminute']);
            } else {this.getSourcesconfigurationpostprodcreatecfgcustomkeependminute().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcustomkeepstarthour')){this.getSourcesconfigurationpostprodcreatecfgcustomkeepstarthour().setValue(configObj['cfgcustomkeepstarthour']);
            } else {this.getSourcesconfigurationpostprodcreatecfgcustomkeepstarthour().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcustomkeepstartminute')){this.getSourcesconfigurationpostprodcreatecfgcustomkeepstartminute().setValue(configObj['cfgcustomkeepstartminute']);
            } else {this.getSourcesconfigurationpostprodcreatecfgcustomkeepstartminute().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcustomstartday')){
                this.getSourcesconfigurationpostprodcreatecfgcustomstarttimestampdate().setValue(configObj['cfgcustomstarttimestampdate']);
                this.getSourcesconfigurationpostprodcreatecfgcustomstarthour().setValue(configObj['cfgcustomstarthour']);
                this.getSourcesconfigurationpostprodcreatecfgcustomstartminute().setValue(configObj['cfgcustomstartminute']);
            } else {
                this.getSourcesconfigurationpostprodcreatecfgcustomstarttimestampdate().setVisible(false);
                this.getSourcesconfigurationpostprodcreatecfgcustomstarthour().setVisible(false);
                this.getSourcesconfigurationpostprodcreatecfgcustomstartminute().setVisible(false);
            }

            if(configObj.hasOwnProperty('cfgcustomvidname')){this.getSourcesconfigurationpostprodcreatecfgcustomvidname().setValue(configObj['cfgcustomvidname']);
            } else {this.getSourcesconfigurationpostprodcreatecfgcustomvidname().setVisible(false);}
            if(configObj.hasOwnProperty('cfgemailmovieactivate')){this.getSourcesconfigurationpostprodcreatecfgemailmovieactivate().setValue(configObj['cfgemailmovieactivate']);
            } else {this.getSourcesconfigurationpostprodcreatecfgemailmovieactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgmovefilestosource')){this.getSourcesconfigurationpostprodcreatecfgmovefilestosource().setValue(configObj['cfgmovefilestosource']);
            } else {this.getSourcesconfigurationpostprodcreatecfgmovefilestosource().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvidmininterval')){this.getSourcesconfigurationpostprodcreatecfgvidmininterval().setValue(configObj['cfgvidmininterval']);
            } else {this.getSourcesconfigurationpostprodcreatecfgvidmininterval().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvidminintervalvalue')){this.getSourcesconfigurationpostprodcreatecfgvidminintervalvalue().setValue(configObj['cfgvidminintervalvalue']);
            } else {this.getSourcesconfigurationpostprodcreatecfgvidminintervalvalue().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcropactivate')){this.getSourcesconfigurationpostprodcropcfgcropactivate().setValue(configObj['cfgcropactivate']);
            } else {this.getSourcesconfigurationpostprodcropcfgcropactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcropsizewidth')){this.getSourcesconfigurationpostprodcropcfgcropsizewidth().setValue(configObj['cfgcropsizewidth']);
            } else {this.getSourcesconfigurationpostprodcropcfgcropsizewidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcropsizeheight')){this.getSourcesconfigurationpostprodcropcfgcropsizeheight().setValue(configObj['cfgcropsizeheight']);
            } else {this.getSourcesconfigurationpostprodcropcfgcropsizeheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcropxpos')){this.getSourcesconfigurationpostprodcropcfgcropxpos().setValue(configObj['cfgcropxpos']);
            } else {this.getSourcesconfigurationpostprodcropcfgcropxpos().setVisible(false);}
            if(configObj.hasOwnProperty('cfgcropypos')){this.getSourcesconfigurationpostprodcropcfgcropypos().setValue(configObj['cfgcropypos']);
            } else {this.getSourcesconfigurationpostprodcropcfgcropypos().setVisible(false);}

            if(configObj.hasOwnProperty('cfgfilteractivate')){this.getSourcesconfigurationpostprodfiltercfgfilteractivate().setValue(configObj['cfgfilteractivate']);
            } else {this.getSourcesconfigurationpostprodfiltercfgfilteractivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgfiltervalue')){this.getSourcesconfigurationpostprodfiltercfgfiltervalue().setValue(configObj['cfgfiltervalue']);
            } else {this.getSourcesconfigurationpostprodfiltercfgfiltervalue().setVisible(false);}
            if(configObj.hasOwnProperty('cfgfilterwatermarkfile')){this.getSourcesconfigurationpostprodfiltercfgfilterwatermarkfile().setValue(configObj['cfgfilterwatermarkfile']);
            } else {this.getSourcesconfigurationpostprodfiltercfgfilterwatermarkfile().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideosizeactivate')){this.getSourcesconfigurationpostprodresizecfgvideosizeactivate().setValue(configObj['cfgvideosizeactivate']);
            } else {this.getSourcesconfigurationpostprodresizecfgvideosizeactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideosizeheight')){this.getSourcesconfigurationpostprodresizecfgvideosizeheight().setValue(configObj['cfgvideosizeheight']);
            } else {this.getSourcesconfigurationpostprodresizecfgvideosizeheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideosizewidth')){this.getSourcesconfigurationpostprodresizecfgvideosizewidth().setValue(configObj['cfgvideosizewidth']);
            } else {this.getSourcesconfigurationpostprodresizecfgvideosizewidth().setVisible(false);}

            if(configObj.hasOwnProperty('cfgrotateactivate')){this.getSourcesconfigurationpostprodrotatecfgrotateactivate().setValue(configObj['cfgrotateactivate']);
            } else {this.getSourcesconfigurationpostprodrotatecfgrotateactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgrotateangle')){this.getSourcesconfigurationpostprodrotatecfgrotateangle().setValue(configObj['cfgrotateangle']);
            } else {this.getSourcesconfigurationpostprodrotatecfgrotateangle().setVisible(false);}

            if(configObj.hasOwnProperty('cfgvideopreimagemagicktxt')){this.getSourcesconfigurationpostprodtextcfgvideopreimagemagicktxt().setValue(configObj['cfgvideopreimagemagicktxt']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimagemagicktxt().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgdateformat')){this.getSourcesconfigurationpostprodtextcfgvideopreimgdateformat().setValue(configObj['cfgvideopreimgdateformat']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgdateformat().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtext')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtext().setValue(configObj['cfgvideopreimgtext']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtext().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextbasecolor')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextbasecolor().setValue(configObj['cfgvideopreimgtextbasecolor']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextbasecolor().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextbaseposition')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextbaseposition().setValue(configObj['cfgvideopreimgtextbaseposition']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextbaseposition().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextfont')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextfont().setValue(configObj['cfgvideopreimgtextfont']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextfont().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextgravity')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextgravity().setValue(configObj['cfgvideopreimgtextgravity']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextgravity().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextovercolor')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextovercolor().setValue(configObj['cfgvideopreimgtextovercolor']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextovercolor().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextoverposition')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextoverposition().setValue(configObj['cfgvideopreimgtextoverposition']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextoverposition().setVisible(false);}
            if(configObj.hasOwnProperty('cfgvideopreimgtextsize')){this.getSourcesconfigurationpostprodtextcfgvideopreimgtextsize().setValue(configObj['cfgvideopreimgtextsize']);
            } else {this.getSourcesconfigurationpostprodtextcfgvideopreimgtextsize().setVisible(false);}

            if(configObj.hasOwnProperty('cfgthumbnailactivate')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnailactivate().setValue(configObj['cfgthumbnailactivate']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnailactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnailborder')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnailborder().setValue(configObj['cfgthumbnailborder']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnailborder().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnaildstcropsizeheight')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizeheight().setValue(configObj['cfgthumbnaildstcropsizeheight']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizeheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnaildstcropsizewidth')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizewidth().setValue(configObj['cfgthumbnaildstcropsizewidth']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropsizewidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnaildstcropxpos')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropxpos().setValue(configObj['cfgthumbnaildstcropxpos']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropxpos().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnaildstcropypos')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropypos().setValue(configObj['cfgthumbnaildstcropypos']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnaildstcropypos().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnailsrccropsizeheight')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizeheight().setValue(configObj['cfgthumbnailsrccropsizeheight']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizeheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnailsrccropsizewidth')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizewidth().setValue(configObj['cfgthumbnailsrccropsizewidth']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropsizewidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnailsrccropxpos')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropxpos().setValue(configObj['cfgthumbnailsrccropxpos']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropxpos().setVisible(false);}
            if(configObj.hasOwnProperty('cfgthumbnailsrccropypos')){this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropypos().setValue(configObj['cfgthumbnailsrccropypos']);
            } else {this.getSourcesconfigurationpostprodthumbnailcfgthumbnailsrccropypos().setVisible(false);}

            if(configObj.hasOwnProperty('cfgtransitionactivate')){this.getSourcesconfigurationpostprodtransitioncfgtransitionactivate().setValue(configObj['cfgtransitionactivate']);
            } else {this.getSourcesconfigurationpostprodtransitioncfgtransitionactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgtransitioncropsizeheight')){this.getSourcesconfigurationpostprodtransitioncfgtransitioncropsizeheight().setValue(configObj['cfgtransitioncropsizeheight']);
            } else {this.getSourcesconfigurationpostprodtransitioncfgtransitioncropsizeheight().setVisible(false);}
            if(configObj.hasOwnProperty('cfgtransitioncropsizewidth')){this.getSourcesconfigurationpostprodtransitioncfgtransitioncropsizewidth().setValue(configObj['cfgtransitioncropsizewidth']);
            } else {this.getSourcesconfigurationpostprodtransitioncfgtransitioncropsizewidth().setVisible(false);}
            if(configObj.hasOwnProperty('cfgtransitioncropxpos')){this.getSourcesconfigurationpostprodtransitioncfgtransitioncropxpos().setValue(configObj['cfgtransitioncropxpos']);
            } else {this.getSourcesconfigurationpostprodtransitioncfgtransitioncropxpos().setVisible(false);}
            if(configObj.hasOwnProperty('cfgtransitioncropypos')){this.getSourcesconfigurationpostprodtransitioncfgtransitioncropypos().setValue(configObj['cfgtransitioncropypos']);
            } else {this.getSourcesconfigurationpostprodtransitioncfgtransitioncropypos().setVisible(false);}

            if(configObj.hasOwnProperty('cfgwatermarkactivate')){this.getSourcesconfigurationpostprodwatermarkcfgwatermarkactivate().setValue(configObj['cfgwatermarkactivate']);
            } else {this.getSourcesconfigurationpostprodwatermarkcfgwatermarkactivate().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkdissolve')){this.getSourcesconfigurationpostprodwatermarkcfgwatermarkdissolve().setValue(configObj['cfgwatermarkdissolve']);
            } else {this.getSourcesconfigurationpostprodwatermarkcfgwatermarkdissolve().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkfile')){this.getSourcesconfigurationpostprodwatermarkcfgwatermarkfile().setValue(configObj['cfgwatermarkfile']);
            } else {this.getSourcesconfigurationpostprodwatermarkcfgwatermarkfile().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkpositionx')){this.getSourcesconfigurationpostprodwatermarkcfgwatermarkpositionx().setValue(configObj['cfgwatermarkpositionx']);
            } else {this.getSourcesconfigurationpostprodwatermarkcfgwatermarkpositionx().setVisible(false);}
            if(configObj.hasOwnProperty('cfgwatermarkpositiony')){this.getSourcesconfigurationpostprodwatermarkcfgwatermarkpositiony().setValue(configObj['cfgwatermarkpositiony']);
            } else {this.getSourcesconfigurationpostprodwatermarkcfgwatermarkpositiony().setVisible(false);}

            if(configObj.hasOwnProperty('cfgcropactivate') && configObj['cfgcropactivate'] == 'yes') {this.getSourcesconfigurationpostprodcropmain().expand();}
            else if (configObj.hasOwnProperty('cfgcropactivate')) {this.getSourcesconfigurationpostprodcropmain().collapse();}
            if(configObj.hasOwnProperty('cfgfilteractivate') && configObj['cfgfilteractivate'] == 'yes') {this.getSourcesconfigurationpostprodfiltermain().expand();}
            else if (configObj.hasOwnProperty('cfgfilteractivate')) {this.getSourcesconfigurationpostprodfiltermain().collapse();}
            if(configObj.hasOwnProperty('cfgtransitionactivate') && configObj['cfgtransitionactivate'] == 'yes') {this.getSourcesconfigurationpostprodtransitionmain().expand();}
            else if (configObj.hasOwnProperty('cfgtransitionactivate')) {this.getSourcesconfigurationpostprodtransitionmain().collapse();}
            if(configObj.hasOwnProperty('cfgwatermarkactivate') && configObj['cfgwatermarkactivate'] == 'yes') {this.getSourcesconfigurationpostprodwatermarkmain().expand();}
            else if (configObj.hasOwnProperty('cfgwatermarkactivate')) {this.getSourcesconfigurationpostprodwatermarkmain().collapse();}
            if(configObj.hasOwnProperty('cfgthumbnailactivate') && configObj['cfgthumbnailactivate'] == 'yes') {this.getSourcesconfigurationpostprodthumbnailmain().expand();}
            else if (configObj.hasOwnProperty('cfgthumbnailactivate')) {this.getSourcesconfigurationpostprodthumbnailmain().collapse();}
            if(configObj.hasOwnProperty('cfgvideopreimagemagicktxt') && configObj['cfgvideopreimagemagicktxt'] == 'yes') {this.getSourcesconfigurationpostprodtextmain().expand();}
            else if (configObj.hasOwnProperty('cfgvideopreimagemagicktxt')) {this.getSourcesconfigurationpostprodtextmain().collapse();}
            if(configObj.hasOwnProperty('cfgrotateactivate') && configObj['cfgrotateactivate'] == 'yes') {this.getSourcesconfigurationpostprodrotatemain().expand();}
            else if (configObj.hasOwnProperty('cfgrotateactivate')) {this.getSourcesconfigurationpostprodrotatemain().collapse();}
            if(configObj.hasOwnProperty('cfgvideosizeactivate') && configObj['cfgvideosizeactivate'] == 'yes') {this.getSourcesconfigurationpostprodresizemain().expand();}
            else if (configObj.hasOwnProperty('cfgvideosizeactivate')) {this.getSourcesconfigurationpostprodresizemain().collapse();}

            var configObj = {};
            this.getSourcesconfigurationSectionVideoPostStore().each(function (rec) {
                var configName = rec.get('NAME');
                configObj[configName] = true;
            });

            if(!configObj.hasOwnProperty('create')){this.getSourcesconfigurationpostprodcreatemain().setVisible(false);}
            if(!configObj.hasOwnProperty('crop')){this.getSourcesconfigurationpostprodcropmain().setVisible(false);}
            if(!configObj.hasOwnProperty('filter')){this.getSourcesconfigurationpostprodfiltermain().setVisible(false);}
            if(!configObj.hasOwnProperty('resize')){this.getSourcesconfigurationpostprodresizemain().setVisible(false);}
            if(!configObj.hasOwnProperty('rotate')){this.getSourcesconfigurationpostprodrotatemain().setVisible(false);}
            if(!configObj.hasOwnProperty('legend')){this.getSourcesconfigurationpostprodtextmain().setVisible(false);}
            if(!configObj.hasOwnProperty('thumbnail')){this.getSourcesconfigurationpostprodthumbnailmain().setVisible(false);}
            if(!configObj.hasOwnProperty('transition')){this.getSourcesconfigurationpostprodtransitionmain().setVisible(false);}
            if(!configObj.hasOwnProperty('watermark')){this.getSourcesconfigurationpostprodwatermarkmain().setVisible(false);}


            this.getSourcesconfigurationpostprodmain().setDisabled(false);
        }
    }
});
