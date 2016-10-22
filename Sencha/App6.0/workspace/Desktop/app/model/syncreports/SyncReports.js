/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.syncreports.SyncReports");
//</debug>
Ext.define("WPAKD.model.syncreports.SyncReports", {
    extend: "Ext.data.Model"
    , fields: [
        {name: "NAME",              type: "string"  }
        , {name: "STATUS",          type: "string"  }
        , {name: "FILENAME",        type: "string"  }
        , {name: "XFER",            type: "boolean" }
        , {name: "LOGS",            type: "string"  }
        , {name: "DATE_QUEUED",     type: "date"    }
        , {name: "DATE_START",      type: "date"    }
        , {name: "DATE_COMPLETED",  type: "date"    }
        , {name: "SRC_SOURCEID",    type: "int"     }
        , {name: "SRC_SOURCENAME",  type: "string"  }
        , {name: "SRC_TYPE",        type: "string"  }
        , {name: "SRC_FTPSERVERID", type: "int"     }
        , {name: "SRC_SIZE",        type: "int"     }
        , {name: "DST_SOURCEID",    type: "int"     }
        , {name: "DST_SOURCENAME",  type: "string"  }
        , {name: "DST_TYPE",        type: "string"  }
        , {name: "DST_FTPSERVERID",   type: "int"     }
        , {name: "DST_SIZE",        type: "int"     }
        
        , {name: "SRC_RESULT_FILES_COUNT_JPG",      type: "int"     }
        , {name: "SRC_RESULT_FILES_COUNT_RAW",      type: "int"     }
        , {name: "SRC_RESULT_FILES_COUNT_TOTAL",    type: "int"     }
        , {name: "SRC_RESULT_FILES_SIZE_JPG",       type: "int"     }
        , {name: "SRC_RESULT_FILES_SIZE_RAW",       type: "int"     }
        , {name: "SRC_RESULT_FILES_SIZE_TOTAL",     type: "int"     }
        , {name: "SRC_RESULT_MISSING_COUNT_JPG",    type: "int"     }
        , {name: "SRC_RESULT_MISSING_COUNT_RAW",    type: "int"     }
        , {name: "SRC_RESULT_MISSING_COUNT_TOTAL",  type: "int"     }
        , {name: "SRC_RESULT_MISSING_SIZE_JPG",     type: "int"     }
        , {name: "SRC_RESULT_MISSING_SIZE_RAW",     type: "int"     }
        , {name: "SRC_RESULT_MISSING_SIZE_TOTAL",   type: "int"     }
        
        , {name: "DST_RESULT_FILES_COUNT_JPG",      type: "int"     }
        , {name: "DST_RESULT_FILES_COUNT_RAW",      type: "int"     }
        , {name: "DST_RESULT_FILES_COUNT_TOTAL",    type: "int"     }
        , {name: "DST_RESULT_FILES_SIZE_JPG",       type: "int"     }
        , {name: "DST_RESULT_FILES_SIZE_RAW",       type: "int"     }
        , {name: "DST_RESULT_FILES_SIZE_TOTAL",     type: "int"     }
        , {name: "DST_RESULT_MISSING_COUNT_JPG",    type: "int"     }
        , {name: "DST_RESULT_MISSING_COUNT_RAW",    type: "int"     }
        , {name: "DST_RESULT_MISSING_COUNT_TOTAL",  type: "int"     }
        , {name: "DST_RESULT_MISSING_SIZE_JPG",     type: "int"     }
        , {name: "DST_RESULT_MISSING_SIZE_RAW",     type: "int"     }
        , {name: "DST_RESULT_MISSING_SIZE_TOTAL",   type: "int"     }
        
        , {name: "ITR_RESULT_COUNT_JPG",      type: "int"     }
        , {name: "ITR_RESULT_COUNT_RAW",      type: "int"     }
        , {name: "ITR_RESULT_COUNT_TOTAL",    type: "int"     }
        , {name: "ITR_RESULT_SIZE_JPG",       type: "int"     }
        , {name: "ITR_RESULT_SIZE_RAW",       type: "int"     }
        , {name: "ITR_RESULT_SIZE_TOTAL",     type: "int"     }
    ]
});
 