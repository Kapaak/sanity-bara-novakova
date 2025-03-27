import {defineField, defineType} from 'sanity'
import {PencilCircle as icon} from '@phosphor-icons/react'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {textColors} from '../src/constants'

export const project = defineType({
  name: 'project',
  title: 'Projekty',
  type: 'document',
  icon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'category'}),

    defineField({
      name: 'name',
      title: 'Název projektu',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Popis projektu',
      type: 'blockContent',
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
      name: 'year',
      title: 'Datum vytvoření projektu',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Odkaz na externí stránku projektu',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Obrázek k projektu',
      type: 'image',
      options: {hotspot: true},
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
    defineField({
      name: 'tagColor',
      title: 'Barva štítku',
      type: 'string',
      options: {
        list: textColors,
      },
    }),
    defineField({
      name: 'titleColor',
      title: 'Barva nadpisu',
      type: 'string',
      options: {
        list: textColors,
      },
    }),
    defineField({
      name: 'visible',
      title: 'Má být projekt viditelný?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
})
