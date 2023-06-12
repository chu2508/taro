import Creator from './create/creator'
import Project from './create/project'
import doctor from './doctor'
import { type UserConfigExport, type UserConfigFn, defineConfig } from './util/defineConfig'

export default {
  doctor,
  Project,
  Creator,
  defineConfig,
}

export {
  type UserConfigExport,
  type UserConfigFn,
  Creator,
  defineConfig,
  doctor,
  Project }
