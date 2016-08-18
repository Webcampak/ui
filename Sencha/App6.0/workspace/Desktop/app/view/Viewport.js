Ext.define('WPAKD.view.Viewport', {
    extend: 'Ext.panel.Panel',
    requires:[
         'WPAKD.view.desktop.Main'
    ],

    layout: {
         type: 'fit'
    },

    items:[{
        xtype: 'desktopmain'
    }],
    dockedItems: [{
        xtype: 'desktoptoolbartopmain'
    }, {
        xtype: 'desktoptoolbarbottommain'
    }]

});
/*
Ext.define('WPAKD.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
//          'Ext.layout.container.Fit',
         'WPAKD.view.desktop.Main'
    ],

    layout: {
         type: 'fit'
    },

    items:[{
        xtype: 'panel',
        border: false,
        html: '&#160;',
        layout: 'fit',

//        xTickSize: 1,
//        yTickSize: 1,
        items:[{
            xtype: 'desktopmain'
        }],
        dockedItems: [{
            xtype: 'desktoptoolbartopmain'
        }, {
            xtype: 'desktoptoolbarbottommain'
        }]
    }]
});
*/

