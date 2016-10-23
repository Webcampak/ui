/*global Ext i18n*/
//<debug>
console.log(new Date().toLocaleTimeString() + ": Log: Load: WPAKD.controller.desktop.sendemail.SendEmail");
//</debug>
Ext.define("WPAKD.controller.desktop.sendemail.SendEmail", {
    extend: "Ext.app.Controller",

    stores: [

    ],

    models: [

    ],

    views: [
        "desktop.sendemail.Main"
        , "desktop.sendemail.EmailSubject"
        , "desktop.sendemail.EmailAttachments"
        , "desktop.sendemail.EmailBody"
        , "desktop.sendemail.SendFrom"
        , "desktop.sendemail.SendTo"
        , "desktop.sendemail.SendCC"
        , "desktop.sendemail.SendBCC"
        , "desktop.sendemail.ButtonCancel"
        , "desktop.sendemail.ButtonSend"
    ],

    refs: [
        {ref: "desktopsendemailmain",                  selector: "desktopsendemailmain",                  autoCreate: true,        xtype: "desktopsendemailmain"}
        , {ref: "desktopsendemailemailsubject",        selector: "desktopsendemailemailsubject"           }
        , {ref: "desktopsendemailemailattachments",    selector: "desktopsendemailemailattachments"       }
        , {ref: "desktopsendemailemailbody",           selector: "desktopsendemailemailbody"              }
        , {ref: "desktopsendemailsendfrom",            selector: "desktopsendemailsendfrom"               }
        , {ref: "desktopsendemailsendto",              selector: "desktopsendemailsendto"                 }
        , {ref: "desktopsendemailsendcc",              selector: "desktopsendemailsendcc"                 }
        , {ref: "desktopsendemailbuttonsend",          selector: "desktopsendemailbuttonsend"             }
        , {ref: "desktopsendemailbuttoncancel",        selector: "desktopsendemailbuttoncancel"           }
    ],

    init: function() {
        console.log(new Date().toLocaleTimeString() + ": Log: Controller->Desktop->SendEmail->SendEmail: Controller init: function()");
        this.control({
            "#menuOpenSendEmail":                      {click:  this.menuOpenSendEmail  }
            , "desktopsendemailbuttonsend":            {click:  this.sendEmail          }
            , "desktopsendemailbuttoncancel":          {click:  this.cancelEmail        }

        });

        this.listen({
             controller: {
                "*": {
                    "WPAKD.controller.desktop.sendemail.SendEmail.menuOpenSendEmail": this.menuOpenSendEmail
                    , "WPAKD.controller.desktop.sendemail.SendEmail.openSendEmail": this.openSendEmail
                }
             }
        });
    },

    onLaunch: function() {
        this.consoleLog("onLaunch()");
    }

    , consoleLog: function(logMessage, logLevel, logDump) {
        var logPrefix = new Date().toLocaleTimeString() + ": Log: Controller->Desktop->SendEmail: ";
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
        this.getDesktopsendemailmain().show();

        if (emailSubject !== undefined) {this.getDesktopsendemailemailsubject().setValue(emailSubject);}
        else {this.getDesktopsendemailemailsubject().setValue();}
        if (emailBody !== undefined) {this.getDesktopsendemailemailbody().setValue(emailBody);}
        else {this.getDesktopsendemailemailbody().setValue();}
        if (emailAttachmentName !== undefined) {
            this.getDesktopsendemailemailattachments().setValue(emailAttachmentName);
            this.getDesktopsendemailemailattachments().setVisible(true);
        } else {
            this.getDesktopsendemailemailattachments().setVisible(false);
            this.getDesktopsendemailemailattachments().setValue();
        }
        this.getDesktopsendemailsendfrom().setVisible(false);
        this.getDesktopsendemailsendto().setValue();
        this.getDesktopsendemailsendcc().setValue();
        this.getDesktopsendemailmain().hide();
        this.openSendEmail();
    },

    openSendEmail: function() {
        this.consoleLog("openSendEmail()");
        Ext.getBody().unmask();
        this.getDesktopsendemailmain().show();
        if (this.getDesktopsendemailsendfrom().getValue() === "") {
            this.getDesktopsendemailsendfrom().setVisible(false);
        } else {
            this.getDesktopsendemailsendfrom().setVisible(true);
        }
    },

    sendEmail: function() {
        this.consoleLog("sendEmail()");
        var emailsDstString = this.getDesktopsendemailsendto().getValue() + this.getDesktopsendemailsendcc().getValue();
        if (emailsDstString.length > 5 && this.getDesktopsendemailemailsubject().getValue() !== "" && this.getDesktopsendemailemailbody().getValue() !== "") {
            //if (this.getSendEvent() !== "") {
            //    this.fireEvent(this.getSendEvent());
            //} else {
            var newEmail = Ext.create("WPAKD.model.desktop.emails.SendEmail",
                {
                    EMAIL_TO:               this.getDesktopsendemailsendto().getValue()
                    , EMAIL_CC:             this.getDesktopsendemailsendcc().getValue()
                    , EMAIL_FROM:           this.getDesktopsendemailsendfrom().getValue()
                    , SUBJECT:              this.getDesktopsendemailemailsubject().getValue()
                    , BODY:                 this.getDesktopsendemailemailbody().getValue()
                    , ATTACHMENT_PATH:      this.getAttachmentPath()
                    , ATTACHMENT_NAME:      this.getAttachmentName()
                    , ATTACHMENT_SOURCEID:  this.getAttachmentSourceId()
                    , STATUS:               "QUEUED"
                }
            );
            this.fireEvent("WPAKD.controller.desktop.loading.Stores.beginLoading", this.getDesktopsendemailmain(), "Please wait ... Sending Email to server");
            var scope = this;
            newEmail.save({
                success: function(record, operation) {
                    scope.fireEvent("WPAKD.controller.desktop.loading.Stores.endLoading", scope.getDesktopsendemailmain());
                    Ext.MessageBox.show({
                        title: i18n.gettext("Info"),
                        msg: i18n.gettext("Email successfully added to queue, will be sent shortly"),
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.INFO
                    });
                    scope.fireEvent(scope.getSendEvent());
                },
                failure: function(record, operation) {
                    scope.fireEvent("WPAKD.controller.desktop.loading.Stores.endLoading", scope.getDesktopsendemailmain());
                }
            });
            //}
        } else {
            Ext.MessageBox.show({
                title: i18n.gettext("Info"),
                msg: i18n.gettext("Please ensure required fields have been properly populated. <br /> Required: TO, Subject, Body"),
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.INFO
            });
        }
    },

    cancelEmail: function() {
        this.consoleLog("cancelEmail()");
        this.getDesktopsendemailemailsubject().setValue();
        this.getDesktopsendemailemailbody().setValue();
        this.getDesktopsendemailsendto().setValue();
        this.getDesktopsendemailsendcc().setValue();
        this.getDesktopsendemailmain().hide();
        if (this.getCancelEvent() !== "") {this.fireEvent(this.getCancelEvent());}
    }
});