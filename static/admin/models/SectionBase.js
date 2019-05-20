module.exports = [
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    required: false,
  },
  {
    label: 'Grey Bg',
    name: 'greyBg',
    widget: 'boolean',
    required: false,
  },
  {
    label: 'Title Center',
    name: 'titleCenter',
    widget: 'boolean',
    required: false,
  },
  {
    label: 'CTA',
    name: 'cta',
    widget: 'object',
    fields: [
      {
        label: 'Cta Text',
        name: 'text',
        widget: 'string',
        required: false,
      },
      {
        label: 'Cta Link',
        name: 'link',
        widget: 'string',
        required: false,
      },
      {
        label: 'Text',
        name: 'title',
        widget: 'string',
        required: false,
      },
    ],
  },
]

class Base {
  toObj() {
    return this.data
  }
}

class Title extends Base {
  constructor(label, name, widget, required) {
    super()
    this.data = {
      label: 'Title',
      name: 'title',
      widget: 'string',
      required: false,
    }
  }
}
