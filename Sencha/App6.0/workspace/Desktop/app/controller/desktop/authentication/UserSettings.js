//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.desktop.authentication.UserSettings');
//</debug>
Ext.define('WPAKD.controller.desktop.authentication.UserSettings', {
    extend: 'Ext.app.Controller',
    stores: [
        'desktop.authentication.UserSettings'
    ],

    models: [
        'desktop.authentication.UserSettings'
    ],

    views: [
        'desktop.toolbar.bottom.LogoffButton'
        , 'desktop.toolbar.bottom.Build'
        , 'desktop.Main'


    ],

    refs: [
        {ref: 'desktoptoolbarbottomlogoffbutton',   selector: 'desktoptoolbarbottomlogoffbutton'    }
        , {ref: 'desktoptoolbarbottombuild',        selector: 'desktoptoolbarbottombuild'           }
        , {ref: 'desktopmain',                      selector: 'desktopmain'                         }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->UserSettings: Controller init: function()');
        this.control({

        });

        this.listen({
             controller: {
                  '*': {
                      'WPAKD.controller.desktop.authentication.UserSettings.loadUserSettingsStore': this.loadUserSettingsStore
                  }
             }
        });
    },
    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->UserSettings: Controller onLaunch: function()');
        //this.loadUserSettingsStore();
    },

    loadUserSettingsStore: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->UserSettings: Controller loadUserSettingsStore: function()');
        Ext.getBody().mask('Setting up permissions and preferences ...');
        this.getDesktopAuthenticationUserSettingsStore().on('load', this.applyUserSettings, this, {single: true});
        this.getDesktopAuthenticationUserSettingsStore().load();
    },

    applyUserSettings: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->UserSettings: Controller applyUserSettings: function()');
        var record = this.getDesktopAuthenticationUserSettingsStore().findRecord('CODE', 'CHANGEPASSWORD', 0, false, false, true);
        if (record && record.get('VALUE') == 'Y') {
            this.fireEvent('WPAKD.controller.desktop.authentication.ChangePassword.changeUserPassword');
        }

        var record = this.getDesktopAuthenticationUserSettingsStore().findRecord('CODE', 'CURRENTBUILD', 0, false, false, true);
        if (record) {
            this.getDesktoptoolbarbottombuild().setText(i18n.gettext('Build: ') + record.get('VALUE'));
        }

        var record = this.getDesktopAuthenticationUserSettingsStore().findRecord('CODE', 'CURRENTUSERNAME', 0, false, false, true);
        if (record && this.getDesktoptoolbarbottomlogoffbutton()) {
            this.getDesktoptoolbarbottomlogoffbutton().setText('<b>' + record.get('VALUE') + '</b>');
        }

        this.fireEvent('WPAKD.controller.desktop.tiles.AvailableApplications.displayApplications');
        Ext.getBody().unmask();

        var styleBgColor = this.getDesktopAuthenticationUserSettingsStore().findRecord('CODE', 'STYLE_BG_COLOR', 0, false, false, true);
        if (styleBgColor) {
            styleBgColor = styleBgColor.get('VALUE');
        }
        var styleBgLogo = this.getDesktopAuthenticationUserSettingsStore().findRecord('CODE', 'STYLE_BG_LOGO', 0, false, false, true);
        if (styleBgLogo) {
            styleBgLogo = styleBgLogo.get('VALUE');
        }
        if (styleBgColor === null && styleBgLogo !== null) {
            this.getDesktopmain().setStyle({
                background: '#74ce98 url(/watermark/' + styleBgLogo + ') no-repeat center center fixed'
            });
        } else if (styleBgColor !== null && styleBgLogo === null) {
            this.getDesktopmain().setStyle({
                background: styleBgColor + ' url(/resources/images/webcampak-logo.png) no-repeat center center fixed'
            });
        } else if (styleBgColor !== null && styleBgLogo !== null) {
            this.getDesktopmain().setStyle({
                background: styleBgColor + ' url(/watermark/' + styleBgLogo + ') no-repeat center center fixed'
            });
        }
    }
});