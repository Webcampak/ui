/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturedayenable1");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturedayenable1", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.configcapturecalendarcfgcapturedayenable1"

    , fieldLabel: i18n.gettext("Monday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function() {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 1); // 1 for Monday
        }
    }
});

