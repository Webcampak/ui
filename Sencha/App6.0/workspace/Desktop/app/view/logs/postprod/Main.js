//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.logs.postprod.Main');
//</debug>
Ext.define('WPAKD.view.logs.postprod.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.logspostprodmain'

    , title: i18n.gettext('Post-prod Vids.')
    , disabled: false
    , scrollable: 'vertical'
    , bodyPadding:'0 18 0 0'
    , defaults: {margin: 10}
    , items: [
        {xtype: 'logspostprodpostprodlogs'}
    ]
});

