//<debug>
console.log(new Date().toLocaleTimeString() + ': Log: Load: WPAKT.view.pictures.controls.details.FileSize');
//</debug>
Ext.define('WPAKT.view.pictures.controls.details.FileSize', {
    extend: 'Ext.Component'
    , alias: 'widget.picturescontrolsdetailsfilesize'

    , padding: '5 10 5 10'

    , data: {
        jpg: ''
        , raw: ''
        , definition: ''
    }
    , tpl: '<div class="left-aligned-div"> - JPG</div><div class="right-aligned-div">{jpg}</div>' +
           '<br /><div class="left-aligned-div"> - RAW</div><div class="right-aligned-div">{raw}</div>' +  
           '<br /><div class="left-aligned-div"> - Definition</div><div class="right-aligned-div">{definition}</div>' 
});
