//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.advanced.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.advanced.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.sourcesconfigurationadvancedmain'

    , title: i18n.gettext('Advanced')
    , disabled: true
    , scroll: true
    , autoScroll: true
    , defaults: {margin: 10}
    , items: [
        {xtype: 'sourcesconfigurationadvancedftpmain'       }
        , {xtype: 'sourcesconfigurationadvancedemailsmain'  }
        , {xtype: 'sourcesconfigurationadvancedphidgetmain' }
    ]
});

