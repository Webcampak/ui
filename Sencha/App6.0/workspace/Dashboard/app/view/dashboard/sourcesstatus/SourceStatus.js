/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.dashboard.sourcesstatus.SourceStatus");
//</debug>
Ext.define("WPAKT.view.dashboard.sourcesstatus.SourceStatus", {
    extend: "Ext.container.Container"
    , alias: "widget.dashboardsourcesstatussourcestatus"

    , config: {
        sourceid: null
    }
    , layout: {type: "vbox", align: "stretch"}
    , defaults: {frame: true}
    , items: [{
        xtype: "container"
        , layout: {type: "hbox", align: "stretch"}
        , items: [{
            xtype: "container"
            , width: 60
            , html: "<b>Name:</b>"
        }
        , {xtype: "container", width: 5}
        , {
            xtype: "container"
            , flex: 1
            , itemId: "sourceName"
            , html: ""
        }]        
    }, {
        xtype: "container"
        , layout: {type: "hbox", align: "stretch"}
        , items: [{
                xtype: "container"
                , width: 200
                , layout: {type: "vbox", align: "stretch"}
                , items: [{
                    xtype: "image"
                    , itemId: "sourceLastImage"
                    , mode: ""
                    , sourceid: null
                    , styleHtmlContent: true
                    , width: "100%"
                    , src: ""
                    , listeners: {
                        el: {
                            click: function(event, element, eOpts) {
                                console.log(this);
                                console.log(this.component.config.sourceid);
                            }
                        }             
                    }                    
                }, {
                    xtype: "container"
                    , flex: 1
                }]                                
            }
            , {xtype: "container", width: 10}
            , {
                xtype: "container"
                , flex: 1
                , layout: {type: "vbox", align: "stretch"}
                , items: [{
                    xtype: "container"
                    , html: "<b>Picture per day (last 15 days)</b>"
                    , height: 20
                }, {
                    xtype: "cartesian"
                    , itemId: "graphPicturesDay"
                    , height: 50
                    , animation : !Ext.isIE9m && Ext.os.is.Desktop
                    //, store: "dashboard.CaptureStats"
                    , store: {
                        fields: ["DATE", "COUNT", "SIZE"]
                        , data: []
                    }                  
                    , axes: [{
                        type: "category"
                        , fields: [
                            "DATE"
                        ]
                        , hidden: true
                        , position: "bottom"
                        , grid: true
                        , label: {font: "10px Arial"}

                    }, {
                        type: "numeric"
                        , fields: [
                            "COUNT"
                        ]
                        , grid: {
                            odd: {
                                fill: "#e8e8e8"
                            }
                        }
                        , hidden: true
                        , position: "left"
                    }],
                    series: [{
                            type: "line"
                            , colors: [
                                "rgba(103, 144, 199, 0.6)"
                            ]
                            , useDarkerStrokeColor: false
                            , xField: "DATE"
                            , yField: [
                                "COUNT"
                            ]
                            , fill: true
                            , smooth: true
                            , tooltip: {
                                trackMouse: true,
                                renderer: function (tooltip, record, item) {
                                    tooltip.setHtml(record.get("COUNT") + " " + i18n.gettext("on") + " " + Ext.util.Format.dateRenderer("M d, Y")(record.get("DATE")));
                                }
                            }            
                    }]
                    , interactions: [{
                        type: "panzoom"
                    }]                    
                }, {
                    xtype: "container"
                    , html: "<b>Disk usage evolution (last 15 days)</b>"
                    , height: 20
                }, {
                    xtype: "cartesian"
                    , itemId: "graphSizeDay"
                    , height: 50
                    , animation : !Ext.isIE9m && Ext.os.is.Desktop
                    , store: {
                        fields: ["DATE", "SIZE"]
                        , data: []
                    }   
                    , axes: [{
                        type: "category"
                        , fields: [
                            "DATE"
                        ]
                        , hidden: true
                        , position: "bottom"
                        , grid: true
                        , label: {font: "10px Arial"}

                    }, {
                        type: "numeric"
                        , fields: [
                            "SIZE"
                        ]
                        , grid: {
                            odd: {
                                fill: "#e8e8e8"
                            }
                        }
                        , hidden: true
                        , position: "left"
                    }],
                    series: [{
                        type: "line"
                        , colors: [
                            "rgba(238, 146, 156, 0.6)"
                        ]
                        , useDarkerStrokeColor: false
                        , xField: "DATE"
                        , yField: [
                            "SIZE"
                        ]
                        , fill: true
                        , smooth: true
                        , tooltip: {
                            trackMouse: true,
                            renderer: function (tooltip, record, item) {
                                tooltip.setHtml(Ext.util.Format.fileSize(record.get("SIZE")) + " " + i18n.gettext("on") + " " + Ext.util.Format.dateRenderer("M d, Y")(record.get("DATE")));
                            }
                        }
                    }]
                    , interactions: [{
                        type: "panzoom"
                    }]  
                }]                                
            }
            , {xtype: "container", width: 10}
            , {            
               xtype: "container"
                , flex: 1
                , layout: {type: "vbox", align: "stretch"}
                , items: [{           
                    xtype: "component"
                    , itemId: "captureStatus"
                    , data: {
                        last: ""
                        , next: ""
                    }
                    , tpl: "<b>Capture:</b><br /><div class=\"left-aligned-div\"> - Last</div><div class=\"right-aligned-div\">{last}</div><br /><div class=\"left-aligned-div\"> - Next</div><div class=\"right-aligned-div\">{next}</div>"
                }, {
                    xtype: "component"
                    , itemId: "captureRate"
                    , data: {
                        rate: ""
                    }
                    , tpl: "<div class=\"left-aligned-div\">Capture Frequency</div><div class=\"right-aligned-div\">{rate}</div>"
                }, {
                    
                    xtype: "container"
                    , flex: 1                        
                }, {
                    xtype: "component"
                    , itemId: "diskUsageTxt"
                    , data: {
                        disk: ""
                        , percent: ""
                    }
                    , tpl: "<div class=\"left-aligned-div\">Disk Used</div><div class=\"right-aligned-div\">{disk} ({percent}%)</div>"
                }, {                    
                    xtype: "progressbar"
                    , cls: "bottom-indent service-research"
                    , itemId: "diskUsageBar"
                    , height: 4
                    , minHeight: 4
                    , value: 0                   
                }]
            }
        ]                
    }]
});
