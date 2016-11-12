/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.xferreports.XferReports");
//</debug>
Ext.define("WPAKD.model.xferreports.XferReports", {
    extend: "Ext.data.Model"
    , fields: [
        {name: "UUID",              type: "string"  }
        , {name: "DATE_UPDATED",    type: "date"    }
        , {name: "DATE_CREATED",    type: "date"    }
        , {name: "PID",             type: "string"  }
        , {name: "QUEUE",           type: "int"     }
        , {name: "JOB_STARTED",     type: "date"    }
        , {name: "JOB_COMPLETED",   type: "date"    }
        , {name: "JOB_DIRECTION",   type: "string"  }
        , {name: "JOB_SIZE",        type: "int"     }
        , {name: "JOB_SECONDS",     type: "int"     }
        , {name: "JOB_RATE",        type: "string"  }
    ]
});
 