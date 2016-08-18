//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.changepassword.Main');
//</debug>
Ext.define('WPAKT.view.core.authentication.changepassword.Main', {
    extend: 'Ext.form.Panel'
    , alias: 'widget.coreauthenticationchangepasswordmain'

    , hidden: true
    , autoComplete: true
    , bodyPadding: '20 20'
    , cls: 'auth-dialog-login'
    , header: false
    , width: 415
    , layout: {type: 'vbox', align: 'stretch'}

    , defaults : {margin : '5 0'}

    , items: [
        {xtype: 'coreauthenticationchangepasswordlabel'}
        , {xtype: 'coreauthenticationchangepasswordcurrentpassword'}
        , {xtype: 'coreauthenticationchangepasswordnewpassword'}
        , {xtype: 'coreauthenticationchangepasswordnewpasswordconfirmation'}
        , {xtype: 'coreauthenticationchangepasswordbuttonchangepassword'}
    ]

    /*
     * Seek out the first enabled, focusable, empty textfield when the form is focused
     */
    , defaultFocus: 'textfield:focusable:not([hidden]):not([disabled]):not([value])'

    /**
     * @cfg {Boolean} [autoComplete=false]
     * Enables browser (or Password Managers) support for autoCompletion of User Id and
     * password.
     */
    
    , autoComplete : false

    , initComponent: function () {
        var me = this, listen;

        if (me.autoComplete) {
            // Use standard FORM tag for detection by browser or password tools
            me.autoEl = Ext.applyIf(
                me.autoEl || {},
                {
                    tag: 'form',
                    name: 'authdialog',
                    method: 'post'
                });
        }

        me.addCls('auth-dialog');
        me.callParent();

        if (me.autoComplete) {
            listen = {
                afterrender : 'doAutoComplete',
                scope : me,
                single : true
            };

            Ext.each(me.query('textfield'), function (field) {
                field.on(listen);
            });
        }
    }

    , doAutoComplete : function(target) {
        if (target.inputEl && target.autoComplete !== false) {
            target.inputEl.set({ autocomplete: 'on' });
        }
    }    

});
