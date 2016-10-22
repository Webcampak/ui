/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.videos.VideosList");
//</debug>
Ext.define("WPAKD.model.videos.VideosList", {
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

/*
 *
    	"id",
		{name: "name", 		type: "string"},
    	{name: "filename", 	type: "string"},
    	{name: "date", 		type: "string"},
     	{name: "format", 		type: "string"},
     	{name: "size", 		type: "string"},
     	{name: "download", 	type: "string"},
     	{name: "mp4", 			type: "string"},
     	{name: "jpg", 			type: "string"}
 *
 */