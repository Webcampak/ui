//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.accesscontrol.AccessControl');
//</debug>
Ext.define('WPAKD.controller.accesscontrol.AccessControl', {
    extend: 'Ext.app.Controller',

    views: [
        'desktop.Main'
        , 'desktop.toolbar.top.Taskbar'
        , 'accesscontrol.Main'
        , 'accesscontrol.users.Main'
        , 'accesscontrol.users.ToolbarRecords'
        , 'accesscontrol.groups.ToolbarRecords'

    ],

    stores: [
        'accesscontrol.users.Users'
        , 'accesscontrol.groups.Groups'
        , 'accesscontrol.customers.Customers'
        , 'accesscontrol.sources.Sources'
        , 'desktop.statefulconfiguration.StatefulConfiguration'

    ],

    models: [
        'accesscontrol.users.Users'
        , 'accesscontrol.groups.Groups'
        , 'accesscontrol.customers.Customers'
        , 'accesscontrol.sources.Sources'
        , 'desktop.statefulconfiguration.StatefulConfiguration'

    ],

    refs: [
        {ref: 'desktopmain',                        selector: 'desktopmain'                         }
        , {ref: 'desktoptoolbartoptaskbar',         selector: 'desktoptoolbartoptaskbar'            }
        , {ref: 'accesscontrolmain',                selector: 'accesscontrolmain'                   ,  autoCreate: true,        xtype: 'accesscontrolmain' }
        , {ref: 'accesscontrolusersmain',           selector: 'accesscontrolusersmain'              }
        , {ref: 'accesscontroluserstoolbarrecords', selector: 'accesscontroluserstoolbarrecords'    }
        , {ref: 'accesscontrolgroupstoolbarrecords',selector: 'accesscontrolgroupstoolbarrecords'   }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Application: Controller init: function()');
        this.control({
            'desktoptoolbartoptaskbar button[action=openWEB_CFG_ACCESSCONTROL]':   {click:     this.openAccessControl                                              }
            , 'accesscontrolmain':                                 {hide:     this.closeAccessControl,    minimize: this.openAccessControl    }
            , '#menuOpenWEB_CFG_ACCESSCONTROL':                    {click:     this.menuOpenAccessControl                                              }

            ,'accesscontrolmain tool[action=resetPreferences]':    {click:         this.resetPreferences}
        });
        this.listen({
             controller: {
                  '*': {
                      openAccessControl: this.menuOpenAccessControl
                      , 'WPAKD.controller.accesscontrol.AccessControl.menuOpenAccessControl': this.menuOpenAccessControl
                      , 'WPAKD.controller.accesscontrol.AccessControl.openAccessControl': this.openAccessControl
                  }
             }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->dataanalysis->DataAnalysis: onLaunch: function()');
    },

    menuOpenAccessControl: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: menuOpenAccessControl: function()');
        Ext.getBody().mask('Please wait, fetching initial content from database ...');
        var requiredStores = [];
        requiredStores.push({store: this.getAccesscontrolGroupsGroupsStore(),       action: 'LOAD'});
        requiredStores.push({store: this.getAccesscontrolUsersUsersStore(),         action: 'LOAD'});
        requiredStores.push({store: this.getAccesscontrolCustomersCustomersStore(), action: 'LOAD'});
        requiredStores.push({store: this.getAccesscontrolSourcesSourcesStore(),     action: 'LOAD'});

        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_CFG_ACCESSCONTROL'
            , 'WPAKD.controller.accesscontrol.AccessControl.openAccessControl'
            , requiredStores);

        var applicationName = 'WEB_CFG_ACCESSCONTROL';
        this.fireEvent('WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats', applicationName);
    },

    openAccessControl: function(key) {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: openAccessControl: function()');
        if(this.getAccesscontrolmain().isVisible() && Ext.WindowManager.getActive().getId() != this.getAccesscontrolmain().getId()) {
            console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: openAccessControl: getAccesscontrolmain().toFront()');
            this.getAccesscontrolmain().toFront();
        } else if(!this.getAccesscontrolmain().isVisible()) {
            console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: openAccessControl - getAccesscontrolmain().setVisible(true)');
            this.getDesktopmain().add(this.getAccesscontrolmain());
            this.getAccesscontrolmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent('tbaccesscontrol').setVisible(true);
            Ext.getBody().unmask();
            this.refreshTotalCount();
        } else {
            console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: openAccessControl - getDataanalysiswindow().setVisible(false)');
            this.getAccesscontrolmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent('tbaccesscontrol').setVisible(true);
        }
    },

    closeAccessControl: function(key) {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: closeAccessControl: function()');
        this.getDesktoptoolbartoptaskbar().getComponent('tbaccesscontrol').setVisible(false);
    },

    refreshTotalCount: function(key) {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: refreshTotalCount: function()');
        this.getAccesscontroluserstoolbarrecords().setText(i18n.gettext('Total number of records: ' + this.getAccesscontrolUsersUsersStore().getTotalCount()) );
        this.getAccesscontrolgroupstoolbarrecords().setText(i18n.gettext('Total number of records: ' + this.getAccesscontrolGroupsGroupsStore().getTotalCount()) );
    },

    resetPreferences: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: resetPreferences: function()');
        var currentStore = this.getDesktopStatefulconfigurationStatefulConfigurationStore();
        var me = this;
        Ext.Msg.show({
            title: i18n.gettext('Delete Preferences ?'),
            msg: 'You are deleting your preferences permanently, this cannot be undone. Proceed ?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function(btn){
                if(btn === 'yes') {
                    me.removePreferencesFromStore(currentStore, 'accesscontrolgroupsgroupslist');
                    me.removePreferencesFromStore(currentStore, 'accesscontrolusersuserslist');
                    me.removePreferencesFromStore(currentStore, 'accesscontrolmain');
                    currentStore.load();
                    Ext.MessageBox.show({
                        title: i18n.gettext('Info'),
                        msg: i18n.gettext('Please reload for modifications to take effect'),
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                }
            }
        });
    },

    removePreferencesFromStore: function(currentStore, currentWidget) {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->AccessControl->AccessControl: resetPreferences: function()');
        var record = currentStore.findRecord('WIDGET', currentWidget, 0, false, false, true);
        if (record) {
            currentStore.remove(record);
        }
    }

});