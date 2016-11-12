/*global Ext, i18n, symfonyEnv*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.videos.selection.VideosList");
//</debug>
Ext.define("WPAKD.view.videos.selection.VideosList", {
    extend: "Ext.grid.Panel"
    , alias: "widget.videosselectionvideoslist"

    , autoScroll: true
    , height: 250

    /**
    * Convert number of bytes into human readable format
    *
    * @param integer bytes     Number of bytes to convert
    * @param integer precision Number of digits after the decimal separator
    * @return string
    */
    , filesize: function(value) {
        if (value > 0) {
            var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
            var posttxt = 0;
            if (value === 0) {
                return "n/a";
            }
            while( value >= 1024 ) {
                posttxt++;
                value = value / 1024;
            }
            return parseInt(value).toFixed(0) + " " + sizes[posttxt];
        } else {
            return value;
        }
    }

    /**
     * Custom function used for display a downloadable link
     * @param {Object} val
     */
    , download: function(value) {
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
            {header: i18n.gettext("Name"),      dataIndex: "NAME",      sortable: true, flex: 1, align: "left"              }
            , {header: i18n.gettext("Format"),  dataIndex: "FORMAT",    sortable: true, width: 80, align: "left"                           }
            , {header: i18n.gettext("Size"),    dataIndex: "SIZE",      sortable: true, width: 60, align: "left", renderer: this.filesize  }
            , {header: i18n.gettext("AVI"),     dataIndex: "AVI",       sortable: true, width: 50, renderer: this.download  }
            , {header: i18n.gettext("MP4"),     dataIndex: "MP4",       sortable: true, width: 50, renderer: this.download  }
        ];
        this.callParent(arguments);
    }

});

