/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.pictures.Picture");
//</debug>
Ext.define("WPAKD.model.pictures.Picture", {
    extend: "Ext.data.Model"

    , fields: [
        { name: "PICTURE",          type: "string"  }
        , { name: "PICTUREWIDTH",   type: "string"  }
        , { name: "PICTUREHEIGHT",  type: "string"  }
        , { name: "THUMB1",         type: "string"  }
        , { name: "THUMB2",         type: "string"  }
        , { name: "THUMB3",         type: "string"  }
        , { name: "THUMB4",         type: "string"  }
        , { name: "THUMB5",         type: "string"  }
        , { name: "THUMB6",         type: "string"  }
        , { name: "PREVIOUS",       type: "string"  }
        , { name: "NEXT",           type: "string"  }
        , { name: "LAST",           type: "string"  }
    ]

});

/*
 *
   fields: [
    	{name: "id", 					type: "int"},
    	{name: "sourceid", 			type: "int"},
    	{name: "sourcename", 		type: "string"},

		{name: "reqpicturetime", 	type: "int"},
		{name: "reqsourceid", 		type: "int"},
    	{name: "reqzoomlevel", 		type: "int"},

    	{name: "zoomlevel", 			type: "int"},
    	{name: "timthumb", 			type: "int"},

    	{name: "currentdate", 		type: "int"},
    	{name: "disableddates", 	type: "string"},
     	{name: "mindate", 			type: "int"},  //Min date to be displayed in calendar
     	{name: "maxdate", 			type: "int"},  //Max date to be displayed in calendar

    	{name: "picture", 			type: "string"},
    	{name: "pictureurl", 		type: "string"},
    	{name: "picturecomment", 	type: "string"},
    	{name: "picturewidth", 		type: "int"},
    	{name: "pictureheight",		type: "int"},
     	{name: "picturetime", 		type: "int"},
     	{name: "picturenext", 		type: "int"},
     	{name: "pictureprevious", 	type: "int"},
     	{name: "picturelast", 		type: "int"},

    	{name: "thumb1", 				type: "string"},
    	{name: "thumb1time", 		type: "int"},
   	{name: "thumb2", 				type: "string"},
    	{name: "thumb2time", 		type: "int"},
   	{name: "thumb3", 				type: "string"},
    	{name: "thumb3time", 		type: "int"},
   	{name: "thumb4", 				type: "string"},
    	{name: "thumb4time", 		type: "int"},
   	{name: "thumb5", 				type: "string"},
    	{name: "thumb5time", 		type: "int"},
   	{name: "thumb6", 				type: "string"},
    	{name: "thumb6time", 		type: "int"}
    ]
 *
 */