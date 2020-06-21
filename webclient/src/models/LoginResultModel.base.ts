/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { TokensModel, TokensModelType } from "./TokensModel"
import { TokensModelSelector } from "./TokensModel.base"
import { UserModel, UserModelType } from "./UserModel"
import { UserModelSelector } from "./UserModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  user: UserModelType;
}

/**
 * LoginResultBase
 * auto generated base class for the model LoginResultModel.
 */
export const LoginResultModelBase = withTypedRefs<Refs>()(ModelBase
  .named('LoginResult')
  .props({
    __typename: types.optional(types.literal("LoginResult"), "LoginResult"),
    sessionId: types.union(types.undefined, types.null, types.string),
    tokens: types.union(types.undefined, types.null, types.late((): any => TokensModel)),
    user: types.union(types.undefined, types.null, MSTGQLRef(types.late((): any => UserModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class LoginResultModelSelector extends QueryBuilder {
  get sessionId() { return this.__attr(`sessionId`) }
  tokens(builder?: string | TokensModelSelector | ((selector: TokensModelSelector) => TokensModelSelector)) { return this.__child(`tokens`, TokensModelSelector, builder) }
  user(builder?: string | UserModelSelector | ((selector: UserModelSelector) => UserModelSelector)) { return this.__child(`user`, UserModelSelector, builder) }
}
export function selectFromLoginResult() {
  return new LoginResultModelSelector()
}

export const loginResultModelPrimitives = selectFromLoginResult().sessionId
