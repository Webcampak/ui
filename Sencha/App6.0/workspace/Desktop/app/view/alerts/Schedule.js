/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.view.alerts.Schedule");
//</debug>
Ext.define("WPAKD.view.alerts.Schedule", {
    extend: "Ext.grid.Panel"
    , alias: "widget.alertsschedule"

//    , hideHeaders:true

    , cls: "alertsschedule"

    , title: i18n.gettext("Calendar")

    /**
     * Custom function used for column renderer
     * @param {Object} val
     */
    , change: function(value, metaData) {
        if (value === "N") {
                metaData.style = "background:#FFFFFF;";
                return "<span style=\"color: #FFFFFF;\">" + value + "</span>";
        } else if (value.substring(0, 1) === "Y"){
                //If first character is a "X" it means that this picture has a comment attached
                metaData.style = "background:#3896af; color:#3896af;";
                value = value.substring(0, 1) + value.substring(1 + 1, value.length)	// We then remove "X"
                value = Ext.String.htmlEncode(value);
                return value;
        //} else if (value > 0) {
        } else {
                metaData.style = "background:#5dc1dc; color:#5dc1dc;";
                value = Ext.String.htmlEncode(value);
                //return "<span style="color: #5dc1dc;">" + value + "</span>";
                return value;
        }
    }

    , viewConfig: {
        //stripeRows: true
        loadMask : true        
    }

    , initComponent: function() {

        this.store = "shared.Empty";

//        this.height = 290;
        this.width = 1295;
        this.syncRowHeight = false;

        this.sortableColumns = false;
        this.enableColumnHide = false;
        this.enableColumnMove = false;
        this.enableColumnResize = false;
        this.columnLines = true;
        this.scrollable = true;
        
        //columns: [
        this.columns = [
            {width: 12, sortable: false, dataIndex: "ID", hidden: true},
            {width: 110, sortable: false, dataIndex: "DAYTXT", text: i18n.gettext("Weekday")},
            {width: 30, sortable: false, dataIndex: "HOUR",  text: i18n.gettext("Hour")},
            {width: 19, sortable: false, dataIndex: "00", text: i18n.gettext("00"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "01", text: i18n.gettext("01"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "02", text: i18n.gettext("02"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "03", text: i18n.gettext("03"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "04", text: i18n.gettext("04"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "05", text: i18n.gettext("05"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "06", text: i18n.gettext("06"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "07", text: i18n.gettext("07"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "08", text: i18n.gettext("08"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "09", text: i18n.gettext("09"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "10", text: i18n.gettext("10"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "11", text: i18n.gettext("11"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "12", text: i18n.gettext("12"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "13", text: i18n.gettext("13"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "14", text: i18n.gettext("14"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "15", text: i18n.gettext("15"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "16", text: i18n.gettext("16"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "17", text: i18n.gettext("17"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "18", text: i18n.gettext("18"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "19", text: i18n.gettext("19"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "20", text: i18n.gettext("20"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "21", text: i18n.gettext("21"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "22", text: i18n.gettext("22"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "23", text: i18n.gettext("23"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "24", text: i18n.gettext("24"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "25", text: i18n.gettext("25"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "26", text: i18n.gettext("26"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "27", text: i18n.gettext("27"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "28", text: i18n.gettext("28"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "29", text: i18n.gettext("29"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "30", text: i18n.gettext("30"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "31", text: i18n.gettext("31"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "32", text: i18n.gettext("32"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "33", text: i18n.gettext("33"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "34", text: i18n.gettext("34"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "35", text: i18n.gettext("35"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "36", text: i18n.gettext("36"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "37", text: i18n.gettext("37"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "38", text: i18n.gettext("38"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "39", text: i18n.gettext("39"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "40", text: i18n.gettext("40"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "41", text: i18n.gettext("41"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "42", text: i18n.gettext("42"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "43", text: i18n.gettext("43"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "44", text: i18n.gettext("44"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "45", text: i18n.gettext("45"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "46", text: i18n.gettext("46"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "47", text: i18n.gettext("47"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "48", text: i18n.gettext("48"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "49", text: i18n.gettext("49"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "50", text: i18n.gettext("50"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "51", text: i18n.gettext("51"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "52", text: i18n.gettext("52"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "53", text: i18n.gettext("53"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "54", text: i18n.gettext("54"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "55", text: i18n.gettext("55"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "56", text: i18n.gettext("56"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "57", text: i18n.gettext("57"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "58", text: i18n.gettext("58"), renderer: this.change},
            {width: 19, sortable: false, dataIndex: "59", text: i18n.gettext("59"), renderer: this.change}
        ];

    	this.callParent(arguments);
    }
});

