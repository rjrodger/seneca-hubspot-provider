const messages = {
  get_info: {
    desc: 'Get information about the company.',
  },
}

const sections = {}

export default {
  messages,
  sections,
}

if ('undefined' !== typeof(module)) {
  module.exports = { messages, sections }
}
