/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturedayenable6");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturedayenable6", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.configcapturecalendarcfgcapturedayenable6"

    , fieldLabel: i18n.gettext("Saturday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue, eOpts ) {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 6); // 6 for Saturday
        }
    }
});

