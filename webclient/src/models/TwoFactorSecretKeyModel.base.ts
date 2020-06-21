/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * TwoFactorSecretKeyBase
 * auto generated base class for the model TwoFactorSecretKeyModel.
 */
export const TwoFactorSecretKeyModelBase = ModelBase
  .named('TwoFactorSecretKey')
  .props({
    __typename: types.optional(types.literal("TwoFactorSecretKey"), "TwoFactorSecretKey"),
    ascii: types.union(types.undefined, types.null, types.string),
    base32: types.union(types.undefined, types.null, types.string),
    hex: types.union(types.undefined, types.null, types.string),
    qr_code_ascii: types.union(types.undefined, types.null, types.string),
    qr_code_hex: types.union(types.undefined, types.null, types.string),
    qr_code_base32: types.union(types.undefined, types.null, types.string),
    google_auth_qr: types.union(types.undefined, types.null, types.string),
    otpauth_url: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class TwoFactorSecretKeyModelSelector extends QueryBuilder {
  get ascii() { return this.__attr(`ascii`) }
  get base32() { return this.__attr(`base32`) }
  get hex() { return this.__attr(`hex`) }
  get qr_code_ascii() { return this.__attr(`qr_code_ascii`) }
  get qr_code_hex() { return this.__attr(`qr_code_hex`) }
  get qr_code_base32() { return this.__attr(`qr_code_base32`) }
  get google_auth_qr() { return this.__attr(`google_auth_qr`) }
  get otpauth_url() { return this.__attr(`otpauth_url`) }
}
export function selectFromTwoFactorSecretKey() {
  return new TwoFactorSecretKeyModelSelector()
}

export const twoFactorSecretKeyModelPrimitives = selectFromTwoFactorSecretKey().ascii.base32.hex.qr_code_ascii.qr_code_hex.qr_code_base32.google_auth_qr.otpauth_url
