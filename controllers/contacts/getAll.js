const contactsOperation = require("../../model");

const getAll = async (req, res) => {
  const contacts = await contactsOperation.getAll();
  res.json({
    status: "seccess",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
