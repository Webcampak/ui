/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKT.controller.core.Email");
//</debug>
Ext.define("WPAKT.controller.core.Email", {
    extend: "Ext.app.Controller"

    , stores: [

    ]

    , models: [

    ]

    , views: [
        "core.email.Main"
        , "core.email.EmailSubject"
        , "core.email.EmailAttachments"
        , "core.email.EmailBody"
        , "core.email.SendFrom"
        , "core.email.SendTo"
        , "core.email.SendCC"
        , "core.email.SendBCC"
        , "core.email.ButtonCancel"
        , "core.email.ButtonSend"
    ]

    , refs: [
        {ref: "coreemailmain",                  selector: "coreemailmain",                  autoCreate: true,        xtype: "coreemailmain"}
        , {ref: "coreemailemailsubject",        selector: "coreemailemailsubject"           }
        , {ref: "coreemailemailattachments",    selector: "coreemailemailattachments"       }
        , {ref: "coreemailemailbody",           selector: "coreemailemailbody"              }
        , {ref: "coreemailsendfrom",            selector: "coreemailsendfrom"               }
        , {ref: "coreemailsendto",              selector: "coreemailsendto"                 }
        , {ref: "coreemailsendcc",              selector: "coreemailsendcc"                 }
        , {ref: "coreemailbuttonsend",          selector: "coreemailbuttonsend"             }
        , {ref: "coreemailbuttoncancel",        selector: "coreemailbuttoncancel"           }
    ]

    , init: function() {
        this.consoleLog("init()");
        this.control({
            "#menuOpenSendEmail":               {click:  this.menuOpenSendEmail  }
            , "coreemailbuttonsend":            {click:  this.sendEmail          }
            , "coreemailbuttoncancel":          {click:  this.cancelEmail        }

        });

        this.listen({
             controller: {
                "*": {
                    "WPAKT.controller.core.Email.menuOpenSendEmail": this.menuOpenSendEmail
                    , "WPAKT.controller.core.Email.openSendEmail": this.openSendEmail
                    , "WPAKT.controller.core.Email.closeSendEmail": this.closeSendEmail
                }
             }
        });
    },

    onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Core->Email: ";
        //level: One of: "error", "warn", "info" or "log" (the default is "log").
        if (logLevel === undefined) {logLevel = "log";}
        Ext.log({ level: logLevel, dump: logDump }, logPrefix + logMessage);
    }

    , getSendEvent: function() {
        if (this.sendEvent === undefined) {this.setSendEvent(null);}
        return this.sendEvent;
    }

    , setSendEvent: function(sendEvent) {
        this.sendEvent = sendEvent;
        return this.sendEvent;
    }

    , getCancelEvent: function() {
        if (this.cancelEvent === undefined) {this.setCancelEvent(null);}
        return this.cancelEvent;
    }

    , setCancelEvent: function(cancelEvent) {
        this.cancelEvent = cancelEvent;
        return this.cancelEvent;
    }

    , getAttachmentSourceId: function() {
        if (this.attachmentSourceId === undefined) {this.setAttachmentSourceId(null);}
        return this.attachmentSourceId;
    }
    , setAttachmentSourceId: function(attachmentSourceId) {
        this.attachmentSourceId = attachmentSourceId;
        return this.attachmentSourceId;
    }

    , getAttachmentPath: function() {
        if (this.attachmentPath === undefined) {this.setAttachmentPath(null);}
        return this.attachmentPath;
    }
    , setAttachmentPath: function(attachmentPath) {
        this.attachmentPath = attachmentPath;
        return this.attachmentPath;
    }

    , getAttachmentName: function() {
        if (this.attachmentName === undefined) {this.setAttachmentName(null);}
        return this.attachmentName;
    }
    , setAttachmentName: function(attachmentName) {
        this.attachmentName = attachmentName;
        return this.attachmentName;
    }

    , menuOpenSendEmail: function(sendEvent, cancelEvent, emailSubject, emailBody, emailAttachmentName, emailAttachmentSourceId, emailAttachmentPath) {
        this.consoleLog("menuOpenSendEmail()");
        if (sendEvent !== undefined)                {this.setSendEvent(sendEvent);}
        if (cancelEvent !== undefined)              {this.setCancelEvent(cancelEvent);}
        if (emailAttachmentSourceId !== undefined)  {this.setAttachmentSourceId(emailAttachmentSourceId);}
        if (emailAttachmentPath !== undefined)      {this.setAttachmentPath(emailAttachmentPath);}
        if (emailAttachmentName !== undefined)      {this.setAttachmentName(emailAttachmentName);}
        this.getCoreemailmain().show();

        if (emailSubject !== undefined) {this.getCoreemailemailsubject().setValue(emailSubject);}
        else {this.getCoreemailemailsubject().setValue();}
        if (emailBody !== undefined) {this.getCoreemailemailbody().setValue(emailBody);}
        else {this.getCoreemailemailbody().setValue();}
        if (emailAttachmentName !== undefined) {
            this.getCoreemailemailattachments().setValue(emailAttachmentName);
            this.getCoreemailemailattachments().setVisible(true);
        } else {
            this.getCoreemailemailattachments().setVisible(false);
            this.getCoreemailemailattachments().setValue();
        }
        this.getCoreemailsendfrom().setVisible(false);
        this.getCoreemailsendto().setValue();
        this.getCoreemailsendcc().setValue();
        this.getCoreemailmain().hide();
        this.openSendEmail();
    },

    openSendEmail: function() {
        this.consoleLog("openSendEmail()");
        Ext.getBody().unmask();
        this.getCoreemailmain().show();
        if (this.getCoreemailsendfrom().getValue() === "") {
            this.getCoreemailsendfrom().setVisible(false);
        } else {
            this.getCoreemailsendfrom().setVisible(true);
        }
    },

    sendEmail: function() {
        this.consoleLog("sendEmail()");
        var emailsDstString = this.getCoreemailsendto().getValue() + this.getCoreemailsendcc().getValue();
        if (emailsDstString.length > 5 && this.getCoreemailemailsubject().getValue() !== "" && this.getCoreemailemailbody().getValue() !== "") {
            //if (this.getSendEvent() !== "") {
            //    this.fireEvent(this.getSendEvent());
            //} else {
            var newEmail = Ext.create("WPAKT.model.core.SendEmail",
                {
                    EMAIL_TO:               this.getCoreemailsendto().getValue()
                    , EMAIL_CC:             this.getCoreemailsendcc().getValue()
                    , EMAIL_FROM:           this.getCoreemailsendfrom().getValue()
                    , SUBJECT:              this.getCoreemailemailsubject().getValue()
                    , BODY:                 this.getCoreemailemailbody().getValue()
                    , ATTACHMENT_PATH:      this.getAttachmentPath()
                    , ATTACHMENT_NAME:      this.getAttachmentName()
                    , ATTACHMENT_SOURCEID:  this.getAttachmentSourceId()
                    , STATUS:               "QUEUED"
                }
            );
            this.fireEvent("WPAKT.controller.core.loading.Mask.beginLoading", this.getCoreemailmain(), "Please wait ... Sending Email to server");
            var scope = this;
            newEmail.save({
                success: function(record, operation) {
                    scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreemailmain());
                    Ext.MessageBox.show({
                        title: i18n.gettext("Info"),
                        msg: i18n.gettext(i18n.gettext("Email successfully added to queue, will be sent shortly")),
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                    scope.fireEvent(scope.getSendEvent());
                },
                failure: function(record, operation) {
                    scope.fireEvent("WPAKT.controller.core.loading.Mask.endLoading", scope.getCoreemailmain());
                }
            });
            //}
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext(i18n.gettext("Please ensure required fields have been properly populated. <br /> Required: TO, Subject, Body")),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    }

    , cancelEmail: function() {
        this.consoleLog("cancelEmail()");
        this.getCoreemailemailsubject().setValue();
        this.getCoreemailemailbody().setValue();
        this.getCoreemailsendto().setValue();
        this.getCoreemailsendcc().setValue();
        this.getCoreemailmain().hide();
        if (this.getCancelEvent() !== "") {this.fireEvent(this.getCancelEvent());}
    }
    
    , closeSendEmail: function() {
        this.consoleLog("closeSendEmail()");
        this.getCoreemailmain().hide();
    }
});