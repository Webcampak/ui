//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.skeleton.tree.Main');
//</debug>
Ext.define('WPAKT.view.core.skeleton.tree.Main', {
    extend: 'Ext.list.Tree'
    , alias: 'widget.coreskeletontreemain'

    , reference: 'navigationTreeList'
    , itemId: 'navigationTreeList'
    , ui: 'navigation'
    , store: {
        root: {}        
        , fields: [
            {
                name: 'text'
            }
        ]
    }
    , width: 250
    , expanderFirst: false
    , expanderOnly: false
});

