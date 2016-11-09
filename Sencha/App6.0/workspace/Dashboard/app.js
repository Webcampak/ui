/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
/*global Ext i18n*/
Ext.direct.Manager.addProvider(Ext_app_REMOTING_API);

Ext.application({
    name: "WPAKT",

    extend: "WPAKT.Application",

    requires: [
        "WPAKT.view.core.Main"
        , "WPAKT.view.dashboard.sourcesstatus.SourceStatus"
        , "WPAKT.model.core.SendEmail"
        , "Ext.plugin.Viewport"
        , "Ext.direct.Manager"
        , "Ext.direct.RemotingProvider"
        , "Ext.data.Model"
        , "Ext.data.Store"
        , "Ext.data.TreeStore"
        , "Ext.grid.Panel"
        , "Ext.app.ViewModel"
        , "Ext.tab.Panel"
        , "Ext.app.ViewController"
        , "Ext.form.field.Text"
        , "Ext.button.Button"
        , "Ext.form.field.HtmlEditor"
        , "Ext.window.Window"
        , "Ext.form.field.Text"
        , "Ext.Container"
        , "Ext.container.Container"
        , "Ext.list.Tree"
        , "Ext.Component"
        , "Ext.toolbar.Toolbar"
        , "Ext.form.Label"
        , "Ext.form.field.Checkbox"
        , "Ext.form.Panel"
        , "Ext.form.field.Number"
        , "Ext.form.field.ComboBox"
        , "Ext.grid.Panel"
        , "Ext.panel.Panel"
        , "Ext.Img"
        , "Ext.chart.CartesianChart"
        , "Ext.chart.legend.Legend"
        , "Ext.chart.axis.Category"
        , "Ext.chart.axis.Numeric"
        , "Ext.chart.series.Line"
        , "Ext.chart.interactions.PanZoom"
        , "Ext.chart.interactions.ItemHighlight"
        , "Ext.ux.layout.ResponsiveColumn"
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: "WPAKT.view.core.Main"
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to WPAKT.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
