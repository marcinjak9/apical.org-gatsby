const sectionBase = require('./SectionBase')

module.exports = [
  {
    label: 'Hero',
    name: 'HomeHero',
    hint: 'Hero',
    widget: 'object',
    fields: [
      {
        label: 'Component',
        name: 'component',
        widget: 'hidden',
        default: 'HomeHero',
      },
      {
        label: 'Props',
        name: 'props',
        widget: 'object',
        fields: sectionBase.concat([
          {
            label: 'Hero Body',
            name: 'heroBody',
            widget: 'markdown',
            required: false,
          },
          {
            label: 'Small Hero',
            name: 'bodyLight',
            widget: 'boolean',
            required: false,
            hint: 'select for small Hero size',
          },
          {
            label: 'Baground',
            name: 'image',
            widget: 'image',
            required: false,
          },
          {
            label: 'Typings',
            name: 'typings',
            widget: 'list',
            field: { label: 'Typing', name: 'typing', widget: 'string' },
            default: [''],
            required: false,
          },
        ]),
      },
    ],
  },
]
