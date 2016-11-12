/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.archives.Main");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.archives.Main", {
    extend: "Ext.form.FieldSet"
    , alias: "widget.sourcesconfigurationpicturesarchivesmain"

    , title: i18n.gettext("Archives")
    , collapsible: true

    , padding: 5
    , layout: "fit"
    , defaults: {labelWidth: 280}
    , items   : [
        {
            xtype: "container"
            , layout: {type:"hbox",	align: "stretch", pack: "start"}
            , items : [
                {xtype: "sourcesconfigurationpicturesarchivescfgsavepictures", width: 300,	labelWidth: 280}
                , {
                    flex: 1
                    , xtype: "fieldcontainer"
                    , fieldLabel: i18n.gettext("Warning, if disabled video creation will not be possible.")
                    , labelSeparator: ""
                    , labelWidth: 350
                }
            ]
        }
        , {xtype: "sourcesconfigurationpicturesarchivescfgarchivesize"}
        , {xtype: "sourcesconfigurationpicturesarchivescfgcaptureminisize"}
        , {xtype: "sourcesconfigurationpicturesarchivescfgcapturedeleteafterdays"}
        , {xtype: "sourcesconfigurationpicturesarchivescfgcapturemaxdirsize"}
    ]
});

