/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * TokensBase
 * auto generated base class for the model TokensModel.
 */
export const TokensModelBase = ModelBase
  .named('Tokens')
  .props({
    __typename: types.optional(types.literal("Tokens"), "Tokens"),
    refreshToken: types.union(types.undefined, types.null, types.string),
    accessToken: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TokensModelSelector extends QueryBuilder {
  get refreshToken() { return this.__attr(`refreshToken`) }
  get accessToken() { return this.__attr(`accessToken`) }
}
export function selectFromTokens() {
  return new TokensModelSelector()
}

export const tokensModelPrimitives = selectFromTokens().refreshToken.accessToken
