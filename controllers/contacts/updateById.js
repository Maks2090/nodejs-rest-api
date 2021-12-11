const contactsOperation = require("../../model");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperation.updateById(contactId, req.body);
  if (!result) {
    throw new NotFound(`Contacts with id=${contactId} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateById;
