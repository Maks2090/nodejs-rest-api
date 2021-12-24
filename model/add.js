const { v4: uuidv4 } = require("uuid");

const updateContact = require("./updateContact");
const getAll = require("./getAll");

const add = async (data) => {
  const contacts = await getAll();
  const newContact = { ...data, id: uuidv4() };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};

module.exports = add;
