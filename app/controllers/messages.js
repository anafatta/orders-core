var mongoose = require("mongoose");
var mongoConfig = require('../config/mongoConfig');
var message = require('../config/messages.json');
var MessageModel = require('../models/_mongomodels/message');

var Schema = mongoose.Schema;


module.exports = {

    saveMessageFromTo(req, res) {

        if (req.body.from) {
            var from = req.body.from;
        } else {
            return res.status(400).send({ message: "Error - User missing" })
        }
        if (req.body.fromName) {
            var fromName = req.body.fromName;
        } else {
            return res.status(400).send({ message: "Error - User missing" })
        }

        if (req.body.to) {
            var to = req.body.to;
        } else {
            return res.status(400).send({ message: message.messages.toUserRequired })
        }
        if (req.body.toName) {
            var toName = req.body.toName;
        } else {
            return res.status(400).send({ message: message.messages.toUserRequired })
        }

        if (req.body.message) {
            var message = req.body.message;
        } else {
            return res.status(400).send({ message: message.messages.messageRequired })
        }

        var message1 = new MessageModel({
            fromUser: from,
            fromName: fromName,
            toUser: to,            
            toName: toName,
            message: message,
            createdD: Date()
        }
        );

        message1.save(function (error) {
            if (error) {
                console.error(error);
                return res.status(400).send({ message: error })
            } else {
                console.log("Your message has been saved!");
                return res.status(200).send({ message: "El mensaje fue creado con exito" })
            }
        });


    },

    getMessagesTo(req, res) {
        if (req.params.to) {
            var to = req.params.to;
        } else {
            return res.status(400).send({ message: "To user is required"})
        }
        console.error("to" + to);
        // using the promise returned from executing a query
        MessageModel.find({ toUser: to }).sort({ createdD: -1 }).then(function (docs) {
            console.log("docs" + docs)
            return res.status(200).send({ docs: docs })
        });

    }
}