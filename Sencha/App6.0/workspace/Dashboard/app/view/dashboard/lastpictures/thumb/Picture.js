/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.lastpictures.thumb.Picture");
//</debug>
Ext.define("WPAKT.view.dashboard.lastpictures.thumb.Picture", {
    extend: "Ext.Img"
    , alias: "widget.dashboardlastpicturesthumbpicture"

    , mode: ""
    , styleHtmlContent: true
    , width: "100%"
    , flex: 1
    , listeners: {
        el: {
            click: function() {
                this.emitNavAction("THUMB3");
            }
        }
        , afterrender: function(scope) {
            scope.el.on({
                load: function (evt) {
                    scope.fireEvent("WPAKT.controller.dashboard.LastPictures.refreshThumbnailHeight", scope);
                }
            });
        }                 
    }
});

