//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.authentication.changepassword.ButtonCancel');
//</debug>
Ext.define("WPAKT.view.core.authentication.changepassword.ButtonCancel", {
    extend: 'Ext.button.Button'
    , alias : 'widget.coreauthenticationchangepasswordbuttoncancel'

    , reference: 'changepasswordButton'
    , scale: 'large'
//    , ui: 'soft-green'
    , iconAlign: 'right'
    , iconCls: 'x-fa fa-angle-left'
    , text: i18n.gettext('Cancel')
    , formBind: false
    //listeners: {
    //    click: 'onLoginButton'
    //}

});