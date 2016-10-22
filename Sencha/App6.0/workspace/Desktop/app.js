/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
/*global Ext i18n*/
Ext.require("Ext.chart.axis.Numeric");
Ext.require("Ext.chart.axis.Time");
Ext.require("Ext.chart.series.Area");
Ext.require("Ext.chart.series.Line")
Ext.require("Ext.chart.interactions.ItemHighlight")

Ext.require("WPAKD.util.ErrorHandling");
Ext.require("direct.remotingprovider");
Ext.require("plugin.viewport");

Ext.direct.Manager.addProvider(Ext_app_REMOTING_API);

// Disable Aria Buttons
// http://docs.sencha.com/extjs/6.0/upgrades_migrations/extjs_upgrade_guide.html#Button
Ext.enableAriaButtons = false

Ext.application({
    name: "WPAKD",

    extend: "WPAKD.Application",

    requires: [
        "WPAKD.view.Viewport"
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: "WPAKD.view.Viewport"

    //-------------------------------------------------------------------------
    // Most customizations should be made to WPAKD.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
