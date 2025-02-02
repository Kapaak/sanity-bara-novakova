import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {StructureBuilder, StructureResolverContext} from 'sanity/structure'

import {CrosshairSimple, PencilCircle} from '@phosphor-icons/react'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Obsah')
    .items([
      orderableDocumentListDeskItem({
        type: 'focus',
        S,
        context,
        icon: CrosshairSimple,
        title: 'Zaměření',
      }),
      orderableDocumentListDeskItem({
        type: 'project',
        S,
        context,
        icon: PencilCircle,
        title: 'Projekty',
      }),
      ...S.documentTypeListItems().filter(
        (listItem) => !['project', 'focus', 'media.tag'].includes(listItem.getId() ?? ''),
      ),
    ])
