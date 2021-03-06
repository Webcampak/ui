/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.icons.XferReports");
//</debug>
Ext.define("WPAKD.view.desktop.icons.XferReports", {
    extend: "Ext.Container",
    alias: "widget.desktopiconsxferreports",

    draggable: true,
    floating: true,

    layout: {type: "vbox", align: "center"},
    width: 80,
    defaults: {frame: true},

    items: [{
        xtype: "container",
        height: 10
    }, {
        xtype: "container"
        , html: "<center><i class=\"fa fa-list\"></i></center>"
        , style: "font-size: 3em;"
        , height: 40
        , width: 40
    }, {
        xtype: "container",
        style: {"text-align": "center", color: "#FFFFFF"},
        html: i18n.gettext("Xfer<br />Reports")
    }],

    initComponent: function() {
      var me = this;
      Ext.applyIf(me, {
         listeners: {
             el: {
                 dblclick: function() {me.fireEvent("WPAKD.controller.desktop.icons.Icons.iconDbClick", this, "WEB_DSP_XFERREPORTS");}
                 , click: function() {me.fireEvent("WPAKD.controller.desktop.icons.Icons.iconClick", this, "WEB_DSP_XFERREPORTS");}
             }
         }
      });

      me.callParent(arguments);
    }
});
