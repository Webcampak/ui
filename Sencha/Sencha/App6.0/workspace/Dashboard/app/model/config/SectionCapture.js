//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.model.config.SectionCapture');
//</debug>
Ext.define('WPAKT.model.config.SectionCapture', {
    extend: 'Ext.data.Model'

    , fields: [
        { name: 'NAME',     type: 'string'     }
    ]
});
