/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.dashboard.LastPictures");
//</debug>
Ext.define("WPAKT.controller.dashboard.LastPictures", {
    extend: "Ext.app.Controller"
/*
    , stores: [
        "dashboard.Status"
        , "dashboard.LastPictures"
    ]

    , models: [
        "dashboard.Status"
        , "dashboard.LastPictures"

    ]


    , views: [
        "dashboard.Main"
        , "dashboard.toolbar.Navicon"
        , "dashboard.lastpictures.Main"
        , "dashboard.lastpictures.thumb.Main"
        , "dashboard.lastpictures.thumb.Picture"
        , "dashboard.lastpictures.thumb.Text"
    ]

    , refs: [
        {ref: "dashboardmain",                              selector: "dashboardmain"                           }
        , {ref: "dashboardtoolbarnavicon",                  selector: "dashboardtoolbarnavicon"                 }
        , {ref: "dashboardlastpicturesmain",           selector: "dashboardlastpicturesmain"          }
        , {ref: "dashboardlastpicturesthumbmain",      selector: "dashboardlastpicturesthumbmain"     }
        , {ref: "dashboardlastpicturesthumbpicture",   selector: "dashboardlastpicturesthumbpicture"  }
        , {ref: "dashboardlastpicturesthumbtext",      selector: "dashboardlastpicturesthumbtext"     }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "*": {
                "WPAKT.controller.dashboard.LastPictures.refreshThumbnailHeight":          this.refreshThumbnailHeight
            }
            , "dashboardmain":                  {resize:  this.onUserResize }
            , "dashboardtoolbarnavicon":        {click:   this.loadThumbs }
            
        });                    
    }



    , onLaunch: function() {
        this.consoleLog("onLaunch()");
        var scope = this;
        var currentStatus = this.getDashboardLastPicturesStore().first()
        if (currentStatus === undefined || currentStatus === null) {
            this.consoleLog("onLaunch() - App not initialized yet");
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311101502.jpg?width=200", SOURCENAME: "name 1", DATE: "2012-03-12 12:32"});
            setTimeout(function() {
                scope.onLaunch();
            },100);
        } else {
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311110501.jpg?width=200", SOURCENAME: "name 2", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311115501.jpg?width=200", SOURCENAME: "name 3", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311122002.jpg?width=200", SOURCENAME: "name 4", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311124501.jpg?width=200", SOURCENAME: "name 5", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311124501.jpg?width=200", SOURCENAME: "name 6", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311124501.jpg?width=200", SOURCENAME: "name 7", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311124501.jpg?width=200", SOURCENAME: "name 8", DATE: "2012-03-12 12:32"});
            this.getDashboardLastPicturesStore().add({URL: "http://127.0.0.1/app_dev.php/dl/source1/pictures/20160311/20160311124501.jpg?width=200", SOURCENAME: "name 9", DATE: "2012-03-12 12:32"});
            setTimeout(function() {
                scope.loadThumbs();
            },1000);            
        }        

    }
   
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Cards->LastPictures: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , onUserResize: function(scope, width, height, oldWidth, oldHeight, eOpts) {
        this.consoleLog("onUserResize()");
        if (oldWidth !== undefined) {
            this.loadThumbs();
        }        
    }

    // After image load, refresh the size based on original picture size.
    , refreshThumbnailHeight: function(imgElement) {
        var imgHeight = this.getImgNaturalHeight(imgElement);
        imgElement.setHeight(imgHeight);
    }

    , getImgNaturalHeight: function(pictureWidget) {
        return pictureWidget.getEl().dom.naturalHeight;         
    }

    , loadThumbs: function() {
        this.consoleLog("loadThumbs()");
        
        if (this.getDashboardlastpicturesmain().isVisible()) {            
            var scope = this;
            var idealPictureWidth = 200;
            var mainContainerWidth = this.getDashboardlastpicturesmain().getWidth();
            var nbPicturesPerRow = Math.floor(mainContainerWidth / idealPictureWidth);
            var totalNbPictures = this.getDashboardLastPicturesStore().getCount();
            var nbPicturesLines = Math.ceil(totalNbPictures / nbPicturesPerRow);
//            this.consoleLog("loadThumbs(): Container Width: " + mainContainerWidth);
            this.consoleLog("loadThumbs(): Number of Pictures per row: " + nbPicturesPerRow);
            this.consoleLog("loadThumbs(): Total number of Pictures in store: " + totalNbPictures);
            this.consoleLog("loadThumbs(): Total number of lines with pictures: " + nbPicturesLines);
            var currentCell = 0;
            var currentRow = 0; 
            var itemsArray = new Array();
//            this.consoleLog("loadThumbs(): Looping through store records");

            this.getDashboardLastPicturesStore().each(function (record) {
                if (currentCell % nbPicturesPerRow === 0) {
                    //scope.consoleLog("loadThumbs(): Creating a new line");
                    currentRow++;
                    currentCell = 0;
                }
                currentCell++;
                if (currentCell === 1) {
                    itemsArray[currentRow] = new Array();
                }
    //            scope.consoleLog("loadThumbs(): Processing source: " + currentCell + " - "+ record.get("SOURCENAME"));
                var pictureWidget = Ext.create("WPAKT.view.dashboard.lastpictures.thumb.Picture");
                pictureWidget.setSrc(record.get("URL"));
                var textWidget = Ext.create("WPAKT.view.dashboard.lastpictures.thumb.Text");
                textWidget.setHtml(record.get("SOURCENAME") + "<br />" + record.get("DATE"))
                var widgetContainer = Ext.create("WPAKT.view.dashboard.lastpictures.thumb.Main");
                widgetContainer.add(pictureWidget);
                widgetContainer.add(textWidget);
                itemsArray[currentRow][currentCell] = widgetContainer;
            });
            this.getDashboardlastpicturesmain().removeAll(); // Remove all components previously attached to this container.        
            this.consoleLog("loadThumbs(): Looping through resulting array");
            for (i = 1; i <= itemsArray.length; i++) { 
                var rowContainer = Ext.create("Ext.container.Container", {
                    flex: 1
                    , layout: {type: "hbox",align: "stretch"}
                });
                if (itemsArray[i] !== undefined) {
                    for (j = 1; j <= itemsArray[i].length; j++) {
                        if (itemsArray[i][j] !== undefined) {
                            rowContainer.add(itemsArray[i][j]);                        
                        }
                    }                
                }
                this.getDashboardlastpicturesmain().add(rowContainer);
            }    
        }
        
    }
    */
});
