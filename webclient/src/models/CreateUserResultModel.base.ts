/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { LoginResultModel, LoginResultModelType } from "./LoginResultModel"
import { LoginResultModelSelector } from "./LoginResultModel.base"
import { RootStoreType } from "./index"


/**
 * CreateUserResultBase
 * auto generated base class for the model CreateUserResultModel.
 */
export const CreateUserResultModelBase = ModelBase
  .named('CreateUserResult')
  .props({
    __typename: types.optional(types.literal("CreateUserResult"), "CreateUserResult"),
    userId: types.identifier,
    loginResult: types.union(types.undefined, types.null, types.late((): any => LoginResultModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class CreateUserResultModelSelector extends QueryBuilder {
  get userId() { return this.__attr(`userId`) }
  loginResult(builder?: string | LoginResultModelSelector | ((selector: LoginResultModelSelector) => LoginResultModelSelector)) { return this.__child(`loginResult`, LoginResultModelSelector, builder) }
}
export function selectFromCreateUserResult() {
  return new CreateUserResultModelSelector()
}

export const createUserResultModelPrimitives = selectFromCreateUserResult().userId
