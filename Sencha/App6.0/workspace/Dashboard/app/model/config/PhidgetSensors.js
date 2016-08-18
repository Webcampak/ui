//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.model.config.PhidgetSensors');
//</debug>
/*
 * List all phidget sensors supported by the system, obtained from config-general.cfg
 */
Ext.define('WPAKT.model.config.PhidgetSensors', {
    extend: 'Ext.data.Model'

    , idProperty : 'ID'
    , fields: [
        { name: 'ID',     type: 'int'           }
        , { name: 'NAME',  type: 'string'       }
    ]
});
