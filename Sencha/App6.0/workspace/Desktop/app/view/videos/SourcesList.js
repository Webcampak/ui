/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.videos.SourcesList");
//</debug>
Ext.define("WPAKD.view.videos.SourcesList", {
    extend: "Ext.form.ComboBox"
    , alias : "widget.videossourceslist"

    , store: "shared.Sources"

    , valueField: "SOU_ID"
    , displayField: "NAME"
    , queryMode: "local"
    , typeAhead: true
    , emptyText: i18n.gettext("Click here to select a source...")
});
