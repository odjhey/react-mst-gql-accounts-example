import { Instance } from "mobx-state-tree"
import { EmailRecordModelBase } from "./EmailRecordModel.base"

/* The TypeScript type of an instance of EmailRecordModel */
export interface EmailRecordModelType extends Instance<typeof EmailRecordModel.Type> {}

/* A graphql query fragment builders for EmailRecordModel */
export { selectFromEmailRecord, emailRecordModelPrimitives, EmailRecordModelSelector } from "./EmailRecordModel.base"

/**
 * EmailRecordModel
 */
export const EmailRecordModel = EmailRecordModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
