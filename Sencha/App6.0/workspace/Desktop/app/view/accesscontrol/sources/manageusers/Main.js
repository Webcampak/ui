/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.sources.manageusers.Main");
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.manageusers.Main", {
    extend: "Ext.window.Window",
    alias: "widget.accesscontrolsourcesmanageusersmain",

    title: i18n.gettext("Manage sources"),

    width: 800,
    height: 400,
    
    modal: true,

    layout: {
        type:"hbox",
        align: "stretch",
        pack: "start"
    },
    
    items: [{
        flex: 1,
        xtype: "accesscontrolsourcesmanageuserssourceavailableusers"
    }, {
        flex: 1,
        xtype: "accesscontrolsourcesmanageuserssourcecurrentusers"
    }]

});