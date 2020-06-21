/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { UserModel, UserModelType } from "./UserModel"
import { userModelPrimitives, UserModelSelector } from "./UserModel.base"
import { EmailRecordModel, EmailRecordModelType } from "./EmailRecordModel"
import { emailRecordModelPrimitives, EmailRecordModelSelector } from "./EmailRecordModel.base"
import { PrivateTypeModel, PrivateTypeModelType } from "./PrivateTypeModel"
import { privateTypeModelPrimitives, PrivateTypeModelSelector } from "./PrivateTypeModel.base"
import { TwoFactorSecretKeyModel, TwoFactorSecretKeyModelType } from "./TwoFactorSecretKeyModel"
import { twoFactorSecretKeyModelPrimitives, TwoFactorSecretKeyModelSelector } from "./TwoFactorSecretKeyModel.base"
import { CreateUserResultModel, CreateUserResultModelType } from "./CreateUserResultModel"
import { createUserResultModelPrimitives, CreateUserResultModelSelector } from "./CreateUserResultModel.base"
import { LoginResultModel, LoginResultModelType } from "./LoginResultModel"
import { loginResultModelPrimitives, LoginResultModelSelector } from "./LoginResultModel.base"
import { TokensModel, TokensModelType } from "./TokensModel"
import { tokensModelPrimitives, TokensModelSelector } from "./TokensModel.base"
import { ImpersonateReturnModel, ImpersonateReturnModelType } from "./ImpersonateReturnModel"
import { impersonateReturnModelPrimitives, ImpersonateReturnModelSelector } from "./ImpersonateReturnModel.base"


