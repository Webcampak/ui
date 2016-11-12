/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotoowner");
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.capture.gphoto.Cfgsourcegphotoowner", {
    extend: "Ext.form.field.Text"
    , alias: "widget.sourcesconfigurationcapturegphotocfgsourcegphotoowner"

    , fieldLabel: i18n.gettext("Camera Owner (TAG)")
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKD.controller.sourcesconfiguration.capture.Capture.updateStoreValue", newValue, oldValue, "cfgsourcegphotoowner");
        }
    }
});
