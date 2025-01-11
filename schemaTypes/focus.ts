import {defineField, defineType} from 'sanity'
import {CrosshairSimple as icon} from '@phosphor-icons/react'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {textColors} from '../src/constants'

export const focus = defineType({
  name: 'focus',
  title: 'Zaměření',
  type: 'document',
  icon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'category'}),

    defineField({
      name: 'name',
      title: 'Název karty',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Popis karty',
      type: 'text',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