export type CreateUserInput = {
  profile: CreateUserProfileInput
  username?: string
  email?: string
  password?: string
}
export type CreateUserProfileInput = {
  firstName: string
  lastName: string
}
export type TwoFactorSecretKeyInput = {
  ascii?: string
  base32?: string
  hex?: string
  qr_code_ascii?: string
  qr_code_hex?: string
  qr_code_base32?: string
  google_auth_qr?: string
  otpauth_url?: string
}
export type ImpersonationUserIdentityInput = {
  userId?: string
  username?: string
  email?: string
}
export type AuthenticateParamsInput = {
  access_token?: string
  access_token_secret?: string
  provider?: string
  password?: string
  user?: UserInput
  code?: string
}
export type UserInput = {
  id?: string
  email?: string
  username?: string
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  users: ObservableMap<string, UserModelType>
}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryMe="queryMe",
queryPublicField="queryPublicField",
queryPrivateField="queryPrivateField",
queryPrivateType="queryPrivateType",
queryTwoFactorSecret="queryTwoFactorSecret",
queryGetUser="queryGetUser"
}
export enum RootStoreBaseMutations {
mutate_="mutate_",
mutateCreateUser="mutateCreateUser",
mutateVerifyEmail="mutateVerifyEmail",
mutateResetPassword="mutateResetPassword",
mutateSendVerificationEmail="mutateSendVerificationEmail",
mutateSendResetPasswordEmail="mutateSendResetPasswordEmail",
mutateAddEmail="mutateAddEmail",
mutateChangePassword="mutateChangePassword",
mutateTwoFactorSet="mutateTwoFactorSet",
mutateTwoFactorUnset="mutateTwoFactorUnset",
mutateImpersonate="mutateImpersonate",
mutateRefreshTokens="mutateRefreshTokens",
mutateLogout="mutateLogout",
mutateAuthenticate="mutateAuthenticate",
mutateVerifyAuthentication="mutateVerifyAuthentication"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['User', () => UserModel], ['EmailRecord', () => EmailRecordModel], ['PrivateType', () => PrivateTypeModel], ['TwoFactorSecretKey', () => TwoFactorSecretKeyModel], ['CreateUserResult', () => CreateUserResultModel], ['LoginResult', () => LoginResultModel], ['Tokens', () => TokensModel], ['ImpersonateReturn', () => ImpersonateReturnModel]], ['User'], "js"))
  .props({
    users: types.optional(types.map(types.late((): any => UserModel)), {})
  })
  .actions(self => ({
    queryMe(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ me: UserModelType}>(`query me { me {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryPublicField(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ publicField: string }>(`query publicField { publicField }`, variables, options)
    },
    queryPrivateField(variables?: {  }, options: QueryOptions = {}) {
      return self.query<{ privateField: string }>(`query privateField { privateField }`, variables, options)
    },
    queryPrivateType(variables?: {  }, resultSelector: string | ((qb: PrivateTypeModelSelector) => PrivateTypeModelSelector) = privateTypeModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ privateType: PrivateTypeModelType}>(`query privateType { privateType {
        ${typeof resultSelector === "function" ? resultSelector(new PrivateTypeModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryTwoFactorSecret(variables?: {  }, resultSelector: string | ((qb: TwoFactorSecretKeyModelSelector) => TwoFactorSecretKeyModelSelector) = twoFactorSecretKeyModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ twoFactorSecret: TwoFactorSecretKeyModelType}>(`query twoFactorSecret { twoFactorSecret {
        ${typeof resultSelector === "function" ? resultSelector(new TwoFactorSecretKeyModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    queryGetUser(variables?: {  }, resultSelector: string | ((qb: UserModelSelector) => UserModelSelector) = userModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ getUser: UserModelType}>(`query getUser { getUser {
        ${typeof resultSelector === "function" ? resultSelector(new UserModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutate_(variables?: {  }, optimisticUpdate?: () => void) {
      return self.mutate<{ _: string }>(`mutation _ { _ }`, variables, optimisticUpdate)
    },
    mutateCreateUser(variables: { user: CreateUserInput }, resultSelector: string | ((qb: CreateUserResultModelSelector) => CreateUserResultModelSelector) = createUserResultModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ createUser: CreateUserResultModelType}>(`mutation createUser($user: CreateUserInput!) { createUser(user: $user) {
        ${typeof resultSelector === "function" ? resultSelector(new CreateUserResultModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateVerifyEmail(variables: { token: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ verifyEmail: boolean }>(`mutation verifyEmail($token: String!) { verifyEmail(token: $token) }`, variables, optimisticUpdate)
    },
    mutateResetPassword(variables: { token: string, newPassword: string }, resultSelector: string | ((qb: LoginResultModelSelector) => LoginResultModelSelector) = loginResultModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ resetPassword: LoginResultModelType}>(`mutation resetPassword($token: String!, $newPassword: String!) { resetPassword(token: $token, newPassword: $newPassword) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginResultModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateSendVerificationEmail(variables: { email: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ sendVerificationEmail: boolean }>(`mutation sendVerificationEmail($email: String!) { sendVerificationEmail(email: $email) }`, variables, optimisticUpdate)
    },
    mutateSendResetPasswordEmail(variables: { email: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ sendResetPasswordEmail: boolean }>(`mutation sendResetPasswordEmail($email: String!) { sendResetPasswordEmail(email: $email) }`, variables, optimisticUpdate)
    },
    mutateAddEmail(variables: { newEmail: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ addEmail: boolean }>(`mutation addEmail($newEmail: String!) { addEmail(newEmail: $newEmail) }`, variables, optimisticUpdate)
    },
    mutateChangePassword(variables: { oldPassword: string, newPassword: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ changePassword: boolean }>(`mutation changePassword($oldPassword: String!, $newPassword: String!) { changePassword(oldPassword: $oldPassword, newPassword: $newPassword) }`, variables, optimisticUpdate)
    },
    mutateTwoFactorSet(variables: { secret: TwoFactorSecretKeyInput, code: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ twoFactorSet: boolean }>(`mutation twoFactorSet($secret: TwoFactorSecretKeyInput!, $code: String!) { twoFactorSet(secret: $secret, code: $code) }`, variables, optimisticUpdate)
    },
    mutateTwoFactorUnset(variables: { code: string }, optimisticUpdate?: () => void) {
      return self.mutate<{ twoFactorUnset: boolean }>(`mutation twoFactorUnset($code: String!) { twoFactorUnset(code: $code) }`, variables, optimisticUpdate)
    },
    mutateImpersonate(variables: { accessToken: string, impersonated: ImpersonationUserIdentityInput }, resultSelector: string | ((qb: ImpersonateReturnModelSelector) => ImpersonateReturnModelSelector) = impersonateReturnModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ impersonate: ImpersonateReturnModelType}>(`mutation impersonate($accessToken: String!, $impersonated: ImpersonationUserIdentityInput!) { impersonate(accessToken: $accessToken, impersonated: $impersonated) {
        ${typeof resultSelector === "function" ? resultSelector(new ImpersonateReturnModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateRefreshTokens(variables: { accessToken: string, refreshToken: string }, resultSelector: string | ((qb: LoginResultModelSelector) => LoginResultModelSelector) = loginResultModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ refreshTokens: LoginResultModelType}>(`mutation refreshTokens($accessToken: String!, $refreshToken: String!) { refreshTokens(accessToken: $accessToken, refreshToken: $refreshToken) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginResultModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateLogout(variables?: {  }, optimisticUpdate?: () => void) {
      return self.mutate<{ logout: boolean }>(`mutation logout { logout }`, variables, optimisticUpdate)
    },
    mutateAuthenticate(variables: { serviceName: string, params: AuthenticateParamsInput }, resultSelector: string | ((qb: LoginResultModelSelector) => LoginResultModelSelector) = loginResultModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ authenticate: LoginResultModelType}>(`mutation authenticate($serviceName: String!, $params: AuthenticateParamsInput!) { authenticate(serviceName: $serviceName, params: $params) {
        ${typeof resultSelector === "function" ? resultSelector(new LoginResultModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    mutateVerifyAuthentication(variables: { serviceName: string, params: AuthenticateParamsInput }, optimisticUpdate?: () => void) {
      return self.mutate<{ verifyAuthentication: boolean }>(`mutation verifyAuthentication($serviceName: String!, $params: AuthenticateParamsInput!) { verifyAuthentication(serviceName: $serviceName, params: $params) }`, variables, optimisticUpdate)
    },
  })))
