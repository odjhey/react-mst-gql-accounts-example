import { Instance } from 'mobx-state-tree'
import { PrivateTypeModelBase } from './PrivateTypeModel.base'

/* The TypeScript type of an instance of PrivateTypeModel */
export interface PrivateTypeModelType
  extends Instance<typeof PrivateTypeModel.Type> {}

/* A graphql query fragment builders for PrivateTypeModel */
export {
  selectFromPrivateType,
  privateTypeModelPrimitives,
  PrivateTypeModelSelector,
} from './PrivateTypeModel.base'

/**
 * PrivateTypeModel
 */
export const PrivateTypeModel = PrivateTypeModelBase.actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self))
  },
}))
