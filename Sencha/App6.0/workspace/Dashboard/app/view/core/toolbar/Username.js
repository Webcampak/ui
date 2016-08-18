//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.toolbar.Username');
//</debug>
Ext.define('WPAKT.view.core.toolbar.Username', {
    extend: 'Ext.button.Button'
    , alias: 'widget.coretoolbarusername'

    , text: ''
    , scale: 'large'    
    , cls: 'top-user-name'    
    , iconCls:'x-fa fa-user'
        
});

