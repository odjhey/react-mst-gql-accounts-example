import { Instance } from 'mobx-state-tree'
import { ImpersonateReturnModelBase } from './ImpersonateReturnModel.base'

/* The TypeScript type of an instance of ImpersonateReturnModel */
export interface ImpersonateReturnModelType
  extends Instance<typeof ImpersonateReturnModel.Type> {}

/* A graphql query fragment builders for ImpersonateReturnModel */
export {
  selectFromImpersonateReturn,
  impersonateReturnModelPrimitives,
  ImpersonateReturnModelSelector,
} from './ImpersonateReturnModel.base'

/**
 * ImpersonateReturnModel
 */
export const ImpersonateReturnModel = ImpersonateReturnModelBase.actions(
  (self) => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    },
  }),
)
