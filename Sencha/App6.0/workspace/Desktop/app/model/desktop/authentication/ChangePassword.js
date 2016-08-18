//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.model.desktop.authentication.ChangePassword');
//</debug>
Ext.define('WPAKD.model.desktop.authentication.ChangePassword', {
  extend: 'Ext.data.Model',

  fields: [
     { name: 'ID', type: 'int'      }
     , { name: 'OLDPASSWORD',     type: 'string'  }
     , { name: 'NEWPASSWORD',     type: 'string'  }
  ]
});

