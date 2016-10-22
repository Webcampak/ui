/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.core.loading.Main");
//</debug>
Ext.define("WPAKT.view.core.loading.Main", {
    extend: "Ext.Container",
    alias: "widget.coreloadingmain",

    style: {
        background: "#74ce98 url(/resources/images/webcampak-logo.png) no-repeat center center fixed"
    }

});
