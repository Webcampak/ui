/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.sensors.Main");
//</debug>
Ext.define("WPAKD.view.pictures.sensors.Main", {
    extend: "Ext.window.Window"
    , alias: "widget.picturessensorsmain"

    , title: i18n.gettext("Webcampak Sensors")

    , width: 520
    , height: 700

    , scroll: false
    , autoScroll: false
    , maximizable: false
    , minimizable: false

    , constrainHeader: true

    , glyph:0xf1fe
    , layout: "fit"
    , items: [{
        xtype: "container"
        , itemId: "sensorcontainer"
        , plain: true
        , border: 0
        , bodyPadding: 5
        , layout: {
            type: "vbox"
            , align: "stretch"
        }
        , items: [
            {xtype: "picturessensorssensor1"}
            , {xtype: "picturessensorssensor2"}
            , {xtype: "picturessensorssensor3"}
            , {xtype: "picturessensorssensor4"}
        ]
    }]
});

