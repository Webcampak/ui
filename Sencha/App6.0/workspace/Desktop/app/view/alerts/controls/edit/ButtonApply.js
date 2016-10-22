/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.controls.edit.ButtonApply");
//</debug>
Ext.define("WPAKD.view.alerts.controls.edit.ButtonApply", {
    extend: "Ext.button.Button"
    , alias : "widget.alertscontrolseditbuttonapply"

    , text: i18n.gettext("Apply")
    , glyph:0xf0c7

    , formBind: true
    , handler: function() {
//        console.log(this.up("form"));
//        console.log(this.up().up("form"));
        this.up("form").getForm().isValid();
    }    
});
