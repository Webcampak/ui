//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.controller.core.Skeleton');
//</debug>
Ext.define('WPAKT.controller.core.Skeleton', {
    extend: 'Ext.app.Controller'

    , stores: [
        'core.NavigationTree'
    ]

    , models: [

    ]


    , views: [
        'core.Main'
        , 'core.toolbar.Main'
        , 'core.toolbar.Logo'
        , 'core.toolbar.Username'
        , 'core.toolbar.Navicon'
        , 'core.skeleton.Main'
        , 'core.skeleton.tree.Main'
        , 'core.skeleton.card.Main'
        
        , 'dashboard.Main'

    ]

    , refs: [
        {ref: 'coremain',                  selector: 'coremain',              autoCreate: true,   xtype: 'coremain' }
        , {ref: 'coretoolbarmain',         selector: 'coretoolbarmain'        }
        , {ref: 'coretoolbarlogo',         selector: 'coretoolbarlogo'        }
        , {ref: 'coretoolbarusername',     selector: 'coretoolbarusername'    }
        , {ref: 'coretoolbarnavicon',      selector: 'coretoolbarnavicon'     }
        , {ref: 'coreskeletonmain',        selector: 'coreskeletonmain'       }
        , {ref: 'coreskeletontreemain',    selector: 'coreskeletontreemain'   }
        , {ref: 'coreskeletoncardmain',    selector: 'coreskeletoncardmain'   }
        
        , {ref: 'dashboardmain',           selector: 'dashboardmain',         autoCreate: true,   xtype: 'dashboardmain'}

    ]

    , init: function() {
        this.consoleLog('init()');
        this.control({
            'coretoolbarnavicon':  {click:      this.onToggleNavigationSize}
            , 'coreskeletontreemain':  {selectionchange:      this.onNavigationTreeSelectionChange}
        });      
        this.listen({
             controller: {
                  '*': {
                    'WPAKT.controller.core.Skeleton.setCurrentView': this.setCurrentView
                  }
             }
        });          
    }

    , onLaunch: function() {

    }
    
    , consoleLog: function(logMessage, logLevel, logDump) {
        logPrefix = new Date().toLocaleTimeString() + ': Log: Controller->Dashboard->Skeleton: ';
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = 'log';}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , onNavigationTreeSelectionChange: function (tree, node) {
        if (node && node.get('view')) {
            this.redirectTo(node.get("routeId"));
        }
    }

    , setCurrentView: function(hashTag) {
        this.consoleLog('setCurrentView()');
        console.log(this.getDashboardmain());
        var scope = this;
        this.getCoreskeletoncardmain().removeAll();
        this.getCoreskeletoncardmain().add(scope.getDashboardmain());  
        scope.getDashboardmain().show();
        /*
        var hashTag = 'dashboard';
        var currentNode = this.getDashboardNavigationTreeStore().findNode('routeId', hashTag);
        var view = currentNode ? node.get('view') : null,
                
        hashTag = (hashTag || '').toLowerCase();

        var me = this,
            refs = me.getReferences(),
            viewModel = me.getViewModel(),
            vmData = viewModel.getData(),
            store = navigationList.getStore(),
            node = store.findNode('routeId', hashTag),
            view = node ? node.get('view') : null,
            lastView = vmData.currentView,
            existingItem = this.this.getCoreskeletoncardmain().child('component[routeId=' + hashTag + ']'),
            newView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = this.this.getCoreskeletoncardmain().getLayout().getActiveItem();

        if (!existingItem) {
            newView = Ext.create('Admin.view.' + (view || 'pages.Error404Window'), {
                    hideMode: 'offsets',
                    routeId: hashTag
                });
        }

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    this.this.getCoreskeletoncardmain().getLayout().setActiveItem(existingItem);
                }
                newView = existingItem;
            }
            else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                this.this.getCoreskeletoncardmain().getLayout().setActiveItem(this.this.getCoreskeletoncardmain().add(newView));
                Ext.resumeLayouts(true);
            }
        }

        this.getCoreskeletontreemain().setSelection(currentNode);

        if (newView.isFocusable(true)) {
            newView.focus();
        }

        vmData.currentView = newView;
        */
    }

    , onToggleNavigationSize: function () {
        var scope = this;
        var collapsing = !this.getCoreskeletontreemain().getMicro();
        var new_width = collapsing ? 64 : 250;

        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();
            this.getCoretoolbarlogo().setWidth(new_width);
            this.getCoreskeletontreemain().setWidth(new_width);
            this.getCoreskeletontreemain().setMicro(collapsing);
            Ext.resumeLayouts(); // do not flush the layout here...
            // No animation for IE9 or lower...
            this.getCoreskeletonmain().layout.animatePolicy = this.getCoreskeletonmain().layout.animate = null;
            this.getCoreskeletonmain().updateLayout();  // ... since this will flush them
        }
        else {
            if (!collapsing) {
                // If we are leaving micro mode (expanding), we do that first so that the
                // text of the items in the navlist will be revealed by the animation.
                this.getCoreskeletontreemain().setMicro(false);
            }
            // Start this layout first since it does not require a layout
            this.getCoretoolbarlogo().animate({dynamic: true, to: {width: new_width}});

            // Directly adjust the width config and then run the main wrap skeleton layout
            // as the root layout (it and its chidren). This will cause the adjusted size to
            // be flushed to the element and animate to that new size.
            this.getCoreskeletontreemain().width = new_width;
            this.getCoreskeletonmain().updateLayout({isRoot: true});

            // We need to switch to micro mode on the navlist *after* the animation (this
            // allows the "sweep" to leave the item text in place until it is no longer
            // visible.
            if (collapsing) {
                this.getCoreskeletontreemain().on({
                    afterlayoutanimation: function () {
                        scope.getCoreskeletontreemain().setMicro(true);
                    },
                    single: true
                });
            }
        }
    }



});