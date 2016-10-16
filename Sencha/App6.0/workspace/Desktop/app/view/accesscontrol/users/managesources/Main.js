//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.view.accesscontrol.users.managesources.Main');
//</debug>
Ext.define("WPAKD.view.accesscontrol.users.managesources.Main", {
    extend: 'Ext.window.Window',
    alias: 'widget.accesscontrolusersmanagesourcesmain',

    title: i18n.gettext('Manage Sources'),

    width: 800,
    height: 400,

    modal: true,

    layout: {
        type:'hbox',
        align: 'stretch',
        pack: 'start'
    },

    items: [{
        flex: 1,
        xtype: 'accesscontrolusersmanagesourcesuseravailablesources'
    }, {
        flex: 1,
        xtype: 'accesscontrolusersmanagesourcesusercurrentsources'
    }]

});