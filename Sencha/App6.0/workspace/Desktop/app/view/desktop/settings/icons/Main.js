//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.settings.icons.Main');
//</debug>
Ext.define("WPAKD.view.desktop.settings.icons.Main", {
    extend: 'Ext.window.Window', 
    alias: 'widget.desktopsettingsiconsmain',

    title: i18n.gettext('Manage Desktop Icons'),
    layout: 'fit',
    
    width: 800,
    height: 400,
    
    modal: true,

    layout: {
        type:'hbox',
        align: 'stretch',
        pack: 'start'        
    },
    
    items: [{
        flex: 1,
        xtype: 'desktopsettingsiconsdesktopavailableicons'            
    }, {
        flex: 1,
        xtype: 'desktopsettingsiconsdesktopcurrenticons'                    
    }]

});