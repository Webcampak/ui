/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.videos.ftp.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.videos.ftp.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationvideosftpmain"

    , title: i18n.gettext("Send videos via FTP")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items: [{
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   labelWidth: 200, xtype: "sourcesconfigurationvideosftpcfgftpmainserveraviid"    }
            , {width: 160,labelWidth: 80, xtype: "sourcesconfigurationvideosftpcfgftpmainserveraviretry" }
        ]
    }, {
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   labelWidth: 200, xtype: "sourcesconfigurationvideosftpcfgftpmainservermp4id"    }
            , {width: 160,labelWidth: 80, xtype: "sourcesconfigurationvideosftpcfgftpmainservermp4retry" }
        ]
    }, {
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   labelWidth: 200, xtype: "sourcesconfigurationvideosftpcfgftphotlinkserveraviid"    }
            , {width: 160,labelWidth: 80, xtype: "sourcesconfigurationvideosftpcfgftphotlinkserveraviretry" }
        ]
    }, {
        xtype: "container"
        , defaults: {padding: 2}
        , layout: {type:"hbox", align: "stretch", pack: "start"}
        , items   : [
            {flex: 1,   labelWidth: 200, xtype: "sourcesconfigurationvideosftpcfgftphotlinkservermp4id"    }
            , {width: 160,labelWidth: 80, xtype: "sourcesconfigurationvideosftpcfgftphotlinkservermp4retry" }
        ]
    }]
});

