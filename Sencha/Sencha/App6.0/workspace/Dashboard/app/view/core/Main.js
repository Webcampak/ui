//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.Main');
//</debug>
Ext.define('WPAKT.view.core.Main', {
    extend: 'Ext.container.Container'
    , alias: 'widget.coremain'

    , cls: 'sencha-dash-viewport'

    , layout: {type: 'vbox', align: 'stretch'}

    , items: [
        {xtype: 'coretoolbarmain'}
        , {xtype: 'coreskeletonmain'}
    ]    
    
});
