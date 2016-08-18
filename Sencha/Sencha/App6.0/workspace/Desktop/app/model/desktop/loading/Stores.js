//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.desktop.loading.Stores');
//</debug>
Ext.define('WPAKD.model.desktop.loading.Stores', {
  extend: 'Ext.data.Model',

  fields: [
     { name: 'SESSION_CODE',    type: 'string'  },
     { name: 'STORE_ID',         type: 'string'  },
     { name: 'STATUS',            type: 'string'  }
  ]
});

