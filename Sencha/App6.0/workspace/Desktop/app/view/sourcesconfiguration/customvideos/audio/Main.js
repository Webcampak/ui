/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.customvideos.audio.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.customvideos.audio.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationcustomvideosaudiomain"

    , title: i18n.gettext("Add an audio file")
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 200}
    , items   : [
        {xtype: "sourcesconfigurationcustomvideosaudiocfgvideoaddaudio"   }
        , {xtype: "sourcesconfigurationcustomvideosaudiocfgvideoaudiofile"}
    ]

});

