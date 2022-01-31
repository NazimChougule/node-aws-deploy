const models = require('../models');

// ADD MESSAGE
exports.addMessage = async (req, res, next) => {
    try {
        const { message } = req.body;
        await models.Messages
            .create({
                message,
            })
            .then((message) => {
                return res.status(201).json({
                    status: 201,
                    message: 'Message Added Successfully',
                    data: { message },
                });
            })
            .catch((exception) => {
                next(exception);
            });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
};

// READ MESSAGES
exports.readMessages = async (req, res) => {
    try {
        let messageData = await models.Messages.findAll();
        if (messageData.length <= 0) {
            return res.status(404).json({ message: 'Message Data Not Found' });
        } else {
            return res.status(200).json({
                status: 200,
                message: 'success',
                data: { messages: messageData },
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
};