Ext.define("WPAKD.view.Viewport", {
    extend: "Ext.panel.Panel",
    requires:[
         "WPAKD.view.desktop.Main"
    ],

    layout: {
         type: "fit"
    },

    items:[{
        xtype: "desktopmain"
    }],
    dockedItems: [{
        xtype: "desktoptoolbartopmain"
    }, {
        xtype: "desktoptoolbarbottommain"
    }]

});

