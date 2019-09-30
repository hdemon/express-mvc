module.exports = {
  $id: 'https://example.com/person.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'User',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      description: "The person's first name.",
    },
    lastName: {
      type: 'string',
      description: "The person's last name.",
    },
    age: {
      description: 'Age in years which must be equal to or greater than zero.',
      type: 'integer',
      minimum: 0,
    },
  },
  required: ['firstName'],
}
