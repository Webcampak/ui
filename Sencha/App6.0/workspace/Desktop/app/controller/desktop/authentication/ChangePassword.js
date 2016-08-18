//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.controller.desktop.authentication.ChangePassword');
//</debug>
Ext.define('WPAKD.controller.desktop.authentication.ChangePassword', {
    extend: 'Ext.app.Controller',

    stores: [
      'desktop.authentication.UserSettings'
        , 'desktop.authentication.ChangePassword'
    ],

    models: [
        'desktop.authentication.UserSettings'
        , 'desktop.authentication.ChangePassword'
    ],

    views: [
        'desktop.authentication.changepassword.Main'
        , 'desktop.authentication.changepassword.OldPassword'
        , 'desktop.authentication.changepassword.NewPassword'
        , 'desktop.authentication.changepassword.NewPasswordVerif'
        , 'desktop.toolbar.top.DesktopConfig'

    ],

    refs: [
        {ref: 'desktopauthenticationchangepasswordmain',                selector: 'desktopauthenticationchangepasswordmain',     autoCreate: true,  xtype: 'desktopauthenticationchangepasswordmain'                             }
        , {ref: 'desktopauthenticationchangepasswordoldpassword',       selector: 'desktopauthenticationchangepasswordoldpassword'      }
        , {ref: 'desktopauthenticationchangepasswordnewpassword',       selector: 'desktopauthenticationchangepasswordnewpassword'      }
        , {ref: 'desktopauthenticationchangepasswordnewpasswordverif',  selector: 'desktopauthenticationchangepasswordnewpasswordverif' }
        , {ref: 'desktoptoolbartopdesktopconfig',                       selector: 'desktoptoolbartopdesktopconfig'                      }

    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: init()');
        this.control({
            'desktopauthenticationchangepasswordmain button[action=closeChangePassword]':  {click:      this.closeChangePassword    }
            , 'desktopauthenticationchangepasswordmain button[action=savePassword]':       {click:      this.savePassword           }
            , 'desktopauthenticationchangepasswordoldpassword':                            {specialkey:  this.specialKey    }
            , 'desktopauthenticationchangepasswordnewpassword':                            {specialkey:  this.specialKey    }
            , 'desktopauthenticationchangepasswordnewpasswordverif':                       {specialkey:  this.specialKey    }

            , '#openChangePassword':                                                       {click:  this.openChangePassword }


        });
        this.listen({
             controller: {
                  '*': {
                        'WPAKD.controller.desktop.authentication.ChangePassword.changeUserPassword': this.openChangePassword
                  }
             }
        });
    },

    onLaunch: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: onLaunch()');

    },

    specialKey: function(field, e) {
        if (e.getKey() == e.ENTER) {
            console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: specialKey()');
            this.savePassword();
        }
    },


    openChangePassword: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: openChangePassword()');
        this.getDesktopauthenticationchangepasswordmain().show();
        this.getDesktopauthenticationchangepasswordoldpassword().setValue('');
        this.getDesktopauthenticationchangepasswordnewpassword().setValue('');
        this.getDesktopauthenticationchangepasswordnewpasswordverif().setValue('');

    },

    closeChangePassword: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: closeChangePassword()');
        this.getDesktopauthenticationchangepasswordmain().hide();

    },

    savePassword: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: Controller savePassword: function()');
        if (this.getDesktopauthenticationchangepasswordnewpassword().getValue() == this.getDesktopauthenticationchangepasswordnewpasswordverif().getValue()) {
            /*
            var changePasswordValues = new Array()
            changePasswordValues['OLDPASSWORD'] = this.getDesktopauthenticationchangepasswordoldpassword().getValue();
            changePasswordValues['NEWPASSWORD'] = this.getDesktopauthenticationchangepasswordnewpassword().getValue();


            this.getDesktopAuthenticationChangePasswordStore().on('add',this.updatePasswordSuccess,this,{single:true});
            this.getDesktopAuthenticationChangePasswordStore().add(
                [{
                    OLDPASSWORD:                    changePasswordValues['OLDPASSWORD']
                    , NEWPASSWORD:                 changePasswordValues['NEWPASSWORD']
                }]
            );
            */
            var scope = this;
            if (document.location.protocol == 'http:') {
                var formOldPassword = this.getDesktopauthenticationchangepasswordoldpassword().getValue();
                var formNewPassword = this.getDesktopauthenticationchangepasswordnewpassword().getValue();
                if (formOldPassword.length < 4 || formNewPassword.length < 4) {
                    Ext.MessageBox.show({
                        title: i18n.gettext('Credentials missing'),
                        msg: i18n.gettext('Please enter proper passwords (4 chars min.)'),
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                } else if (this.fireEvent('WPAKD.controller.desktop.ServerAvailability.isOnline', true)) {
                    this.fireEvent('WPAKD.controller.desktop.loading.Mask.beginLoading', this.getDesktopauthenticationchangepasswordmain(), 'Please wait, updating password...');
                    console.log(new Date().toLocaleTimeString() + ': Controller->Desktop->Authentication: savePassword(): Checks ok, sending credentials to server');
                    var serverUrl = window.location.href;
                    var serverUrl = serverUrl.replace('mobile','');
                    var serverUrl = serverUrl + '/../changepassword';
                    this.fireEvent('WPAKD.controller.desktop.BackgroundActivities.startAjaxLoading');
                    Ext.Ajax.request({
                        url: serverUrl,
                        timeout: 10000,
                        params: {
                            OLDPASSWORD: formOldPassword
                            , NEWPASSWORD: formNewPassword
                        },
                        success: function(response){
                            scope.fireEvent('WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading');
                            scope.fireEvent('WPAKD.controller.desktop.loading.Mask.endLoading', scope.getDesktopauthenticationchangepasswordmain());
                            console.log(response);
                            var serverResponse = Ext.decode(response.responseText, true);
                            if (serverResponse !== null) {
                                if (serverResponse.status == "SUCCESS") {
                                    Ext.MessageBox.show({
                                        title: i18n.gettext('Password'),
                                        msg: i18n.gettext('Password modification successful'),
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.INFO
                                    });
                                    scope.getDesktopauthenticationchangepasswordmain().hide();
                                } else {
                                    Ext.MessageBox.show({
                                        title: i18n.gettext('Unable to change password'),
                                        msg:  i18n.gettext(serverResponse.message),
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                            }
                        },
                        failure: function(response, opts) {
                            scope.fireEvent('WPAKD.controller.desktop.BackgroundActivities.endAjaxLoading');
                            scope.fireEvent('WPAKD.controller.desktop.loading.Mask.endLoading', scope.getDesktopauthenticationchangepasswordmain());
                            console.log(response);
                            Ext.MessageBox.show({
                                title: i18n.gettext('Password modification Failed'),
                                msg: i18n.gettext('Unable to authenticate to remote server'),
                                buttons: Ext.MessageBox.OK,
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    });

                }

            } else {
                Ext.MessageBox.show({
                    title: i18n.gettext('Unsecured connections'),
                    msg: i18n.gettext('You connection is not encrypted, transmitting your credentials in clear-text'),
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.WARNING
                });
            }
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext('Error'),
                msg: i18n.gettext('Password do not match'),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
            });
        }
    },

    updatePasswordSuccess: function() {
        console.log(new Date().toLocaleTimeString() + ': Log: Controller->Desktop->Authentication->ChangePassword: Controller savePassword: function()');
        this.getDesktopauthenticationchangepasswordmain().hide();
    }

});