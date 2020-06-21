import { Instance } from 'mobx-state-tree'
import { RootStoreBase } from './RootStore.base'
import { USER_FRAGMENT } from './query-fragments'

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

export const RootStore = RootStoreBase.actions((self) => ({
  // This is an auto-generated example action.
  me() {
    console.log('query me')
    return self.queryMe({}, USER_FRAGMENT)
  },
  log() {
    console.log(JSON.stringify(self))
  },
}))
