/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.syncreports.details.ButtonClose");
//</debug>
Ext.define("WPAKD.view.syncreports.details.ButtonClose", {
    extend: "Ext.button.Button"
    , alias : "widget.syncreportsdetailsbuttonclose"

    , text: i18n.gettext("Close")
    , glyph:0xf00d // fa-times
});
