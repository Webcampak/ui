//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.accesscontrol.customers.Customers');
//</debug>
Ext.define('WPAKD.store.accesscontrol.customers.Customers', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.accesscontrol.customers.Customers',

//    autoLoad: true,
    autoSync: false,

    proxy:{
        type: 'direct',
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total'
        },
        api:{
            read:      'ACCustomers.getCustomers',
            create:    'ACCustomers.addCustomer',
            destroy:   'ACCustomers.removeCustomer',
            update:    'ACCustomers.updateCustomer'
        },
	listeners: {
            exception: function(proxy, response, options) {
                var currentStore = Ext.getStore('accesscontrol.customers.Customers');
                currentStore.fireEvent('WPAKD.controller.accesscontrol.customers.Customers.openEditCustomer');
            }
	}
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext('Customer');
            var popupMessage = i18n.gettext('Customer successfully');
            if (operation.action == 'destroy') {var popupMessage = popupMessage + ' ' + i18n.gettext('removed');}
            else if (operation.action == 'update'){var popupMessage = popupMessage + ' ' + i18n.gettext('updated');}
            else {var popupMessage = popupMessage + ' ' + i18n.gettext('added');}
            this.fireEvent('WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification', popupTitle, popupMessage);
            store.load();
        }
    }
});






