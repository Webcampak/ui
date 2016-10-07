//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.accesscontrol.customers.Customers');
//</debug>
Ext.define('WPAKD.model.accesscontrol.customers.Customers', {
    extend: 'Ext.data.Model',
    idProperty: 'CUS_ID',
    fields: [
        {name: 'CUS_ID',            type: 'int'}
        , {name: 'NAME',            type: 'string'}
        , {name: 'STYLE_BG_COLOR',  type: 'string'}
        , {name: 'STYLE_BG_LOGO',   type: 'string'}
    ]
});
