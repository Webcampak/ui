//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.SourcesConfigurationChanges');
//</debug>
Ext.define("WPAKD.view.sourcesconfiguration.SourcesConfigurationChanges", {
    extend: 'Ext.toolbar.TextItem'
    , alias : 'widget.sourcesconfigurationsourcesconfigurationchanges'

    , text: i18n.gettext('No configuration changes')
    , disabled: true
});