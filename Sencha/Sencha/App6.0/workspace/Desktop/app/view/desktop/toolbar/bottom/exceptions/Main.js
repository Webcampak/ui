//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.toolbar.bottom.exceptions.Main');
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.bottom.exceptions.Main", {
    extend: 'Ext.window.Window',
    alias : 'widget.desktoptoolbarbottomexceptionsmain',

    title: i18n.gettext('Exception'),
    layout: 'fit',

    width: 800,
    height: 600,

    closeAction : 'hide',
//    onEsc: Ext.emptyFn,

    scroll: false,
    autoScroll: false,
    maximizable: false,
    minimizable: false,

    constrainHeader: true,

    modal: true,

    items: [{
        xtype: 'desktoptoolbarbottomexceptionsexceptions'
    }]
});