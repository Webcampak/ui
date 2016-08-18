//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.core.skeleton.Main');
//</debug>
Ext.define('WPAKT.view.core.skeleton.Main', {
    extend: 'Ext.container.Container'
    , alias: 'widget.coreskeletonmain'

    , scrollable: 'y'
    , layout: {
        type: 'hbox'
        , align: 'stretchmax'

        // Tell the layout to animate the x/width of the child items.
        , animate: true
        , animatePolicy: {
            x: true
            , width: true
        }
    },

//    id: 'main-view-detail-wrap',
//    reference: 'mainContainerWrap',
    flex: 1,
    items: [
        {xtype: 'coreskeletontreemain'}
        , {xtype: 'coreskeletoncardmain'}
    ],


    beforeLayout : function() {
        // We setup some minHeights dynamically to ensure we stretch to fill the height
        // of the viewport minus the top toolbar

        var me = this,
            height = Ext.Element.getViewportHeight() - 64,  // offset by topmost toolbar height
            // We use itemId/getComponent instead of "reference" because the initial
            // layout occurs too early for the reference to be resolved
            navTree = me.query('coreskeletontreemain')[0];

        me.minHeight = height;

        navTree.setStyle({
            'min-height': height + 'px'
        });

        me.callParent(arguments);
    }  
    
});

