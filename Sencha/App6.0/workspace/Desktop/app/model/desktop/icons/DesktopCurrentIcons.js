//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.desktop.icons.DesktopCurrentIcons');
//</debug>
Ext.define('WPAKD.model.desktop.icons.DesktopCurrentIcons', {
    extend: 'Ext.data.Model',

    idProperty : 'USEICO_ID',

    fields: [
        { name: 'USEICO_ID',               type: 'int'      }
        , { name: 'APP_ID',                type: 'int'      }
        , { name: 'CODE',                  type: 'string'   }
        , { name: 'NAME',                  type: 'string'   }
        , { name: 'NOTES',                 type: 'string'   }
        , { name: 'ICON_X_COORDINATE',     type: 'int'      }
        , { name: 'ICON_Y_COORDINATE',     type: 'int'      }
        , { name: 'ICON_VISIBLE_FLAG',     type: 'string'   }

    ]
});
