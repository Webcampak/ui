//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.logs.configuration.Main');
//</debug>
Ext.define('WPAKD.view.logs.configuration.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.logsconfigurationmain'

    , title: i18n.gettext('Configuration Changes')
    , disabled: false
    , scrollable: 'vertical'
    , bodyPadding:'0 18 0 0'
    , defaults: {
        margin: 10
    }
    , items: [
        {xtype: 'logsconfigurationconfigurationlogs'}
    ]
});

