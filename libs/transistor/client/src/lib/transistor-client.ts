import axios from 'axios'

import type { User } from './types'

type TransistorClientOptions = {
  apiKey?: string
  apiUrl?: string
}

interface TransistorRequestOptions {
  headers: Record<string, any>
}

const DEFAULT_API_URL = 'https://api.transistor.fm/v1'
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

export class TransistorClient {
  private _apiKey?: string
  private _apiUrl = DEFAULT_API_URL
  private _options: TransistorClientOptions

  public constructor(options: TransistorClientOptions) {
    this._options = options

    const { apiKey, apiUrl } = options

    if (apiKey) {
      this._apiKey = apiKey
    }

    if (apiUrl) {
      this._apiUrl = apiUrl
    }

    if (apiUrl === DEFAULT_API_URL && !apiKey) {
      console.warn(
        'An `apiKey` is required when interfacing directly with the Transistor `apiUrl`.',
      )
    }
  }

  public _request<T>(
    path: string,
    data?: any,
    method = 'GET',
    options?: TransistorRequestOptions,
  ): Promise<T> {
    const headers: Record<string, string> = {
      ...DEFAULT_HEADERS,
      ...(options?.headers || {}),
    }

    if (this._apiKey) {
      headers['x-api-key'] = this._apiKey
    }

    return axios(`${this._apiUrl}${path}`, {
      method,
      data,
      ...(options || {}),
      headers,
    }).then((response) => {
      return response.data as T
    })
  }

  // public analytics(
  //   id: string,
  //   start_date?: string,
  //   end_date?: string,
  // ): Promise<EpisodeAnalytics> {
  //   return this._request<EpisodeAnalytics>(`/analytics/${id}`)
  // }

  public episodes(showId: string): Promise<any> {
    return this._request('/episodes', {
      showId,
    })
  }

  public episode(id: string): Promise<any> {
    return this._request(`/episodes/${id}`)
  }

  public me(): Promise<User> {
    return this._request('/')
  }

  public show(id: string): Promise<any> {
    return this._request(`/shows/${id}`)
  }

  public shows(): Promise<any> {
    return this._request('/shows')
  }
}
