/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.gphoto.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.gphoto.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcapturegphotomain"

    , title: i18n.gettext("Configuration of \"<u>D-SLR USB Camera (Gphoto2 PTP mode)</u>\"")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , items: [/*{
        xtype: "sourcesconfigurationcapturegphotocfgsourcegphotoraw"
        , labelWidth: 150
    }, */{
        xtype: "fieldset"
        , title: i18n.gettext("Multi-Cameras environment only")
        , layout: {type:"vbox",	align: "stretch", pack: "start"}
        , defaults: {labelWidth: 150}
        , items: [
            {xtype: "sourcesconfigurationcapturegphotocfgsourcegphotocameramodel"}
            , {xtype: "sourcesconfigurationcapturegphotocfgsourcegphotocameraportdetail"}
            , {xtype: "sourcesconfigurationcapturegphotocfgsourcegphotoowner"}
            , {xtype: "sourcesconfigurationcapturesourcecfgsourcedebug"}
        ]
    }]
});

