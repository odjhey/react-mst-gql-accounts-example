import { Instance } from "mobx-state-tree"
import { CreateUserResultModelBase } from "./CreateUserResultModel.base"

/* The TypeScript type of an instance of CreateUserResultModel */
export interface CreateUserResultModelType extends Instance<typeof CreateUserResultModel.Type> {}

/* A graphql query fragment builders for CreateUserResultModel */
export { selectFromCreateUserResult, createUserResultModelPrimitives, CreateUserResultModelSelector } from "./CreateUserResultModel.base"

/**
 * CreateUserResultModel
 */
export const CreateUserResultModel = CreateUserResultModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
