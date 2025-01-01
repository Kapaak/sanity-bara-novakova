import {defineField, defineType} from 'sanity'
import {PencilCircle as icon} from '@phosphor-icons/react'

export const project = defineType({
  name: 'project',
  title: 'Projekty',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Název projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Popis projektu',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Odkaz na detail projektu',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'url',
      title: 'Odkaz na externí stránku projektu',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Obrázek k projektu',
      type: 'imageAlt',
    }),
    defineField({
      name: 'tags',
      title: 'Štítky',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
          options: {
            filter: 'defined(name) && defined(value)',
            filterParams: {},
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
