//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.accesscontrol.sources.Sources');
//</debug>
Ext.define('WPAKD.store.accesscontrol.sources.Sources', {
    extend: 'Ext.data.Store',

    model: 'WPAKD.model.accesscontrol.sources.Sources',

    autoSync: false,

    proxy:{
        type: 'direct',
        writer: {
            writeAllFields:true
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total'
        },
        api:{
            read:      'ACSources.getSources',
            create:    'ACSources.addSource',
            destroy:   'ACSources.removeSource',
            update:    'ACSources.updateSource'
        },
	listeners: {
            exception: function(proxy, response, options) {
                var currentStore = Ext.getStore('accesscontrol.sources.Sources');
                currentStore.fireEvent('WPAKD.controller.accesscontrol.sources.Sources.openEditSource');
            }
	}
    },
    listeners: {
        write: function(store, operation){
            var popupTitle = i18n.gettext('Source');
            var popupMessage = i18n.gettext('Source successfully');
            if (operation.action == 'destroy') {var popupMessage = popupMessage + ' ' + i18n.gettext('removed');}
            else if (operation.action == 'update'){var popupMessage = popupMessage + ' ' + i18n.gettext('updated');}
            else {var popupMessage = popupMessage + ' ' + i18n.gettext('added');}
            this.fireEvent('WPAKD.controller.desktop.notifications.NotificationsPopups.displayNotification', popupTitle, popupMessage);
        }
    }
});






