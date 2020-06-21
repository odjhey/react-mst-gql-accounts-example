/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { EmailRecordModel, EmailRecordModelType } from "./EmailRecordModel"
import { EmailRecordModelSelector } from "./EmailRecordModel.base"
import { RootStoreType } from "./index"


/**
 * UserBase
 * auto generated base class for the model UserModel.
 */
export const UserModelBase = ModelBase
  .named('User')
  .props({
    __typename: types.optional(types.literal("User"), "User"),
    id: types.identifier,
    emails: types.union(types.undefined, types.null, types.array(types.late((): any => EmailRecordModel))),
    username: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class UserModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get username() { return this.__attr(`username`) }
  emails(builder?: string | EmailRecordModelSelector | ((selector: EmailRecordModelSelector) => EmailRecordModelSelector)) { return this.__child(`emails`, EmailRecordModelSelector, builder) }
}
export function selectFromUser() {
  return new UserModelSelector()
}

export const userModelPrimitives = selectFromUser().username
