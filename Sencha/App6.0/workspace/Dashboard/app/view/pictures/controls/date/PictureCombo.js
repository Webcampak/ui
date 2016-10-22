/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.controls.date.PictureCombo");
//</debug>
Ext.define("WPAKT.view.pictures.controls.date.PictureCombo", {
    extend: "Ext.form.ComboBox"
    , alias: "widget.picturescontrolsdatepicturecombo"

    , store: "pictures.HoursCombo"
    , fieldLabel: i18n.gettext("Picture")
    , emptyText: i18n.gettext("Select Capture time")
    , valueField: "PICTURE"
    , displayField: "TIME"
    , queryMode: "local"
    , hideLabel: true
});

