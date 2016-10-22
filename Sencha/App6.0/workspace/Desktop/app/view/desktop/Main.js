/*global Ext i18n*/
/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.Main");
//</debug>
Ext.define("WPAKD.view.desktop.Main", {
    extend: "Ext.Container",
    alias: "widget.desktopmain",

    style: {
        background: "#74ce98 url(/resources/images/webcampak-logo.png) no-repeat center center fixed"
    },
    items: [{
      xtype: "desktopiconsmain"
    }]
});

