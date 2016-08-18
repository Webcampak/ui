//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.top.Main');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.Main", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.desktoptoolbartopmain',

    dock: 'top',

    config: {
        layout: {type: 'hbox', align : 'stretch', pack  : 'start'},
        items: [{
//            xtype: 'desktoptoolbartopmenu'
//        }, {
            xtype: 'desktoptoolbartopmenumain'
        }, '-', {
            xtype: 'desktoptoolbartoptaskbar'
        }, '->', {
            xtype: 'desktoptoolbartoponlinestatus'
        }, {
            xtype: 'desktoptoolbartopdesktopconfig'
        }]
    }
});