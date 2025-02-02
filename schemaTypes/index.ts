import {project} from './project'
import {projectDetail} from './project-detail'
import {tag} from './tag'
import {blockContent, blockContentObject} from '../customTypes'
import {focus} from './focus'

export const schemaTypes = [
  project,
  projectDetail,
  focus,
  tag,
  //Underneath are custom created types
  blockContent,
  blockContentObject,
]
