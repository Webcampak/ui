//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.videos.Videos');
//</debug>
Ext.define('WPAKD.controller.videos.Videos', {
    extend: 'Ext.app.Controller',

    views: [
        'desktop.toolbar.top.Taskbar'
        , 'desktop.sendemail.Main'

        , 'videos.Main'
        , 'videos.SourcesList'
        , 'videos.SourceName'

        , 'videos.display.Main'
        , 'videos.display.Video'
        , 'videos.display.CurrentVideoName'

        , 'videos.selection.Main'
        , 'videos.selection.DaysList'
        , 'videos.selection.VideosList'

    ],

    stores: [
        'shared.Sources'
        , 'videos.DaysList'
        , 'videos.VideosList'

    ],

    models: [
        'shared.Sources'
        , 'videos.DaysList'
        , 'videos.VideosList'

    ],

    refs: [
        {ref: 'desktopmain',                selector: 'desktopmain'                 }
        , {ref: 'desktoptoolbartoptaskbar', selector: 'desktoptoolbartoptaskbar'    }
        , {ref: 'desktopsendemailmain',     selector: 'desktopsendemailmain'        }


        , {ref: 'videosmain',             selector: 'videosmain',               autoCreate: true,   xtype: 'videosmain'      }
        , {ref: 'videossourcename',       selector: 'videossourcename'          }
        , {ref: 'videossourceslist',      selector: 'videossourceslist'         }

        , {ref: 'videosdisplaymain',                selector: 'videosdisplaymain'               }
        , {ref: 'videosdisplayvideo',               selector: 'videosdisplayvideo'              }
        , {ref: 'videosdisplaycurrentvideoname',    selector: 'videosdisplaycurrentvideoname'   }

        , {ref: 'videosselectionmain',        selector: 'videosselectionmain'       }
        , {ref: 'videosselectiondayslist',    selector: 'videosselectiondayslist'   }
        , {ref: 'videosselectionvideoslist',  selector: 'videosselectionvideoslist' }

    ],

    init: function() {
        this.consoleLog('init()');
        this.control({
            'desktoptoolbartoptaskbar button[action=openWEB_DSP_VIDEOS]': {click:  this.openVideos                                  }
            , 'videosmain':                               {hide:   this.closeVideos, minimize: this.openVideos    }
            , '#menuOpenWEB_DSP_VIDEOS':                  {click:  this.menuOpenVideos                              }

            , 'videossourceslist':                    {change:            this.onSourceSelected   }
            , 'videosselectiondayslist':              {select:            this.onDaySelected      }

            , 'videosselectionvideoslist':            {selectionchange:   this.onVideoSelected}
        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.videos.Videos.openVideos':        this.openVideos
                      , 'WPAKD.controller.videos.Videos.menuOpenVideos':  this.menuOpenVideos
                      , 'WPAKD.controller.videos.Videos.updateVideoScreen':  this.updateVideoScreen
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Videos: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , onVideoSelected: function(scope, selectedVideo, eOpts) {
        this.consoleLog('onVideoSelected()');

        if (selectedVideo !== null) {
            this.getVideosdisplaycurrentvideoname().setHtml('<center><b>' + selectedVideo[0].get('FILENAME') + '</b></center>');

            //Get window size. For Height, 30px adjustement is to keep name below picture on screen
            var currentWindowWidth = this.getVideosdisplayvideo().getWidth();
            var currentWindowHeight = this.getVideosdisplayvideo() - 30;
            var previewJpgWidth = selectedVideo[0].get('JPGWIDTH');
            var previewJpgHeight = selectedVideo[0].get('JPGHEIGHT');

            this.consoleLog('onVideoSelected(): Window Size:' + currentWindowWidth + 'x' + currentWindowHeight);
            this.consoleLog('onVideoSelected(): Picture Size:' + previewJpgWidth + 'x' + previewJpgHeight);

            //We ensure that target height of the picture will not by greather than current window height (otherwise a portion of the picture will not be displayed)
            currentPictureTargetHeight = Math.round(currentWindowWidth * previewJpgHeight / previewJpgWidth);
            if (currentPictureTargetHeight > currentWindowHeight) {
                    currentPictureTargetWidth = Math.round(currentWindowHeight * previewJpgWidth / previewJpgHeight);
                    this.getVideosdisplayvideo().setSize({width:currentPictureTargetWidth, height:currentWindowHeight});
            } else {
                    currentPictureTargetWidth = currentWindowWidth;
            }

            //Launching Flowplayer
            this.consoleLog('onVideoSelected(): Preview Video File:' + selectedVideo[0].get('MP4'));

            var currentSourceId = this.getVideosVideosListStore().getProxy().extraParams.SOURCEID;
            var currentURL = '/' + symfonyEnv + '/dl/source' + currentSourceId + '/videos/';
            var currentPreviewMp4 = currentURL + selectedVideo[0].get('MP4');
            var currentPreviewJpg = currentURL + selectedVideo[0].get('JPG');

            var insertPlayer = '<div class="flowplayer">';
            var insertPlayer = insertPlayer + '<video controls>';
            var insertPlayer = insertPlayer + '<source type="video/mp4"  src="' + currentPreviewMp4 + '">';
            var insertPlayer = insertPlayer + '</video>';
            var insertPlayer = insertPlayer + '</div>';

            this.getVideosdisplayvideo().update('<center>' + insertPlayer + '</center>');
        } else {
            this.getVideosdisplaycurrentvideoname().setHtml('<center><b>' + i18n.gettext('No Video available for this source') + '</b></center>');
            this.getVideosdisplayvideo().update('');
        }

    }


    , updateVideoScreen: function() {
        this.consoleLog('updateVideoScreen()');
        this.updateDaysWidget();

        var videoWdith = this.getVideosdisplayvideo().getWidth();
        var videoHeight = videoWdith * 9 / 16;
        this.getVideosdisplayvideo().setHeight(videoHeight);

        this.onVideoSelected(this.getVideossourceslist(), this.getVideosVideosListStore().first(), null);
    }

    , onDaySelected: function(scope, date, eOpts ) {
        this.consoleLog('onDaySelected()');
        var convertedDate = Ext.Date.format(date, 'Ymd');
        this.consoleLog('onDaySelected(): Selected date is: ' + date + ' converted to: ' + convertedDate);
        this.filterVideoList(convertedDate);
    }

    , filterVideoList: function(filterDate) {
        this.consoleLog('filterVideoList(): ' + filterDate);
        this.getVideosVideosListStore().clearFilter(false);
        this.getVideosVideosListStore().filterBy(function (record) {
            if (record.data.DATE === filterDate) {
                return true;
            } else {
                return false;
            }
        });
    }

    , onSourceSelected: function(combo, newValue, oldValue, eOpts ) {
        this.consoleLog('onSourceSelected()');
        selectedSource = this.getSharedSourcesStore().getById(newValue);

        this.getVideossourcename().setHtml(selectedSource.get('NAME'));

        this.consoleLog('onSourceSelected(): Selected source name is: ' + selectedSource.get('NAME'));
        this.consoleLog('onSourceSelected(): Selected source SOURCEID is: ' + selectedSource.get('SOURCEID'));

        Ext.getStore('videos.VideosList').getProxy().setExtraParam('SOURCEID', selectedSource.get('SOURCEID'));
        Ext.getStore('videos.DaysList').getProxy().setExtraParam('SOURCEID', selectedSource.get('SOURCEID'));

        var requiredStores = [];
        requiredStores.push({store: this.getVideosVideosListStore(),        action: 'REFRESH'});
        requiredStores.push({store: this.getVideosDaysListStore(),     action: 'REFRESH'});

        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_DSP_VIDEOS'
            , 'WPAKD.controller.videos.Videos.updateVideoScreen'
            , requiredStores);

    }

    , updateDaysWidget: function() {
        this.consoleLog('updateDaysWidget()');
        var daysWidgetSetting = this.getVideosDaysListStore().last();
        //Determine days not to be displayed on calendar
        if (daysWidgetSetting.get('DISABLED') != "" ) {
                currentDisabledDates = eval('[' + daysWidgetSetting.get('DISABLED') + ']'); //['06/09/2012', '04/../2012']	MMDDYYYY
                this.consoleLog('updateDaysWidget(): Set disabled dates: ' + currentDisabledDates);
                this.getVideosselectiondayslist().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        } else {
                testDisabledDates = "'02/19/2010'"; //This is a fake value to reset calendar
                currentDisabledDates = eval('[' + testDisabledDates + ']'); //['06/09/2012', '04/../2012']	MMDDYYYY
                this.consoleLog('updateDaysWidget(): Set disabled dates: ' + currentDisabledDates);
                this.getVideosselectiondayslist().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        }

        // Set Min date in calendar
        if (daysWidgetSetting.get('MIN') > 0 ) {
                this.consoleLog('updateDaysWidget(): Set Min date to: ' + daysWidgetSetting.get('MIN') + ' Date: ' + new Date(daysWidgetSetting.get('MIN')));
                this.getVideosselectiondayslist().setMinDate(new Date(daysWidgetSetting.get('MIN')));
        }
        // Set Max date in calendar
        if (daysWidgetSetting.get('MAX') > 0 ) {
                this.consoleLog('updateDaysWidget(): Set Max and Selected date to: ' + daysWidgetSetting.get('MAX') + ' Date: ' + new Date(daysWidgetSetting.get('MAX')));
                this.getVideosselectiondayslist().setMaxDate(new Date(daysWidgetSetting.get('MAX')));
                this.getVideosselectiondayslist().setValue(new Date(daysWidgetSetting.get('MAX')));
                var convertedDate = Ext.Date.format(new Date(daysWidgetSetting.get('MAX')), 'Ymd');
                this.filterVideoList(convertedDate);
        } else {
            this.consoleLog('updateDaysWidget(): There are no videos, disabling all dates in picker');
            this.getVideosselectiondayslist().setMinDate(new Date());
            this.getVideosselectiondayslist().setMaxDate(new Date());
            this.getVideosselectiondayslist().setValue(new Date());
        }

    }

    , selectFirstSource: function(key) {
        this.consoleLog('selectFirstSource()');
        var record = this.getSharedSourcesStore().first();

        this.getVideossourceslist().setValue(record);
    }

    , menuOpenVideos: function() {
        this.consoleLog('menuOpenVideos()');
        Ext.getBody().mask('Please wait, fetching initial content from database ...');

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),                           action: 'REFRESH'});

        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_DSP_VIDEOS'
            , 'WPAKD.controller.videos.Videos.openVideos'
            , requiredStores);

        var applicationName = 'WEB_DSP_VIDEOS';
        this.fireEvent('WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats', applicationName);
    },

    openVideos: function(key) {
        this.consoleLog('openVideos()');
        Ext.getBody().unmask();

        if(this.getVideosmain().isVisible() && Ext.WindowManager.getActive().getId() != this.getVideosmain().getId()) {
            this.consoleLog('openVideos(): getVideosmain().toFront()');
            this.getVideosmain().toFront();
        } else if(!this.getVideosmain().isVisible()) {
            this.consoleLog('openVideos(): getVideosmain().setVisible(true)');
            this.getDesktopmain().add(this.getVideosmain());
            this.getVideosmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent('tbvideos').setVisible(true);
            this.selectFirstSource();
            //this.setVisibleElements();
        } else {
            this.consoleLog('openVideos(): getVideosmain().setVisible(false)');
            this.getVideosmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent('tbvideos').setVisible(true);
        }
    },

    closeVideos: function(key) {
        this.consoleLog('closeVideos()');
        this.getDesktoptoolbartoptaskbar().getComponent('tbvideos').setVisible(false);
    }

});
