import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {StructureBuilder, StructureResolverContext} from 'sanity/structure'

import {PencilCircle} from '@phosphor-icons/react'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Obsah')
    .items([
      orderableDocumentListDeskItem({
        type: 'project',
        S,
        context,
        icon: PencilCircle,
        title: 'Projekty',
      }),
      ...S.documentTypeListItems().filter(
        (listItem) => !['project'].includes(listItem.getId() ?? ''),
      ),
    ])
