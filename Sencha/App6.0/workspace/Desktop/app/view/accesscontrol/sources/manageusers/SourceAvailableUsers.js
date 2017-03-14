/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.sources.manageusers.SourceAvailableUsers");
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.manageusers.SourceAvailableUsers", {
    extend: "Ext.grid.Panel",

    alias : "widget.accesscontrolsourcesmanageuserssourceavailableusers",

    multiSelect: true,

    title: i18n.gettext("Available users"),

    viewConfig: {
        plugins: {
            ptype: "gridviewdragdrop",
            dragText: "Drag source to add them to the user",
            dragSource: "sourceavailablepagesDDSource",
            dropSource: "sourcepagesDDSource"
        }
    },

    store: "accesscontrol.sources.SourceAvailableUsers",
    autoScroll: true,
    columns: [
        {header: "USE_ID",      dataIndex: "USE_ID",    sortable: false,     width: 40, hidden: true    }
        , {header: "SOU_ID",    dataIndex: "SOU_ID",    sortable: false,     width: 40, hidden: true    }
        , {header: i18n.gettext("Username"),      dataIndex: "USERNAME",    align: "left", sortable: true,     flex: 0.8,   editor: "textfield"    }
        , {header: i18n.gettext("Firstname"),     dataIndex: "FIRSTNAME",   align: "left", sortable: true,     flex: 1,   editor: "textfield"    }
        , {header: i18n.gettext("Lastname"),      dataIndex: "LASTNAME",    align: "left", sortable: true,     flex: 1,     editor: "textfield"    }
    ],
    selType: "rowmodel",

    tools:[{
        type:"refresh",
        tooltip: i18n.gettext("Refresh available sources"),
        action: "reloadSourceAvailableUsers"
    }]
});


