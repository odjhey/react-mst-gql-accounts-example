/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * PrivateTypeBase
 * auto generated base class for the model PrivateTypeModel.
 */
export const PrivateTypeModelBase = ModelBase
  .named('PrivateType')
  .props({
    __typename: types.optional(types.literal("PrivateType"), "PrivateType"),
    field: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PrivateTypeModelSelector extends QueryBuilder {
  get field() { return this.__attr(`field`) }
}
export function selectFromPrivateType() {
  return new PrivateTypeModelSelector()
}

export const privateTypeModelPrimitives = selectFromPrivateType().field
