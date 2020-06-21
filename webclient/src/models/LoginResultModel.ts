import { Instance } from "mobx-state-tree"
import { LoginResultModelBase } from "./LoginResultModel.base"

/* The TypeScript type of an instance of LoginResultModel */
export interface LoginResultModelType extends Instance<typeof LoginResultModel.Type> {}

/* A graphql query fragment builders for LoginResultModel */
export { selectFromLoginResult, loginResultModelPrimitives, LoginResultModelSelector } from "./LoginResultModel.base"

/**
 * LoginResultModel
 */
export const LoginResultModel = LoginResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
