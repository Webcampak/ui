/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.desktop.icons.DesktopAvailableIcons");
//</debug>
Ext.define("WPAKD.model.desktop.icons.DesktopAvailableIcons", {
    extend: "Ext.data.Model",

    idProperty : "APP_ID",

    fields: [
        { name: "APP_ID",                  type: "int"      }
        , { name: "NAME",                  type: "string"   }
        , { name: "CODE",                  type: "string"   }
        , { name: "NOTES",                 type: "string"   }
        , { name: "ICON_X_COORDINATE",     type: "int"      }
        , { name: "ICON_Y_COORDINATE",     type: "int"      }
        , { name: "ICON_VISIBLE_FLAG",     type: "string"   }
    ]
});

