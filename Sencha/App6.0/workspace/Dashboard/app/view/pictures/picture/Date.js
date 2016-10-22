/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.pictures.picture.Date");
//</debug>
Ext.define("WPAKT.view.pictures.picture.Date", {
    extend: "Ext.Component"
    , alias: "widget.picturespicturedate"

    , data: {
        date: "n/a"
    }
    , tpl: "<div class=\"centre-aligned-div\">{date}</div>"
});
