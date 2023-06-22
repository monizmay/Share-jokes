const Messages = require("../models/messageModel");

module.exports.getMessages = async (req, res, next) => {
  try {
    Messages.find({}).then((messages) => {
      res.send(messages);
    })
  } catch (err) {
      console.log('Error ', err);
  };
};

module.exports.addMessage = async (req, res, next) => {
  try {
    var message = new Messages(req.body)   

    var savedMessage = await message.save()

    console.log(req.body)
    res.sendStatus(200);

} catch (error) {
    res.sendStatus(500);
    return console.error(error);
} finally {
    console.log('Message post called');
}
};