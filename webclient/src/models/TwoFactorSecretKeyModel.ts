import { Instance } from "mobx-state-tree"
import { TwoFactorSecretKeyModelBase } from "./TwoFactorSecretKeyModel.base"

/* The TypeScript type of an instance of TwoFactorSecretKeyModel */
export interface TwoFactorSecretKeyModelType extends Instance<typeof TwoFactorSecretKeyModel.Type> {}

/* A graphql query fragment builders for TwoFactorSecretKeyModel */
export { selectFromTwoFactorSecretKey, twoFactorSecretKeyModelPrimitives, TwoFactorSecretKeyModelSelector } from "./TwoFactorSecretKeyModel.base"

/**
 * TwoFactorSecretKeyModel
 */
export const TwoFactorSecretKeyModel = TwoFactorSecretKeyModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
