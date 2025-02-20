const {Contact} = require('../../models')

const getAll = async (req, res) => {
  const {_id} = req.user;
  const {page = 1, limit = 5} = req.query;
  const skip = (page -1) *limit
  const contacts = await Contact.find({owner: _id}, "", {skip, limit: Number(limit)}).populate("owner", "_id email subscription");
  res.json({
    status: "seccess",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
