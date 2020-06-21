import { Instance } from "mobx-state-tree"
import { TokensModelBase } from "./TokensModel.base"

/* The TypeScript type of an instance of TokensModel */
export interface TokensModelType extends Instance<typeof TokensModel.Type> {}

/* A graphql query fragment builders for TokensModel */
export { selectFromTokens, tokensModelPrimitives, TokensModelSelector } from "./TokensModel.base"

/**
 * TokensModel
 */
export const TokensModel = TokensModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
