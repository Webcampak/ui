/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.pictures.display.Zoom");
//</debug>
Ext.define("WPAKD.view.pictures.display.Zoom", {
    extend: "Ext.form.SliderField"
    , alias: "widget.picturesdisplayzoom"

    , fieldLabel: i18n.gettext("Zoom")
    , labelWidth: 40
    , minValue: 0
    , maxValue: 200
    , tipText: function(thumb){
        return Ext.String.format("<b>{0} %</b>", thumb.value);
    }
});
