/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.ServerAvailability");
//</debug>
Ext.define("WPAKD.controller.desktop.Links", {
    extend: "Ext.app.Controller",

    stores: [
        "desktop.Links"
    ],

    models: [
        "desktop.Links"
    ],

    views: [
        "desktop.toolbar.bottom.Link",
        "desktop.toolbar.top.menu.Main"
    ],

    refs: [
        { ref: "desktoptoolbarbottomlink", selector: "desktoptoolbarbottomlink" },
        { ref: "desktoptoolbartopmenumain", selector: "desktoptoolbartopmenumain" }
    ],

    init: function () {
        console.log(new Date().toLocaleTimeString() + ": Controller->Desktop->Links: Controller init: function()");
        this.control({

        });
        this.listen({
            controller: {
                "*": {
                    "WPAKD.controller.desktop.Links.updateLinks": this.updateLinks
                }
            }
        });
    }

    , onLaunch: function () {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Links: Controller onLaunch: function()");
        this.getDesktopLinksStore().on("load", this.updateLinks, this, { single: true });
        this.getDesktopLinksStore().load();
    }

    , updateLinks: function () {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->Links: Controller updateLinks: function()");
        record = this.getDesktopLinksStore().findRecord("LOCATION", "BOTTOM_LEFT", 0, false, false, true);
        if (record) {
            this.getDesktoptoolbarbottomlink().setText(record.get("NAME"));
            this.getDesktoptoolbarbottomlink().setHref(record.get("LINK"));
        }

        topRightMenu = this.getDesktoptoolbartopmenumain().menu
        this.getDesktopLinksStore().each(function (record) {
            if (record.data.LOCATION === 'TOP_LEFT_MENU') {
                topRightMenu.add({ text: record.data.NAME, glyph: record.data.GLYPH, href: record.data.LINK })
            }
        });
    }

});