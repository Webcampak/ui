/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.quicknav.Main");
//</debug>
Ext.define("WPAKT.view.pictures.controls.quicknav.Main", {
    extend: "Ext.container.Container"
    , alias: "widget.picturescontrolsquicknavmain"

    , height: 80
    , layout: {type: "vbox",align: "stretch"}
    , items: [{
        xtype: "container"               
        , layout: {type: "hbox",align: "stretch"}           
        , items: [
            {xtype: "picturescontrolsquicknavpreviousbutton"}
            , {xtype: "picturescontrolsquicknavnextbutton"}
        ]
    }, {            
        xtype: "container" 
        , layout: {type: "hbox",align: "stretch"}           
        , items: [
            {xtype: "picturescontrolsquicknavminus15button"}
            , {xtype: "picturescontrolsquicknavminus10button"}
            , {xtype: "picturescontrolsquicknavminus5button"}
            , {xtype: "picturescontrolsquicknavplus5button"}
            , {xtype: "picturescontrolsquicknavplus10button"}
            , {xtype: "picturescontrolsquicknavplus15button"}                             
        ] 
    }]
});
