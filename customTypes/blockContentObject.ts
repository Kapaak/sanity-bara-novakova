//BlockContent cant be placed inside of an array directly,
// to do so you need to wrap it in an object
export const blockContentObject = {
  title: 'Block',
  name: 'blockContentObject',
  type: 'object',
  fields: [
    {title: 'Nadpis', name: 'title', type: 'string'},
    {
      title: 'Text',
      name: 'richText',
      type: 'blockContent',
    },
  ],
}
