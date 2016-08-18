//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.pictures.Pictures');
//</debug>
Ext.define('WPAKD.controller.pictures.Pictures', {
    extend: 'Ext.app.Controller',

    views: [
        'desktop.toolbar.top.Taskbar'
        , 'desktop.sendemail.Main'

        , 'pictures.Main'
        , 'pictures.SourcesList'
        , 'pictures.SourceName'

        , 'pictures.display.Main'
        , 'pictures.display.CurrentPicture'
        , 'pictures.display.CurrentPictureDate'
        , 'pictures.display.EmailButton'
        , 'pictures.display.LastButton'
        , 'pictures.display.NextButton'
        , 'pictures.display.PreviousButton'
        , 'pictures.display.SensorsButton'
        , 'pictures.display.Zoom'
        , 'pictures.display.Thumbnails'
        , 'pictures.display.DownloadButton'

        , 'pictures.selection.Main'
        , 'pictures.selection.DaysList'
        , 'pictures.selection.HoursList'

        , 'pictures.sensors.Main'
        , 'pictures.sensors.Sensor1'
        , 'pictures.sensors.Sensor2'
        , 'pictures.sensors.Sensor3'
        , 'pictures.sensors.Sensor4'

    ],

    stores: [
        'shared.Sources'
        , 'pictures.HoursList'
        , 'pictures.DaysList'
        , 'pictures.Picture'
        , 'pictures.Sensors'

    ],

    models: [
        'shared.Sources'
        , 'pictures.HoursList'
        , 'pictures.DaysList'
        , 'pictures.Picture'
        , 'pictures.Sensors'

    ],

    refs: [
        {ref: 'desktopmain',                selector: 'desktopmain'                 }
        , {ref: 'desktoptoolbartoptaskbar', selector: 'desktoptoolbartoptaskbar'    }
        , {ref: 'desktopsendemailmain',     selector: 'desktopsendemailmain'        }


        , {ref: 'picturesmain',             selector: 'picturesmain',               autoCreate: true,   xtype: 'picturesmain'      }
        , {ref: 'picturessourcename',       selector: 'picturessourcename'          }
        , {ref: 'picturessourceslist',      selector: 'picturessourceslist'         }

        , {ref: 'picturesdisplaymain',                  selector: 'picturesdisplaymain'                 }
        , {ref: 'picturesdisplaycurrentpicture',        selector: 'picturesdisplaycurrentpicture'       }
        , {ref: 'picturesdisplaycurrentpicturedate',    selector: 'picturesdisplaycurrentpicturedate'   }
        , {ref: 'picturesdisplaydownloadbutton',        selector: 'picturesdisplaydownloadbutton'       }
        , {ref: 'picturesdisplayemailbutton',           selector: 'picturesdisplayemailbutton'          }
        , {ref: 'picturesdisplaylastbutton',            selector: 'picturesdisplaylastbutton'           }
        , {ref: 'picturesdisplaynextbutton',            selector: 'picturesdisplaynextbutton'           }
        , {ref: 'picturesdisplaypreviousbutton',        selector: 'picturesdisplaypreviousbutton'       }
        , {ref: 'picturesdisplaysensorsbutton',         selector: 'picturesdisplaysensorsbutton'        }
        , {ref: 'picturesdisplayzoom',                  selector: 'picturesdisplayzoom'                 }
        , {ref: 'picturesdisplaythumbnails',            selector: 'picturesdisplaythumbnails'           }

        , {ref: 'picturesselectionmain',        selector: 'picturesselectionmain'       }
        , {ref: 'picturesselectiondayslist',    selector: 'picturesselectiondayslist'   }
        , {ref: 'picturesselectionhourslist',   selector: 'picturesselectionhourslist'  }

        , {ref: 'picturessensorsmain',      selector: 'picturessensorsmain',    autoCreate: true,   xtype: 'picturessensorsmain'      }
        , {ref: 'picturessensorssensor1',   selector: 'picturessensorssensor1'  }
        , {ref: 'picturessensorssensor2',   selector: 'picturessensorssensor2'  }
        , {ref: 'picturessensorssensor3',   selector: 'picturessensorssensor3'  }
        , {ref: 'picturessensorssensor4',   selector: 'picturessensorssensor4'  }
    ],

    init: function() {
        this.consoleLog('init()');
        this.control({
            'desktoptoolbartoptaskbar button[action=openWEB_DSP_PICTURES]': {click:  this.openPictures                  }
            , 'picturesmain':                               {hide:   this.closePictures, minimize: this.openPictures    }
            , '#menuOpenWEB_DSP_PICTURES':                  {click:  this.menuOpenPictures                              }

            , 'picturessourceslist':                    {change:            this.onSourceSelected   }
            , 'picturesselectiondayslist':              {select:            this.onDaySelected      }
            , 'picturesselectionhourslist dataview':    {cellclick:         this.onHourSelected     }
            , 'picturesdisplayzoom':                    {changecomplete:    this.onZoomChange       }
            , 'picturesdisplaysensorsbutton':           {click:             this.showSensors        }
            , 'picturesdisplaynextbutton':              {click:             this.onClickNext        }
            , 'picturesdisplaypreviousbutton':          {click:             this.onClickPrevious    }
            , 'picturesdisplaylastbutton':              {click:             this.onClickLast        }
            , 'picturesdisplaydownloadbutton':          {click:             this.downloadPicture    }
            , 'picturesdisplayemailbutton':             {click:             this.openSendEmail      }
            , 'picturesdisplaythumbnails': 		{'navaction' :      this.clickThumbnail,    scope : this}
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.pictures.Pictures.openPictures':        this.openPictures
                      , 'WPAKD.controller.pictures.Pictures.menuOpenPictures':  this.menuOpenPictures
                      , 'WPAKD.controller.pictures.Pictures.sendEmail':         this.sendEmail
                      , 'WPAKD.controller.pictures.Pictures.cancelEmail':       this.cancelEmail

                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Pictures: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    //Getters and setters for Zoom Level
    , getZoomLevel: function() {
        if (!this.zoomLevel) {this.setZoomLevel(null);}
        return this.zoomLevel;
    }
    , setZoomLevel: function(zoomLevel) {
        this.zoomLevel = zoomLevel;
        return this.zoomLevel;
    }

    , sendEmail: function() {
        this.consoleLog('sendEmail()');
        this.getDesktopsendemailmain().hide();
    }

    , cancelEmail: function() {
        this.consoleLog('cancelEmail()');
        this.getDesktopsendemailmain().hide();
    }

    , openSendEmail: function() {
        this.consoleLog('openSendEmail()');
        var currentSourceId = this.getPicturesPictureStore().getProxy().extraParams.SOURCEID;
        var currentPicture = this.getPicturesPictureStore().last().get('PICTURE');
        var sendEvent = 'WPAKD.controller.pictures.Pictures.sendEmail';
        //var sendEvent = '';
        var cancelEvent = 'WPAKD.controller.pictures.Pictures.cancelEmail';
        var emailSubject = i18n.gettext('Webcampak picture')
        var emailBody = i18n.gettext('Hello, <br /><br />You\'ll find enclosed an interesting picture<br /><br />Best Regards.');
        var emailAttachmentName = currentPicture;
        var emailAttachmentSourceId = currentSourceId;
        var emailAttachmentPath = '/pictures/' + currentPicture.substring(0, 8) + '/' + currentPicture;
        this.fireEvent('WPAKD.controller.desktop.sendemail.SendEmail.menuOpenSendEmail', sendEvent, cancelEvent, emailSubject, emailBody, emailAttachmentName, emailAttachmentSourceId, emailAttachmentPath);
    }

    , downloadPicture: function() {
        this.consoleLog('downloadPicture()');
        var currentPicture = this.getPicturesPictureStore().last().get('PICTURE');
        //http://127.0.0.1/app_dev.php/dl/source1/pictures/20150620/20150620003006.jpg?width=10000
        var currentSourceId = this.getPicturesPictureStore().getProxy().extraParams.SOURCEID;
        var currentURL = '/' + symfonyEnv + '/dl/source' + currentSourceId + '/pictures/' + currentPicture.substring(0, 8) + '/';
        var currentPictureURL = currentURL + currentPicture;
        window.open(currentPictureURL);
    }

    , showSensors: function() {
        this.consoleLog('showSensors()');
        this.getPicturessensorsmain().show();

        var currentSourceId = this.getPicturesPictureStore().getProxy().extraParams.SOURCEID;
        var currentURL = '/' + symfonyEnv + '/dl/source' + currentSourceId + '/pictures/';

        var currentSensorValue = this.getPicturesSensorsStore().last();
        if (currentSensorValue.get('SENSOR1') != "") {
            this.getPicturessensorssensor1().setSrc(currentURL + currentSensorValue.get('SENSOR1'));
            this.getPicturessensorssensor1().setWidth(497);
            this.getPicturessensorssensor1().setHeight(162);
        }
        if (currentSensorValue.get('SENSOR2') != "") {
            this.getPicturessensorssensor2().setSrc(currentURL + currentSensorValue.get('SENSOR2'));
            this.getPicturessensorssensor2().setWidth(497);
            this.getPicturessensorssensor2().setHeight(162);
        }
        if (currentSensorValue.get('SENSOR3') != "") {
            this.getPicturessensorssensor3().setSrc(currentURL + currentSensorValue.get('SENSOR3'));
            this.getPicturessensorssensor3().setWidth(497);
            this.getPicturessensorssensor3().setHeight(162);
        }
        if (currentSensorValue.get('SENSOR4') != "") {
            this.getPicturessensorssensor4().setSrc(currentURL + currentSensorValue.get('SENSOR4'));
            this.getPicturessensorssensor4().setWidth(497);
            this.getPicturessensorssensor4().setHeight(162);
        }
    }

    , clickThumbnail: function(view, thumbnail) {
        this.consoleLog('clickThumbnails()');
        this.consoleLog('clickThumbnails(): ' + thumbnail);
        var loadPicture = this.getPicturesPictureStore().last().get(thumbnail);
        this.consoleLog('clickThumbnails(): Loading picture: ' + loadPicture);
        this.loadNewPicture(loadPicture);
    }

    , onZoomChange: function(slider, value) {
        this.consoleLog('onZoomChange()');
        this.consoleLog('onZoomChange(): Zoom value: ' + value);
        this.setZoomLevel(value);
        this.updatePictureElements();
    }

    , onClickPrevious: function() {
        this.consoleLog('onClickPrevious()');
        var previousPicture = this.getPicturesPictureStore().last().get('PREVIOUS');
        this.loadNewPicture(previousPicture);
    }

    , onClickNext: function() {
        this.consoleLog('onClickNext()');
        var nextPicture = this.getPicturesPictureStore().last().get('NEXT');
        this.loadNewPicture(nextPicture);
    }

    , onClickLast: function() {
        this.consoleLog('onClickLast()');
        var lastPicture = this.getPicturesPictureStore().last().get('LAST');
        this.loadNewPicture(lastPicture);
    }

    , loadNewPicture: function(pictureToLoad) {
        this.consoleLog('loadNewPicture()');
        if (pictureToLoad !== "") {
            var pictureDate = this.convertPictureToDate(pictureToLoad);
            this.getPicturesselectiondayslist().setValue(pictureDate);
            this.consoleLog('loadNewPicture(): Load picture: ' + pictureToLoad);
            Ext.getStore('pictures.Picture').getProxy().setExtraParam('PICTUREDATE', pictureToLoad);
            this.getPicturesPictureStore().on('load',this.updatePictureElements,this,{single:true});
            this.getPicturesPictureStore().load();
            //Detection if new picture is in a different day than current
            var currentPicture = this.getPicturesPictureStore().last().get('PICTURE');
            var currentPictureDay = currentPicture.substring(0, 4) + currentPicture.substring(4, 6) +  currentPicture.substring(6, 8);
            var newPictureDay = pictureToLoad.substring(0, 4) + pictureToLoad.substring(4, 6) +  pictureToLoad.substring(6, 8);
            if (currentPictureDay != newPictureDay || this.getPicturesHoursListStore().getProxy().extraParams.SELECTEDDAY != currentPictureDay) {
                this.consoleLog('loadNewPicture(): New picture is in a different day, reloading hours list');
                Ext.getStore('pictures.HoursList').getProxy().setExtraParam('SELECTEDDAY', newPictureDay);
                this.getPicturesHoursListStore().load();
            }

        }
    }

    , convertPictureToDate: function(picture) {
        this.consoleLog('convertPictureToDate()');
        var pictureMonth = picture.substring(4, 6) - 1; // Because javascript month are from 0 to 11
        var pictureDate = new Date(picture.substring(0, 4), pictureMonth, picture.substring(6, 8), picture.substring(8, 10), picture.substring(10, 12), picture.substring(12, 14), 0);
        return pictureDate;
    }

    , onHourSelected: function(iView, iCellEl, iColIdx, iRecord, iRowEl, iRowIdx, iEvent) {
        this.consoleLog('onHourSelected()');
        var selectedcol = iColIdx - 1
        if (iColIdx < 10) { selectedcol = "0" + selectedcol;};
        //get selected picture time from grid
        var selectedpicture = iRecord.getData()[selectedcol]
        if (selectedpicture !="0") {
            this.loadNewPicture(selectedpicture);
        }
    }

    , onDaySelected: function(scope, date, eOpts ) {
        this.consoleLog('onDaySelected()');
        var convertedDate = Ext.Date.format(date, 'Ymd');
        this.consoleLog('onDaySelected(): Selected date is: ' + date + ' converted to: ' + convertedDate);
        Ext.getStore('pictures.HoursList').getProxy().setExtraParam('SELECTEDDAY', convertedDate);
        this.getPicturesHoursListStore().load();

        Ext.getStore('pictures.Sensors').getProxy().setExtraParam('PICTUREDATE', convertedDate);
        this.getPicturesSensorsStore().load();
        this.getPicturesSensorsStore().on('load',this.updateSensorsButton,this,{single:true});
    }

    , onSourceSelected: function(combo, newValue, oldValue, eOpts ) {
        this.consoleLog('onSourceSelected()');
        this.clearWindowContent();
        
        selectedSource = this.getSharedSourcesStore().getById(newValue);
        this.getPicturessourcename().setHtml(selectedSource.get('NAME'));

        this.consoleLog('onSourceSelected(): Selected source name is: ' + selectedSource.get('NAME'));
        this.consoleLog('onSourceSelected(): Selected source SOURCEID is: ' + selectedSource.get('SOURCEID'));

        Ext.getStore('pictures.HoursList').getProxy().setExtraParam('SOURCEID', selectedSource.get('SOURCEID'));
        Ext.getStore('pictures.HoursList').getProxy().setExtraParam('SELECTEDDAY', null);
        Ext.getStore('pictures.DaysList').getProxy().setExtraParam('SOURCEID', selectedSource.get('SOURCEID'));
        Ext.getStore('pictures.Picture').getProxy().setExtraParam('SOURCEID', selectedSource.get('SOURCEID'));
        Ext.getStore('pictures.Picture').getProxy().setExtraParam('PICTUREDATE', null);
        Ext.getStore('pictures.Sensors').getProxy().setExtraParam('SOURCEID', selectedSource.get('SOURCEID'));
        Ext.getStore('pictures.Sensors').getProxy().setExtraParam('PICTUREDATE', null);
        this.setZoomLevel(null);

        this.getPicturesHoursListStore().load();

        this.getPicturesSensorsStore().load();
        this.getPicturesSensorsStore().on('load',this.updateSensorsButton,this,{single:true});

        this.getPicturesPictureStore().load();
        this.getPicturesPictureStore().on('load',this.updatePictureElements,this,{single:true});

        this.getPicturesDaysListStore().load();
        this.getPicturesDaysListStore().on('load',this.updateDaysWidget,this,{single:true});

        //Load Pictures store to get latest pictures and thumbnail

    }

    , updateSensorsButton: function() {
        this.consoleLog('updateSensorsButton()');
        var currentSensors = this.getPicturesSensorsStore().last();      
        if (currentSensors.get('SENSOR1') != "") {
            this.getPicturesdisplaysensorsbutton().setDisabled(false);
            if (this.getPicturessensorsmain().isVisible() === true) {
                this.showSensors();
            }
        } else {
            this.getPicturesdisplaysensorsbutton().setDisabled(true);
            this.getPicturessensorsmain().hide();
        }
    }

    , updateButtonStatus: function() {
        this.consoleLog('updateButtonStatus()');
        var displayPicture = this.getPicturesPictureStore().last();
        if (displayPicture === null) {
            this.getPicturesdisplaynextbutton().setDisabled(true);
            this.getPicturesdisplaypreviousbutton().setDisabled(true);
            this.getPicturesdisplaylastbutton().setDisabled(true);
        } else {
            if (displayPicture.get('NEXT') == "") {this.getPicturesdisplaynextbutton().setDisabled(true);}
            else {this.getPicturesdisplaynextbutton().setDisabled(false);}

            if (displayPicture.get('PREVIOUS') == "") {this.getPicturesdisplaypreviousbutton().setDisabled(true);}
            else {this.getPicturesdisplaypreviousbutton().setDisabled(false);}

            if (displayPicture.get('LAST') == "") {this.getPicturesdisplaylastbutton().setDisabled(true);}
            else {this.getPicturesdisplaylastbutton().setDisabled(false);}
        }
    }

    , updateScreenWhenPicturesAvailable: function() {
        this.consoleLog('updatePictureElements()');
        this.getPicturesdisplayzoom().setDisabled(false);
        this.getPicturesdisplaydownloadbutton().setDisabled(false);
        this.getPicturesdisplayemailbutton().setDisabled(false);
    }


    , updatePictureElements: function() {
        this.consoleLog('updatePictureElements()');
        this.updateThumbnails();
        this.updateButtonStatus();

        var displayPicture = this.getPicturesPictureStore().last();
        if (displayPicture === null) {
            this.clearWindowContent();
        } else {
            this.updateScreenWhenPicturesAvailable();

            var currentPicture = displayPicture.get('PICTURE');
            var currentPictureWidth = displayPicture.get('PICTUREWIDTH');
            var currentPictureHeight = displayPicture.get('PICTUREHEIGHT');
            //var currentPictureZoomLevel = displayPicture.get('ZOOMLEVEL');
            var currentPictureZoomLevel = this.getZoomLevel();

            //http://127.0.0.1/app_dev.php/dl/source1/pictures/20150620/20150620003006.jpg?width=10000
            var currentSourceId = this.getPicturesPictureStore().getProxy().extraParams.SOURCEID;
            var currentURL = '/' + symfonyEnv + '/dl/source' + currentSourceId + '/pictures/' + currentPicture.substring(0, 8) + '/';
            var currentPictureURL = currentURL + currentPicture;

            //Display picture date
            var currentPictureMonth = currentPicture.substring(4, 6) - 1; // Because javascript month are from 0 to 11
            var currentPictureDate = new Date(currentPicture.substring(0, 4), currentPictureMonth, currentPicture.substring(6, 8), currentPicture.substring(8, 10), currentPicture.substring(10, 12), currentPicture.substring(12, 14), 0);
            this.getPicturesdisplaycurrentpicturedate().update(dateFormat(currentPictureDate));
            //this.getCurrentpicture().getComponent('picturedate').update(dateFormat(currentPictureDate));

            var currentWindowWidth = this.getPicturesdisplaycurrentpicture().getWidth();
            var currentWindowHeight = this.getPicturesdisplaycurrentpicture().getHeight() - 30;
            //var currentWindowHeight = this.getPicturesdisplaycurrentpicture().getHeight();
            this.consoleLog('updatePictureElements(): Main Picture: Window Size:' + currentWindowWidth + 'x' + currentWindowHeight);
            this.consoleLog('updatePictureElements(): Main Picture: Picture Size:' + currentPictureWidth + 'x' + currentPictureHeight);

            currentPictureTargetHeight = Math.round(currentWindowWidth * currentPictureHeight / currentPictureWidth);
            if (currentPictureTargetHeight > currentWindowHeight) {
                    currentPictureTargetWidth = Math.round(currentWindowHeight * currentPictureWidth / currentPictureHeight);
                    this.getPicturesdisplaycurrentpicture().setSize({width:currentPictureTargetWidth, height:currentWindowHeight});
            } else {
                    currentPictureTargetWidth = currentWindowWidth;
                    this.getPicturesdisplaycurrentpicture().setSize({width:currentPictureTargetWidth, height:currentPictureTargetHeight});
            }

            var currentZoomLevel = Math.round(currentPictureTargetWidth * 100 / currentPictureWidth);
            this.consoleLog('updatePictureElements(): Current Picture ratio (zoom):' + currentZoomLevel +'%');
            //Set zoom value based on current picture size
            if (this.getZoomLevel() === null) {
                this.getPicturesdisplayzoom().setValue(currentZoomLevel);
            }

            if (currentPictureZoomLevel > currentZoomLevel) {
                this.consoleLog('updatePictureElements(): Display file: ' + currentPictureURL + '?width=' + currentPictureTargetWidth);
                //Determine target zoom width to match slider value
                var targetZoomPictureWidth = Math.round(currentPictureZoomLevel * currentPictureWidth / 100);
                this.consoleLog('updatePictureElements(): Target Zoom level:' + currentPictureZoomLevel + '% -> Target Width:' + targetZoomPictureWidth);

                this.getPicturesdisplaycurrentpicture().update('<a href="' + currentPictureURL + '?width=' + targetZoomPictureWidth + '" class="jqzoom" title="' + i18n.gettext('Webcampak Zoom') + ' (' + currentPictureZoomLevel + '%)"><img src="' + currentPictureURL + '" width="' + currentPictureTargetWidth + '" title="Webcampak"></a>');

                //Loading jqzoom to display zoomed picture
                this.consoleLog('updatePictureElements(): Load jqzoom module');

                var options = {
                    zoomType: 'innerzoom',
                    lens:true,
                    preloadImages: true,
                    alwaysOn:false,
                    showEffect : 'fadein',
                    hideEffect: 'fadeout'
                };
                $j(".jqzoom").jqzoom(options);
            } else { //No zoomlevel selected, display regular picture
                this.getPicturesdisplaycurrentpicture().update('<center><img src="' + currentPictureURL + '" width="' + currentPictureTargetWidth + '" title="' + i18n.gettext('Webcampak Picture') + '"></center>');
            }
        }
    }

    , updateThumbnails: function() {
        this.consoleLog('updateThumbnails()');
        var currentPicture = this.getPicturesPictureStore().last();
        if (currentPicture === null) {
            this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('picture').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('date').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('picture').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('date').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('picture').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('date').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('picture').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('date').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('picture').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('date').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('picture').hide();
            this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('date').hide();
        } else {
            var currentPictureDisplay = currentPicture.get('PICTURE');

            //Calculate ideal thumbnail width
            var currentWindowThumbWidth = this.getPicturesdisplaythumbnails().getWidth();
            var currentWindowThumbHeight = this.getPicturesdisplaythumbnails().getHeight();
            this.consoleLog('updateThumbnails(): Thumbnail: Window Size:' + currentWindowThumbWidth + 'x' + currentWindowThumbHeight);

            //Push Thumbnails values to Window
            var targetThumbnailWidth = Math.floor(currentWindowThumbWidth / 6);
            this.consoleLog('updateThumbnails(): Thumbnail: Target Thumbnail Width:' + targetThumbnailWidth);

            //http://127.0.0.1/app_dev.php/dl/source1/pictures/20150620/20150620003006.jpg?width=10000
            var currentSourceId = this.getPicturesPictureStore().getProxy().extraParams.SOURCEID;
            var currentURL = '/' + symfonyEnv + '/dl/source' + currentSourceId + '/pictures/' + currentPictureDisplay.substring(0, 8) + '/';

            if (currentPicture.get('THUMB1') != '') {
                    this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('picture').setSrc(currentURL + currentPicture.get('THUMB1') + '?width=' + targetThumbnailWidth);
                    var thumb1time = currentPicture.get('THUMB1');
                    this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('date').update(thumb1time.substring(8, 10) + ":" + thumb1time.substring(10, 12));
                    this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('picture').show();
                    this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('date').show();
            } else {
                    this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('picture').hide();
                    this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('date').hide();
            };
            if (currentPicture.get('THUMB2') != '') {
                    this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('picture').setSrc(currentURL + currentPicture.get('THUMB2') + '?width=' + targetThumbnailWidth);
                    var thumb2time = currentPicture.get('THUMB2');
                    this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('date').update(thumb2time.substring(8, 10) + ":" + thumb2time.substring(10, 12));
                    this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('picture').show();
                    this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('date').show();
            } else {
                    this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('picture').hide();
                    this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('date').hide();
            };
            if (currentPicture.get('THUMB3') != '') {
                    this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('picture').setSrc(currentURL + currentPicture.get('THUMB3') + '?width=' + targetThumbnailWidth);
                    var thumb3time = currentPicture.get('THUMB3');
                    this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('date').update(thumb3time.substring(8, 10) + ":" + thumb3time.substring(10, 12));
                    this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('picture').show();
                    this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('date').show();
            } else {
                    this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('picture').hide();
                    this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('date').hide();
            };
            if (currentPicture.get('THUMB4') != '') {
                    this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('picture').setSrc(currentURL + currentPicture.get('THUMB4') + '?width=' + targetThumbnailWidth);
                    var thumb4time = currentPicture.get('THUMB4');
                    this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('date').update(thumb4time.substring(8, 10) + ":" + thumb4time.substring(10, 12));
                    this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('picture').show();
                    this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('date').show();
            } else {
                    this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('picture').hide();
                    this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('date').hide();
            };
            if (currentPicture.get('THUMB5') != '') {
                    this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('picture').setSrc(currentURL + currentPicture.get('THUMB5') + '?width=' + targetThumbnailWidth);
                    var thumb5time = currentPicture.get('THUMB5');
                    this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('date').update(thumb5time.substring(8, 10) + ":" + thumb5time.substring(10, 12));
                    this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('picture').show();
                    this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('date').show();
            } else {
                    this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('picture').hide();
                    this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('date').hide();
            };
            if (currentPicture.get('THUMB6') != '') {
                    this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('picture').setSrc(currentURL + currentPicture.get('THUMB6') + '?width=' + targetThumbnailWidth);
                    var thumb6time = currentPicture.get('THUMB6');
                    this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('date').update(thumb6time.substring(8, 10) + ":" + thumb6time.substring(10, 12));
                    this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('picture').show();
                    this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('date').show();
            } else {
                    this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('picture').hide();
                    this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('date').hide();
            };
        }
    }

    , updateDaysWidget: function() {
        this.consoleLog('updateDaysWidget()');
        var daysWidgetSetting = this.getPicturesDaysListStore().last();
        //Determine days not to be displayed on calendar
        if (daysWidgetSetting.get('DISABLED') != "" ) {
                currentDisabledDates = eval('[' + daysWidgetSetting.get('DISABLED') + ']'); //['06/09/2012', '04/../2012']	MMDDYYYY
                this.consoleLog('updateDaysWidget(): Set disabled dates: ' + currentDisabledDates);
                this.getPicturesselectiondayslist().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        } else {
                testDisabledDates = "'02/19/2010'"; //This is a fake value to reset calendar
                currentDisabledDates = eval('[' + testDisabledDates + ']'); //['06/09/2012', '04/../2012']	MMDDYYYY
                this.consoleLog('updateDaysWidget(): Set disabled dates: ' + currentDisabledDates);
                this.getPicturesselectiondayslist().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        }

        // Set Min date in calendar
        if (daysWidgetSetting.get('MIN') > 0 ) {
                this.consoleLog('updateDaysWidget(): Set Min date to: ' + daysWidgetSetting.get('MIN') + ' Date: ' + new Date(daysWidgetSetting.get('MIN')));
                this.getPicturesselectiondayslist().setMinDate(new Date(daysWidgetSetting.get('MIN')));
        }
        // Set Max date in calendar
        if (daysWidgetSetting.get('MAX') > 0 ) {
                this.consoleLog('updateDaysWidget(): Set Max and Selected date to: ' + daysWidgetSetting.get('MAX') + ' Date: ' + new Date(daysWidgetSetting.get('MAX')));
                this.getPicturesselectiondayslist().setMaxDate(new Date(daysWidgetSetting.get('MAX')));
                this.getPicturesselectiondayslist().setValue(new Date(daysWidgetSetting.get('MAX')));
        } else {
            this.consoleLog('updateDaysWidget(): There are no pictures, disabling all dates in picker');
            this.getPicturesselectiondayslist().setMinDate(new Date());
            this.getPicturesselectiondayslist().setMaxDate(new Date());
            this.getPicturesselectiondayslist().setValue(new Date());
        }

    }

    , clearWindowContent: function() {
        this.consoleLog('clearWindowContent()');
        this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('picture').hide();
        this.getPicturesdisplaythumbnails().getComponent('thumb1').getComponent('date').hide();        
        this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('picture').hide();
        this.getPicturesdisplaythumbnails().getComponent('thumb2').getComponent('date').hide();        
        this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('picture').hide();
        this.getPicturesdisplaythumbnails().getComponent('thumb3').getComponent('date').hide();        
        this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('picture').hide();
        this.getPicturesdisplaythumbnails().getComponent('thumb4').getComponent('date').hide();        
        this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('picture').hide();
        this.getPicturesdisplaythumbnails().getComponent('thumb5').getComponent('date').hide();        
        this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('picture').hide();
        this.getPicturesdisplaythumbnails().getComponent('thumb6').getComponent('date').hide();        
        this.getPicturesselectiondayslist().setMinDate(new Date());
        this.getPicturesselectiondayslist().setMaxDate(new Date());
        this.getPicturesselectiondayslist().setValue(new Date());
        this.getPicturesdisplaycurrentpicturedate().setHtml('');
        this.getPicturesdisplaydownloadbutton().setVisible(false);
        this.getPicturesdisplayemailbutton().setDisabled(true);
        this.getPicturesdisplaylastbutton().setDisabled(true);
        this.getPicturesdisplaynextbutton().setDisabled(true);
        this.getPicturesdisplaypreviousbutton().setDisabled(true);
        this.getPicturesdisplaysensorsbutton().setDisabled(true);
        this.getPicturesdisplayzoom().setDisabled(true);      
        this.getPicturesdisplaycurrentpicture().update('');        
    }

    , selectFirstSource: function(key) {
        this.consoleLog('selectFirstSource()');
        this.clearWindowContent();
        var record = this.getSharedSourcesStore().first();
        this.getPicturessourceslist().setValue(record);
    }

    , menuOpenPictures: function() {
        this.consoleLog('menuOpenPictures()');
        Ext.getBody().mask('Please wait, fetching initial content from database ...');

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),                           action: 'REFRESH'});

        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_DSP_PICTURES'
            , 'WPAKD.controller.pictures.Pictures.openPictures'
            , requiredStores);

        var applicationName = 'WEB_DSP_PICTURES';
        this.fireEvent('WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats', applicationName);
    }

    , openPictures: function(key) {
        this.consoleLog('openPictures()');
        Ext.getBody().unmask();

        if(this.getPicturesmain().isVisible() && Ext.WindowManager.getActive().getId() != this.getPicturesmain().getId()) {
            this.consoleLog('openPictures(): getPicturesmain().toFront()');
            this.getPicturesmain().toFront();
        } else if(!this.getPicturesmain().isVisible()) {
            this.consoleLog('openPictures(): getPicturesmain().setVisible(true)');
            this.getDesktopmain().add(this.getPicturesmain());
            this.getPicturesmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent('tbpictures').setVisible(true);
            this.selectFirstSource();
            //this.setVisibleElements();
        } else {
            this.consoleLog('openPictures(): getPicturesmain().setVisible(false)');
            this.getPicturesmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent('tbpictures').setVisible(true);
        }
    }

    , closePictures: function(key) {
        this.consoleLog('closePictures()');
        this.getDesktoptoolbartoptaskbar().getComponent('tbpictures').setVisible(false);
    }

});
