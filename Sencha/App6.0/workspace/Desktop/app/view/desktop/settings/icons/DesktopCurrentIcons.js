/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.settings.icons.DesktopCurrentIcons");
//</debug>
Ext.define("WPAKD.view.desktop.settings.icons.DesktopCurrentIcons", {
    extend: "Ext.grid.Panel",
    alias : "widget.desktopsettingsiconsdesktopcurrenticons",

    multiSelect: true,

    title: i18n.gettext("Current Desktop Icons"),

    viewConfig: {
        plugins: {
            ptype: "gridviewdragdrop",
            dragText: "Drag icons to add them to the desktop",
            dragGroup: "desktopiconsDDGroup",
            dropGroup: "desktopavailableiconsDDGroup"
        }
    },

    store: "desktop.icons.DesktopCurrentIcons",
    autoScroll: true,
    columns: [
        {header: "USEICO_ID",           dataIndex: "USEICO_ID",     sortable: false,    width: 40, hidden: true    },
        {header: "APP_ID",              dataIndex: "AUTGRO_ID",     sortable: false,    width: 40, hidden: true },
        {header: i18n.gettext("Name"), dataIndex: "NAME",           sortable: true,     flex: 1,     editor: "textfield"    }
    ],
    selType: "rowmodel",
    plugins: [{
        ptype: "rowexpander",
        rowBodyTpl : new Ext.XTemplate("<p>{NOTES}</p>")
    }],
    collapsible: true,
    animCollapse: false,
    tools:[{
        type:"refresh",
        tooltip: i18n.gettext("Refresh current icons"),
        action: "reloadDesktopCurrentIcons"
    }]

});


