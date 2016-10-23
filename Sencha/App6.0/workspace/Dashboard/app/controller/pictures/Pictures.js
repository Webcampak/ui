/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.pictures.Pictures");
//</debug>
Ext.define("WPAKT.controller.pictures.Pictures", {
    extend: "Ext.app.Controller"

    , stores: [
        "dashboard.Status"
        , "pictures.DaysList"
        , "pictures.Sensors"
        , "pictures.Picture"
        , "pictures.HoursList"
        , "pictures.HoursCombo"

    ]

    , models: [
        "dashboard.Status"
        , "pictures.DaysList"
        , "pictures.Sensors"
        , "pictures.Picture"
        , "pictures.HoursList"
        , "pictures.HoursCombo"
    ]

    , views: [
        "core.skeleton.card.Main"
        , "pictures.Main"
        , "pictures.picture.Main"
        , "pictures.picture.Picture"
        , "pictures.controls.Main"
        , "pictures.controls.date.Main"
        , "pictures.controls.date.DatePicker"
        , "pictures.controls.date.PictureCombo"
        , "pictures.controls.details.Main"
        , "pictures.controls.details.FileSize"
        , "pictures.controls.details.SensorsButton"
        , "pictures.controls.details.EmailButton"

        , "pictures.controls.quicknav.Main"
        , "pictures.controls.quicknav.Minus15Button"
        , "pictures.controls.quicknav.Minus10Button"
        , "pictures.controls.quicknav.Minus5Button"
        , "pictures.controls.quicknav.Plus5Button"
        , "pictures.controls.quicknav.Plus10Button"
        , "pictures.controls.quicknav.Plus15Button"
        , "pictures.controls.quicknav.NextButton"
        , "pictures.controls.quicknav.PreviousButton"
        
        , "pictures.sensors.Main"
        , "pictures.sensors.Sensor1"
        , "pictures.sensors.Sensor2"
        , "pictures.sensors.Sensor3"
        , "pictures.sensors.Sensor4"
        , "pictures.sensors.ButtonClose"
    ]

    , refs: [
        {ref: "picturesmain",                               selector: "picturesmain",                           autoCreate: true,   xtype: "picturesmain" }
        , {ref: "coreskeletoncardmain",                     selector: "coreskeletoncardmain"                    }
        , {ref: "picturespicturemain",                      selector: "picturespicturemain"                     }
        , {ref: "picturespicturepicture",                   selector: "picturespicturepicture"                  }
        , {ref: "picturescontrolsmain",                     selector: "picturescontrolsmain"                    }
        
        , {ref: "picturescontrolsdatemain",                 selector: "picturescontrolsdatemain"                }
        , {ref: "picturescontrolsdatedatepicker",           selector: "picturescontrolsdatedatepicker"          }
        , {ref: "picturescontrolsdatepicturecombo",         selector: "picturescontrolsdatepicturecombo"        }
                
        , {ref: "picturescontrolsdetailsmain",              selector: "picturescontrolsdetailsmain"             }
        , {ref: "picturescontrolsdetailsfilesize",          selector: "picturescontrolsdetailsfilesize"         }
        , {ref: "picturescontrolsdetailssensorsbutton",     selector: "picturescontrolsdetailssensorsbutton"    }
        , {ref: "picturescontrolsdetailsemailbutton",       selector: "picturescontrolsdetailsemailbutton"      }
        
        , {ref: "picturescontrolsquicknavmain",             selector: "picturescontrolsquicknavmain"            }
        , {ref: "picturescontrolsquicknavminus15button",    selector: "picturescontrolsquicknavminus15button"   }
        , {ref: "picturescontrolsquicknavminus10button",    selector: "picturescontrolsquicknavminus10button"   }
        , {ref: "picturescontrolsquicknavminus5button",     selector: "picturescontrolsquicknavminus5button"    }
        , {ref: "picturescontrolsquicknavplus5button",      selector: "picturescontrolsquicknavplus5button"     }
        , {ref: "picturescontrolsquicknavplus10button",     selector: "picturescontrolsquicknavplus10button"    }
        , {ref: "picturescontrolsquicknavplus15button",     selector: "picturescontrolsquicknavplus15button"    }
        , {ref: "picturescontrolsquicknavnextbutton",       selector: "picturescontrolsquicknavnextbutton"      }
        , {ref: "picturescontrolsquicknavpreviousbutton",   selector: "picturescontrolsquicknavpreviousbutton"  }
        
        , {ref: "picturessensorsmain",                      selector: "picturessensorsmain",                    autoCreate: true,   xtype: "picturessensorsmain" }
        , {ref: "picturessensorssensor1",                   selector: "picturessensorssensor1"      }
        , {ref: "picturessensorssensor2",                   selector: "picturessensorssensor2"      }
        , {ref: "picturessensorssensor3",                   selector: "picturessensorssensor3"      }
        , {ref: "picturessensorssensor4",                   selector: "picturessensorssensor4"      }
        , {ref: "picturessensorsbuttonclose",               selector: "picturessensorsbuttonclose"  }
        
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "picturescontrolsdetailsemailbutton":       {click:     this.openSendEmail  }
            , "picturescontrolsquicknavminus15button":  {click:     this.clickNavButton }
            , "picturescontrolsquicknavminus10button":  {click:     this.clickNavButton }
            , "picturescontrolsquicknavminus5button":   {click:     this.clickNavButton }
            , "picturescontrolsquicknavplus5button":    {click:     this.clickNavButton }
            , "picturescontrolsquicknavplus10button":   {click:     this.clickNavButton }
            , "picturescontrolsquicknavplus15button":   {click:     this.clickNavButton }
            , "picturescontrolsquicknavnextbutton":     {click:     this.clickNavButton }
            , "picturescontrolsquicknavpreviousbutton": {click:     this.clickNavButton }
            , "picturescontrolsdatedatepicker":         {select:    this.onDaySelected  }
            , "picturescontrolsdatepicturecombo":       {select:    this.onHourSelected }
            , "picturescontrolsdetailssensorsbutton":   {click:     this.showSensors    }
            , "picturessensorsbuttonclose":             {click:     this.hideSensors    }
            
        });        
        this.listen({
             controller: {
                  "*": {
                    "WPAKT.controller.pictures.Pictures.loadSource":    this.loadSource
                    , "WPAKT.controller.pictures.Pictures.sendEmail":   this.sendEmail
                    , "WPAKT.controller.pictures.Pictures.cancelEmail": this.cancelEmail
                  }
             }
        });          
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Dashboard->Pictures: ";
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
        this.getCoreskeletoncardmain().add(scope.getPicturesmain());  
        this.getPicturesmain().show();     
        
        var sourceStatus = this.getSourceStatus(sourceid);
        this.setSourcePicture(sourceStatus.capture.last);

        // Update Date Picker with current capture dates
        this.getPicturesDaysListStore().getProxy().setExtraParam("SOURCEID", sourceid);
        this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getPicturescontrolsdatedatepicker(), "Refreshing...");
        this.getPicturesDaysListStore().load();
        this.getPicturesDaysListStore().on("load",this.updateDaysWidget,this,{single:true});
        
        // Update Sensors        
        this.getPicturesSensorsStore().getProxy().setExtraParam("SOURCEID", sourceid);
        this.getPicturesSensorsStore().getProxy().setExtraParam("PICTUREDATE", null);
        this.getPicturesSensorsStore().load();
        this.getPicturesSensorsStore().on("load",this.updateSensorsButton,this,{single:true});
        
        // Update Picture details
        this.getPicturesPictureStore().getProxy().setExtraParam("SOURCEID", sourceid);
        this.getPicturesPictureStore().getProxy().setExtraParam("PICTUREDATE", null);
        this.getPicturesPictureStore().load();
        this.getPicturesPictureStore().on("load",this.updatePictureElements,this,{single:true});
        
        // Update Hours List
        this.getPicturesHoursListStore().getProxy().setExtraParam("SOURCEID", sourceid);
        this.getPicturesHoursListStore().getProxy().setExtraParam("SELECTEDDAY", null);
        this.getPicturesHoursListStore().load();
        this.getPicturesHoursListStore().on("load",this.updateHoursCombo,this,{single:true});
                     
    }    


    , getSourceStatus: function(sourceid) {
        this.consoleLog("getSourceStatus()");
        var scope = this;
        var lastStatus = this.getDashboardStatusStore().last().get("STATUS");
        var statusObj = Ext.JSON.decode(lastStatus, true);    

        var identifiedSource = null;
        Ext.Array.each(statusObj.sources, function(sourceObj, index) {            
            if (sourceObj.SOURCEID !== undefined && parseInt(sourceObj.SOURCEID) === scope.getSourceId()) {
                identifiedSource = sourceObj;
            }
        });       
        return identifiedSource;
    }
    
    , setSourcePicture: function(picture) {
        this.consoleLog("setSourcePicture()");
        var pictureWidth = this.getPicturespicturepicture().getWidth();
        var filename = picture.filename;
        var currentURL = "/" + symfonyEnv + "/dl/source" + this.getSourceId() + "/pictures/" + filename.substring(0, 8) + "/" + filename + "?width=" + pictureWidth;
        this.getPicturespicturepicture().setSrc(currentURL);  
        this.setSourcePictureDate(picture);
    }    

    , setSourcePictureDate: function(picture) {
        this.consoleLog("setSourcePictureDate()");
        this.getPicturespicturemain().setTitle(i18n.gettext("Captured on") + ": " + Ext.Date.format(new Date(picture.date), "Y-m-d H:i:s"));
    }
    
    , updateDaysWidget: function() {
        this.consoleLog("updateDaysWidget()");
        var daysWidgetSetting = this.getPicturesDaysListStore().last();
        //Determine days not to be displayed on calendar
        if (daysWidgetSetting.get("DISABLED") !== "" ) {
                var currentDisabledDates = eval("[" + daysWidgetSetting.get("DISABLED") + "]"); //["06/09/2012", "04/../2012"]	MMDDYYYY
                this.consoleLog("updateDaysWidget(): Set disabled dates: " + currentDisabledDates);
                this.getPicturescontrolsdatedatepicker().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        } else {
                var testDisabledDates = "02/19/2010"; //This is a fake value to reset calendar
                currentDisabledDates = eval("[" + testDisabledDates + "]"); //["06/09/2012", "04/../2012"]	MMDDYYYY
                this.consoleLog("updateDaysWidget(): Set disabled dates: " + currentDisabledDates);
                this.getPicturescontrolsdatedatepicker().setDisabledDates(currentDisabledDates);	//MMDDYYYY
        }

        // Set Min date in calendar
        if (daysWidgetSetting.get("MIN") > 0 ) {
                this.consoleLog("updateDaysWidget(): Set Min date to: " + daysWidgetSetting.get("MIN") + " Date: " + new Date(daysWidgetSetting.get("MIN")));
                this.getPicturescontrolsdatedatepicker().setMinDate(new Date(daysWidgetSetting.get("MIN")));
        }
        // Set Max date in calendar
        if (daysWidgetSetting.get("MAX") > 0 ) {
                this.consoleLog("updateDaysWidget(): Set Max and Selected date to: " + daysWidgetSetting.get("MAX") + " Date: " + new Date(daysWidgetSetting.get("MAX")));
                this.getPicturescontrolsdatedatepicker().setMaxDate(new Date(daysWidgetSetting.get("MAX")));
                this.getPicturescontrolsdatedatepicker().setValue(new Date(daysWidgetSetting.get("MAX")));
        } else {
            this.consoleLog("updateDaysWidget(): There are no pictures, disabling all dates in picker");
            this.getPicturescontrolsdatedatepicker().setMinDate(new Date());
            this.getPicturescontrolsdatedatepicker().setMaxDate(new Date());
            this.getPicturescontrolsdatedatepicker().setValue(new Date());
        }        
        this.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", this.getPicturescontrolsdatedatepicker());
    }
    
    , updateSensorsButton: function() {
        this.consoleLog("updateSensorsButton()");
        var currentSensors = this.getPicturesSensorsStore().last();   
        if (currentSensors !== null && currentSensors.get("SENSOR1") !== "") {
            this.getPicturescontrolsdetailssensorsbutton().setDisabled(false);
        } else {
            this.getPicturescontrolsdetailssensorsbutton().setDisabled(true);
        }
    }   
    
    , openSendEmail: function() {
        this.consoleLog("openSendEmail()");
        //var currentPicture = this.getPicturesPictureStore().last().get("PICTURE");
        var sourceStatus = this.getSourceStatus(this.getSourceId());
        var currentPicture = sourceStatus.capture.last.filename;
        var sendEvent = "WPAKT.controller.core.Email.closeSendEmail";
        //var sendEvent = "";
        var cancelEvent = "WPAKT.controller.core.Email.closeSendEmail";
        var emailSubject = i18n.gettext("Webcampak picture");
        var emailBody = i18n.gettext("Hello, <br /><br />You\"ll find enclosed an interesting picture<br /><br />Best Regards.");
        var emailAttachmentName = currentPicture;
        var emailAttachmentSourceId = this.getSourceId();
        var emailAttachmentPath = "/pictures/" + currentPicture.substring(0, 8) + "/" + currentPicture;
        this.fireEvent("WPAKT.controller.core.Email.menuOpenSendEmail", sendEvent, cancelEvent, emailSubject, emailBody, emailAttachmentName, emailAttachmentSourceId, emailAttachmentPath);
    }  
    
    , updatePictureElements: function() {
        this.consoleLog("updatePictureElements()");
        this.updateQuickNavButtons();
        var displayPicture = this.getPicturesPictureStore().last();
        if (displayPicture === null) {
            this.clearWindowContent();
            this.getPicturescontrolsdetailsfilesize().setData({jpg: i18n.gettext("Not Available"), raw: i18n.gettext("Not Available"), definition: i18n.gettext("Not Available")});
        } else {
            this.setSourcePicture({filename: displayPicture.get("PICTURE"), date: displayPicture.get("PICTUREDATE")});

            if (displayPicture.get("PICTUREJPGSIZE") > 0) {var jpgSize = Ext.util.Format.fileSize(displayPicture.get("PICTUREJPGSIZE"));}
            else {var jpgSize = i18n.gettext("Not Available");}
            if (displayPicture.get("PICTURERAWSIZE") > 0) {var rawSize = Ext.util.Format.fileSize(displayPicture.get("PICTURERAWSIZE"));}
            else {var rawSize = i18n.gettext("Not Available");}
            if (parseInt(displayPicture.get("PICTUREWIDTH")) === 0 || parseInt(displayPicture.get("PICTUREHEIGHT")) === 0) {var definition = i18n.gettext("n/a");}
            else {var definition = displayPicture.get("PICTUREWIDTH") + "x" + displayPicture.get("PICTUREHEIGHT");}
            this.getPicturescontrolsdetailsfilesize().setData({jpg: jpgSize, raw: rawSize, definition: definition});
        }
    }
    
    , updateQuickNavButtons: function() {
        this.consoleLog("updateQuickNavButtons()");
        var currentPicture = this.getPicturesPictureStore().last();
        if (currentPicture === null) {
            this.disableAllQuickNavButtons();
        } else {
            var currentPictureDisplay = currentPicture.get("PICTURE");

            if (currentPicture.get("THUMB1") !== "") {this.getPicturescontrolsquicknavminus15button().setDisabled(false);}
            else {this.getPicturescontrolsquicknavminus15button().setDisabled(true);}
            
            if (currentPicture.get("THUMB2") !== "") {this.getPicturescontrolsquicknavminus10button().setDisabled(false);}
            else {this.getPicturescontrolsquicknavminus10button().setDisabled(true);}
            
            if (currentPicture.get("THUMB3") !== "") {this.getPicturescontrolsquicknavminus5button().setDisabled(false);}
            else {this.getPicturescontrolsquicknavminus5button().setDisabled(true);}
            
            if (currentPicture.get("THUMB4") !== "") {this.getPicturescontrolsquicknavplus5button().setDisabled(false);}
            else {this.getPicturescontrolsquicknavplus5button().setDisabled(true);}
            
            if (currentPicture.get("THUMB5") !== "") {this.getPicturescontrolsquicknavplus10button().setDisabled(false);}
            else {this.getPicturescontrolsquicknavplus10button().setDisabled(true);}
            
            if (currentPicture.get("THUMB6") !== "") {this.getPicturescontrolsquicknavplus15button().setDisabled(false);}
            else {this.getPicturescontrolsquicknavplus15button().setDisabled(true);}
            
            if (currentPicture.get("PREVIOUS") !== "") {this.getPicturescontrolsquicknavpreviousbutton().setDisabled(false);}
            else {this.getPicturescontrolsquicknavpreviousbutton().setDisabled(true);}            
            
            if (currentPicture.get("NEXT") !== "") {this.getPicturescontrolsquicknavnextbutton().setDisabled(false);}
            else {this.getPicturescontrolsquicknavnextbutton().setDisabled(true);}               
        }
    }    
    
    , disableAllQuickNavButtons: function() {
        this.consoleLog("disableAllQuickNavButtons()");
        this.getPicturescontrolsquicknavminus15button().setDisabled(true);
        this.getPicturescontrolsquicknavminus10button().setDisabled(true);
        this.getPicturescontrolsquicknavminus5button().setDisabled(true);
        this.getPicturescontrolsquicknavplus5button().setDisabled(true);
        this.getPicturescontrolsquicknavplus10button().setDisabled(true);
        this.getPicturescontrolsquicknavplus15button().setDisabled(true);
        this.getPicturescontrolsquicknavpreviousbutton().setDisabled(true);
        this.getPicturescontrolsquicknavnextbutton().setDisabled(true);        
    }
    
    , clearWindowContent: function() {
        this.consoleLog("clearWindowContent()");
        this.getPicturescontrolsdatedatepicker().setMinDate(new Date());
        this.getPicturescontrolsdatedatepicker().setMaxDate(new Date());
        this.getPicturescontrolsdatedatepicker().setValue(new Date());
        
        this.disableAllQuickNavButtons();
        
        this.getPicturespicturemain().setTitle(i18n.gettext("No Picture available"));
                
        this.getPicturescontrolsdetailssensorsbutton().setDisabled(true);
        this.getPicturescontrolsdetailsemailbutton().setDisabled(true);
      
    }    
      
    , clickNavButton: function(button) {
        this.consoleLog("clickNavButton()");
        if (button.xtype === "picturescontrolsquicknavminus15button") {var modelValue = "THUMB1"}
        else if (button.xtype === "picturescontrolsquicknavminus10button") {var modelValue = "THUMB2"}
        else if (button.xtype === "picturescontrolsquicknavminus5button") {var modelValue = "THUMB3"}
        else if (button.xtype === "picturescontrolsquicknavplus5button") {var modelValue = "THUMB4"}
        else if (button.xtype === "picturescontrolsquicknavplus10button") {var modelValue = "THUMB5"}
        else if (button.xtype === "picturescontrolsquicknavplus15button") {var modelValue = "THUMB6"}
        else if (button.xtype === "picturescontrolsquicknavnextbutton") {var modelValue = "NEXT"}
        else {var modelValue = "PREVIOUS"}
        var currentPicture = this.getPicturesPictureStore().last();
        this.loadNewPicture(currentPicture.get(modelValue));
    }
 
    , onHourSelected: function(combo, record, eOpts) {        
        this.consoleLog("onHourSelected()");
        this.loadNewPicture(record.get("PICTURE"));
    }
 
    , loadNewPicture: function(pictureToLoad) {
        this.consoleLog("loadNewPicture()");
        if (pictureToLoad !== "") {
            var pictureDate = this.convertPictureToDate(pictureToLoad);
            this.getPicturescontrolsdatedatepicker().setValue(pictureDate);
            this.consoleLog("loadNewPicture(): Load picture: " + pictureToLoad);
            this.getPicturesPictureStore().getProxy().setExtraParam("PICTUREDATE", pictureToLoad);
            this.getPicturesPictureStore().on("load",this.updatePictureElements,this,{single:true});
            this.getPicturesPictureStore().load();
            //Detection if new picture is in a different day than current
            var currentPicture = this.getPicturesPictureStore().last().get("PICTURE");
            var currentPictureDay = currentPicture.substring(0, 4) + currentPicture.substring(4, 6) +  currentPicture.substring(6, 8);
            var newPictureDay = pictureToLoad.substring(0, 4) + pictureToLoad.substring(4, 6) +  pictureToLoad.substring(6, 8);
            if (currentPictureDay !== newPictureDay || this.getPicturesHoursListStore().getProxy().extraParams.SELECTEDDAY !== currentPictureDay) {
                this.consoleLog("loadNewPicture(): New picture is in a different day, reloading hours list");
                this.getPicturesHoursListStore().getProxy().setExtraParam("SELECTEDDAY", newPictureDay);
                this.getPicturesHoursListStore().load();
                this.getPicturesSensorsStore().on("load",this.updateHoursCombo,this,{single:true});
            }            
        }
    }    

    , convertPictureToDate: function(picture) {
        this.consoleLog("convertPictureToDate()");
        var pictureMonth = picture.substring(4, 6) - 1; // Because javascript month are from 0 to 11
        var pictureDate = new Date(picture.substring(0, 4), pictureMonth, picture.substring(6, 8), picture.substring(8, 10), picture.substring(10, 12), picture.substring(12, 14), 0);
        return pictureDate;
    }   

    , onDaySelected: function(scope, date, eOpts ) {
        this.consoleLog("onDaySelected()");
        var convertedDate = Ext.Date.format(date, "Ymd");
        this.consoleLog("onDaySelected(): Selected date is: " + date + " converted to: " + convertedDate);

        this.getPicturesHoursListStore().getProxy().setExtraParam("SELECTEDDAY", convertedDate);
        this.getPicturesHoursListStore().load();
        this.getPicturesSensorsStore().on("load",this.updateHoursCombo,this,{single:true});
        
        this.getPicturesSensorsStore().getProxy().setExtraParam("PICTUREDATE", convertedDate);
        this.getPicturesSensorsStore().load();
        this.getPicturesSensorsStore().on("load",this.updateSensorsButton,this,{single:true});
    }  
    
    //Using the hours list. created for the desktop app, re-construct a cleaner store containing a list of available pictures
    , updateHoursCombo: function() {
        this.consoleLog("updateHoursCombo()");
        var scope = this;
        this.getPicturesHoursComboStore().removeAll();
        Ext.Array.each(this.getPicturesHoursListStore().getData().items, function(currentRecord) {
            Ext.Object.each(currentRecord.data, function(idx) {
                if (currentRecord.data[idx] !== "0" && idx !== "id") {
                    var currentPicture = currentRecord.data[idx];
                    var currentTime = currentPicture.substring(8, 10) + ":" + currentPicture.substring(10, 12) + ":" +currentPicture.substring(12, 14);
                    scope.getPicturesHoursComboStore().add({PICTURE: currentPicture, TIME: currentTime});
                }
            });
        });      
    }
    
    , showSensors: function() {
        this.consoleLog("showSensors()");
        this.getPicturessensorsmain().show();

        var currentURL = "/" + symfonyEnv + "/dl/source" + this.getSourceId() + "/pictures/";
        var currentSensorValue = this.getPicturesSensorsStore().last();
        if (currentSensorValue.get("SENSOR1") !== "") {
            this.getPicturessensorssensor1().setVisible(true);
            this.getPicturessensorssensor1().setSrc(currentURL + currentSensorValue.get("SENSOR1"));
            this.getPicturessensorssensor1().setWidth(497);
            this.getPicturessensorssensor1().setHeight(162);
        } else {this.getPicturessensorssensor1().setVisible(false);}
        if (currentSensorValue.get("SENSOR2") !== "") {
            this.getPicturessensorssensor2().setVisible(true);
            this.getPicturessensorssensor2().setSrc(currentURL + currentSensorValue.get("SENSOR2"));
            this.getPicturessensorssensor2().setWidth(497);
            this.getPicturessensorssensor2().setHeight(162);
        } else {this.getPicturessensorssensor2().setVisible(false);}
        if (currentSensorValue.get("SENSOR3") !== "") {
            this.getPicturessensorssensor3().setVisible(true);
            this.getPicturessensorssensor3().setSrc(currentURL + currentSensorValue.get("SENSOR3"));
            this.getPicturessensorssensor3().setWidth(497);
            this.getPicturessensorssensor3().setHeight(162);
        } else {this.getPicturessensorssensor3().setVisible(false);}
        if (currentSensorValue.get("SENSOR4") !== "") {
            this.getPicturessensorssensor1().setVisible(true);
            this.getPicturessensorssensor4().setSrc(currentURL + currentSensorValue.get("SENSOR4"));
            this.getPicturessensorssensor4().setWidth(497);
            this.getPicturessensorssensor4().setHeight(162);
        } else {this.getPicturessensorssensor4().setVisible(false);}
    }
    
    , hideSensors: function() {
        this.consoleLog("hideSensors()");
        this.getPicturessensorsmain().hide();        
    }
    
});