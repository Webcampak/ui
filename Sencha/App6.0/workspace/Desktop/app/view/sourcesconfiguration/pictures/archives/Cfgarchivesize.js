/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.archives.Cfgarchivesize");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.archives.Cfgarchivesize", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationpicturesarchivescfgarchivesize"

    , fieldLabel: i18n.gettext("Resize pictures before saving")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgarchivesize");
        }
    }
});
