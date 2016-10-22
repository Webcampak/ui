/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.model.stats.System");
//</debug>
Ext.define("WPAKD.model.stats.System", {
    extend: "Ext.data.Model",

    fields: [
        {name: "date",                type: "date"}
        , {name: "BandwidthIn",         type: "int"}
        , {name: "BandwidthOut",        type: "int"}
        , {name: "BandwidthTotal",      type: "int"}
        , {name: "MemoryUsageTotal",    type: "int"}
        , {name: "MemoryUsageUsed",     type: "int"}
        , {name: "MemoryUsageFree",     type: "int"}
        , {name: "MemoryUsagePercent",  type: "int"}
        , {name: "DiskUsageTotal",      type: "int"}
        , {name: "DiskUsageUsed",       type: "int"}
        , {name: "DiskUsageFree",       type: "int"}
        , {name: "DiskUsagePercent",    type: "int"}
        , {name: "CPUUsagePercent",     type: "int"}
    ]
});
