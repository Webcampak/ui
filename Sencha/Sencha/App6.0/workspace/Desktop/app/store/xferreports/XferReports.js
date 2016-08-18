//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.xferreports.XferReports');
//</debug>
Ext.define('WPAKD.store.xferreports.XferReports', {
    extend: 'Ext.data.Store'

    , model: 'WPAKD.model.xferreports.XferReports'

    , autoXfer: true

    , proxy:{
        type: 'direct'
        , writer: {
            writeAllFields: true
        }
        , reader: {
            type: 'json'
            , rootProperty: 'results'
            , totalProperty: 'total'
        }
        , api:{
            read: 'XferReports.getXferReports'
        }
    }
});






