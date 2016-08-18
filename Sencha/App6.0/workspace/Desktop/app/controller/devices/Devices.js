//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.devices.Devices');
//</debug>
Ext.define('WPAKD.controller.devices.Devices', {
    extend: 'Ext.app.Controller',

    views: [
        'desktop.toolbar.top.Taskbar'
        , 'devices.Main'
        , 'devices.GphotoCapabilities'
        , 'devices.GphotoList'
        , 'devices.ButtonRefresh'
        , 'devices.Lsusb'
    ],

    stores: [
        'devices.Devices'
    ],

    models: [
        'devices.Devices'
    ],

    refs: [
        {ref: 'desktopmain',                selector: 'desktopmain'                 }
        , {ref: 'desktoptoolbartoptaskbar', selector: 'desktoptoolbartoptaskbar'    }

        , {ref: 'devicesmain',              selector: 'devicesmain',                autoCreate: true,   xtype: 'devicesmain'}
        , {ref: 'devicesgphotocapabilities',selector: 'devicesgphotocapabilities'   }
        , {ref: 'devicesgphotolist',        selector: 'devicesgphotolist'           }
        , {ref: 'devicesbuttonrefresh',     selector: 'devicesbuttonrefresh'        }
        , {ref: 'deviceslsusb',             selector: 'deviceslsusb'                }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Devices: Controller init: function()');
        this.control({
            '*': {
                'WPAKD.controller.devices.Devices.loadDevices': this.loadDevices
            }
            , 'desktoptoolbartoptaskbar button[action=openWEB_DSP_DEVICES]':{click:  this.openDevices                              }
            , 'devicesmain':                                {hide:   this.closeDevices, minimize: this.openDevices }
            , '#menuOpenWEB_DSP_DEVICES':                   {click:  this.menuOpenDevices                          }

           // , 'devicesbuttonrefresh':                       {click:   this.loadDevices}
            //,'devicesgphotolist tool[action=refreshDevices]': {click: this.loadDevices}

        });
        this.listen({
            controller: {
                 '*': {
                      'WPAKD.controller.devices.Devices.openDevices':            this.openDevices
                      , 'WPAKD.controller.devices.Devices.menuOpenDevices':      this.menuOpenDevices
                      , 'WPAKD.controller.devices.Devices.closeDevicesDetails':  this.closeDevicesDetails
                      , 'WPAKD.controller.devices.Devices.devicesLoaded':        this.devicesLoaded
                      , 'WPAKD.controller.devices.Devices.loadDevices':          this.loadDevices
                  }
             }
        });
    }

    , onLaunch: function() {
        this.consoleLog('onLaunch()');
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Devices: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , loadDevices: function() {
        this.consoleLog('reloadDevices()');

        var requiredStores = [];
        requiredStores.push({store: this.getDevicesDevicesStore(),  action: 'REFRESH'});
        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_DSP_DEVICES'
            , 'WPAKD.controller.devices.Devices.devicesLoaded'
            , requiredStores);

        this.getDevicesmain().setLoading(i18n.gettext('Loading Devices details'));
    }


    , devicesLoaded: function() {
        this.consoleLog('loadSourceDevices()');
        this.getDevicesmain().setLoading(false);
        var currentDevices = this.getDevicesDevicesStore().last();
        if (currentDevices !== null) {
            this.getDevicesgphotolist().setRawValue(currentDevices.get('GPHOTOLIST'));
            this.getDevicesgphotocapabilities().setRawValue(currentDevices.get('GPHOTOCAPABILITIES'));
            this.getDeviceslsusb().setRawValue(currentDevices.get('LSUSB'));
        }
    }

    , menuOpenDevices: function() {
        this.consoleLog('menuOpenDevices()');
        Ext.getBody().mask('Please wait, fetching initial content from database ...');

        var requiredStores = [];
        requiredStores.push({store: this.getDevicesDevicesStore(),  action: 'REFRESH'});

        this.fireEvent('WPAKD.controller.desktop.loading.Stores.beginLoading'
            , 'WEB_DSP_DEVICES'
            , 'WPAKD.controller.devices.Devices.openDevices'
            , requiredStores);

        var applicationName = 'WEB_DSP_DEVICES';
        this.fireEvent('WPAKD.controller.desktop.ApplicationsPreferences.incrementUsageStats', applicationName);
    },

    openDevices: function(key) {
        this.consoleLog('openDevices()');
        Ext.getBody().unmask();

        if(this.getDevicesmain().isVisible() && Ext.WindowManager.getActive().getId() != this.getDevicesmain().getId()) {
            this.consoleLog('openDevices(): getDevicesmain().toFront()');
            this.getDevicesmain().toFront();
        } else if(!this.getDevicesmain().isVisible()) {
            this.consoleLog('openDevices(): getDevicesmain().setVisible(true)');
            this.getDesktopmain().add(this.getDevicesmain());
            this.getDevicesmain().setVisible(true);
            this.getDesktoptoolbartoptaskbar().getComponent('tbdevices').setVisible(true);
            this.devicesLoaded();
            //this.setVisibleElements();
        } else {
            this.consoleLog('openDevices(): getDevicesmain().setVisible(false)');
            this.getDevicesmain().setVisible(false);
            this.getDesktoptoolbartoptaskbar().getComponent('tbdevices').setVisible(true);
        }
    },

    closeDevices: function(key) {
        this.consoleLog('closeDevices()');
        this.getDesktoptoolbartoptaskbar().getComponent('tbdevices').setVisible(false);
    }

});
