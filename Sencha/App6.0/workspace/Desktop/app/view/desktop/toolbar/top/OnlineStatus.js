/*global Ext*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.desktop.toolbar.top.OnlineStatus");
//</debug>
Ext.define("WPAKD.view.desktop.toolbar.top.OnlineStatus", {
    extend: "Ext.button.Button",
     
    alias : "widget.desktoptoolbartoponlinestatus",
    
    disabled: false,
    
    hidden: true,
    
    iconCls: "icon-group_link_png",
    action: "openOnlineStatusWindow"
});