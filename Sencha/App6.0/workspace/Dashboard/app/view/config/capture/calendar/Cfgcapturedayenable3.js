/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.config.capture.calendar.Cfgcapturedayenable3");
//</debug>
Ext.define("WPAKT.view.config.capture.calendar.Cfgcapturedayenable3", {
    extend: "Ext.form.field.Checkbox"
    , alias: "widget.configcapturecalendarcfgcapturedayenable3"

    , fieldLabel: i18n.gettext("Wednesday")

    , uncheckedValue: "no"
    , inputValue: "yes"
    , listeners : {
        change : function() {
            this.fireEvent("WPAKT.controller.config.Config.updateCalendarSchedule", 3); // 3 for Wednesday
        }
    }
});

