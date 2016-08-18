//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.logs.SourceName');
//</debug>
Ext.define('WPAKD.view.logs.SourceName', {
    extend: 'Ext.container.Container'
    , alias : 'widget.logssourcename'

    , html: i18n.gettext('<- Please select a source to begin configuration')

});
