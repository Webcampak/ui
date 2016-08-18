//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.desktop.settings.icons.DesktopAvailableIcons');
//</debug>
Ext.define('WPAKD.view.desktop.settings.icons.DesktopAvailableIcons', {
    extend: 'Ext.grid.Panel',
    alias : 'widget.desktopsettingsiconsdesktopavailableicons',

    multiSelect: true,

    title: i18n.gettext('Available Desktop Icons'),

    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragText: 'Drag icons to add them to the desktop',
            dragGroup: 'desktopavailableiconsDDGroup',
            dropGroup: 'desktopiconsDDGroup'
        }
    },

    store: 'desktop.icons.DesktopAvailableIcons',
    autoScroll: true,
    columns: [
        {header: 'APP_ID',                dataIndex: 'APP_ID',        sortable: false,     width: 40, hidden: true }
        , {header: i18n.gettext('Name'),  dataIndex: 'NAME',    sortable: true,     flex: 1,     editor: 'textfield'    }
    ],
    selType: 'rowmodel',
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate('<p>{NOTES}</p>')
    }],
    collapsible: true,
    animCollapse: false,
    tools:[{
        type:'refresh',
        tooltip: i18n.gettext('Refresh available icons'),
        action: 'reloadDesktopAvailableIcons'
    }]

});


