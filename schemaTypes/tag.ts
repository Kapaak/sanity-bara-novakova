import {defineField, defineType} from 'sanity'
import {Tag as icon} from '@phosphor-icons/react'

export const tag = defineType({
  name: 'tag',
  title: 'Štítky',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Název štítku',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Hodnota štítku',
      description: 'Zadávat malým písmem, s pomlčkou a bez diakritiky',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
