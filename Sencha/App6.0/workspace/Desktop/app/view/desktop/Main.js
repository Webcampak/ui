//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.Main');
//</debug>
Ext.define('WPAKD.view.desktop.Main', {
    extend: 'Ext.Container',
    alias: 'widget.desktopmain',

    style: {
        background: '#74ce98 url(/resources/images/webcampak-logo.png) no-repeat center center fixed'
    },
    items: [{
      xtype: 'desktopiconsmain'
    }]

    /*
    layout: {type: 'hbox', align : 'stretch', pack  : 'start'},
    items: [{
        xtype: 'container',
        width: 40
    }, {
        xtype: 'container',
        width: 270,
        layout: {type: 'vbox', align : 'stretch', pack  : 'start'},
        items: [{
            xtype: 'container',
            height: 40
        }, {
            xtype: 'desktoptilesworkorders'
        }, {
            xtype: 'container',
            flex: 1
        }]

    }, {
        xtype: 'container',
        flex: 1
    }, {
        xtype: 'container',
        layout: {type: 'vbox', align : 'stretch', pack  : 'start'},
        items: [{
            xtype: 'container',
            flex: 1
        }, {
            xtype: 'container'
            , html: '<div id="digiclock"></div>'
        }]
    }]*/
});

