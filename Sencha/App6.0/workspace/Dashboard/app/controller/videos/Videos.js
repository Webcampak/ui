/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.videos.Videos");
//</debug>
Ext.define("WPAKT.controller.videos.Videos", {
    extend: "Ext.app.Controller"

    , stores: [
        "dashboard.Status"
        , "videos.DaysList"
        , "videos.VideosList"
    ]

    , models: [
        "dashboard.Status"
        , "videos.DaysList"
        , "videos.VideosList"
    ]

    , views: [
        "core.skeleton.card.Main"
        , "videos.Main"
        , "videos.video.Main"
        , "videos.video.Video"
        , "videos.controls.date.Main"
        , "videos.controls.date.DatePicker"
        , "videos.controls.VideosList"
    ]

    , refs: [
        {ref: "videosmain",                               selector: "videosmain",                           autoCreate: true,   xtype: "videosmain" }
        , {ref: "coreskeletoncardmain",                   selector: "coreskeletoncardmain"                  }
        , {ref: "videosvideomain",                        selector: "videosvideomain"                       }
        , {ref: "videosvideovideo",                       selector: "videosvideovideo"                      }
        
        , {ref: "videoscontrolsdatemain",                 selector: "videoscontrolsdatemain"                }
        , {ref: "videoscontrolsdatedatepicker",           selector: "videoscontrolsdatedatepicker"          }
        
        , {ref: "videoscontrolsvideoslist",               selector: "videoscontrolsvideoslist"              }
                        
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "videoscontrolsdatedatepicker":         {select:    this.onDaySelected  }
            , "videoscontrolsvideoslist":           {select:    this.onVideoSelected}
            
        });        
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.videos.Videos.loadSource":            this.loadSource
                    , "WPAKT.controller.videos.Videos.updateVideoScreen":   this.updateVideoScreen
                  }
             }
        });          
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Videos: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }
    
    // Setters and getters for source ID
    , getSourceId: function() {
        if (this.sourceId === undefined) {this.setSourceId(null);}
        return this.sourceId;
    }

    , setSourceId: function(sourceId) {
        this.sourceId = parseInt(sourceId);
        return this.sourceId;
    }    
    
    , loadSource: function(sourceid) {
        this.consoleLog("loadSource() - ID: " + sourceid);
        this.setSourceId(sourceid);
        
        var scope = this;
        this.getCoreskeletoncardmain().removeAll();
        this.getCoreskeletoncardmain().add(scope.getVideosmain());  
        this.getVideosmain().show();     
        
        this.getVideosVideosListStore().getProxy().setExtraParam("SOURCEID", sourceid);
        this.getVideosDaysListStore().getProxy().setExtraParam("SOURCEID", sourceid);

        var requiredStores = [];
        requiredStores.push({store: this.getVideosVideosListStore(),    action: "REFRESH"});
        requiredStores.push({store: this.getVideosDaysListStore(),      action: "REFRESH"});

        this.fireEvent("WPAKT.controller.core.loading.Stores.beginLoading"
            , "WEB_DSP_VIDEOS"
            , "WPAKT.controller.videos.Videos.updateVideoScreen"
            , requiredStores);
    }    

    , updateVideoScreen: function() {
        this.consoleLog("updateVideoScreen()");
        this.updateDaysWidget();

        var videoWdith = this.getVideosvideovideo().getWidth();
        var videoHeight = videoWdith * 9 / 16;
        this.getVideosvideovideo().setHeight(videoHeight);

        this.onVideoSelected(this.getVideoscontrolsvideoslist(), this.getVideosVideosListStore().first(), null);
    }


    , onVideoSelected: function(scope, selectedVideo, eOpts) {
        this.consoleLog("onVideoSelected()");
//        console.log(selectedVideo);
        if (selectedVideo !== null) {
            this.getVideosvideomain().setTitle(selectedVideo.get("FILENAME"));
            
            //Get window size. For Height, 30px adjustement is to keep name below picture on screen
            var currentWindowWidth = this.getVideosvideovideo().getWidth();
            var currentWindowHeight = this.getVideosvideovideo() - 30;
            var previewJpgWidth = selectedVideo.get("JPGWIDTH");
            var previewJpgHeight = selectedVideo.get("JPGHEIGHT");

            this.consoleLog("onVideoSelected(): Window Size:" + currentWindowWidth + "x" + currentWindowHeight);
            this.consoleLog("onVideoSelected(): Picture Size:" + previewJpgWidth + "x" + previewJpgHeight);

            //We ensure that target height of the picture will not by greather than current window height (otherwise a portion of the picture will not be displayed)
            var currentPictureTargetHeight = Math.round(currentWindowWidth * previewJpgHeight / previewJpgWidth);
            if (currentPictureTargetHeight > currentWindowHeight) {
                    var currentPictureTargetWidth = Math.round(currentWindowHeight * previewJpgWidth / previewJpgHeight);
                    this.getVideosvideovideo().setSize({width:currentPictureTargetWidth, height:currentWindowHeight});
            } else {
                    var currentPictureTargetWidth = currentWindowWidth;
            }

            //Launching Flowplayer
            this.consoleLog("onVideoSelected(): Preview Video File:" + selectedVideo.get("MP4"));

            var currentURL = "/" + symfonyEnv + "/dl/source" + this.getSourceId() + "/videos/";
            var currentPreviewMp4 = currentURL + selectedVideo.get("MP4");
            var currentPreviewJpg = currentURL + selectedVideo.get("JPG");

            var insertPlayer = "<div class=\"flowplayer\">";
            var insertPlayer = insertPlayer + "<video controls>";
            var insertPlayer = insertPlayer + "<source type=\"video/mp4\"  src=\"" + currentPreviewMp4 + "\">";
            var insertPlayer = insertPlayer + "</video>";
            var insertPlayer = insertPlayer + "</div>";

            this.getVideosvideovideo().update("<center>" + insertPlayer + "</center>");
        } else {
            this.getVideosvideomain().setTitle(i18n.gettext("No Video available for this source"));
        }

    }
    
    , updateDaysWidget: function() {
        this.consoleLog("updateDaysWidget()");
        var daysWidgetSetting = this.getVideosDaysListStore().last();
        //Determine days not to be displayed on calendar
        if (daysWidgetSetting.get("DISABLED") !== "" ) {
                var currentDisabledDates = eval("[" + daysWidgetSetting.get("DISABLED") + "]"); //["06/09/2012", "04/../2012"]	MMDDYYYY
                this.consoleLog("updateDaysWidget(): Set disabled dates: " + currentDisabledDates);
                this.getVideoscontrolsdatedatepicker().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        } else {
                var testDisabledDates = "02/19/2010"; //This is a fake value to reset calendar
                currentDisabledDates = eval("[" + testDisabledDates + "]"); //["06/09/2012", "04/../2012"]	MMDDYYYY
                this.consoleLog("updateDaysWidget(): Set disabled dates: " + currentDisabledDates);
                this.getVideoscontrolsdatedatepicker().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        }

        // Set Min date in calendar
        if (daysWidgetSetting.get("MIN") > 0 ) {
                this.consoleLog("updateDaysWidget(): Set Min date to: " + daysWidgetSetting.get("MIN") + " Date: " + new Date(daysWidgetSetting.get("MIN")));
                this.getVideoscontrolsdatedatepicker().setMinDate(new Date(daysWidgetSetting.get("MIN")));
        }
        // Set Max date in calendar
        if (daysWidgetSetting.get("MAX") > 0 ) {
                this.consoleLog("updateDaysWidget(): Set Max and Selected date to: " + daysWidgetSetting.get("MAX") + " Date: " + new Date(daysWidgetSetting.get("MAX")));
                this.getVideoscontrolsdatedatepicker().setMaxDate(new Date(daysWidgetSetting.get("MAX")));
                this.getVideoscontrolsdatedatepicker().setValue(new Date(daysWidgetSetting.get("MAX")));
        } else {
            this.consoleLog("updateDaysWidget(): There are no videos, disabling all dates in picker");
            this.getVideoscontrolsdatedatepicker().setMinDate(new Date());
            this.getVideoscontrolsdatedatepicker().setMaxDate(new Date());
            this.getVideoscontrolsdatedatepicker().setValue(new Date());
        }        
        this.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", this.getVideoscontrolsdatedatepicker());
    }  

    , onDaySelected: function(scope, date, eOpts ) {
        this.consoleLog("onDaySelected()");
        var convertedDate = Ext.Date.format(date, "Ymd");
        this.consoleLog("onDaySelected(): Selected date is: " + date + " converted to: " + convertedDate);
        this.filterVideoList(convertedDate);
    }
    
    , filterVideoList: function(filterDate) {
        this.consoleLog("filterVideoList(): " + filterDate);
        this.getVideosVideosListStore().clearFilter(false);
        this.getVideosVideosListStore().filterBy(function (record) {
            if (record.data.DATE === filterDate) {
                return true;
            } else {
                return false;
            }
        });
    }    
});