/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.pictures.archives.Cfgsavepictures");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.pictures.archives.Cfgsavepictures", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.sourcesconfigurationpicturesarchivescfgsavepictures"

    , fieldLabel: i18n.gettext("Save pictures into archives")
//    , boxLabel: i18n.gettext("Warning, if disabled video creation will not be possible.")
    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            if (newValue === true) {newValue = "yes"} else {newValue = "no"}
            if (oldValue === true) {oldValue = "yes"} else {oldValue = "no"}
            this.fireEvent("WPAKD.controller.sourcesconfiguration.pictures.Pictures.updateStoreValue", newValue, oldValue, "cfgsavepictures");
        }
    }
});

