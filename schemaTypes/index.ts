import {project} from './project'
import {projectDetail} from './project-detail'
import {tag} from './tag'
import {imageAlt, blockContent, blockContentObject} from '../customTypes'
import {focus} from './focus'

export const schemaTypes = [
  project,
  projectDetail,
  focus,
  tag,
  //Underneath are custom created types
  imageAlt,
  blockContent,
  blockContentObject,
]
