/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.model.videos.VideosList");
//</debug>
Ext.define("WPAKT.model.videos.VideosList", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "NAME",         type: "string"  }
        , { name: "FILENAME",   type: "string"  }
        , { name: "DATE",       type: "string"  }
        , { name: "FORMAT",     type: "string"  }
        , { name: "SIZE",       type: "string"  }
        , { name: "AVI",        type: "string"  }
        , { name: "MP4",        type: "string"  }
        , { name: "JPG",        type: "string"  }
        , { name: "JPGWIDTH",   type: "int"     }
        , { name: "JPGHEIGHT",  type: "int"     }
    ]

});
