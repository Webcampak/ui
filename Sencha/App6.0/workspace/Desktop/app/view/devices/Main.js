/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.devices.Main");
//</debug>
Ext.define("WPAKD.view.devices.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.devicesmain"

    , title: i18n.gettext("Connected Devices")

    , width: 900
    , height: 600

    , stateful: true
    , stateId: "devicesmain"

    , scroll: true
    , autoScroll: true
    , maximizable: true
    , minimizable: true

    , constrainHeader: true

    , closeAction : "hide"
    , glyph:0xf0f1
    , layout: {
        type:"vbox"
        , pack: "start"
        , align: "stretch"
    }
    , items: [{
        xtype: "panel"
	, title: i18n.gettext("Gphoto2: Connected Cameras")
        , flex: 1
        , layout: "fit"
        , items: [{
            xtype: "devicesgphotolist"
        }]
        , tools:[{
            type: "refresh",
            tooltip: i18n.gettext("Refresh Devices"),
            callback: function() {
                this.fireEvent("WPAKD.controller.devices.Devices.loadDevices");
            }
        }]
    }, {
        xtype: "panel"
        , title: i18n.gettext("Gphoto2: Cameras Capabilities")
        , flex: 1
        , layout: "fit"
        , items: [{
            xtype: "devicesgphotocapabilities"
        }]
    }, {
        flex: 1
        , xtype: "panel"
        , title: i18n.gettext("USB devices connected (lsusb)")
        , layout: "fit"
        , items: [{
            xtype: "deviceslsusb"
        }]
    }]
});

