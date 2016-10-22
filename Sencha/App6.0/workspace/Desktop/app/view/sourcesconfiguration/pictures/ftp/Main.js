/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.ftp.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.ftp.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpicturesftpmain"

    , title: i18n.gettext("Send pictures via FTP")
    , collapsible: false

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items   : [{
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   xtype: "sourcesconfigurationpicturesftpcfgftpmainserverid"                 }
            , {width: 55, labelWidth: 35, xtype: "sourcesconfigurationpicturesftpcfgftpmainserverraw"}
            , {width: 160, labelWidth: 110, xtype: "sourcesconfigurationpicturesftpcfgftpmainserverretry"   }
        ]
    }, {
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   xtype: "sourcesconfigurationpicturesftpcfgftpsecondserverid"                        }
            , {width: 55, labelWidth: 35, xtype: "sourcesconfigurationpicturesftpcfgftpsecondserverraw"     }
            , {width: 160, labelWidth: 110, xtype: "sourcesconfigurationpicturesftpcfgftpsecondserverretry" }
        ]
    }, {
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   labelWidth: 150, xtype: "sourcesconfigurationpicturesftpcfgftphotlinkserverid"       }
            , {width: 160, labelWidth: 110, xtype: "sourcesconfigurationpicturesftpcfgftphotlinkserverretry" }
        ]
    }]
});

