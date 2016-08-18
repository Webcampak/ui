//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.config.capture.save.Main');
//</debug>
Ext.define('WPAKT.view.config.capture.save.Main', {
    extend: 'Ext.panel.Panel'
    , alias: 'widget.configcapturesavemain'

    , cls: 'dashboard-main-chart shadow-panel'

    , bodyPadding: 15

    , title: ''

    , layout: {type:'vbox', align: 'stretch', pack: 'start'}
    , items: [{
        xtype: 'container'
        , layout: {type:'hbox', align: 'stretch', pack: 'start'}
        , items: [{
            xtype: 'configcapturesavecancelbutton'
            , width: 100
        }, {
            xtype: 'container'
            , flex: 1
        }, {
            xtype: 'configcapturesavesavebutton'
            , width: 100
        }]   
    }, {
        xtype: 'configcapturesavestatus'
    }]    
});
