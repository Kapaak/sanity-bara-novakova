import {project} from './project'
import {projectDetail} from './project-detail'
import {tag} from './tag'
import {imageAlt, blockContent} from '../customTypes'

export const schemaTypes = [
  project,
  projectDetail,
  tag,
  //Underneath are custom created types
  imageAlt,
  blockContent,
]
