/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.sources.Main");
//</debug>
Ext.define("WPAKD.view.accesscontrol.sources.Main", {
    extend: "Ext.container.Container",
    alias: "widget.accesscontrolsourcesmain",

    title: i18n.gettext("Sources"),
    tooltip: i18n.gettext("Add/Edit/Delete Sources"),

    layout: {
        type:"vbox",
        pack: "start",
        align: "stretch"
    },
    items: [{
        flex: 2,
        xtype: "accesscontrolsourcessourceslist",
        dockedItems: [{
            xtype: "toolbar",
            dock: "top",
            items: [{
                xtype: "button",
                text: i18n.gettext("Add"),
                glyph:0xf0fe, // fa-plus-square
                action: "openAddSource"
            }, {
                xtype: "button",
                text: i18n.gettext("Edit"),
                glyph:0xf14b, // fa-pencil-square
                action: "openEditSource",
                itemId: "editSourceBtn",
                disabled: true
            }, {
                xtype: "button",
                text: i18n.gettext("Delete"),
                glyph:0xf146, // fa-minus-square
                action: "openDeleteSource",
                itemId: "deleteSourceBtn",
                disabled: true
            }, "-", {
                xtype: "button",
                text: i18n.gettext("Users"),
                glyph:0xf0c0, // fa-users
                action: "openUserAssignment",
                itemId: "openUserAssignmentBtn",
                disabled: true
            }, "->", {
                xtype: "accesscontrolsourcessearch"
            }, "-", {
                xtype: "button",
                glyph:0xf021, // fa-refresh
                action: "reloadSources"
            }]
        }, {
            xtype: "toolbar",
            dock: "bottom",
            items: ["->", {
                xtype: "accesscontrolsourcestoolbarrecords"
            }]
        }]
    }]

});