import {Notebook as icon} from '@phosphor-icons/react'

import {defineField, defineType} from 'sanity'

export const projectDetail = defineType({
  name: 'projectDetail',
  title: 'Detail projektů',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'parentProject',
      title: 'Projekt',
      type: 'reference',
      to: [{type: 'project'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Obrázek k detailu projektu',
      type: 'imageAlt',
    }),
    defineField({
      name: 'sections',
      title: 'Detailní popis projektu',
      type: 'array',
      of: [{type: 'blockContentObject'}],
    }),
  ],
  preview: {
    select: {
      title: 'parentProject.name',
    },
  },
})
