/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.details.Main");
//</debug>
Ext.define("WPAKT.view.pictures.controls.details.Main", {
    extend: "Ext.panel.Panel"
    , alias: "widget.picturescontrolsdetailsmain"

    , cls: "quick-graph-panel shadow-panel"
    , headerPosition: "top"
    , iconCls: "x-fa fa-info-circle"
    , title: i18n.gettext("Details")
    , layout: {type: "vbox",align: "stretch"}
    , items: [{
        xtype: "picturescontrolsdetailsfilesize" 
        /*
        , data: {
            jpg: "4.6MB"
            , raw: "30MB"
            , definition: "1024x768"
        }
        , tpl: "<div class="left-aligned-div"> - JPG</div><div class="right-aligned-div">{jpg}</div>" +
               "<br /><div class="left-aligned-div"> - RAW</div><div class="right-aligned-div">{raw}</div>" +  
               "<br /><div class="left-aligned-div"> - Definition</div><div class="right-aligned-div">{definition}</div>" 
        */
    }
    , {xtype: "picturescontrolsdetailsemailbutton"}
    , {xtype: "picturescontrolsdetailssensorsbutton"}
    ]   
});
