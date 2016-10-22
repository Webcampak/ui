/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.CurrentPicture");
//</debug>
Ext.define("WPAKD.view.pictures.display.CurrentPicture", {
    extend: "Ext.container.Container"
    , alias: "widget.picturesdisplaycurrentpicture"

    , style: "text-align: center; margin-left:auto; margin-right:auto;"
    , itemId: "picturedisplay"
    , title: "jqzoom"
    , html: "Loading ..."
    , listeners: {
        el: {
            click: function() {
                var currentPicture = Ext.getStore("pictures.Picture").last().get("PICTURE");
                if (currentPicture != "") {
                    //http://127.0.0.1/app_dev.php/dl/source1/pictures/20150620/20150620003006.jpg?width=10000
                    var currentSourceId = Ext.getStore("pictures.Picture").getProxy().extraParams.SOURCEID;
                    var currentURL = "/" + symfonyEnv + "/dl/source" + currentSourceId + "/pictures/" + currentPicture.substring(0, 8) + "/";
                    var currentPictureURL = currentURL + currentPicture;
                    window.open(currentPictureURL);
                }
            }
        }
    }
});



