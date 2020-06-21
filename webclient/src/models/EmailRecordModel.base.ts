/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * EmailRecordBase
 * auto generated base class for the model EmailRecordModel.
 */
export const EmailRecordModelBase = ModelBase
  .named('EmailRecord')
  .props({
    __typename: types.optional(types.literal("EmailRecord"), "EmailRecord"),
    address: types.union(types.undefined, types.null, types.string),
    verified: types.union(types.undefined, types.null, types.boolean),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class EmailRecordModelSelector extends QueryBuilder {
  get address() { return this.__attr(`address`) }
  get verified() { return this.__attr(`verified`) }
}
export function selectFromEmailRecord() {
  return new EmailRecordModelSelector()
}

export const emailRecordModelPrimitives = selectFromEmailRecord().address.verified
