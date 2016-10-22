/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.Thumbnails");
//</debug>
Ext.define("WPAKD.view.pictures.display.Thumbnails", {
    extend: "Ext.container.Container"
    , alias: "widget.picturesdisplaythumbnails"

    , style: "text-align: center"

    , emitNavAction  : function(thumb) {
        console.log("Webcampak.view.pictures.Thumbnails - Click Event: Thumbnail: " + thumb);
        return this.fireEvent("navaction", this, thumb);
    }

    , flex: 1
    , layout: {type: "hbox", pack: "start", align: "stretch"}
    , defaults: {frame: true}

    , initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: "container",
                flex: 1,
                layout: {type: "vbox", align: "stretch"},
                defaults: {frame: true},
                itemId: "thumb1",
                items: [{
                    xtype: "container",
                    style: "text-align: center;",
                    itemId: "date",
                    html: i18n.gettext("12:10")
                },{
                    xtype: "image",
                    itemId: "picture",
                    id: "thumbnail1",
                    mode: "",
                    styleHtmlContent: true,
                    width: "100%",
                    listeners: {
                        el: {
                            click: function() {
                                me.emitNavAction("THUMB1");
                            }
                        }
                    }
                }]
            }, {
                xtype: "container",
                flex: 1,
                layout: {type: "vbox", align: "stretch"},
                defaults: {frame: true},
                itemId: "thumb2",
                items: [{
                    xtype: "container",
                    style: "text-align: center;",
                    itemId: "date",
                    html: i18n.gettext("12:20")
                },{
                    xtype: "image",
                    itemId: "picture",
                    mode: "",
                    styleHtmlContent: true,
                    width: "100%",
                    listeners: {
                        el: {
                            click: function() {
                                me.emitNavAction("THUMB2");
                            }
                        }
                    }
                }]
            },	{
                xtype: "container",
                flex: 1,
                layout: {type: "vbox", align: "stretch"},
                defaults: {frame: true},
                itemId: "thumb3",
                items: [{
                    xtype: "container",
                    style: "text-align: center;",
                    itemId: "date",
                    html: i18n.gettext("12:30")
                },{
                    xtype: "image",
                    itemId: "picture",
                    mode: "",
                    styleHtmlContent: true,
                    width: "100%",
                    listeners: {
                        el: {
                            click: function() {
                                me.emitNavAction("THUMB3");
                            }
                        }
                    }
                }]
            },	{
                xtype: "container",
                flex: 1,
                layout: {type: "vbox", align: "stretch"},
                defaults: {frame: true},
                itemId: "thumb4",
                items: [{
                    xtype: "container",
                    style: "text-align: center;",
                    itemId: "date",
                    html: i18n.gettext("12:40")
                },{
                    xtype: "image",
                    itemId: "picture",
                    mode: "",
                    styleHtmlContent: true,
                    width: "100%",
                    listeners: {
                        el: {
                            click: function() {
                                me.emitNavAction("THUMB4");
                            }
                        }
                    }
                }]
            },	{
                xtype: "container",
                flex: 1,
                layout: {type: "vbox", align: "stretch"},
                defaults: {frame: true},
                itemId: "thumb5",
                items: [{
                    xtype: "container",
                    style: "text-align: center;",
                    itemId: "date",
                    html: i18n.gettext("12:50")
                },{
                    xtype: "image",
                    itemId: "picture",
                    mode: "",
                    styleHtmlContent: true,
                    width: "100%",
                    listeners: {
                        el: {
                            click: function() {
                                me.emitNavAction("THUMB5");
                            }
                        }
                    }
                }]
            },	{
                xtype: "container",
                flex: 1,
                layout: {type: "vbox", align: "stretch"},
                defaults: {frame: true},
                itemId: "thumb6",
                items: [{
                    xtype: "container",
                    style: "text-align: center;",
                    itemId: "date",
                    html: i18n.gettext("13:00")
                },{
                    xtype: "image",
                    itemId: "picture",
                    mode: "",
                    styleHtmlContent: true,
                    width: "100%",
                    listeners: {
                        el: {
                            click: function() {
                                me.emitNavAction("THUMB6");
                            }
                        }
                    }
                }]
            }]
        });
        me.callParent(arguments);
    }
});



