/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.alerts.Alerts");
//</debug>
Ext.define("WPAKD.controller.alerts.Alerts", {
    extend: "Ext.app.Controller"

    , views: [
        "desktop.toolbar.top.Taskbar"
        , "alerts.Main"
        , "alerts.Alerts"
        , "alerts.ButtonRefresh"
        , "alerts.ButtonClear"
        , "alerts.ButtonSave"
        , "alerts.SourceName"
        , "alerts.Schedule"
        
        , "alerts.controls.WeekDays"
        , "alerts.controls.SourcesList"

        , "alerts.controls.instructions.Main"

        , "alerts.controls.edit.Main"
        , "alerts.controls.edit.EndDay"
        , "alerts.controls.edit.EndHour"
        , "alerts.controls.edit.EndMinute"
        , "alerts.controls.edit.StartDay"
        , "alerts.controls.edit.StartHour"
        , "alerts.controls.edit.StartMinute"
        , "alerts.controls.edit.Rate"
        , "alerts.controls.edit.Type"
        , "alerts.controls.edit.ButtonApply"
                
    ]

    , stores: [
        "shared.Sources"
        , "shared.Empty"
        , "alerts.Schedule"
        , "alerts.SourcesSchedule"

    ]

    , models: [
        "shared.Sources"
        , "alerts.Schedule"
        , "alerts.SourcesSchedule"

    ]

    , refs: [
        {ref: "desktopmain",                selector: "desktopmain"                 }
        , {ref: "desktoptoolbartoptaskbar", selector: "desktoptoolbartoptaskbar"    }

        , {ref: "alertsmain",               selector: "alertsmain",           autoCreate: true,   xtype: "alertsmain"}
        , {ref: "alertssourceslist",        selector: "alertssourceslist"     }
        , {ref: "alertsalerts",             selector: "alertsalerts"          }
        , {ref: "alertsbuttonrefresh",      selector: "alertsbuttonrefresh"   }
        , {ref: "alertsbuttonclear",        selector: "alertsbuttonclear"     }
        , {ref: "alertsbuttonsave",         selector: "alertsbuttonsave"      }
        , {ref: "alertssourcename",         selector: "alertssourcename"      }
        , {ref: "alertsschedule",           selector: "alertsschedule"        }

        , {ref: "alertscontrolsweekdays",   selector: "alertscontrolsweekdays"      }
        , {ref: "alertscontrolssourceslist",selector: "alertscontrolssourceslist"   }

        , {ref: "alertscontrolsinstructionsmain",   selector: "alertscontrolsinstructionsmain"  }

        , {ref: "alertscontrolseditmain",           selector: "alertscontrolseditmain"          }
        , {ref: "alertscontrolseditendday",         selector: "alertscontrolseditendday"        }
        , {ref: "alertscontrolseditendhour",        selector: "alertscontrolseditendhour"       }
        , {ref: "alertscontrolseditendminute",      selector: "alertscontrolseditendminute"     }
        , {ref: "alertscontrolseditrate",           selector: "alertscontrolseditrate"          }
        , {ref: "alertscontrolseditstartday",       selector: "alertscontrolseditstartday"      }
        , {ref: "alertscontrolseditstarthour",      selector: "alertscontrolseditstarthour"     }
        , {ref: "alertscontrolseditstartminute",    selector: "alertscontrolseditstartminute"   }
        , {ref: "alertscontrolsedittype",           selector: "alertscontrolsedittype"          }
        , {ref: "alertscontrolseditbuttonapply",    selector: "alertscontrolseditbuttonapply"   }

    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "desktoptoolbartoptaskbar button[action=openWEB_CFG_ALERTS]":   {click:  this.openAlerts                              }
            , "alertsmain":                                                 {hide:   this.closeAlerts, minimize: this.openAlerts  }
            , "#menuOpenWEB_CFG_ALERTS":                                    {click:  this.menuOpenAlerts                          }

            , "alertscontrolssourceslist":                                  {change:            this.onSourceSelected   }
            , "alertsbuttonrefresh":                                        {click:             this.reloadAlerts       }
            , "alertsbuttonclear":                                          {click:             this.clearGrid          }
            , "alertscontrolseditbuttonapply":                              {click:             this.modifyCalendar     }
            , "alertsschedule dataview":                                    {cellclick:         this.onMinuteSelected   }
            , "alertscontrolsweekdays":                                     {change:            this.filterStore        }
            
            , "alertsbuttonsave":                                           {click:             this.saveAlertSchedule  }
            
        });
        this.listen({
            controller: {
                 "*": {
                      "WPAKD.controller.alerts.Alerts.openAlerts":            this.openAlerts
                      , "WPAKD.controller.alerts.Alerts.menuOpenAlerts":      this.menuOpenAlerts
                  }
            }
            , store: {
                  "*": {"WPAKD.controller.alerts.Alerts.hideMask": this.hideMask}
            }            
        });
    }

    , onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Alerts: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    // Array making the link between text value of the weekeday and its number
    , getDayArray: function() {
        var weekday=new Array(8);
        weekday[1]="Monday";
        weekday[2]="Tuesday";
        weekday[3]="Wednesday";
        weekday[4]="Thursday";
        weekday[5]="Friday";
        weekday[6]="Saturday";
        weekday[7]="Sunday";
        return weekday;
    }

    // receive a weekday number and return it"s text counterpart
    , getDayTxt: function(dayNb) {
        var weekday = this.getDayArray();
        return weekday[dayNb];
    }
    
    // receive a weekday text and return it"s number counterpart
    , getDayNb: function(dayTxt) {
        var weekday = this.getDayArray();
        for (var i=1;i<8;i++) {
            if (weekday[i] === dayTxt) {
                return i;
            }
        }
        return 0;
    }    

    // When user click on a grid cell, change its value
    , onMinuteSelected: function(viewScope, td, cellIndex, record) {
        this.consoleLog("onMinuteSelected()");
        var columnName = viewScope.panel.headerCt.getHeaderAtIndex(cellIndex).text;
        this.consoleLog("onMinuteSelected() - Click on Minute: " + columnName);
        if (record.get(columnName) === "Y") {
            record.set(columnName, "N");
        } else {
            record.set(columnName, "Y");
        }
    }

    // Test if provided day is within a specific range
    , isDayBetweenRange: function(dayTxt, dayFromTxt, dayToTxt) {
        this.consoleLog("isDayBetweenRange() - Source: " + dayTxt + " From: " + dayFromTxt + " To: " + dayToTxt);
        
        var dayNb = this.getDayNb(dayTxt);
        if (dayTxt === dayFromTxt) {return true;}
        else if (dayTxt === dayToTxt) {return true;}
        else {
            var dayFromNb = this.getDayNb(dayFromTxt);
            var dayToNb = this.getDayNb(dayToTxt);        
            if (dayNb >= dayFromNb && dayNb <= dayToNb) {
                return true;
            } else {
                return false;
            }
        }        
    }

    // Build an object containing the requested capture frequency
    , buildTimeObject: function(captureRate) {
        this.consoleLog("buildTimeObject()");
        var timeSinceLastCapture = null;
        var obj = {};
        for (var i=1;i<8;i++) {
            obj[i] = {};
            for (var j=0;j<24;j++) {
                obj[i][j] = {};
                for (var k=0;k<60;k++) {
                    if (timeSinceLastCapture >= captureRate || timeSinceLastCapture === null) {
                        obj[i][j][k] = {capture: "Y"};
                        timeSinceLastCapture = 1;
                    } else {
                        timeSinceLastCapture++;
                    }                    
                }
            }
        }     
        return obj;
    }
    
    // Verify if provided time is within a specific range
    , isTimeBetweenRange: function(currentHour, currentMinute, startHour, startMinute, endHour, endMinute) {
        var startTime = parseInt(startHour.toString() +  startMinute.toString());
        if (startMinute < 10) {startTime = parseInt(startHour.toString() + "0" + startMinute.toString());}

        var endTime = parseInt(endHour.toString() +  endMinute.toString());
        if (endMinute < 10) {endTime = parseInt(endHour.toString() + "0" + endMinute.toString());}

        var currentTime = parseInt(currentHour.toString() +  currentMinute.toString());
        if (currentMinute < 10) {currentTime = parseInt(currentHour.toString() + "0" + currentMinute.toString());}

        if (startTime === 0 && endTime === 0) {
            return true;
        } else if (startTime >= endTime) {
            if ((currentTime >= startTime && currentTime < 2400) || (currentTime >= 0 && currentTime <= endTime)) {
                return true;
            } else {
                return false;
            }
        } else {
            if (currentTime >= startTime && currentTime <= endTime) {
                return true;
            } else {
                return false;
            }
        }        
    }    

    // Modify the calendar using some parameters configured by the user
    , modifyCalendar: function() {
        this.consoleLog("modifyCalendar()");
        var scope = this;
        //First action is to assign an empty store to the grid
        this.getAlertsschedule().reconfigure(this.getSharedEmptyStore());
        
        //Then remove any potential filter on the store
        this.getAlertsScheduleStore().clearFilter();
        
        var dayFromTxt = this.getAlertscontrolseditstartday().getValue();
        var dayToTxt = this.getAlertscontrolseditendday().getValue();
                
        var startHour = this.getAlertscontrolseditstarthour().getValue();
        var startMinute = this.getAlertscontrolseditstartminute().getValue();
        var endHour = this.getAlertscontrolseditendhour().getValue();
        var endMinute = this.getAlertscontrolseditendminute().getValue();
                
        var captureRate = this.getAlertscontrolseditrate().getValue();
        var editType = this.getAlertscontrolsedittype().getValue();
        
        this.consoleLog("modifyCalendar() - editType: " + editType);
        
        
        var captureRateObj = this.buildTimeObject(captureRate);  

        //We loop through the store
        this.getAlertsScheduleStore().each(function (record) {
            if (scope.isDayBetweenRange(record.data.DAYTXT, dayFromTxt, dayToTxt)) {
                var currentDay = parseInt(record.data.DAYNB);
                var currentHour = parseInt(record.data.HOUR);                
                for (var j=0;j<60;j++) {
                    if (scope.isTimeBetweenRange(record.data.HOUR, j.toString(), startHour, startMinute, endHour, endMinute)){
                        //console.log("Day: " + record.data.DAYTXT + " Hour: " + record.data.HOUR + ":" + j.toString() + " is between: " + startHour + ":" + endHour + " and " + endHour + ":" + endMinute);
                        var minuteString = j.toString();
                        if (j < 10) {minuteString = "0" + j;}
                        var currentMinute = parseInt(j);
                        if (captureRateObj[currentDay] && captureRateObj[currentDay][currentHour] && captureRateObj[currentDay][currentHour][currentMinute]) {
                            if (editType === "add") {record.set(minuteString, "Y");}
                            else if (editType === "del") {record.set(minuteString, "N");}
                        } else {
                            if (editType === "addex") {record.set(minuteString, "N");}
                        }
                    }
                }                    
            }
        });
        
        //Finally call the filtering function to re-attach a store to the grid
        this.filterStore();
    }
        
    // Initialize the store with empty values
    , initializeStore: function() {
        this.consoleLog("initializeStore()");
        this.getAlertsschedule().reconfigure(this.getSharedEmptyStore()); // Just in case, detach the grid form the store
        this.getAlertsScheduleStore().clearFilter();
        this.getAlertsScheduleStore().removeAll();
        var scope = this;
        for (var i=1;i<8;i++) {
            for (var j=0;j<24;j++) {
                this.getAlertsScheduleStore().add({DAYTXT: scope.getDayTxt(i), DAYNB: i, HOUR: j});
            }
        }    
    }
    
    // Empty the store and re-fill it with empty content        
    , clearGrid: function() {
        this.consoleLog("clearGrid()");
        this.getAlertsschedule().reconfigure(this.getSharedEmptyStore());        
        this.initializeStore();
        this.filterStore();
    }

    // Reload the store with values from the source
    , reloadAlerts: function() {
        this.consoleLog("reloadAlerts()");
        this.onSourceSelected();
    }

    , hideMask: function() {
        this.consoleLog("hideMask()");
        if (this.getAlertsschedule() !== undefined) {
            this.getAlertsschedule().setLoading(false);            
        }
    }    

    , showMask: function() {
        this.consoleLog("showMask()");
        this.getAlertsschedule().setLoading(i18n.gettext("Loading grid, be patient..."));
    }       

    // Filter the store according to the selected day
    , filterStore: function() {
        this.consoleLog("filterStore()");
        var displayDay = this.getAlertscontrolsweekdays().getValue();
        var scope = this;

        this.consoleLog("filterStore() - Day: " + displayDay);
        this.showMask();
        this.getAlertsschedule().reconfigure(this.getSharedEmptyStore());  

        this.getAlertsScheduleStore().clearFilter();
        this.getAlertsScheduleStore().filterBy(function (record) {
            if (displayDay === "All") {return true;}
            else if (record.data.DAYTXT === displayDay) {return true;}
            else {return false;}
        });
        
        Ext.Function.defer(function(){scope.reattachStore();}, 200);
    }

    // Once processing is complete, re-attach the grid to the store
    , reattachStore: function() {
        this.consoleLog("reattachStore()");
        this.getAlertsschedule().reconfigure(this.getAlertsScheduleStore());        
        this.getAlertsschedule().setLoading(false);            
    }

    // Load the first source of the shared store
    , loadFirstSource: function() {
        this.consoleLog("loadFirstSource()");
        var firstSource = this.getSharedSourcesStore().first();
        this.getAlertscontrolssourceslist().setValue(firstSource); 
    }

    // When a source is selected, load its corresponding content
    , onSourceSelected: function(scope) {
        this.consoleLog("onSourceSelected()");
        scope = this;
        this.showMask();        
        var selectedSourceId = this.getAlertscontrolssourceslist().getValue();        
        var record = this.getAlertsSourcesScheduleStore().findRecord("SOURCEID", selectedSourceId, 0, false, false, true);
        if (record && record.get("JSON") !== "") {
            Ext.Function.defer(function(){
                scope.importStoreFromJSON(record.get("JSON"));
                scope.filterStore();
            }, 200);
        } else {
            this.clearGrid();
        }
        
    }
    
    // When pressing save, convert the store content to JSON and save it to the SourcesSchedule store
    , saveAlertSchedule: function() {
        this.consoleLog("saveAlertSchedule()");
        var encodedAlertsObj = this.exportStoreToJSON();
        
        var selectedSourceId = this.getAlertscontrolssourceslist().getValue();        
        var record = this.getAlertsSourcesScheduleStore().findRecord("SOURCEID", selectedSourceId, 0, false, false, true);
        if (record) {
            this.showMask();
            record.set("JSON",encodedAlertsObj);
        }                
    }    

    // Create a JSON string from a the schedule store
    , exportStoreToJSON: function() {
        this.consoleLog("exportStoreToJSON()");
        this.getAlertsschedule().reconfigure(this.getSharedEmptyStore()); // Just in case, detach the grid form the store
        this.getAlertsScheduleStore().clearFilter();        
        var alertsObj = {};        
        this.getAlertsScheduleStore().each(function (record) {
            var currentDay = parseInt(record.data.DAYNB);
            var currentHour = parseInt(record.data.HOUR);                        
            for (var j=0;j<60;j++) {
                if (j < 10) {var minuteString = "0" + j;}
                else {var minuteString = j.toString();}
                if (record.get(minuteString) === "Y") {
                    if (alertsObj[currentDay] === undefined) {alertsObj[currentDay] = {};}
                    if (alertsObj[currentDay][currentHour] === undefined) {alertsObj[currentDay][currentHour] = {};}
                    alertsObj[currentDay][currentHour][j] = "Y";
                }
            }
        });  
        this.reattachStore();
        return Ext.JSON.encode(alertsObj); 
    }
    
    // Load the schedule store from JSON
    , importStoreFromJSON: function(jsonStore) {
        this.consoleLog("importStoreFromJSON()");

        this.initializeStore(); // First, clear the store from any existing records.        
        var alertsObj = Ext.JSON.decode(jsonStore);             
        //We loop through the store to populate it with the correct values               
        this.getAlertsScheduleStore().each(function (record) {
            var currentDay = parseInt(record.data.DAYNB);
            var currentHour = parseInt(record.data.HOUR);                
            for (var j=0;j<60;j++) {
                if (alertsObj[currentDay] && alertsObj[currentDay][currentHour] && alertsObj[currentDay][currentHour][j]) {
                    var minuteString = j.toString();
                    if (j < 10) {minuteString = "0" + j;}
                    record.set(minuteString, "Y");
                }                    
            }                    
        }); 
        this.consoleLog("importStoreFromJSON() - COMPLETED");
    }
        
    , menuOpenAlerts: function() {
        this.consoleLog("menuOpenAlerts()");
        Ext.getBody().mask("Please wait, fetching initial content from database ...");

        var requiredStores = [];
        requiredStores.push({store: this.getSharedSourcesStore(),           action: "REFRESH"});
        requiredStores.push({store: this.getAlertsSourcesScheduleStore(),   action: "REFRESH"});

        this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading"
            , "WEB_CFG_ALERTS"
            , "WPAKD.controller.alerts.Alerts.openAlerts"
            , requiredStores);

        var applicationName = "WEB_CFG_ALERTS";
        this.fireEvent("WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats", applicationName);
    },

    openAlerts: function() {
        this.consoleLog("openAlerts()");
        Ext.getBody().unmask();

        if(this.getAlertsmain().isVisible() && Ext.WindowManager.getActive().getId() !== this.getAlertsmain().getId()) {
            this.consoleLog("openAlerts(): getAlertsmain().toFront()");
            this.getAlertsmain().toFront();
        } else if(!this.getAlertsmain().isVisible()) {
            this.consoleLog("openAlerts(): getAlertsmain().setVisible(true)");
            this.getDesktopmain().add(this.getAlertsmain());
            this.getAlertsmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent("tbalerts").setVisible(true);
            this.loadFirstSource();
        } else {
            this.consoleLog("openAlerts(): getAlertsmain().setVisible(false)");
            this.getAlertsmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent("tbalerts").setVisible(true);
        }
    },

    closeAlerts: function() {
        this.consoleLog("closeAlerts()");
        this.getDesktoptoolbartoptaskbar().getComponent("tbalerts").setVisible(false);
    }

});
