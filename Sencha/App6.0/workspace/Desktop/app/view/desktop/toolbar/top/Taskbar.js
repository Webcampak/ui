/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.Taskbar");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.Taskbar", {
  extend: "Ext.Container",
    alias: "widget.desktoptoolbartoptaskbar",

    //config: {
       //flex: 1,
        items: [
            {itemId: "tbaccesscontrol",         xtype: "button", action: "openWEB_CFG_ACCESSCONTROL",text: i18n.gettext("Access Control"),      hidden: true, glyph:0xf0c0, style: "font-family:FontAwesome" }
            , {itemId: "tbsourcesconfiguration",xtype: "button", action: "openWEB_CFG_SOURCES",      text: i18n.gettext("Sources Conf."),       hidden: true, glyph:0xf013, style: "font-family:FontAwesome" }
            , {itemId: "tbpictures",            xtype: "button", action: "openWEB_DSP_PICTURES",     text: i18n.gettext("Pictures"),            hidden: true, glyph:0xf030, style: "font-family:FontAwesome" }
            , {itemId: "tbvideos",              xtype: "button", action: "openWEB_DSP_VIDEOS",       text: i18n.gettext("Videos"),              hidden: true, glyph:0xf03d, style: "font-family:FontAwesome" }
            , {itemId: "tblogs",                xtype: "button", action: "openWEB_DSP_LOGS",         text: i18n.gettext("Logs"),                hidden: true, glyph:0xf03a, style: "font-family:FontAwesome" }
            , {itemId: "tbsyncreports",         xtype: "button", action: "openWEB_DSP_SYNCREPORTS",  text: i18n.gettext("Sync Reports"),        hidden: true, glyph:0xf03a, style: "font-family:FontAwesome" }
            , {itemId: "tbxferreports",         xtype: "button", action: "openWEB_DSP_XFERREPORTS",  text: i18n.gettext("Xfer Reports"),        hidden: true, glyph:0xf03a, style: "font-family:FontAwesome" }
            , {itemId: "tbalerts",              xtype: "button", action: "openWEB_CFG_ALERTS",       text: i18n.gettext("Alerts"),              hidden: true, glyph:0xf0a2, style: "font-family:FontAwesome" }
            , {itemId: "tbdevices",             xtype: "button", action: "openWEB_DSP_DEVICES",      text: i18n.gettext("Connected Devices"),   hidden: true, glyph:0xf0f1, style: "font-family:FontAwesome" }
            , {itemId: "tbstatssystem",         xtype: "button", action: "openWEB_DSP_STATS_SYSTEM", text: i18n.gettext("System Stats."),       hidden: true, glyph:0xf1fe, style: "font-family:FontAwesome" }
            , {itemId: "tbstatssources",        xtype: "button", action: "openWEB_DSP_STATS_SOURCES",text: i18n.gettext("Sources Stats."),      hidden: true, glyph:0xf201, style: "font-family:FontAwesome" }
            , {itemId: "tbsystemconfiguration", xtype: "button", action: "openWEB_CFG_SYSTEM",       text: i18n.gettext("System Conf."),        hidden: true, glyph:0xf013, style: "font-family:FontAwesome" }
        ]
    //}
});
