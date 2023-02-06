const { Contact } = require("../../models/contacts");
const ObjectId = require("mongodb").ObjectId;

const getAll = async (req, res) => {
  const { _id } = ObjectId(req.user);
  
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");
  res.json(contacts);
};

module.exports = getAll;
