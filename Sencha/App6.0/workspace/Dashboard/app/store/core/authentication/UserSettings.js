/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.store.core.authentication.UserSettings");
//</debug>
Ext.define("WPAKT.store.core.authentication.UserSettings", {
    extend: "Ext.data.Store",

    model: "WPAKT.model.core.authentication.UserSettings",

    proxy:{
        type: "direct",
        reader: {
            type: "json",
            rootProperty: "results",
            totalProperty: "total"
        },
        extraParams: {
            TZ_OFFSET: -new Date().getTimezoneOffset()/60
            , SENCHA_APP: "null"
        },
        api:{
            read:        "UserSettings.getSettings"
        }
    }
});
