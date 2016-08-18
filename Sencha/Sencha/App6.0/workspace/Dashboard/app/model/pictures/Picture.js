//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.model.pictures.Picture');
//</debug>
Ext.define('WPAKT.model.pictures.Picture', {
    extend: 'Ext.data.Model'

    , fields: [
        { name: 'PICTURE',          type: 'string'  }
        , { name: 'PICTUREJPGSIZE', type: 'int'     }
        , { name: 'PICTURERAWSIZE', type: 'int'     }        
        , { name: 'PICTUREEXIF',    type: 'string'  }
        , { name: 'PICTUREWIDTH',   type: 'string'  }
        , { name: 'PICTUREHEIGHT',  type: 'string'  }
        , { name: 'PICTUREDATE',    type: 'string'  }
        , { name: 'THUMB1',         type: 'string'  }
        , { name: 'THUMB2',         type: 'string'  }
        , { name: 'THUMB3',         type: 'string'  }
        , { name: 'THUMB4',         type: 'string'  }
        , { name: 'THUMB5',         type: 'string'  }
        , { name: 'THUMB6',         type: 'string'  }
        , { name: 'PREVIOUS',       type: 'string'  }
        , { name: 'NEXT',           type: 'string'  }
        , { name: 'LAST',           type: 'string'  }
    ]

});