const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'freak',
    email: 'freaklol@frkgaming.gg',
    phone: '+5547996978360',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContactsRepository();
