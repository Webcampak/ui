/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.Main");
//</debug>
Ext.define("WPAKD.view.accesscontrol.Main", {
    extend: "Ext.window.Window",
    alias: "widget.accesscontrolmain",

    title: i18n.gettext("Access Control"),
    layout: "fit",

    width: 1000,
    height: 600,

    stateful: true,
    stateId: "accesscontrolmain",

    scroll: true,
    autoScroll: true,
    maximizable: true,
    minimizable: true,

    constrainHeader: true,

    closeAction : "hide",
//    onEsc: Ext.emptyFn,
    glyph:0xf0c0,

    items: [{
        xtype: "tabpanel",
        items: [{
            title: i18n.gettext("Users"),
            tooltip: i18n.gettext("Add/Edit/Delete users"),
            itemID: "usersTab",
            xtype: "accesscontrolusersmain",
            border: 0
        }, {
            title: i18n.gettext("Groups"),
            tooltip: i18n.gettext("Add/Edit/Delete groups"),
            itemID: "groupsTab",
            xtype: "accesscontrolgroupsmain"
        }, {
            title: i18n.gettext("Customers"),
            tooltip: i18n.gettext("Add/Edit/Delete customers"),
            itemID: "customersTab",
            xtype: "accesscontrolcustomersmain"
        }, {
            title: i18n.gettext("Sources"),
            tooltip: i18n.gettext("Add/Edit/Delete sources"),
            itemID: "sourcesTab",
            xtype: "accesscontrolsourcesmain"
        }]
    }]
});