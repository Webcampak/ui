/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturedayenable5");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturedayenable5", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.configcapturecalendarcfgcapturedayenable5"

    , fieldLabel: i18n.gettext("Friday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function(scope, newValue, oldValue) {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 5); // 5 for Friday
        }
    }
});

