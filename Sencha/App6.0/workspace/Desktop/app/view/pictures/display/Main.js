/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.Main");
//</debug>
Ext.define("WPAKD.view.pictures.display.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.picturesdisplaymain"

    , dockedItems: [{
        itemId: "centralpaneltoolbar",
        xtype: "toolbar",
        dock: "top",
        items: [{
            xtype: "picturesdisplayzoom"
            , flex: 2
        }, "-", {
            xtype: "picturesdisplayemailbutton"
        }, {
            xtype: "picturesdisplaysensorsbutton"
        }, {
            xtype: "picturesdisplaydownloadbutton"
        }, "-", {
            xtype: "picturesdisplaypreviousbutton"
        }, {
            xtype: "picturesdisplaynextbutton"
        }, {
            xtype: "picturesdisplaylastbutton"
        }, {
            xtype: "picturesdisplayrefreshbutton"
        }]
    }]
    , layout: {type: "vbox", pack: "start", align: "stretch"}
    , items: [{
        xtype: "container"
        , layout: {type: "hbox", pack: "start", align: "stretch"}
        , height: 30
        , items: [{
            xtype: "container"
            , flex: 1
        }, {
            xtype: "picturesdisplaycurrentpicturedate"
        }, {
            xtype: "container"
            , flex: 1
        }]
    }, {
        xtype: "picturesdisplaycurrentpicture"
        , flex: 3.5
    }, {
        xtype: "picturesdisplaythumbnails"
    }]

});
