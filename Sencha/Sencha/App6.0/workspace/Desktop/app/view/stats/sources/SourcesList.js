//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.stats.sources.SourcesList');
//</debug>
Ext.define("WPAKD.view.stats.sources.SourcesList", {
    extend: 'Ext.form.ComboBox'
    , alias : 'widget.statssourcessourceslist'

    , store: 'shared.Sources'

    , valueField: 'SOU_ID'
    , displayField: 'NAME'
    , queryMode: 'local'
    , typeAhead: true
    , emptyText: i18n.gettext('Click here to select a source...')
});
