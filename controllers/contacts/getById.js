const { NotFound } = require("http-errors");
const contactsOperation = require("../../model");

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.getById(contactId);
  if (!result) {
    throw new NotFound(`Contacts with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getById;
