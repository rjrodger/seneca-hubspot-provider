const messages = {
  get_info: {
    desc: 'Get information about the provider.',
  },
  save_company: {
    desc: 'Update/Save Hubspot data into an entity',
  },
  load_company: {
    desc: 'Load Hubspot data into an entity.'
  },
  list_company: {
    desc: 'List Hubspot data into an entity.'
  }
}

const sections = {}

export default {
  messages,
  sections,
}

if ('undefined' !== typeof(module)) {
  module.exports = { messages, sections }
}
