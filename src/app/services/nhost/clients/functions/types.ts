import { ErrorPayload } from '@nhost/hasura-auth-js'

export interface NhostFunctionsConstructorParams {
  /**
   * Serverless Functions endpoint.
   */
  url: string
  /**
   * Admin secret. When set, it is sent as an `x-hasura-admin-secret` header for all requests.
   */
  adminSecret?: string
}

export type NhostFunctionCallResponse<T = unknown> =
  | {
      res: {
        data: T
        status: number
        statusText: string
      }
      error: null
    }
  | {
      res: null
      error: ErrorPayload
    }

/** Subset of RequestInit parameters that are supported by the functions client */
export interface NhostFunctionCallConfig {
  headers?: Record<string, string>
}
