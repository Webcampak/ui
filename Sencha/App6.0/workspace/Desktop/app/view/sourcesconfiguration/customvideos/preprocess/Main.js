//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.sourcesconfiguration.customvideos.preprocess.Main');
//</debug>
Ext.define('WPAKD.view.sourcesconfiguration.customvideos.preprocess.Main', {
    extend: 'Ext.form.FieldSet'
    , alias: 'widget.sourcesconfigurationcustomvideospreprocessmain'

    , title:  i18n.gettext('Pre-processing manipulations (advanced)')
    , collapsible: true
    , collapsed: true

    , padding: 5
    , layout: 'fit'
    , defaults: {labelWidth: 200}
    , items: [
        {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreimagemagicktxt'}
        , {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtext'}
        , {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgdateformat'}
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextsize', flex: 1}
                , {xtype: 'container', width: 10}
                , {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextgravity', flex: 1}
            ]
        }
        , {xtype : 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextfont'}
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextoverposition', flex: 1}
                , {xtype: 'container', width: 10}
                , {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextovercolor', flex: 1}
            ]
        }
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbaseposition', flex: 1}
                , {xtype: 'container', width: 10}
                , {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreimgtextbasecolor', flex: 1}
            ]
        }
        , {
            xtype: 'fieldcontainer'
            , width: 500
            , labelWidth: 400
            , fieldLabel: i18n.gettext('Resize picture before video creation')
            , labelSeparator: ''
        }
        , {
            xtype: 'container'
            , layout: {type:'hbox', align: 'stretch', pack: 'start'}
            , defaults: {labelWidth: 150}
            , items   : [
                {xtype : 'sourcesconfigurationcustomvideospreprocesscfgvideopreresize'}
                , {xtype: 'container', width: 10}
                , {xtype: 'sourcesconfigurationcustomvideospreprocesscfgvideopreresizeres', labelWidth: 100}
                , {xtype: 'container', width: 10}
                , {
                    xtype: 'fieldcontainer'
                    , width: 200
                    , labelWidth: 200
                    , fieldLabel: i18n.gettext('For example: 1920x1080')
                    , labelSeparator: ''
                }
            ]
        }
    ]
});

