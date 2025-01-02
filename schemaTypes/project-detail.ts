import {Notebook as icon} from '@phosphor-icons/react'

//TODO: reference na projekt
// - oddeluji, aby nebylo tolik veci na jednom miste
// - reference na jmeno a stitky, mozna i ten description

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
      name: 'usedTechnologies',
      title: 'Použité technologie',
      type: 'array',
      of: [{type: 'imageAlt'}],
    }),
    defineField({
      name: 'gallery',
      title: 'Obrázky pro carousel',
      type: 'array',
      of: [{type: 'imageAlt'}],
    }),
    defineField({
      name: 'color',
      title: 'Sekce barvy',
      type: 'blockContent',
    }),
    defineField({
      name: 'font',
      title: 'Sekce fonty',
      type: 'blockContent',
    }),
    defineField({
      name: 'aboutProject',
      title: 'Detailní popis projektu',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'parentProject.name',
    },
  },
})
