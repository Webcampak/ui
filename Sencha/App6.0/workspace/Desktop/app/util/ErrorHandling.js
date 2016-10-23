/*global Ext, i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.util.ErrorHandling");
//</debug>
Ext.define("WPAKD.util.ErrorHandling", {
     override: "Ext.data.proxy.Server",
     alias : "state.errorhandling",

     processResponse: function(success, operation, request, response) {
        var me = this,
            exception, reader, resultSet;
        // Processing a response may involve updating or committing many records
        // each of which will inform the owning stores, which will ultimately
        // inform interested views which will most likely have to do a layout
        // assuming that the data shape has changed.
        // Bracketing the processing with this event gives owning stores the ability
        // to fire their own beginupdate/endupdate events which can be used by interested
        // views to suspend layouts.
        me.fireEvent("beginprocessresponse", me, response, operation);

        if (response.result.success === false) {
            var msgTitle = i18n.gettext("Server error");
            if (response.result.title !== "") {var msgTitle = response.result.title;}
            var msgText = i18n.gettext("There is an error with your request, please contact support");
            if (response.result.message !== "") {var msgText = response.result.message;}
            Ext.raise({
                title: msgTitle
                , msg: msgText
            });            
        }

        if (success === true) {
            reader = me.getReader();
            if (response.status === 204) {
                resultSet = reader.getNullResultSet();
            } else {
                resultSet = reader.read(me.extractResponseData(response), {
                    // If we"re doing an update, we want to construct the models ourselves.
                    recordCreator: operation.getRecordCreator()
                });
            }
            operation.process(resultSet, request, response);
            exception = !operation.wasSuccessful();
        } else {
            me.setException(operation, response);
            exception = true;
        }
        if (exception) {
            me.fireEvent("exception", me, response, operation);
        }
        me.afterRequest(request, success);
        // Tell owning store processing has finished.
        // It will fire its endupdate event which will cause interested views to 
        // resume layouts.
        me.fireEvent("endprocessresponse", me, response, operation);
    }
});

