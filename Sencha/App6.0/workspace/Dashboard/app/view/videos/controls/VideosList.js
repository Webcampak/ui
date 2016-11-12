/*global Ext, i18n, symfonyEnv*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.view.videos.controls.VideosList");
//</debug>
Ext.define("WPAKT.view.videos.controls.VideosList", {
    extend: "Ext.grid.Panel"
    , alias: "widget.videoscontrolsvideoslist"

    , autoScroll: true
    , height: 250

    , filesize: function(value, metaData) {
        if (value > 0) {
            return Ext.util.Format.fileSize(value);
        } else {
            return value;
        }
    }

    /**
     * Custom function used for display a downloadable link
     * @param {Object} val
     */
    , download: function(value, metaData) {
        if (value !== "") {
            var currentURL = "/" + symfonyEnv + "/dl/source" + Ext.getStore("videos.VideosList").getProxy().extraParams.SOURCEID + "/videos/";
            return "<a href=\"" + currentURL + value + "\" target=\"_blank\"><img src=\"../resources/images/download16x16.png\" /></a>";
        }
    }
    , initComponent: function() {
        this.store = "videos.VideosList";
        //columns: [
        this.columns = [
        //{width: 5, sortable: false, dataIndex: "01", renderer: this.change},
            {header: i18n.gettext("Name"),      dataIndex: "NAME",      sortable: true, flex: 1                             }
            , {header: i18n.gettext("Format"),    dataIndex: "FORMAT",    sortable: true, width: 80                           }
            , {header: i18n.gettext("Size"),      dataIndex: "SIZE",      sortable: true, width: 80, renderer: this.filesize  }
            , {header: i18n.gettext("AVI"),       dataIndex: "AVI",       sortable: true, width: 50, renderer: this.download  }
            , {header: i18n.gettext("MP4"),       dataIndex: "MP4",       sortable: true, width: 50, renderer: this.download  }
        ];
        this.callParent(arguments);
    }

});

