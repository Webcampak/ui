/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.picture.Picture");
//</debug>
Ext.define("WPAKT.view.pictures.picture.Picture", {
    extend: "Ext.Img"
    , alias: "widget.picturespicturepicture"

    , mode: ""
    , sourceid: null
    , styleHtmlContent: true
    , width: "100%"
    , src: ""
    , listeners: {
        el: {
            click: function(event, element, eOpts) {
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
