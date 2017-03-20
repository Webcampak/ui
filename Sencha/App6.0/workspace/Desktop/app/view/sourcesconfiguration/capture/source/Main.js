/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.source.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.source.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcapturesourcemain"

    , title: i18n.gettext("Source Configuration")
    , collapsed: false

    , layout: "fit"
    , items: [{
        xtype: "sourcesconfigurationcapturesourcecfgsourceactive"
        , labelWidth: 135
    }, {
        xtype: "sourcesconfigurationcapturesourcecfgsourcetype"
        , labelWidth: 135
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [{
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , flex: 1
            , items: [{
                xtype: "sourcesconfigurationcapturesourcecfgcroncapturevalue"
                , labelWidth: 135
                , width: 200
            }, {
                xtype: "sourcesconfigurationcapturesourcecfgcroncaptureinterval"
                , flex: 1
            }]
        }, {
            xtype: "container"
            , width: 10
        }, {
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , flex: 1
            , items: [{
                xtype: "sourcesconfigurationcapturesourcecfgminimumcapturevalue"
                , labelWidth: 135
                , width: 200
            }, {
                xtype: "sourcesconfigurationcapturesourcecfgminimumcaptureinterval"
                , flex: 1
            }]
        }]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [{
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , flex: 1
            , items: [{
                xtype: "sourcesconfigurationcapturesourcecfgcapturedelay"
                , labelWidth: 135
                , width: 200
            }, {
                xtype: "sourcesconfigurationcapturesourcecfgcapturedelayinterval"
                , flex: 1
            }]
        }, {
            xtype: "container"
            , width: 10
        }, {
            xtype: "sourcesconfigurationcapturesourcecfgcapturedelaydate"
            , labelWidth: 135
            , flex: 1
        }]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [{
            xtype: "sourcesconfigurationcapturesourcecfgcapturetimezone"
            , labelWidth: 135
            , flex: 1
        }, {
            xtype: "container"
            , width: 10
        }, {
            xtype: "sourcesconfigurationcapturesourcecfgsourcelanguage"
            , labelWidth: 135
            , flex: 1
        }]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [{
            xtype: "sourcesconfigurationcapturesourcecfgprocessraw"
            , labelWidth: 135
            , flex: 1
        }, {
            xtype: "container"
            , width: 10
        }, {
            xtype: "sourcesconfigurationcapturesourcecfgphidgetactivate"
            , labelWidth: 135
            , flex: 1
        }]
    }, {
        xtype: "container"
        , layout: {type:"hbox",	align: "stretch", pack: "start"}
        , items   : [{
            xtype: "sourcesconfigurationcapturesourcecfgemailerroractivate"
            , labelWidth: 135
            , flex: 1
        }, {
            xtype: "container"
            , width: 10
        }, {
            xtype: "sourcesconfigurationcapturesourcecfgnocapture"
            , labelWidth: 135
            , flex: 1
        }]
    }]
});

