/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.accesscontrol.customers.Main");
//</debug>
Ext.define("WPAKD.view.accesscontrol.customers.Main", {
    extend: "Ext.container.Container",
    alias: "widget.accesscontrolcustomersmain",

    title: i18n.gettext("Customers"),
    tooltip: i18n.gettext("Add/Edit/Delete Customers"),

    layout: {
        type:"vbox",
        pack: "start",
        align: "stretch"
    },

    items: [{
        flex: 2,
        xtype: "accesscontrolcustomerscustomerslist",
        dockedItems: [{
            xtype: "toolbar",
            dock: "top",
            items: [{
                xtype: "button",
                text: i18n.gettext("Add"),
                glyph:0xf0fe, // fa-plus-square
                action: "openAddCustomer"
            }, {
                xtype: "button",
                text: i18n.gettext("Edit"),
                glyph:0xf14b, // fa-pencil-square
                action: "openEditCustomer",
                itemId: "editCustomerBtn",
                disabled: true
            }, {
                xtype: "button",
                text: i18n.gettext("Delete"),
                glyph:0xf146, // fa-minus-square
                action: "openDeleteCustomer",
                itemId: "deleteCustomerBtn",
                disabled: true
            }, "->", {
                xtype: "accesscontrolcustomerssearch"
            }, "-", {
                xtype: "button",
                glyph:0xf021, // fa-refresh
                action: "reloadCustomers"
            }]
        }, {
            xtype: "toolbar",
            dock: "bottom",
            items: ["->", {
                xtype: "accesscontrolcustomerstoolbarrecords"
            }]
        }]
    }]

});