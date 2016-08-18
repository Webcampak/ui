//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKD.store.desktop.emails.SentEmail');
//</debug>
Ext.define('WPAKD.store.desktop.emails.SentEmail', {
    extend: 'Ext.data.Store',
    model: 'WPAKD.model.desktop.emails.SentEmail',

    proxy:{
        type: 'direct',
        extraParams: {
            ATTACHMENTS:              'null'
        },
        reader: {
            type: 'json'
            , rootProperty: 'results'
            , totalProperty: 'total'
        },
        api:{
            read: 'SystemEmails.getEmailsQueue'
        }
    }
});

